const express = require("express");
const router = express.Router()
const estudante_controller = require("../controllers/estudanteController.js")

router.get("/", (req, res) => {
    res.json(estudante_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(estudante_controller.showEscontroler(req.params.id))
})

router.post("/", (req, res) => {
    const code = estudante_controller.storeEscontroller(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = estudante_controller.updateEscontroller(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    estudante_controller.destroyEscontroller(req.params.id)
    res.json()
})

module.exports = router