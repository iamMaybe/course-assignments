class Sky {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = innerWidth;
    this.height = innerHeight;
  }

  initCanvas() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, this.width, this.height);
  }
}

const sky = new Sky(document.querySelector('#canvas'));
