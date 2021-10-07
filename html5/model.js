import Dexie from './node_modules/dexie/dist/dexie.mjs';

const db = new Dexie('pw');
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
  addElement(entry) {
    delete entry.id;
    return db.pw.add(entry);
  },
  editElement(entry) {
    return db.pw.update(entry.id, entry);
  },
  deleteElement(id) {
    return db.pw.delete(id);
  },
  getAllElements() {
    return db.pw.toArray();
  },
  getOneById(id) {
    return db.pw.get(id);
  },
};

export default model;
