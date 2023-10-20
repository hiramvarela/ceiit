const Object = require("../models/ceiit.models").Object;

async function addObject(req, res){
	const object = req.body.ob;
	const numberS = req.body.num;
    const ubica = req.body.ubi;
    const descrip = req.body.des;
    const canti = req.body.cant;

	try {
		const newObject = await new Object({
			nombre:object,
			numeroSerial: numberS,
            ubicacio : ubica,
            descripcio : descrip,
            cantida : canti
		}).save();

		res.json({
			obj: newObject
		})
	} catch (err) {
		console.log(err);
	}
}

module.exports = {
	addObject
};
