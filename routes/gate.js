import express from 'express';
import verifyJwt from '../middleware/verifyJwt.js';
import verifyRoles from '../middleware/verifyRoles.js';
import ROLES_LIST from '../config/roles_list.js'

import { getGates, getGate, createGate, updateGate, deleteGate } from '../controllers/gate.js';

const router = express.Router();
const { Admin, Editor } = ROLES_LIST;

router.get('/', getGates);
router.get('/:id', getGate);

router.use(verifyJwt);

router.post('/', verifyRoles(Admin), createGate);
router.put('/:id', verifyRoles(Admin, Editor), updateGate);
router.delete('/:id', verifyRoles(Admin), deleteGate);

export default router;