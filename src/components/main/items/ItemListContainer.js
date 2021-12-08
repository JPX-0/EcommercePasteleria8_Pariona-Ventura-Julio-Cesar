import ItemList from "./ItemList";
import { firestoreFetchAll } from "../../../utils/firestoreFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const [dt, setDt] = useState([])
  const {idCategory} = useParams();
  useEffect(() => {
    firestoreFetchAll(idCategory)
      .then((res) => setDt(res))
      .catch(err => console.log(err))
  },[idCategory])
  return (
    <>
      <h1 className="main__title">Mi Ecommerce</h1>
      <ItemList content={dt}/>
    </>
  )};
export default ItemListContainer;