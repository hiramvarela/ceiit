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
async function updateObject(req,res){
	const objectName = req.body.ob;
	const numberS = req.body.num;
    const ubica = req.body.ubi;
    const descrip = req.body.des;
    const canti = req.body.cant;
    
	try{
		const updateOb = await Object.updateOne(
            { name: objectName }, // filtro o condición
            {
                // campos a actualizar
                numserial: numberS,
                ubicacion: ubica,
                descripcion: descrip,
                cantidad: canti
            }
        );

        if(updateOb.nModified === 0){ // si no se modificó ningún documento
            return res.status(404).json({ mensaje: "No se encontró el objeto" });
        }

		res.json({
			obj: updateOb
		});
	}catch(err){
		console.log(err)
		res.status(500).json({mensaje : "Hubo un error al actualizar el objeto"})
	}
}

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
	addObject,readObject,deleteObject,updateObject
};
