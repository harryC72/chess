const KEY = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

export default class InputManager {
  constructor() {
    this.pressedKey = {
      up: 0,
      down: 0,
      left: 0,
      right: 0,
    };
  }
  bindKeys() {
    window.addEventListener('keyup', this.handleKeys.bind(this, false));
    window.addEventListener('keydown', this.handleKeys.bind(this, true));
  }

  unbindKeys() {
    window.removeEventListener('keyup', this.handleKeys);
    window.removeEventListener('keydown', this.handleKeys);
  }

  handleKeys(e) {
    switch (e.keyCode) {
      case KEY.UP:
        console.log('UP');
        break;
      case KEY.DOWN:
        console.log('DOWN');
        break;
      case KEY.LEFT:
        console.log('LEFT');
        break;
      case KEY.RIGHT:
        console.log('RIGHT');
        break;
      default:
    }
  }
}
