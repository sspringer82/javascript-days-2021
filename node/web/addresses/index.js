import { Router } from 'express';
import { getAllAddresses, getOneAddress, createAddress } from './controller.js';

const router = Router();

router.get('/', getAllAddresses);
router.get('/:id', getOneAddress);
router.post('/', createAddress);

export default router;
