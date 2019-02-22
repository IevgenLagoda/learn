const computeSync = function(number) {
  if (number < 0) {
    throw new Error('No negative please');
  }
  return number * 2;
}

const computeAsync = function(number) {
  if (number < 0) {
    return Promise.reject('No negative please');
  }
  return Promise.resolve(number * 2);
}

const callComputeSync = function(number) {
  try {
    const result = computeSync(number);
    console.log(`Result is ${result}`);
  } catch(ex) {
    console.log(ex.message);
  }
}

const callComputeAsync = function(nummber) {
  computeAsync(number)
    .then(res => console.log(`Result is ${res}`))
    .catch(err => console.log(err));
}

const callCompute = async function(number) {
  try {
    const result = await computeAsync(number);
    console.log(`Result is ${result}`);
  } catch(ex) {
    console.log(ex);
  }
}