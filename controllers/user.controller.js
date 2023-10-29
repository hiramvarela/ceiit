const User = require("../models/user.models").User;
const jwt = require('jsonwebtoken');
const { config } = require('../config/config');


async function registrarUsuario(req, res){
    const { name, surname, tuition, usrn, password } = req.body;

    try {
        const newUser = await new User({
            name,
            surname,
            tuition,
            username: usrn,
            password
        }).save();

        res.json({ obj: newUser });
    } catch (err) {
        console.log(err);
        res.status(500).json({ mensaje: "Hubo un error al registrar el usuario" });
    }
}


async function iniciarSesion(req,res){
	const nombreUsuario = req.body.usrn;
	const pass = req.body.password;

	console.log(nombreUsuario)
	console.log(pass)
	try{
		const newSesion = await User.findOne({
			username : nombreUsuario, password : pass 
		});
        if(!newSesion){
			res.status(401).json({mensaje: "No se encontro el usuario"})
		}

		const token = jwt.sign({ id: newSesion._id }, config.auth.secretKey, { expiresIn: '1h' });	
		res.json({
			obj : newSesion,
			token: token
		})
	}catch(err){
		console.log(err)
		res.status(500).json({mensaje : "Hubo un error al iniciar sesion"})
	}
}
module.exports = {
	registrarUsuario,iniciarSesion
};

