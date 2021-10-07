const model = {
  save(entry) {
    if (entry.id) {
      this.editElement(entry);
    } else {
      this.addElement(entry);
    }
  },
  addElement(entry) {
    const entries = this.getAllElements();
    entry.id =
      localStorage.length === 0 ? 1 : Math.max(...entries.map((e) => e.id)) + 1;
    localStorage.setItem(entry.id, JSON.stringify(entry));
  },
  editElement(entry) {
    localStorage.setItem(entry.id, JSON.stringify(entry));
  },
  deleteElement(id) {
    localStorage.removeItem(id);
  },
  getAllElements() {
    return Object.values(localStorage).map((element) => {
      return JSON.parse(element);
    });
  },
  getOneByIndex(i) {
    return JSON.parse(localStorage.getItem(localStorage.key(i)));
  },
  getOneById(id) {
    return JSON.parse(localStorage.getItem(id));
  },
};

export default model;
