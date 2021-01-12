const mongoose = require('mongoose') //ODM = biblioteca Objeto Documento 
const path = 'mongodb://localhost/knowledge_stats'
mongoose.set('useUnifiedTopology', true)
mongoose.connect(path, { useNewUrlParser: true })
    .catch(e => {
        const msg = 'Erro! Não foi possível conectar com o MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })