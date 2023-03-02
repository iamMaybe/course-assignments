const sun = document.querySelector('.sun');
const sunWidth = sun.offsetWidth;
const width = window.innerWidth - sunWidth - 100;
const animationTime = 5;

gsap.to(sun, { duration: animationTime, x: width, ease: 'none' });
gsap.to(sun, {
  duration: animationTime / 2,
  y: -(window.innerHeight * 0.6),
  backgroundColor: 'yellow',
  boxShadow: '0 0 120px 0 yellow',
  repeat: 1,
  yoyo: true,
  ease: 'power1.out',
});
