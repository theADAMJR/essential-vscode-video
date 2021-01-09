export class Cursor {
  #position = { x: 3, y: 1 };

  get position() { return this.#position; }

  goto(x = 0, y = 0) {
    console.log(`Moved cursor to (${x}, ${y})`);
  
    this.#position.x = x;
    this.#position.y = y;
  }
  
  reset() {
    this.goto(0, 0);
  }
}
