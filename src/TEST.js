export default class Cube {
  constructor(args) {
    this.position = args.position;
    this.speed = args.speed;
    this.radius = args.radius;
    this.state = args.state;
    this.keys = args.keys;
  }

  update(keys) {
    if (keys.right) {
      this.position.x += this.speed;
    } else if (keys.left) {
      this.position.x -= this.speed;
    } else if (keys.up) {
      this.position.y += this.speed;
    } else if (keys.down) {
      this.position.y -= this.speed;
    }

    if (this.position.x > this.state.screen.width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = this.state.screen.width;
    }
  }

  render(state) {
    const context = state.context;
    context.save();
    context.translate(this.position.x, this.position.y);
    context.strokeStyle = 'yellow';
    context.fillStyle = 'yellow';
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(0, -25);
    context.lineTo(15, 15);
    context.lineTo(5, 7);
    context.lineTo(-5, 7);
    context.lineTo(-15, 15);
    context.closePath();
    context.fill();
    context.stroke();
    context.restore();
  }
}
