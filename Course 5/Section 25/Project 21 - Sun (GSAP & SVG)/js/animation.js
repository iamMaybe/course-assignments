const streaks = document.querySelector('#streaks');

gsap.set(streaks, { transformOrigin: '50%', scale: 0.7 });
gsap.to(streaks, { duration: 2, rotation: 360, repeat: -1, ease: 'none' });
