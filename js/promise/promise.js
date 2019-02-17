const createResolve = function(timeMillis) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(timeMillis), timeMillis);
  })
};

const createReject = function(timeMillis) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => reject(timeMillis), timeMillis);
  })
};

Promise.race(createResolve(1000), createResolve(2000), createReject(3000))
  .then(res => console.log(`Completed after ${res} millis`))
  .catch(err => console.log(`ERROR: ${error}`));
Promise.race(createReject(1000), createResolve(2000), createReject(3000))
.then(res => console.log(`Completed after ${res} millis`))
.catch(err => console.log(`ERROR: ${error}`));