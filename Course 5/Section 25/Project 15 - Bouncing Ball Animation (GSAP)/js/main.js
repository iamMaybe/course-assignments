const ball = document.querySelector('.ball');
const ballHeight = ball.offsetHeight;
const height = window.innerHeight - ballHeight;

TweenMax.to(ball, 5, { y: height, ease: Bounce.easeOut });
TweenMax.to(ball, 2, { backgroundColor: 'green', scale: 0, delay: 5 });
