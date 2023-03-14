const square = document.querySelector('.square');
const tl = gsap.timeline({
  repeat: -1,
  yoyo: true,
  repeatDelay: 1,
  onStart: () => console.log('start'),
  paused: false,
  // delay: 3,
});

tl.to(square, { duration: 1, x: 200 })
  .to(square, { duration: 1, y: 200 })
  .add('half')
  .to(square, { duration: 1, x: '-=200' })
  .to(square, { duration: 1, y: 0 })
  .to(square, { duration: 1, backgroundColor: 'red' }, 'half');
