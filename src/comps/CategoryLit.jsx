const CategoryLit = (props) => {
  return (
    <section className="all-product">
      <img src={props.image} alt="card-info" className="card-info1" />
      <h3>{props.title}</h3>
      <p>{props.price}₮</p>
    </section>
  );
};
export default CategoryLit;
