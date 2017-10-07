module.exports = {

    //mongoUri: 'mongodb://localhost/testDB1',
    // or use 
    mongoUri: 'mongodb://admin2:password@localhost:27017/testDB1',
    debug: true,
    sessionSecret: 'dev_secret_key',

    google: {
        clientID: '362196416663-5v5kgp6vhje1pm0cn3c120rmsg7ik9k1.apps.googleusercontent.com',
        clientSecret: 'F2AHBDvIipPTzBnEyX1JS1RF',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }


}