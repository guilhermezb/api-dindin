const express = require("express");
const cursoController = require ("../controllers/cursos.controller");
const routes = express.Router();

routes.post('/cursos', cursoController.cadastrarCurso);

module.exports = routes;