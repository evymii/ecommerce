const Footer = () => {
  return (
    <section className=" footer-out">
      <div className=" footer-in">
        <div className="footer-top">
          <div className=" left-section">
            <div className="p-logo style2"></div>
          </div>
          <div className="flex-row">
            <div className="flex-row">
              <div className="phone-logo">
                <img src="./imgsforjsx/Call.png" alt="" />
              </div>
              <button className="text2">(9756) 7007-1234</button>
            </div>
            <div className="flex-row">
              <div className="phone-logo">
                <img src="./imgsforjsx/Icon.png" alt="" />
              </div>
              <button className="text2"> contact@ecommerce.mn</button>
            </div>
          </div>
        </div>
        <span className="vector"></span>
        <div className="footer-bottom">
          <div className="text2">© 2024 Ecommerce MN</div>
          <div className="socials">
            <img src="./imgsforjsx/Facebook.png" alt="" className="socialpic" />
            <img
              src="./imgsforjsx/Instagram.png"
              alt=""
              className="socialpic"
            />
            <img src="./imgsforjsx/Twitter.png" alt="" className="socialpic" />
            <img src="./imgsforjsx/LinkedIn.png" alt="" className="socialpic" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
