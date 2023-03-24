// // 1. CALLBACK
// const doMyJob = (hours, callback) => {
//   if (hours > 8) {
//     callback(new Error('Too many working hours!'));
//   } else {
//     setTimeout(() => {
//       callback(null);
//     }, hours * 1000);
//   }
// };

// const pay = callback => callback(null);

// doMyJob(5, err => {
//   if (err === null) {
//     console.log('Task completed!');
//     pay(() => console.log('Payment made!'));
//   } else {
//     console.log('Error!', err);
//   }
// });

// // 2. PROMISE
// const doMyJob = hours => {
//   return new Promise((resolve, reject) => {
//     if (hours > 8) {
//       reject(new Error('Too many working hours!'));
//     } else {
//       setTimeout(resolve, hours * 1000);
//     }
//   });
// };

// const pay = () => {
//   return new Promise(resolve => resolve());
// };

// doMyJob(4)
//   .then(() => {
//     console.log('Task completed!');
//     return pay();
//   })
//   .then(() => console.log('Payment made!'))
//   .catch(err => console.log('Error!', err));

// 3. ASYNC/AWAIT
const doMyJob = hours => {
  return new Promise((resolve, reject) => {
    if (hours > 8) {
      reject(new Error('Too many working hours!'));
    } else {
      setTimeout(resolve, hours * 1000);
    }
  });
};

const pay = () => {
  return new Promise(resolve => resolve());
};

(async () => {
  try {
    await doMyJob(3);
    console.log('Task completed!');
    await pay();
    console.log('Payment made!');
  } catch (err) {
    console.log('Error!', err);
  }
})();
