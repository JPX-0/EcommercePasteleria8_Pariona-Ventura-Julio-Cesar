import Item from "./Item";
import OpenDetail from "../buttons/OpenDetail";
import { memo } from "react";

const ItemList = (props) => {
  return (
    <>
      {
        props.content.length === 0 ?
        <p className="msg msg__cargando" id="messageData"></p> :
        <section className="main__container">
          {
            props.content.map(art => 
              <figure key={`figure${art.id}`} className="card">
                <h2 className="card__title responsive-M--Block">{art.title}</h2>
                <Item content={art}/>
                <article className="card__detail">
                  <h2 className="card__title responsive-D--Block">{art.title}</h2>
                  <OpenDetail content={art}/>
                </article>
              </figure>
            ) 
          }
        </section>
      }
    </>
  )}
export default memo(ItemList);