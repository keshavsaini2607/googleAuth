const express = require('express');
const mongoose = require('mongoose');
const app = express();
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

const port = process.env.PORT || 8000;

require('./model/user')

require('./services/passport')



mongoose.connect(keys.mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true    
}).then(() => {
    console.log("DB Connected");
})

//Middlewares
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoute')(app);

app.listen(port, () => {
    console.log(`Server running on localhost: ${port}`);
})