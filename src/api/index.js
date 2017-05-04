import { version } from '../../package.json'
import { Router } from 'express'

export default ({ config, db }) => {
  let api = Router()

  // Add model routes

  api.get('/', (req, res) => {
    res.json({ version })
  })

  return api
}
