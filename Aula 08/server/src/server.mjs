import fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const server = fastify()

server.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
  prefix: '/public/',
})

server.get('/', async (request, reply) => {
  return reply.sendFile('index.html')
})

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log(`Server listening at ${address}`)
})
