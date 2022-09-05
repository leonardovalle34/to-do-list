const express = require("express")
const port = process.env.PORT || 3000;
const check = require("./src/routes/checklist")
const taskRouter = require("./src/routes/task")

const root = require("./src/routes/index")
const app = express()

const path = require("path")
const methodOverride = require("method-override")
require("./src/config/database")

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method", {methods: ["POST","GET"]}))

app.use(express.static(path.join(__dirname,"public")))

app.set("views", path.join(__dirname,"src/views"));
app.set("view engine","ejs")

app.use("/", root)
app.use("/check",check)
app.use("/check", taskRouter.checkListDependendt);
app.use("/tasks", taskRouter.simple)

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
    console.log("servidor rodando")
})
