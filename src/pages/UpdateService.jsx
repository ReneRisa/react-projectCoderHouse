import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetCollectionDocuments,
  useGetDocumentById,
} from "../hooks/useCollection";
import { getFirestore, doc, collection, updateDoc } from "firebase/firestore";
import LoadingComponent from "../components/LoadingComponent/LoadingComponent";
const UpdateService = () => {
  const { id } = useParams(); //useParams es un hook que nos permite obtener los parametros de la url y asi obtener el id
  const { data } = useGetDocumentById("services", id);
  const { datos } = useGetCollectionDocuments("categories");
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const [price, setPrice] = useState(data.price);
  const [thumbnail, setThumbnail] = useState(data.thumbnail);
  const [category, setCategory] = useState(data.category);
  // usamos use effect para que se cargue la informacion del servicio en cada estado antes de que se renderize el componente
  useEffect(() => {
    setTitle(data.title);
    setDescription(data.description);
    setPrice(data.price);
    setThumbnail(data.thumbnail);
    setCategory(data.category);
  }, [data]);

  const handleUpdateService = () => {
    const updatedService = {
      title,
      description,
      price,
      thumbnail:
        thumbnail ||
        "https://static.vecteezy.com/system/resources/thumbnails/022/059/000/small/no-image-available-icon-vector.jpg",
      category,
    };
    const db = getFirestore();
    const servicesCollection = doc(db, "services", id);
    updateDoc(servicesCollection, updatedService).then(() => {
      alert("Service updated");
    });
  };

  return (
    <div>
      {!data ? (
        <LoadingComponent />
      ) : (
        (console.log(data),
        (
          <div>
            <h1>Update Service</h1>
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
              value={category}
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
            <button onClick={handleUpdateService}>Update Service</button>
          </div>
        ))
      )}
    </div>
  );
};

export default UpdateService;
