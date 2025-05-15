
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Bubble {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * w;
    this.y = h + Math.random() * 100;
    this.radius = 5 + Math.random() * 15;
    this.speed = 0.5 + Math.random() * 1.5;
    this.opacity = 0.1 + Math.random() * 0.3;
  }
  update() {
    this.y -= this.speed;
    if (this.y < -this.radius) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = `rgba(80, 227, 194, ${this.opacity})`;
    ctx.shadowColor = 'rgba(80, 227, 194, 0.7)';
    ctx.shadowBlur = 8;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

const bubbles = [];
for(let i=0; i<50; i++) bubbles.push(new Bubble());

function animate() {
  ctx.clearRect(0, 0, w, h);
  bubbles.forEach(b => {
    b.update();
    b.draw();
  });
  requestAnimationFrame(animate);
}
animate();
