import trae from 'trae'
import config from './config'

const libreBackendService = trae.create({
  baseUrl: config.apiUrl
})

export default libreBackendService
