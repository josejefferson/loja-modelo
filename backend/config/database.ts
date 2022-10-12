import mongoose from 'mongoose'
import env from './env'

const mongoDBURL = env.database || 'mongodb://localhost'

mongoose.connection.on('connecting', () => console.log('MongoDB: Conectando...'))
mongoose.connection.on('connected', () => console.log('MongoDB:', 'Conectado'))
mongoose.connection.on('disconnected', () => console.log('MongoDB:', 'Desconectado'))
mongoose.connection.on('error', (err) => {
  console.log('MongoDB:', 'Falha ao conectar', err)
  setTimeout(mongoConnect, 5000)
})

function mongoConnect() {
  mongoose.connect(mongoDBURL).catch(() => {})
}

mongoConnect()
