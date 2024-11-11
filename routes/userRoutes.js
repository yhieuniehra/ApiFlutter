const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Tạo user mới
router.post('/', userController.createUser);

// Lấy danh sách tất cả user
router.get('/', userController.getAllUsers);

// Cập nhật user theo ID
router.put('/:id', userController.updateUser);

// Xóa user theo ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
