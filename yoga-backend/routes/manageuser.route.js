import express from 'express';
import {
  getUsers,
  createUser,
  editUser,
  removeUser,
  changeStatus
} from '../controllers/manageuser.controller.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.put('/:id', editUser);
router.delete('/:id', removeUser);
router.patch('/:id/status', changeStatus);

export default router;
