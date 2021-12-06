import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const OpenDetail = (props) => {
  return (
    <>
      <Link to={`/item/${props.content.id}`} className="btn btn__showDetail"><i><AiOutlineSearch/></i>Ver Detalles</Link>
    </>
  )};
export default OpenDetail;