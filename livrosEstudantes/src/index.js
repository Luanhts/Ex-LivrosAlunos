const express = require("express")
const livro_router = require("./routes/livroRoute.js")
const estudante_router = require("./routes/estudanteRoute.js")
const aluguel_router = require("./routes/aluguelRoute.js")
const app = express();
const port = 3000

app.use(express.json())

app.use("/livro", livro_router)

app.use("/estudante", estudante_router)

app.use("/aluguel", aluguel_router)


app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})