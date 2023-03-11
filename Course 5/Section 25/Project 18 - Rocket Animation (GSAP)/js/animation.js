const rocket = document.querySelector('.rocket');
const tl = gsap.timeline();

tl.set(rocket, { rotation: 90 });
tl.to(rocket, { duration: 2, rotation: '-=90' });
tl.to(rocket, { duration: 2, y: -300, delay: 2, ease: 'power4.in' });
tl.to(rocket, { duration: 1, y: '-=100', ease: 'none' });
tl.add('stop');
tl.to(rocket, { duration: 0.7, rotation: '-=120' }, 'stop');
tl.to(rocket, { duration: 1, y: 80 }, 'stop');
tl.to(rocket, { duration: 0.3, opacity: 0 });
