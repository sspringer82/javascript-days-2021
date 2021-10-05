import model from './model.js';

export async function getAllAddresses(req, res) {
  const addresses = await model.getAllAddresses();
  res.json(addresses);
}

export async function getOneAddress(req, res) {
  const id = parseInt(req.params.id, 10);
  const address = await model.getOneAddress(id);
  res.json(address);
}

export async function createAddress(req, res) {
  const address = req.body;
  const newAddress = await model.createAddress(address);
  res.json(newAddress);
}
