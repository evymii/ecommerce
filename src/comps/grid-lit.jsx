const gridLit = (props) => {
  return (
    <div className="product7">
      <img src={props.image} alt="miow" className="image-style-lit" />
      <h3>{props.title}</h3>
      <p>{props.price}$</p>
    </div>
  );
};
export default gridLit;
