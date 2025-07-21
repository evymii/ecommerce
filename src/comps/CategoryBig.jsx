const CategoryBig = (props) => {
  return (
    <section className="gridbig1">
      <img src={props.image} alt="card-info" className="card-info2" />
      <h3>{props.title}</h3>
      <p>{props.price}₮</p>
    </section>
  );
};
export default CategoryBig;
