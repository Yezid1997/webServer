const { response } = require('express');
const { param } = require('../routes/user.routes');

const userGet = (req, res) => {
    const query = req.query;
    res.json({
        query
    });
}

const userPost = (req, res) => {
    const body = req.body;
    res.json({
        key: 'Hellow Wolrd',
        body: body
    });
}

const userPut = (req, res) => {
    
    const id = req.params;
    res.json({
        id
    });
}

const userDelete = (req, res) => {
    res.json({
        'key': 'Hellow Wolrd'
    });
}

module.exports = {
    userGet, userPost, userPut, userDelete
}