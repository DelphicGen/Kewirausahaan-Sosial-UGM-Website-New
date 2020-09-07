require('dotenv').config();
const express = require('express');
const app = express();
const passport = require('passport');
const cors = require("cors");
const flash = require('express-flash');
const session = require('cookie-session');
const initializePassport = require('./passport-config.js');
const util = require('util');
const baseUrl = require('./variables/variables');

const clientRoutes = require("./routes/clientRoutes");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const connection = require('./connection/connection');

const query = util.promisify(connection.query).bind(connection);

initializePassport(passport, async (email) => {
    let selectedUser = await query("SELECT * FROM users WHERE email = '" + email + "'");
    return selectedUser[0];
}, async(id) => {
    let selectedUser = await query("SELECT * FROM users WHERE id = '" + id + "'");
    return selectedUser[0];
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
      })
);
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 3600000 },
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(baseUrl, [clientRoutes, authRoutes, adminRoutes]);

app.listen(process.env.PORT || 9000);