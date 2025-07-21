import "./comp.css";
const NavSlider = () => {
  return (
    <div>
      <nav className="navigation" id="navigation">
        <div className="nav-container" id="nav-container">
          <div className="left-side" id="left-side">
            <div className="p-commerce">
              <div className="p-logo"></div>
              <button type="text" className="button-text-H">
                ECOMMERCE
              </button>
              <button type="text" className="text-button">
                Ангилал
              </button>
            </div>

            <div className="data-picker-input" id="data-picker-input">
              <div type="image" className="search-icon"></div>
              <input type="text" placeholder="Бүтээгдэхүүн хайх" />
            </div>
          </div>
          <div className="right-side" id="right-side">
            <div className="save"></div>
            <div className="cart"></div>
            <div className="button-group">
              <button className="button border-blue">Бүртгүүлэх</button>
              <button className="button bg-blue">Нэвтрэх</button>
            </div>
          </div>
        </div>
      </nav>
      <div className="slider" id="slider">
        <div className="slider-img">
          <img
            src="./imgsforjsx/image1178.png"
            className="imageforslider"
            alt="img1"
          />
          <img
            src="./imgsforjsx/image1178.png"
            className="imageforslider"
            alt="img1"
          />
          <img
            src="./imgsforjsx/image1178.png"
            className="imageforslider"
            alt="img1"
          />
          <img
            src="./imgsforjsx/image1178.png"
            className="imageforslider"
            alt="img1"
          />
          <img
            src="./imgsforjsx/image1178.png"
            className="imageforslider"
            alt="img1"
          />
        </div>

        <div className="slider-content"></div>
      </div>
    </div>
  );
};
export default NavSlider;
