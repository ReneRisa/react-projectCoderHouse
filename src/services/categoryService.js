import axios from "axios";

const API_URL = "https://dummyjson.com/products/categories";

export async function fetchCategories() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}
