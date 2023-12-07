// import axios to make HTTP requests(se usa en lugar de fetch)
import axios from "axios";

export async function getProducts() {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
