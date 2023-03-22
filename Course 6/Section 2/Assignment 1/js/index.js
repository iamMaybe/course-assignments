// 1. CALLBACK

const boilWater = callback => {
  console.log('Boiling water...');
  setTimeout(callback, 1000);
};

const makeATea = callback => {
  console.log('Tea brewing...');
  setTimeout(callback, 2000);
};

const waitForRightTemperature = callback => {
  console.log('Waiting for the right temperature...');
  setTimeout(callback, 750);
};

boilWater(() => {
  console.log('Water boiled!');
  makeATea(() => {
    console.log('Tea brewed!');

    waitForRightTemperature(() => {
      console.log('The temperature is right, time to drink!');
    });
  });
});
