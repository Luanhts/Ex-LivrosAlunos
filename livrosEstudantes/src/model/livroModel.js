let nextId = 1;

const model = (body, id = nextId++) => {
    if(body.nome != undefined && body.nome != "" && body.titulo != undefined && body.titulo != "" && body.autor != undefined && body.autor != "" && body.ano != undefined && body.ano != "" && !isNaN(body.ano) && body.genero != undefined && body.genero != ""){
        
        return {
            id, 
            nome: body.nome,
            titulo: body.titulo,
            autor: body.autor,
            ano: body.ano,
            genero: body.genero
        }
    }
}

module.exports = model