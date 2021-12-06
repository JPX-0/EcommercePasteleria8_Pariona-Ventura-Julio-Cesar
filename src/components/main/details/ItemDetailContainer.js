import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { firestoreFetchOne } from "../../../utils/firestoreFetch";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [dat, setDat] = useState([])
  const {idProduct} = useParams()
  useEffect(() => {
    firestoreFetchOne(idProduct)
    .then((res) => setDat(res))
    .catch(err => console.log(err))
  }, [idProduct])
  return (
    <>
      <h1 className="main__title">Detalle del producto:</h1>
      <ItemDetail content={dat}/>
    </>
  )};
  export default ItemDetailContainer;