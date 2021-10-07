const model = {
  data: [
    {
      id: 1,
      username: 'test',
      password: 'p@55w0rD',
      url: 'https://google.com',
      notes: "Don't give your password away",
    },
    {
      id: 2,
      username: 'test1',
      password: 'p@55w0rD',
      url: 'https://live.com',
      notes: "Don't give your password away",
    },
  ],
  save(entry) {
    if (entry.id) {
      this.editElement(entry);
    } else {
      this.addElement(entry);
    }
  },
  addElement(entry) {
    entry.id = Math.max(...this.data.map((e) => e.id)) + 1;
    this.data.push(entry);
  },
  editElement(entry) {
    const id = this.data.findIndex((e) => e.id === entry.id);
    this.data[id] = entry;
  },
  deleteElement(id) {
    this.data = this.data.filter((element) => element.id !== id);
  },
  getAllElements() {
    return this.data;
  },
  getOneById(id) {
    return this.data.find((element) => element.id === id);
  },
};

export default model;
