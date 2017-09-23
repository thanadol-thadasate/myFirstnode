// จัดการระหว่าง views กับ controllers

import index from '../controllers/index.controller';

const path = '/api/index';

// ไปเรียกฟังก์ชันตาม requests ที่ได้รับมา
module.exports = (app) => {
       app.get('/', index.index);
       app.get('/help', index.help);
};