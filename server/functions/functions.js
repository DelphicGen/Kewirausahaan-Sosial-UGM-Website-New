const baseUrl = require('../variables/variables');
const mysql = require('mysql');
const connection = require('../connection/connection');

function checkAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    } else res.send("Not authenticated")
}

function checkNotAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        res.send("Is authenticated")
    } else return next();
}

function add(req, res, date, image, table) {
    console.log(table)
    switch(table) {
        case 'mentor':
            connection.query(
                'INSERT INTO ?? (name, title, facebook, twitter, instagram, linkedin, image) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [table, req.body.name, req.body.title, req.body.facebook, req.body.twitter, req.body.instagram, req.body.linkedin, image],
                (error, results) => {
                    if(error) throw error;
                    else res.send('Ok')
                }
            );
            break;

        case 'latest_event':
            connection.query(
                'INSERT INTO ?? (date, link) VALUES (?, ?)',
                [table, date, req.body.link],
                (error, results) => {
                    if(error) throw error;
                    else res.send('Ok')
                }
            );
            break;

        case 'upcoming_event':
            connection.query(
                'INSERT INTO ?? (title, details, full_details, date, image, link) VALUES (?, ?, ?, ?, ?, ?)',
                [table, req.body.title, req.body.details, req.body.full_details, date, image, req.body.link],
                (error, results) => {
                    if(error) throw error;
                    else res.send('Ok')
                }
            );
            break;

        case 'team_member':
            connection.query(
                'INSERT INTO ?? (name, title, facebook, twitter, instagram, linkedin, image) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [table, req.body.name, req.body.title, req.body.facebook, req.body.twitter, req.body.instagram, req.body.linkedin, image],
                (error, results) => {
                    if(error) throw error;
                    else res.send('Ok')
                }
            );
            break;
        
        case 'article':
            connection.query(
                'INSERT INTO ?? (title, author, details, full_details, image, link) VALUES (?, ?, ?, ?, ?, ?)',
                [table, req.body.title, req.body.author, req.body.details, req.body.full_details, image, req.body.link],
                (error, results) => {
                    if(error) throw error;
                    else res.send('Ok')
                }
            );
            break;

        case 'testimonial':
            connection.query(
                'INSERT INTO ?? (name, details, image) VALUES (?, ?, ?)',
                [table, req.body.name, req.body.details, image],
                (error, results) => {
                    if(error) throw error;
                    else res.send('Ok')
                }
            );
            break;

        case 'leader_review':
            connection.query(
                'INSERT INTO ?? (name, title, details, image) VALUES (?, ?, ?, ?)',
                [table, req.body.name, req.body.title, req.body.details, image],
                (error, results) => {
                    if(error) throw error;
                    else res.send('Ok')
                }
            );
            break;
        case 'collaboration':
            connection.query(
                'INSERT INTO ?? (name, email, message) VALUES (?, ?, ?)',
                [table, req.body.email, req.body.email, req.body.message],
                (error, results) => {
                    if(error) throw error;
                    else res.send('Ok')
                }
            );
            break;
        default:
            res.send('Ok')
    }
}

function edit(req, res, date, image) {
    switch(table) {
        case 'mentor':
            connection.query(
                'UPDATE (??) SET name = ?, title = ?, facebook = ?, twitter = ?, instagram = ?, linkedin = ?, image = ? WHERE id = ?',
                [table, req.body.name, req.body.title, req.body.facebook, req.body.twitter, req.body.instagram, req.body.linkedin, image, req.query.id],
                (error, results) => {
                    if(error) throw error;
                    else res.send('Ok')
                }
            );
            break;

        case 'latest_event':
            connection.query(
                'UPDATE (??) SET date = ?, link = ? WHERE id = ?',
                [table, date, req.body.link, req.query.id],
                (error, results) => {
                    if(error) throw error;
                    else res.send('Ok')
                }
            );
            break;

        case 'upcoming_event':
            connection.query(
                'UPDATE (??) SET title = ?, details = ?, full_details = ?, date = ?, image = ?, link = ? WHERE id = ?',
                [table, req.body.title, req.body.details, req.body.full_details, date, image, req.body.link, req.query.id],
                (error, results) => {
                    if(error) throw error;
                    else res.send('Ok')
                }
            );
            break;

        case 'team_member':
            connection.query(
                'UPDATE (??) SET name = ?, title = ?, facebook = ?, twitter = ?, instagram = ?, linkedin = ?, image = ? WHERE id = ?',
                [table, req.body.name, req.body.title, req.body.facebook, req.body.twitter, req.body.instagram, req.body.linkedin, image, req.query.id],
                (error, results) => {
                    if(error) throw error;
                    else res.send('Ok')
                }
            );
            break;
        
        case 'article':
            connection.query(
                'UPDATE (??) SET title = ?, author = ?, details = ?, full_details = ?, image = ?, link = ? WHERE id = ?',
                [table, req.body.title, req.body.author, req.body.details, req.body.full_details, image, req.body.link, req.query.id],
                (error, results) => {
                    if(error) throw error;
                    else res.send('Ok')
                }
            );
            break;

        case 'testimonial':
            connection.query(
                'UPDATE (??) SET name = ?, details = ?, image = ? WHERE id = ?',
                [table, req.body.name, req.body.details, image, req.query.id],
                (error, results) => {
                    if(error) throw error;
                    else res.send('Ok')
                }
            );
            break;

        case 'leader_review':
            connection.query(
                'UPDATE (??) SET name = ?, title = ?, details = ?, image = ? WHERE id = ?',
                [table, req.body.name, req.body.title, req.body.details, image, req.query.id],
                (error, results) => {
                    if(error) throw error;
                    else res.send('Ok')
                }
            );
            break;
        case 'collaboration':
            connection.query(
                'UPDATE ?? SET name = ?, email = ?, message = ? WHERE id = ?',
                [table, req.body.name, req.body.email, req.body.message, req.query.id],
                (error, results) => {
                    if(error) throw error;
                    else res.send('Ok');
                }
            );
            break;
        default:
            res.send('Ok');
    }
}

module.exports = [checkAuthenticated, checkNotAuthenticated, add, edit]