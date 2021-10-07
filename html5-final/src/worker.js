import { encrypt, decrypt } from './crypto.js';
console.log('worker');
self.onmessage = async (e) => {
  if (e.data.type === 'encrypt') {
    console.log(e.data);
    self.postMessage(await encrypt(e.data.password));
  } else if (e.data.type === 'decrypt') {
    console.log(e.data);
    self.postMessage(await decrypt(e.data.password));
  } else {
    console.log(e);
  }
};
