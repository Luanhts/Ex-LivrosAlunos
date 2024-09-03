let nextId = 1;

const model = (body, id = nextId++) => {
    if(body.nome != undefined && body.nome != "" && body.matricula != undefined && body.matricula != "" && body.curso != undefined && body.curso != "" && body.ano != undefined && body.ano != "" && !isNaN(body.ano)){
        
        return {
            id, 
            nome: body.nome,
            matricula: body.matricula,
            curso: body.curso,
            ano: body.ano,
        }
    }
}

module.exports = model