const express = require("express");
const router = express.Router()
const livro_controller = require("../controllers/livroController")

router.get("/", (req, res) => {
    res.json(livro_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(livro_controller.showControler(req.params.id))
})

router.post("/", (req, res) => {
    const code = livro_controller.storeController(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = livro_controller.updateController(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    livro_controller.destroyController(req.params.id)
    res.json()
})

module.exports = router