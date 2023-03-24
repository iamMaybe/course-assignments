// 1. CALLBACK
const doMyJob = (hours, callback) => {
  if (hours > 8) {
    callback(new Error('Too many working hours!'));
  } else {
    setTimeout(() => {
      callback(null);
    }, hours * 1000);
  }
};

const pay = callback => {
  callback(null);
};

doMyJob(5, err => {
  if (err === null) {
    console.log('Task completed!');
    pay(() => {
      console.log('Payment made!');
    });
  } else {
    console.log('Error!', err);
  }
});
