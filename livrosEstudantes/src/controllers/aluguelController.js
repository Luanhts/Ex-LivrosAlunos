const model = require("../model/aluguelModel.js")

const db = []

const index = () => db

const showAcontroller = id => db.find(el => el.id == id)

const storeAcontroller = (body) => {
    const novo = model(body)

    if (novo) {
        db.push(novo)
        return 201
    }

    return 400
}

const updateAcontroller = (body, id) => {
    const novo = model(body, parseInt(id))
    const indice = db.findIndex(el => el.id == id)

    if (novo && indice != -1) {
        db[indice] = novo
        return 200
    }

    return 400
}

const destroyAcontroller = id => {
    const indice = db.findIndex(el => el.id == id)
    if (indice != -1) {
        db.splice(indice, 1)
    }
}

module.exports = {
    index,
    showAcontroller,
    storeAcontroller,
    updateAcontroller,
    destroyAcontroller
}