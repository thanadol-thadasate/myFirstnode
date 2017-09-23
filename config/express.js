import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import bodyParser from 'body-parser';

module.exports = function() {

    const app = express();

    // check ว่าเป็น envoriment อะไร
    if (process.env.NODE_ENV === "development") {
        // print log ออกมาดู
        app.use(morgan('dev'));
    }
    else {
        // การบีบอัดตัวตอบสนองสำหรับคำขอทั้งหมด
        app.use(compression());
    }

    // ให้มันสามารถอ่านตัว body จาก request ได้
    app.use(bodyParser.json());

    require('../app/routes/index.route')(app);

    return app;

}