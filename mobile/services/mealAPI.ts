// Types for TheMealDB API responses
interface MealDBMeal {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate?: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags?: string;
  strYoutube?: string;
  strSource?: string;
  strImageSource?: string;
  strCreativeCommonsConfirmed?: string;
  dateModified?: string;
  [key: `strIngredient${number}`]: string;
  [key: `strMeasure${number}`]: string;
}

interface MealDBResponse {
  meals: MealDBMeal[] | null;
}

interface CategoryResponse {
  categories: Category[] | null;
}

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

// Our app's meal format
export interface Meal {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: string;
  servings: number;
  category: string;
  area: string;
  ingredients: string[];
  instructions: string[];
  originalData: MealDBMeal;
}

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const MealAPI = {
  // search meal by name
  searchMealsByName: async (query: string): Promise<MealDBMeal[]> => {
    try {
      const response = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(query)}`);
      const data: MealDBResponse = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Error searching meals by name:", error);
      return [];
    }
  },

  // lookup full meal details by id
  getMealById: async (id: string): Promise<MealDBMeal | null> => {
    try {
      const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
      const data: MealDBResponse = await response.json();
      return data.meals ? data.meals[0] : null;
    } catch (error) {
      console.error("Error getting meal by id:", error);
      return null;
    }
  },

  // lookup a single random meal
  getRandomMeal: async (): Promise<MealDBMeal | null> => {
    try {
      const response = await fetch(`${BASE_URL}/random.php`);
      const data: MealDBResponse = await response.json();
      return data.meals ? data.meals[0] : null;
    } catch (error) {
      console.error("Error getting random meal:", error);
      return null;
    }
  },

  // get multiple random meals
  getRandomMeals: async (count: number = 6): Promise<MealDBMeal[]> => {
    try {
      const promises = Array(count)
        .fill(null)
        .map(() => MealAPI.getRandomMeal());
      const meals = await Promise.all(promises);
      return meals.filter((meal): meal is MealDBMeal => meal !== null);
    } catch (error) {
      console.error("Error getting random meals:", error);
      return [];
    }
  },

  // list all meal categories
  getCategories: async (): Promise<Category[]> => {
    try {
      const response = await fetch(`${BASE_URL}/categories.php`);
      const data: CategoryResponse = await response.json();
      return data.categories || [];
    } catch (error) {
      console.error("Error getting categories:", error);
      return [];
    }
  },

  // filter by main ingredient
  filterByIngredient: async (ingredient: string): Promise<MealDBMeal[]> => {
    try {
      const response = await fetch(`${BASE_URL}/filter.php?i=${encodeURIComponent(ingredient)}`);
      const data: MealDBResponse = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Error filtering by ingredient:", error);
      return [];
    }
  },

  // filter by category
  filterByCategory: async (category: string): Promise<MealDBMeal[]> => {
    try {
      const response = await fetch(`${BASE_URL}/filter.php?c=${encodeURIComponent(category)}`);
      const data: MealDBResponse = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Error filtering by category:", error);
      return [];
    }
  },

  // transform TheMealDB meal data to our app format
  transformMealData: (meal: MealDBMeal | null): Meal | null => {
    if (!meal) return null;

    // extract ingredients from the meal object
    const ingredients: string[] = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        const measureText = measure && measure.trim() ? `${measure.trim()} ` : "";
        ingredients.push(`${measureText}${ingredient.trim()}`);
      }
    }

    // extract instructions
    const instructions = meal.strInstructions
      ? meal.strInstructions.split(/\r?\n/).filter((step) => step.trim())
      : [];

    return {
      id: meal.idMeal,
      title: meal.strMeal,
      description: meal.strInstructions
        ? meal.strInstructions.substring(0, 120) + "..."
        : "Delicious meal from TheMealDB",
      image: meal.strMealThumb,
      cookTime: "30 minutes",
      servings: 4,
      category: meal.strCategory || "Main Course",
      area: meal.strArea,
      ingredients,
      instructions,
      originalData: meal,
    };
  },
};