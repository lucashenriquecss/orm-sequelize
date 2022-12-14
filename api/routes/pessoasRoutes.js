const { Router } = require('express')
const PessoaControllers = require('../controllers/pessoasControllers')

const router = Router();

router
    .get("/pessoas", PessoaControllers.listarPessoasAtivas)
    .get("/pessoas/todas", PessoaControllers.listarPessoas)
    .get("/pessoas/:id", PessoaControllers.listarPessoaId)
    .get('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaControllers.pegaUmaMatricula)
    .get('/pessoas/:estudanteId/matricula',PessoaControllers.pegaMatriculas)
    .post("/pessoas", PessoaControllers.cadastrarPessoa)
    .put("/pessoas/:id", PessoaControllers.atualizarPessoa)
    .delete("/pessoas/:id", PessoaControllers.deletePessoa)
    .post('/pessoas/:estudanteId/matricula', PessoaControllers.criaMatricula)
    .post('/pessoas/:id/restaura', PessoaControllers.restauraPessoa)
    .put('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaControllers.atualizaMatricula)
    .delete('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaControllers.apagaMatricula)
    
module.exports = router;