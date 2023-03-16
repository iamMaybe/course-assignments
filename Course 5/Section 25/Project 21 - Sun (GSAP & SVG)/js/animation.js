const streaks = document.querySelector('#streaks');
const polygons = document.querySelectorAll('#streaks polygon');

gsap.set(streaks, { transformOrigin: '50%', scale: 0.7 });
gsap.to(streaks, { duration: 2, rotation: 360, repeat: -1, ease: 'none' });

gsap.set(polygons, { transformOrigin: '50%', scale: 0.6 });
gsap.to(polygons, { duration: 1, scale: 1.2, repeat: -1, yoyo: true, stagger: 0.3 });
