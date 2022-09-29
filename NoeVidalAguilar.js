const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 8080
const pathRoute = './Archivo uno.txt'
const readFile = fs.promises.readFile(pathRoute, "utf-8")


class contenedor {
    name = ''

    async getAll() {
        try {
            let data = await readFile
            let array = JSON.parse(data)
            return array

        }
        catch (error) {
            console.log(`Error: `, error);
        }
    }
    async getRandom() {
        try {
            const array = await this.getAll()       
            return array[Math.floor(Math.random() * array.length)]

        }
        catch (error) {
            console.log(`Error: `, error);
        }
    }

}
const product = new contenedor()



const server = app.listen(PORT, () => {
    console.log(`Funcionando en el puerto ${server.address().port}`);
})
server.on("Error", error => console.log(`Tenemos un error: ${error}`))


app.get("/productos", (req, res) => {

    product.getAll().then(productos => {
        res.send(productos)
    })

})

app.get("/productoRandom", (req, res) => {

    product.getRandom().then(productos => {
        res.send(productos)
    })

})