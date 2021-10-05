const model = {
  addresses: [
    {
      id: 1,
      firstname: 'Nakia',
      lastname: 'Parker',
      street: '010 Teresa Lake',
      city: 'North Letitia, SD 05045',
    },
    {
      id: 2,
      firstname: 'Dallin',
      lastname: 'Schoen',
      street: '3869 Larson Glens',
      city: 'Normal, MT 64449',
    },
  ],
  getAllAddresses() {
    return Promise.resolve(this.addresses);
  },
  getOneAddress(id) {
    return Promise.resolve(this.addresses.find((address) => address.id === id));
  },
  createAddress(address) {
    const id = Math.max(...this.addresses.map((address) => address.id)) + 1;
    const newAddress = { id, ...address };
    this.addresses.push(newAddress);
    return Promise.resolve(newAddress);
  },
};

export default model;
