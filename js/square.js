import Shape from "./shape.js";
export default class Square extends Shape {
  constructor(name, sizeX, sizeY, background, side) {
    super(name, sizeX, sizeY, background);
    this.side = side;
  }
  getArea() {
    this.area = Math.pow(this.side, 2);
  }
  draw() {
    const content = `
    <div class="alert" style="width":${this.sizeX}px;heigth:${this.sizeY}px;background-color:${this.background}>
    Diện tích hình ${this.name}-Area:${this.area}
    </div>
    `;
    document.getElementById("main").innerHTML = content;
  }
}
