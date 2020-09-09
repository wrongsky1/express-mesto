const router = require('express').Router();
const { getUserById, getUsers } = require('../controllers/users.js');

router.get('/users/:id', getUserById);
router.get('/users', getUsers);
module.exports = router;
