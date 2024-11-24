//import
const db = require('../config/db');
const bcrypt= require('bcryptjs');

//patient registration function
exports.insertpatient = async (request, response) => {
    //fetch data
    const { id,facility,patient,diagnosis,admission,discharge } = request.body;
    try{
        //check if user exists
        const [rows] = await db.execute('SELECT * FROM patients WHERE id = ?', [id]);
        if(rows.length > 0){
            return response.status(400).json({ message: 'patient already exists!'});
        }

        await db.execute('INSERT INTO patients (id, facility, patient,diagnosis,admission,discharge) VALUES (?,?,?,?,?,?)', [
           id,
           facility,
           patient,
           diagnosis,
           admission,
           discharge
        ]);
        response.status(201).json({ message: 'patient registered successfully!'});
    } catch(error) {
        response.status(500).json({ message: 'An error occured!', error });
    }
}

exports.searchpatient = async (request, response) => {
    const { id } = request.body;
    try{
        //check if user exists
        const [rows] = await db.execute('SELECT * FROM patients WHERE id = ?', [id]);
        if(rows.length === 0){
            return response.status(400).json({ message: 'patient not found! Please register the patient.'});
        }
        const patient = rows[0];

        //compare the password
        const isMatch = await bcrypt.compare(id, patient.id);
        if(!isMatch){
            return response.status(400).json({ message: 'Invalid patient ID!' });
        }
        response.status(200).json({ message: 'patient found successful!', id: patient.id, facility : patient.facility });
    } catch(error) {
        response.status(500).json({ message: 'An error occured!', error });
    }
}

