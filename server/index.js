require('dotenv').config()
const express = require('express')
const sequelize = require('./db') // Объект который находится в db
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5001

const app = express()
app.use(cors()) // Функция cors 
app.use(express.json()) // Через express парсим Json



app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

// Обработка ошибок, последний Middleware
app.use(errorHandler)

const start = async () => { // все операции с бд асинхронные
    try {
        await sequelize.authenticate() // Аутентификация
        await sequelize.sync() // сверяет базу данных со схемой данных
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
        
    }
}


start()
