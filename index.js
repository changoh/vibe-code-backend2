require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRouter = require('./routes/todo');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydb';

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use('/todos', todoRouter);

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('몽고디비 연결 성공');
    app.listen(PORT, () => {
      console.log(`서버가 포트 ${PORT}번에서 실행 중입니다`);
    });
  })
  .catch((err) => {
    console.error('몽고디비 연결 실패:', err.message);
  });
