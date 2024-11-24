const db = require('/config/db');
const {facility,patient,admission,discharge,diagnosis}=require("senddata/data")
exports.insertpatient = async (req,res) =>{
    const {id,facility,patient,admission,discharge,diagnosis}=request.body;
    try{
        const [rows]=await db.excute('SELECT * FROM patients WHERE id=?',[id]);
        if(rows.lenght>0){
            return Response.status(400).json({message:'patient already exist'})
        }
        await db.excute('INSERT INTO patients(id,facility,Name,diagnosis,admission,discharge)VALUES(?,?,?,?,?,?)',[
            id,
            facility,
            patient,
            diagnosis,
            admission,
            discharge
        ]);
        Response.status(201).json({message:'patient registered successfully'});
    }
    catch(error){
        return Response.status(401).json({message:'an error occured'});
    }
}