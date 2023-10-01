import Shape from "./shape.js";
import Square from "./square.js";
import Circle from "./circle.js";
import Rectangle from "./rectangle.js";

function getEle(id) {
  return document.getElementById(id);
}

const getUI = () => {
  const shape = new Shape();
  shape.draw;
};

getUI();

getEle("areaSquare").onclick = function () {
  let side = Number(getEle("side").value);
  let x = Number(getEle("sizeX").value);
  let y = Number(getEle("sizeY").value);
  let color = getEle("squareColor").value;
  const square = new Square("vuông", x, y, color, side);
  square.getArea();
  square.draw();
};
getEle("areaCircle").onclick = function () {
  let radius = Number(getEle("radius").value);
  let x = Number(getEle("sizeX").value);
  let y = Number(getEle("sizeY").value);
  let color = getEle("circleColor").value;
  const circle = new Circle("tròn", x, y, color, radius);
  circle.getArea();
  circle.draw();
};
getEle("areaRectangle").onclick = function () {
  let width = Number(getEle("width").value);
  let length = Number(getEle("length").value);
  let x = Number(getEle("sizeX").value);
  let y = Number(getEle("sizeY").value);
  let color = getEle("rectangleColor").value;
  const rectangle = new Rectangle("vuông", x, y, color, width, length);
  rectangle.getArea();
  rectangle.draw();
};
