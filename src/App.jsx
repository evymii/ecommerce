// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import "./App.css";
import "./comps/navANDslider";
import "./comps/CategoryBig";
import "./comps/CategoryLit";
import "./comps/grid-lit";
import "./comps/CategoryBig1";
// import gridLit from "./comps/grid-lit";
import NavSlider from "./comps/navANDslider";
import CategoryLit from "./comps/CategoryLit";
import CategoryBig from "./comps/CategoryBig";
import CategoryBig1 from "./comps/CategoryBig1";
import Footer from "./comps/Footer";
// import CategoryBig1 from "./comps/CategoryBIg1";

const products = [
  {
    image: "./imgsforjsx/img1.png",
    title: "The Prompt Magazine",
    price: "120'000",
  },
  {
    image: "./imgsforjsx/img2.png",
    title: "Chunky Glyph Tee",
    price: "120'000",
  },
  {
    image: "./imgsforjsx/img3.png",
    title: "All Smiles Nalgene",
    price: "120'000",
  },
  {
    image: "./imgsforjsx/img4.png",
    title: "Wildflower Hoodie",
    price: "108'000",
  },
  {
    image: "./imgsforjsx/img5.png",
    title: "Inkblot Tee",
    price: "120'000",
  },
  {
    image: "./imgsforjsx/img6.png",
    title: "Gestures Longsleeve",
    price: "120'000",
  },

  {
    image: "./imgsforjsx/img-big1.png",
    title: "Chunky Glyph Cap",
    price: "120'000",
  },
];
const products2 = [
  {
    image: "./imgsforjsx/img-big2.png",
    title: "Local Styles Crewneck",
    price: "120'000",
  },
  {
    image: "./imgsforjsx/img-big1.png",
    title: "Chunky Glyph Cap",
    price: "120'000",
  },
  {
    image: "./imgsforjsx/img7.png",
    title: "Doodle Hoodie",
    price: "120'000",
  },
  {
    image: "./imgsforjsx/img8.png",
    title: "Independent Corners Tee",
    price: "120'000",
  },
  {
    image: "./imgsforjsx/img3.png",
    title: "Ther Prompt Magazine",
    price: "120'000",
  },
  {
    image: "./imgsforjsx/img1.png",
    title: "Chunky Glyph Tee",
    price: "120'000",
  },
  {
    image: "./imgsforjsx/img9.png",
    title: "All Smiles Nalgene",
    price: "120'000",
  },
  {
    image: "./imgsforjsx/img9.png",
    title: "All Smiles Nalgene",
    price: "120'000",
  },
  {
    image: "./imgsforjsx/img1.png",
    title: "Chunky Glyph Tee",
    price: "120'000",
  },
  {
    image: "./imgsforjsx/img8.png",
    title: "Independent Corners Tee",
    price: "120'000",
  },
  {
    image: "./imgsforjsx/img3.png",
    title: "Ther Prompt Magazine",
    price: "120'000",
  },
];
const App = () => {
  return (
    <div>
      <div className="full-container" id="full-container">
        <NavSlider />
        <div className="category" id="category">
          <div className="grid-row" id="grid-row">
            {products.map((products, index) =>
              index < 6 || index === 7 ? (
                <CategoryLit
                  image={products.image}
                  price={products.price}
                  title={products.title}
                />
              ) : (
                <CategoryBig
                  image={products.image}
                  price={products.price}
                  title={products.title}
                />
              )
            )}
            {products2.map((products2, index) =>
              index === 0 || index > index.length ? (
                <CategoryBig1
                  image={products2.image}
                  price={products2.price}
                  title={products2.title}
                />
              ) : (
                <CategoryLit
                  image={products2.image}
                  price={products2.price}
                  title={products2.title}
                />
              )
            )}
          </div>
        </div>
        <div>
          <Footer />
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default App;
