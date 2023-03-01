const ball = document.querySelector('.ball');
const ballHeight = ball.offsetHeight;
const height = window.innerHeight - ballHeight;

gsap.to(ball, { duration: 5, y: height, ease: Bounce.easeOut });
gsap.to(ball, { duration: 2, backgroundColor: 'green', scale: 0, delay: 5 });
