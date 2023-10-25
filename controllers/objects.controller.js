const Object = require("../models/ceiit.models").Object;

async function addObject(req, res){
	const object = req.body.ob;
	const numberS = req.body.num;
    const ubica = req.body.ubi;
    const descrip = req.body.des;
    const canti = req.body.cant;
	const estado = req.body.esta;
	const qr = req.body.qr;

	try {
		const newObject = await new Object({
			name:object,
			numserial: numberS,
            ubicacion : ubica,
            descripcion: descrip,
            cantidad : canti,
			status : estado,
			qr : qr
		}).save();

		res.json({
			obj: newObject


		})
	} catch (err) {
		console.log(err);
	}
}
//PENDIENTE
// async function updateObject(req,res){
// 	const object = req.body.ob;
// 	const numberS = req.body.num;
//     const ubica = req.body.ubi;
//     const descrip = req.body.des;
//     const canti = req.body.cant;
    
// 	try{
// 		const updateOb = await Object.updateOne({
// 			name:object
		
// 		},{
// 			$set : {
				
// 			}
// 		});
//         if(!updateOb){
// 			res.status(401).json({mensaje: "No se encontro el objecto"})
// 		}
// 		res.json({
// 			obj : updateOb
// 		})
// 	}catch(err){
// 		console.log(err)
// 		res.status(500).json({mensaje : "Hubo un error al buscar el objecto"})
// 	}
// }
async function deleteObject(req,res){
	const object = req.body.ob;
	try{
		const deleteO = await Object.deleteOne({
			name:object
		});
        if(!deleteO){
			res.status(401).json({mensaje: "No se encontro el objecto"})
		}
		res.json({
			obj : deleteO
		})
	}catch(err){
		console.log(err)
		res.status(500).json({mensaje : "Hubo un error al borrar el objecto"})
	}
}
async function readObject(req,res){
	const object = req.body.ob;

    
	try{
		const updateOb = await Object.findOne({
			name:object
		
		});
        if(!updateOb){
			res.status(401).json({mensaje: "No se encontro el objecto"})
		}
		res.json({
			obj : updateOb
		})
	}catch(err){
		console.log(err)
		res.status(500).json({mensaje : "Hubo un error al buscar el objecto"})
	}
}

module.exports = {
	addObject,readObject,deleteObject
};
