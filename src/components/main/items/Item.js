const Item = (props) => {
  return (
    <>
      <picture className="card__picture">
        <img src={props.content.pictureURL} alt={props.content.title} className="card__img"/>
      </picture>
    </>
  )};
  export default Item;