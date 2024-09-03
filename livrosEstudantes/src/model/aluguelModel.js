const estudante_controller = require("../controllers/estudanteController.js")
const livro_controller = require("../controllers/livroController.js")

let nextId = 1;

const model = (body, id = nextId++) => {

    if (
        livro_controller.show(body.livro_id) &&
        estudante_controller.show(body.estudante_id && body.data_aluguel != "" && body.data_aluguel != undefined
        && data_devolucao != "" && data_devolucao != undefined)
    ){
        return {
            id,
            livro_id: body.livro_id,
            estudante_id: body.estudante_id,
            data_aluguel: body.data_aluguel,
            data_devolucao: body.data_devolucao
        }
    }
}

module.exports = model