import ItemDetail from "./ItemDetail";
import { firestoreFetchOne } from "../../../utils/firestoreFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

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