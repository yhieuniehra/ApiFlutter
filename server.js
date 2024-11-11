const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const tripRoutes = require('./routes/triproutes.js');

const app = express();
const port = 3000;

// Kết nối MongoDB
mongoose.connect('mongodb://localhost:27017/api_flutter', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Đã kết nối MongoDB'))
    .catch(err => console.error('Không thể kết nối MongoDB', err));

// Middleware để phân tích body của các yêu cầu
app.use(bodyParser.json());

// Sử dụng router cho User
app.use('/users', userRoutes);

// Sử dụng routes cho chuyến đi
app.use('/trips', tripRoutes );

// Route mặc định
app.get('/', (req, res) => {
    res.send('API đang chạy');
});

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
