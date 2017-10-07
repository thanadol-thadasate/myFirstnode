import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';

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
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    var config = require('./config');
    
    app.use(session({

           secret: config.sessionSecret,
           resave: false,
           saveUninitializeed: true
           
    }));

    app.use(passport.initialize()); // start passport
    app.use(passport.session()); // use session via express-session

    var path = require("path");
    app.set('views', path.join(__dirname + '/../app/views/home.html'));
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'ejs');

    require('../app/routes/index.route')(app);
    require('../app/routes/user.route')(app);

    return app;

}