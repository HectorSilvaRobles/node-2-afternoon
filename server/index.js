const express = require('express')
const messageController = require('./controllers/messages_controller')

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.post('/api/messages', messageController.create)
app.get('/api/messages', messageController.read)
app.put('/api/messages/:id', messageController.update)
app.delete('/api/messages/:id', messageController.delete)

const port = 3001;
app.listen(port, () => console.log(`Listening on port ${port} `));