const express = require('express');
const { register, login,
  getAllUsers,
  getUserById,
  updateUserRole,
  deleteUser } = require('../controllers/authController');

const router = express.Router();

const authenticateUser = require('../middlewares/authMiddleware');
const authorizeRoles = require('../middlewares/authorizeRoles');
const validate = require('../middlewares/validate');
const { userRegisterSchema } = require('../validators/user');


router.post('/register', validate(userRegisterSchema), register);
router.post('/login', login);
router.get('/', authenticateUser, authorizeRoles('admin', 'manager'), getAllUsers);
router.get('/:id', authenticateUser, authorizeRoles('admin', 'user'), getUserById);
router.patch('/:id/role', authenticateUser, authorizeRoles('admin'), updateUserRole);
router.delete('/:id', authenticateUser, authorizeRoles('admin'), deleteUser);



module.exports = router;
