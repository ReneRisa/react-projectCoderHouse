import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
import { useGetProductsByCategory } from "../hooks/useProducts";

const Category = () => {
  const { name } = useParams();
  const { productos } = useGetProductsByCategory(name);
  return <ItemListContainer productos={productos} />;
};

export default Category;
