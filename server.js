// Import express
const express = require('express');
const app = express();

// Middleware để ghi log cho mỗi request
app.use((req, res, next) => {
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress; // Lấy địa chỉ IP của client
  const requestTime = new Date().toLocaleString(); // Lấy thời gian hiện tại
  const requestUrl = req.originalUrl; // Lấy URL được gọi
  console.log(`[${requestTime}] Request from IP: ${clientIp}, URL: ${requestUrl}`);

  // Tiếp tục xử lý request
  next();
});

app.get('/api/time', (req, res) => {
    setTimeout(() => {
      const currentTime = new Date().toLocaleString();
      res.send({ time: currentTime });
    }, 3000); // Trì hoãn 3 giây
  });

// Khởi động server trên cổng 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
