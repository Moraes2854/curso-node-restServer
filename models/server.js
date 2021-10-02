require('dotenv').config();
const express = require('express');
const cors = require('cors');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath='/api/user';

        this.middlewares();

        this.routes();
    }

    middlewares(){
        //cors
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());

        // directorio
        this.app.use(express.static('public'));
        
    }

    routes(){

       this.app.use(this.usuariosPath, require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

module.exports = Server;
