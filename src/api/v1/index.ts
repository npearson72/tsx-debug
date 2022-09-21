import express from 'express';
import todos from './todos/controller';
import users from './users/controller';

const router = express.Router();

router.route('/todos').get(todos.getAll);
router.route('/todos').post(todos.create);
router.route('/todos/:id').patch(todos.update);
router.route('/todos/:id').delete(todos.destroy);

router.route('/users').get(users.getAll);
router.route('/users').post(users.create);
router.route('/users/:id').delete(users.destroy);

export default router;
