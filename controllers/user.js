const { request, response } = require ('express');

const userGet = (req = request, res = response) => {
    const query = req.query;
    res.json({
        msg: 'get API - controlador'
    });
}

const userPut = (req, res) => {
    const id = req.params.id;
    

    res.json({
        msg: `put API - controlador el id es: ${id}`
    });
}

const userPost = (req, res) => {
    const body = req.body;
    res.json({
        msg: 'post API - controlador'
    });
}

const userDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete
}