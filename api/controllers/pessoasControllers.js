const database = require('../models')


class PessoaControllers{
    static  listarPessoas = async (req,res) => {
        try {
            const todasAsPessoas = await database.Pessoas.findAll()  
            return res.status(200).json(todasAsPessoas)
            
        } catch (error) {
            return res.status(500).send({message: `${err.message}  - Falha ao encontrar pessoas`})
        }
    }
    static listarPessoaId = async (req, res) => {
        const id = req.params.id;
        try {
            const umaPessoa = await database.Pessoas.findOne({
                where: {id: Number(id)}
            }) 
            return res.status(200).json(umaPessoa)      
        } catch (error) {
            return res.status(500).send({message: `${err.message}  - Falha ao encontrar Pessoa`})
        }
    }
    static cadastrarPessoa = async (req, res) => {
        const pessoa = req.body
        try {
            const novaPessoa = await database.Pessoas.create(pessoa) //findOne() 
            return res.status(200).json(novaPessoa)      
        } catch (error) {
            return res.status(500).send({message: `${err.message}  - Falha ao criar Pessoa`})
        }
    }
    static atualizarPessoa = async (req, res) => {
        const id = req.params.id
        const novasInfos = req.body
        //localiza pelo id e atualiza
        try {
            await database.Pessoas.update(novasInfos,{where: {id: Number(id)}})
            const pessoaAtualizada = await database.Pessoas.findOne({where: {id: Number(id)}})
            return res.status(200).json(pessoaAtualizada)      
        } catch (error) {
            return res.status(500).send({message: `${err.message}  - Falha ao atualizar Pessoa`})
        }
    }
    static deletePessoa = async (req, res) => {
        const id = req.params.id     
        //localiza pelo id e atualiza
        try {
            await database.Pessoas.destroy({where: {id: Number(id)}})
            return res.status(200).json({messagem:`deletado`})      
        } catch (error) {
            return res.status(500).send({message: `${err.message}  - Falha ao criar Pessoa`})
        }
    }
    static async pegaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
          const umaMatricula = await database.Matriculas.findOne( { 
            where: { 
              id: Number(matriculaId),
              estudante_id: Number(estudanteId)
            }
          })
          return res.status(200).json(umaMatricula)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
    
      static async criaMatricula(req, res) {
        const { estudanteId } = req.params
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
        try {
          const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
          return res.status(200).json(novaMatriculaCriada)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
    
      static async atualizaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        const novasInfos = req.body
        try {
          await database.Matriculas.update(novasInfos, { 
            where: { 
              id: Number(matriculaId),
              estudante_id: Number(estudanteId) 
            }})
          const MatriculaAtualizada = await database.Matriculas.findOne( { where: { id: Number(matriculaId) }})
          return res.status(200).json(MatriculaAtualizada)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
    
      static async apagaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
          await database.Matriculas.destroy({ where: { id: Number(matriculaId) }})
          return res.status(200).json({ mensagem: `id ${matriculaId} deletado` })
    
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
}


module.exports = PessoaControllers;