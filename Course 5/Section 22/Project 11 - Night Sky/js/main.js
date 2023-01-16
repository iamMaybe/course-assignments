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

  generateStars(count) {
    let stars = [];

    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 3 + 2;
      stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: radius,
        originalRadius: radius,
        color: '#fff',
        speed: Math.random() + 0.25,
      });
    }

    this.stars = stars;
  }

  drawStars() {
    this.stars.forEach(star => this.drawStar(star));
  }

  updateStars() {
    this.stars.forEach(star => {
      star.x += star.speed;
      star.y -= (star.speed * (this.width / 2 - star.x)) / 3000;
      star.radius = star.originalRadius * (Math.random() / 4 + 0.9);
      if (star.x > this.width + 2 * star.radius) star.x = -2 * star.radius;
    });
  }

  generateRandomConstellation() {
    const x = (this.width / 2) * Math.random() + 0.5;
    const y = (this.height / 2) * Math.random() + 0.5;
    const radius = this.height / 2;

    this.constellation = {
      stars: this.stars.filter(star => {
        star.x > x - radius && star.x < x + radius && star.y > y - radius && star.y < y + radius;
      }),
    };
  }

  drawOverlayer() {
    let gradient = this.ctx.createRadialGradient(
      this.width / 2,
      this.height / 2,
      250,
      this.width / 2,
      this.height / 2,
      this.width / 2
    );
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.75)');
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  clearCanvas() {
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  drawStar(star) {
    this.ctx.save();
    this.ctx.fillStyle = star.color;
    this.ctx.beginPath();
    this.ctx.translate(star.x, star.y);
    this.ctx.moveTo(0, 0 - star.radius);

    for (let i = 0; i < 5; i++) {
      this.ctx.rotate((Math.PI / 180) * 36);
      this.ctx.lineTo(0, 0 - star.radius * 0.65);
      this.ctx.rotate((Math.PI / 180) * 36);
      this.ctx.lineTo(0, 0 - star.radius);
    }

    this.ctx.fill();
    this.ctx.restore();
  }

  draw() {
    this.clearCanvas();
    this.drawStars();
    this.updateStars();
    this.drawOverlayer();
    requestAnimationFrame(() => this.draw());
  }

  run() {
    this.initCanvas();
    this.generateStars(500);
    this.draw();
  }
}

const sky = new Sky(document.querySelector('#canvas'));
sky.run();
