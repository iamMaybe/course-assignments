class Sky {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = innerWidth;
    this.height = innerHeight;
  }
}

const sky = new Sky(document.querySelector('#canvas'));
