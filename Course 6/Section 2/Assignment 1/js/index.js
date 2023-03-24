// // 1. CALLBACK
// const boilWater = callback => {
//   console.log('Boiling water...');
//   setTimeout(callback, 1000);
// };

// const makeATea = callback => {
//   console.log('Tea brewing...');
//   setTimeout(callback, 2000);
// };

// const waitForRightTemperature = callback => {
//   console.log('Waiting for the right temperature...');
//   setTimeout(callback, 750);
// };

// boilWater(() => {
//   console.log('Water boiled!');
//   makeATea(() => {
//     console.log('Tea brewed!');
//     waitForRightTemperature(() => console.log('The temperature is right, time to drink!'));
//   });
// });

// // 2. PROMISE
// const boilWater = () => {
//   console.log('Boiling water...');
//   return new Promise((resolve, reject) => setTimeout(resolve, 1000));
// };

// const makeATea = () => {
//   console.log('Tea brewing...');
//   return new Promise((resolve, reject) => setTimeout(resolve, 2000));
// };

// const waitForRightTemperature = () => {
//   console.log('Waiting for the right temperature...');
//   return new Promise((resolve, reject) => setTimeout(resolve, 750));
// };

// boilWater()
//   .then(() => {
//     console.log('Water boiled!');
//     return makeATea();
//   })
//   .then(() => {
//     console.log('Tea brewed!');
//     return waitForRightTemperature();
//   })
//   .then(() => console.log('The temperature is right, time to drink!'));

// 3. ASYNC/AWAIT
const boilWater = () => {
  console.log('Boiling water...');
  return new Promise((resolve, reject) => setTimeout(resolve, 1000));
};

const makeATea = () => {
  console.log('Tea brewing...');
  return new Promise((resolve, reject) => setTimeout(resolve, 2000));
};

const waitForRightTemperature = () => {
  console.log('Waiting for the right temperature...');
  return new Promise((resolve, reject) => setTimeout(resolve, 750));
};

(async () => {
  await boilWater();
  console.log('Water boiled!');
  await makeATea();
  console.log('Tea brewed!');
  await waitForRightTemperature();
  console.log('The temperature is right, time to drink!');
})();
