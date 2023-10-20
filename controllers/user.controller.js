const User = require("../models/user.models").User;

async function registrarUsuario(req, res){
	const nombreUsuario = req.body.usrn;
	const pass = req.body.password;

	try {
		const newUser = await new User({
			username:nombreUsuario,
			password: pass
		}).save();

		res.json({
			obj: newUser
		})
	} catch (err) {
		console.log(err);
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
		res.json({
			obj : newSesion
		})
	}catch(err){
		console.log(err)
		res.status(500).json({mensaje : "Hubo un error al iniciar sesion"})
	}
}
module.exports = {
	registrarUsuario,iniciarSesion
};

