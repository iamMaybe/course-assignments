gsap.from('.square__first', { duration: 2, x: 0, repeat: -1, yoyo: true, ease: 'back.out(3)' });
gsap.fromTo('.square__second', { y: 100 }, { y: 300, duration: 4 });
