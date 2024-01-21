import React from "react";
import { useGetCollectionByCategory } from "../hooks/useCollection";
import ServiceListContainer from "../components/ServiceListContainer/ServiceListContainer";
import { useParams } from "react-router-dom";

const CategoryService = () => {
  const { name } = useParams();
  const { data } = useGetCollectionByCategory("services", name);
  console.log(data);
  return <div>{<ServiceListContainer services={data} />}</div>;
};

export default CategoryService;
