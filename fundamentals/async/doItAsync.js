export default function doItAsync(
  fail = false,
  time = 1000,
  value = 'Hallo Welt',
  cb,
) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cb) {
        // callbacks
        if (fail) {
          cb(Error('Whoops'));
        } else {
          cb(null, value);
        }
      } else {
        // promises
        if (fail) {
          reject(Error('Whoops'));
        } else {
          resolve(value);
        }
      }
    }, time);
  });
}
