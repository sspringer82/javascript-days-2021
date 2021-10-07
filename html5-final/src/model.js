import { encrypt, decrypt } from './proxy.js';

export const db = new Dexie('pw');
db.version(1).stores({
  pw: '++id, username, password, url',
  secret: '++id',
});

const model = {
  save(entry) {
    if (entry.id) {
      this.editElement(entry);
    } else {
      this.addElement(entry);
    }
  },
  async addElement(entry) {
    delete entry.id;
    entry.password = await encrypt(entry.password);
    return db.pw.add(entry);
  },
  async editElement(entry) {
    entry.password = await encrypt(entry.password);
    return db.pw.update(entry.id, entry);
  },
  deleteElement(id) {
    return db.pw.delete(id);
  },
  async getAllElements() {
    const data = await db.pw.toArray();
    return Promise.all(
      data.map(async (entry) => ({
        ...entry,
        password: await decrypt(entry.password),
      })),
    );
  },
  async getOneById(id) {
    const data = await db.pw.get(id);
    data.password = await decript(data.password);
    return data;
  },
};

export default model;
