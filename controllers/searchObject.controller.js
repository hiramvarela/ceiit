
const Object = require("../models/ceiit.models").Object;
const Loan = require("../models/loan.models.js").Loan;

async function searchObj(req, res) {
    const objecto = req.body.ob;
    const nums = req.body.num;
    const ubica = req.body.ubi;

    // Construir el objeto de consulta con los valores proporcionados
    const query = {};

    if (objecto) {
        query.name = objecto;
    }

    if (nums) {
        query.numserial = nums;
    }

    if (ubica) {
        query.ubicacion = ubica;
    }

    try {
        
        const search = await Object.find(query);
        res.status(200).send(search);
    } catch (error) {
        res.status(500).send(error);
    }
};
async function searchLoan(req,res){
    const matricula = req.body.tuiti;
    const queryLoan = {};

    if(matricula){
        queryLoan.tuition = matricula;
    }
    try {
        const searchLoan = await Loan.find(queryLoan);
        res.status(200).send(searchLoan);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    searchObj, searchLoan
};

