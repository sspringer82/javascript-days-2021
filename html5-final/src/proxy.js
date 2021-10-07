const worker = new Worker('worker.js', { type: 'module' });

export function encrypt(password) {
  return new Promise((resolve, reject) => {
    worker.onmessage = (e) => {
      console.log(e);
      resolve(e.data);
    };
    worker.postMessage({ type: 'encrypt', password });
  });
}

export function decrypt(password) {
  return new Promise((resolve, reject) => {
    worker.onmessage = (e) => {
      console.log(e);
      resolve(e.data);
    };
    worker.postMessage({ type: 'decrypt', password });
  });
}
