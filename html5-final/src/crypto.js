import Dexie from './dexie.mjs';

export const db = new Dexie('pw');
db.version(1).stores({
  pw: '++id, username, password, url',
  secret: '++id',
});

const enc = new TextEncoder();
const dec = new TextDecoder();
const pw = 'T0p5ecret!';

let key = '';

let iv = crypto.getRandomValues(new Uint8Array(10));
let salt = crypto.getRandomValues(new Uint8Array(10));

async function createKey() {
  const data = await db.secret.toArray();
  if (data.length === 0) {
    await db.secret.add({
      iv,
      salt,
    });
  } else {
    iv = data[0].iv;
    salt = data[0].salt;
  }

  // create the first key
  const key1 = await crypto.subtle.importKey(
    'raw',
    enc.encode(pw),
    'PBKDF2',
    false,
    ['deriveKey'],
  );

  // create the second key
  const key2 = await crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations: 250000,
      hash: 'SHA-256',
    },
    key1,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt'],
  );

  key = key2;
}

export async function encrypt(message) {
  if (key === '') {
    await createKey();
  }
  const iv = (await db.secret.toArray())[0].iv;
  const encryptedMessage = crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv,
    },
    key,
    new TextEncoder().encode(message),
  );

  return encryptedMessage;
}

export async function decrypt(encryptedMessage) {
  try {
    if (!(encryptedMessage instanceof ArrayBuffer)) {
      return encryptedMessage;
    }
    if (key === '') {
      await createKey();
    }
    const iv = (await db.secret.toArray())[0].iv;
    const decryptedBuffer = await crypto.subtle.decrypt(
      {
        name: 'AES-GCM',
        iv,
      },
      key,
      encryptedMessage,
    );
    const decryptedMessage = dec.decode(decryptedBuffer);
    return decryptedMessage;
  } catch (e) {
    console.log(e);
  }
}
