const Pao = require('../models/Pao')
const Proteina = require('../models/Proteina')
const Queijo = require('../models/Queijo')
const Adicional = require('../models/Adicional')

module.exports = class IngredienteController{
    // Método registrarPao
    static async registrarPao(req, res){
        const sku = req.body.sku
        const descricao = req.body.descricao
        if(!sku){
            res.status(422).json({mensagem: "O código sku é obrigatório"})
            return
        }
        if(!descricao){
            res.status(422).json({mensagem: "A descrição é obrigatória"})
            return
        }
        const paoCadastrado = await Pao.findOne({sku: sku})

        if (paoCadastrado){
            res.status(422).json({mensagem: "Pão já cadastrado!"})
            return
        }
        /* Adicionando o pão ao bd */
        const pao = new Pao({sku,descricao})

        try{
            const novoPao = await pao.save()
        } catch(erro){
            res.status(500).json({mensagem: erro})
        }
    } /* Fim do método registrarPao */
    
    // Método registrarProteina
    static async registrarProteina(req, res){
        const sku = req.body.sku
        const descricao = req.body.descricao
        if(!sku){
            res.status(422).json({mensagem: "O código sku é obrigatório"})
            return
        }
        if(!descricao){
            res.status(422).json({mensagem: "A descrição é obrigatória"})
            return
        }
        const proteinaCadastrada = await Proteina.findOne({sku: sku})

        if (proteinaCadastrada){
            res.status(422).json({mensagem: "Proteína já cadastrada!"})
            return
        }
        /* Adicionando a proteína ao bd */
        const proteina = new Proteina({sku,descricao})

        try{
            const novaProteina = await proteina.save()
        } catch(erro){
            res.status(500).json({mensagem: erro})
        }
    } 
    // Fim do método registrarProteina

    // Início do método registrarQueijo
    static async registrarQueijo(req, res){
        const sku = req.body.sku
        const descricao = req.body.descricao
        if(!sku){
            res.status(422).json({mensagem: "O código sku é obrigatório"})
            return
        }
        if(!descricao){
            res.status(422).json({mensagem: "A descrição é obrigatória"})
            return
        }
        const queijoCadastrado = await Queijo.findOne({sku: sku})

        if (paoCadastrado){
            res.status(422).json({mensagem: "Pão já cadastrado!"})
            return
        }
        /* Adicionando o pão ao bd */
        const pao = new Pao({sku,descricao})

        try{
            const novoPao = await pao.save()
        } catch(erro){
            res.status(500).json({mensagem: erro})
        }
    }
}