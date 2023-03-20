const scale = () => Math.random() * 3 + 0.1;

const color = () => {
  const colors = ['green', 'red', 'yellow'];
  return colors[Math.floor(Math.random() * 3)];
};

const bars = () => {
  const tl = gsap.timeline({ onComplete: bars });
  const barsEl = document.querySelectorAll('#voice-bars rect');

  tl.set(barsEl, { y: -30, transformOrigin: '50%' });
  tl.to(barsEl, {
    duration: 0.7,
    scaleY: scale,
    fill: color,
    ease: 'bounce.in',
    stagger: { each: 0.1, repeat: 1, yoyo: true },
  });
  return tl;
};

const blink = () => {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 3, delay: 2 });
  const eyes = document.querySelectorAll('#eye-left, #eye-right');

  tl.set(eyes, { transformOrigin: '50%' })
    .to(eyes, { duration: 0.1, scaleY: 0, fill: '#231f20' })
    .to(eyes, { duration: 0.05, scaleY: 1, fill: '#48b3e6' })
    .to(eyes, { duration: 0.12, scaleY: 0, fill: '#231f20' }, '+=0.5')
    .to(eyes, { duration: 0.03, scaleY: 1, fill: '#48b3e6' })
    .to(eyes, { duration: 0.08, scaleY: 0, fill: '#231f20' }, '+=0.15')
    .to(eyes, { duration: 0.08, scaleY: 1, fill: '#48b3e6' });
  return tl;
};

const move = () => {
  const tl = gsap.timeline();
  const legs = document.querySelectorAll('#leg-right, #leg-left');

  tl.to(legs, { duration: 0.5, y: -60, ease: 'none', stagger: { each: 0.5, repeat: -1, yoyo: true } });
  return tl;
};

const main = gsap.timeline();
main.add(bars(), move(), blink());
