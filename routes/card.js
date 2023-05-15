import express from 'express';
import verifyJwt from '../middleware/verifyJwt.js';
import verifyRoles from '../middleware/verifyRoles.js';
import ROLES_LIST from '../config/roles_list.js'

import { getCards, getCard, updateCard, addCard, deleteCard } from '../controllers/card.js';

const router = express.Router();
const { Admin, Editor } = ROLES_LIST;

router.use(verifyJwt);
router.get('/', verifyRoles(Admin, Editor), getCards);

router.get('/:id', getCard);

router.post('/', addCard);

router.put('/:id', updateCard);

router.delete('/:id', deleteCard);

export default router;