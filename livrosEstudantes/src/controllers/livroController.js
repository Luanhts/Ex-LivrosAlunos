const model = require("../model/livroModel.js")

const db = []

const index = () => db

const showControler = id => db.find(el => el.id == id)

const storeController = (body) => {
    const novo = model(body);

    if(novo) {
        db.push(novo);
        return 200;
    }
    return 404;
}

const updateController = (body, id) => {
    const novo = model(body, parseInt(id))
    const indice = db.findIndex(el => el.id == id)

    if (novo && indice != -1) {
        db[indice] = novo
        return 200;
    }
    return 404;
}

const destroyController = id => {
    const indice = db.findIndex(el => el.id == id)
    if(indice != -1) {
        db.splice(indice, 1)
    }
}

module.exports = {
    index,
    showControler,
    storeController,
    updateController,
    destroyController,
}
