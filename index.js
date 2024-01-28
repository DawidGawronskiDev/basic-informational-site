const express = require("express")

const app = express()

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { title: "Home" })
})

app.get("/about", (req, res) => {
    res.render("about", { title: "About" })
})

app.get("/contact-me", (req, res) => {
    res.render("contact-me", { title: "Contact Me" })
})

app.get("/contact", (req, res) => {
    res.redirect("/contact-me")
})

app.use((req, res) => {
    res.render("404", { title: "404" })
})

app.listen(8080)