const square = document.querySelector('.square');
const btn = document.querySelector('.btn');
const tl = gsap.timeline({
  repeat: -1,
  yoyo: true,
  repeatDelay: 1,
  onStart: () => console.log('start'),
  paused: true,
  delay: 0,
});

tl.to(square, { duration: 1, x: 200 })
  .to(square, { duration: 1, y: 200 })
  .add('half')
  .to(square, { duration: 1, x: '-=200' })
  .to(square, { duration: 1, y: 0 })
  .to(square, { duration: 1, backgroundColor: 'red' }, 'half');

const animation = () => tl.paused(!tl.paused());

btn.addEventListener('click', animation);
