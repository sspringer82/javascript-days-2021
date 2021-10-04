export default function doItAsync(
  fail = false,
  time = 1000,
  value = 'Hallo Welt',
  cb,
) {
  setTimeout(() => {
    if (cb) {
      if (fail) {
        cb(Error('Whoops'));
      } else {
        cb(null, value);
      }
    }
  }, time);
}
