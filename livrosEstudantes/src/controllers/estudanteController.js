const model = require("../model/EstudanteModel.js")

const db = []

const index = () => db

const showEscontroler = id => db.find(el => el.id == id)

const storeEscontroller = (body) => {
    const novo = model(body);

    if(novo) {
        db.push(novo);
        return 200;
    }
    return 404;
}

const updateEscontroller = (body, id) => {
    const novo = model(body, parseInt(id))
    const indice = db.findIndex(el => el.id == id)

    if (novo && indice != -1) {
        db[indice] = novo
        return 200;
    }
    return 404;
}

const destroyEscontroller = id => {
    const indice = db.findIndex(el => el.id == id)
    if(indice != -1) {
        db.splice(indice, 1)
    }
}

module.exports = {
    index,
    showEscontroler,
    storeEscontroller,
    updateEscontroller,
    destroyEscontroller,
}
