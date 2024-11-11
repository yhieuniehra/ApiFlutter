const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripcontroller'); // Import controller

// Định nghĩa các routes và ánh xạ chúng với các phương thức trong tripController

// Lấy danh sách tất cả các chuyến đi
router.get('/trips', tripController.getTrips);

// Tạo mới chuyến đi
router.post('/trips', tripController.createTrip);

// Xóa một chuyến đi theo ID
router.delete('/trips/:id', tripController.deleteTrip);

// Xóa tất cả chuyến đi
router.delete('/trips', tripController.deleteAllTrips);

// Cập nhật một chuyến đi theo ID
router.put('/trips/:id', tripController.updateTrip);

module.exports = router;
