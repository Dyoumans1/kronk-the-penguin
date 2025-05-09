const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const gravity = 0.5;

class Player {
  constructor(posisition) {
    this.position = posisition;
    this.velocity = {
      x: 0,
      y: 1,
    };
    this.height = 100;
  }

  draw() {
    c.fillStyle = 'purple';
    c.fillRect(this.position.x, this.position.y, 100, this.height);
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;

    this.position.y += this.velocity.y;
    if (this.position.y + this.height + this.velocity.y < canvas.height)
      this.velocity.y += gravity;
    else this.velocity.y = 0;
  }
}

const player = new Player({
  x: 0,
  y: 0,
});
const player2 = new Player({
  x: 300,
  y: 100,
});

const keys = {
  ArrowRight: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
  ArrowUp: {
    pressed: false,
  },
};

const animate = () => {
  window.requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  player2.update();

  player.velocity.x = 0
  if (keys.ArrowRight.pressed) player.velocity.x = 4
  else if (keys.ArrowLeft.pressed) player.velocity.x = -4
};

animate();
//Movement
window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowRight':
      keys.ArrowRight.pressed = true;
      break;
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = true;
      break;
    case 'ArrowUp':
      player.velocity.y = -20;
      break;
  }
});

window.addEventListener('keyup', (event) => {
    switch (event.key) {
      case 'ArrowRight':
        keys.ArrowRight.pressed = false;
        break;
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = false;
        break;
    }
  });