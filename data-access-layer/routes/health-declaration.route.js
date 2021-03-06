const router = require('express').Router();
let healthDeclarationModel = require('../models/health-declaration.model');

router.route('/').get((request, response) => {
    healthDeclarationModel.find()
        .then(healthRs => response.json(healthDeclaration))
        .catch(error => response.status(400).json('An exception has been encountered: ' +error))
});

router.route('/add').post((request, response)=>{
    const name = request.body.name;
    const surname = request.body.surname;
    const birthday = request.body.birthday;
    const city = request.body.city;
    const phone = request.body.phone;
    const email = request.body.email;
    const temperature = request.body.temperature;
    const attestation = request.body.attestation;

    const newHealthDeclaration = new healthDeclarationModel({name, surname, birthday, city, phone, email, temperature, attestation});

    newHealthDeclaration.save()
        .then(healthDeclaration => response.json("A record has been added."))
        .catch(error => response.status(400).json('An exception has been encountered: ' +error));
});

module.exports = router;