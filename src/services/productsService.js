// import axios to make HTTP requests(se usa en lugar de fetch)
import axios from "axios";

// la mejor manera de comentar algo es usando JSDocs /** */
/**
 * @author <NAME>Rene Irias</NAME>
 * @name getProducts
 * @description Retorna una promesa que retorna los productos de la API(parametro por defecto es 10)
 * @param {number} limit
 * @returns {Promise}
 */

// definir el limit por defecto si no se especifica
export async function getProducts(limit = 10) {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products?limit=${limit}`
    );
    //console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getProductById(id) {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsByCategory(category) {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/category/${category}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
