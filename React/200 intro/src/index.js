import React from "react";
import ReactDOM from "react-dom";

const jamon_img =
  "https://hips.hearstapps.com/hmg-prod/images/cinco-jotas-8-prev1-1608115289.jpg?crop=0.649xw:0.936xh;0.351xw,0&resize=1200:*";
const salami_img =
  "https://www.tremari.ca/cdn/shop/products/sliced-meat_20_26.jpg?v=1707498160&width=1946";
let year = new Date().getFullYear();
const inlineStyle = {
  color: "lightgreen",
  fontSize: "18px",
  border: "1px solid black",
};
inlineStyle.color = "blue";

ReactDOM.render(
  <div>
    <h1 className="heading">My favorite food</h1>
    <div>
      {/* food1 */}
      <div>
        <img className="food-img" src={jamon_img} alt="jamon" />
        <p style={{ color: "lightgreen" }}>jamon</p>
      </div>
      {/* food2 */}
      <div style={inlineStyle}>
        <img className="food-img" src={salami_img} alt="salami" />
        <p>salami</p>
      </div>
    </div>
    <footer>Created by Asaya ©️ {year}</footer>
  </div>,
  document.getElementById("root")
);
