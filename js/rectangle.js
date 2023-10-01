import Shape from "./shape.js";
export default class Rectangle extends Shape {
  constructor(name, sizeX, sizeY, background, length, width) {
    super(name, sizeX, sizeY, background);
    this.width = width;
    this.length = length;
  }
  getArea() {
    this.area = Math.pow(this.width * this.length);
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
