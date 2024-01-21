import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useGetCollectionDocuments } from "../hooks/useCollection";

const CreateService = () => {
  const { datos } = useGetCollectionDocuments("categories");
  console.log(datos);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("");
  const handleCreateProduct = () => {
    const newService = {
      title,
      description,
      price,
      thumbnail:
        thumbnail ||
        "https://static.vecteezy.com/system/resources/thumbnails/022/059/000/small/no-image-available-icon-vector.jpg",
      category,
    };
    console.log(newService);
    const db = getFirestore();
    const servicesCollection = collection(db, "services");
    addDoc(servicesCollection, newService)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        setTitle("");
        setDescription("");
        setPrice(0);
        setThumbnail("");
        setCategory("");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  return (
    //usar formik para validar los campos en un formulario
    //https://formik.org/docs/overview
    //https://formik.org/docs/guides/validation
    //https://formik.org/docs/api/formik
    //usar yup para validar los campos en un formulario
    <div>
      <h1>Create Service</h1>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="0"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="thumbnail"
        value={thumbnail}
        onChange={(e) => setThumbnail(e.target.value)}
      />
      <select
        name="category"
        id="category"
        onChange={(e) => setCategory(e.target.value)}
      >
        {datos.map(
          (category) => (
            console.log(category),
            console.log(category.categories),
            category.categories.map((categories, index) => (
              <option key={index} value={categories}>
                {categories}
              </option>
            ))
          )
        )}
      </select>
      <button onClick={handleCreateProduct}>Submit</button>
    </div>
  );
};

export default CreateService;
