const CategoryBig1 = (props) => {
  return (
    <section className="gridbig2">
      <img src={props.image} alt="card-info" className="card-info2" />
      <h3>{props.title}</h3>
      <p>{props.price}₮</p>
    </section>
  );
};
export default CategoryBig1;
