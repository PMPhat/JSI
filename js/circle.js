import Shape from "./shape.js";
export default class Cycle extends Shape {
  constructor(name, sizeX, sizeY, background, radius) {
    super(name, sizeX, sizeY, background);
    this.raidus = radius;
  }
  getArea() {
    this.area = Math.pow(3.14 * this.radius, 2);
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
