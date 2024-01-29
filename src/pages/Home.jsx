import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useGetProducts } from "../hooks/useProducts";
import { useEffect } from "react";

const Home = () => {
  //to change the title of the page(tab in the browser)
  //El icono de la pagina se cambia en la carpeta public en el archivo index.html
  useEffect(() => {
    document.title = "CMR Cleaning Services - Home";
  });
  const { productos } = useGetProducts(8);
  /* useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      if (Math.ceil(scrolled) === scrollable) {
        console.log("bottom");
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    }; 
  }); */
  return (
    <div>
      {/* <ItemListContainer productos={productos} /> */}
      <div>
        <h1>CMR Cleaning Services</h1>
        <p>
          Reliable house cleaning professionals serving the greater Reno area.
          We provide one of the best cleaning services for home, office,
          construction sites, and more! We can take on any job at any time. All
          equipment is included at no extra charge. Please call us today for a
          FREE ESTIMATE. Se Habla Español
        </p>
        <p>Call Now (775)-507-8158</p>
      </div>
      <div>
        <h2>WHY CHOOSE US</h2>
        <div>
          <div>
            <h4>Certified Profesional Cleaners</h4>
          </div>
          <div>
            <h4>100% Satisfaction Guaranteed</h4>
          </div>
          <div>
            <h4>Environmentally Friendly Cleaning</h4>
          </div>
          <div>
            <h4>Available Evenings & Weekends </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
