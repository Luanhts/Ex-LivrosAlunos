const express = require("express");
const router = express.Router()
const aluguel_controller = require("../controllers/aluguelController")

router.get("/", (req, res) => {
    res.json(aluguel_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(aluguel_controller.showAcontroller(req.params.id))
})

router.post("/", (req, res) => {
    const code = aluguel_controller.storeAcontroller(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = aluguel_controller.updateAcontroller(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    aluguel_controller.destroyAcontroller(req.params.id)
    res.json()
})

module.exports = router