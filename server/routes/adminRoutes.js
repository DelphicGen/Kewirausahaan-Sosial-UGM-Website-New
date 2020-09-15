const express = require('express');
const async = require("async");
const router = express.Router();
const [checkAuthenticated, checkNotAuthenticated, add, edit] = require('../functions/functions');
const baseUrl = require('../variables/variables');
const connection = require('../connection/connection');

router.get(`${baseUrl}adminDashboard`, checkAuthenticated, async function(req, res){
    
    req.user.then (data => {
        let username = data.username;
        let role = data.role;
        async.parallel([
            function(callback) { connection.query('SELECT * FROM mentor', callback); },
            function(callback) { connection.query('SELECT * FROM team_member', callback); },
            function(callback) { connection.query('SELECT * FROM latest_event', callback); },
            function(callback) { connection.query('SELECT * FROM upcoming_event', callback); },
            function(callback) { connection.query('SELECT * FROM article', callback); },
            function(callback) { connection.query('SELECT * FROM testimonial', callback); },
            function(callback) { connection.query('SELECT * FROM leader_review', callback); },
            function(callback) { connection.query('SELECT * FROM collaboration', callback); },
            function(callback) { connection.query('SELECT * FROM users', callback); }
        ], function(error, results) {
            if(error) throw error;
            else res.send({ username: username, role: role, data: {mentor: results[0][0], team_member: results[1][0], latest_event: results[2][0], upcoming_event: results[3][0], article: results[4][0], testimonial: results[5][0], leader_review: results[6][0], collaboration: results[7][0], users: results[8][0]} });
        });
    })

    
});

router.get(`${baseUrl}edit`, function(req, res) {
    connection.query(
        "SHOW COLUMNS FROM ??",
        [req.query.table],
        (error, results) => {
            if (error) throw error;
            else {
                let columns = results;
                connection.query(
                    "SELECT * FROM (??) WHERE id = (?)",
                    [req.query.table, req.query.id],
                    (error, results) => {
                        if('date' in results[0]){
                            let mm = results[0].date.getMonth() < 9 ? `0${results[0].date.getMonth() + 1}` : results[0].date.getMonth() + 1;
                            let dd = results[0].date.getDate() < 9 ? `0${results[0].date.getDate()}` : results[0].date.getDate();
                            let yyyy = results[0].date.getFullYear();
                            let hh = results[0].date.getHours() < 9 ? `0${results[0].date.getHours()}` : results[0].date.getHours();
                            let m = results[0].date.getMinutes() < 9 ? `0${results[0].date.getMinutes()}` : results[0].date.getMinutes();
                            results[0].date = `${yyyy}-${mm}-${dd}T${hh}:${m}`;
                        }
                        if (error) throw error;
                        else res.send({ data: results[0], table: req.query.table, id: req.query.id, columns: columns });
                    }
                );
            };
        }
    );
    
});

router.post(`${baseUrl}edit`, async function(req, res) {

    let date, image;
    if(req.body.date) {
        date = req.body.date.replace('T', ' ');
    }

    if (req.body.cropped_image) {
        image = req.body.cropped_image
        edit(req, res, date, image)
    } else if(req.body.image) {
        image = req.body.image;
        edit(req, res, date, image)
    } else if(!req.body.image) {
        connection.query(
            'SELECT * FROM (??) WHERE id = ?',
            [req.query.table, req.query.id],
            (error, results) => {
                if(error) throw error;
                else {
                    if(results[0].image) image = results[0].image
                    edit(req, res, date, image)
                }
            }
        );
    }
});

router.post(`${baseUrl}delete`, function(req, res) {
    connection.query(
        'DELETE FROM ?? WHERE id = (?)',
        [req.query.table, req.query.id],
        (error, results) => {
            if(error) throw error;
            else res.send('Ok');
        }
    );    
});

router.get(`${baseUrl}new`, function(req, res) {
    connection.query(
        "SHOW COLUMNS FROM ??",
        [req.query.table],
        (error, results) => {
            if (error) throw error;
            else res.send({ table: req.query.table, columns: results });
        }
    );
});

router.post(`${baseUrl}new`, function(req, res) {
    // console.log(req.query);
    let date, image, table = req.query.table;
    if(req.body.date) {
        date = req.body.date.replace('T', ' ');
    }

    if (req.body.cropped_image) {
        image = req.body.cropped_image
    } else if(req.body.image) {
        image = req.body.image;
    } else {
        if(req.query.table !== 'article') image = 'avatar.svg';
        else image = 'test2.jpg';
    }
    add(req, res, date, image, table)
});

module.exports = router;