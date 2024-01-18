import React from "react";
import { useGetCollectionDocuments } from "../hooks/useCollection";
import ServiceListContainer from "../components/ServiceListContainer/ServiceListContainer";

const Services = () => {
  const { datos } = useGetCollectionDocuments("services");
  return <div>{<ServiceListContainer services={datos} />}</div>;
};

export default Services;
