const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("requêtes reçu !");
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.json({message: 'Votre requêtes a bien était reçu !'});
    next();
});

app.use((req, res) => {
    console.log('Réponse envoyé avec succés !');
});

module.exports = app;