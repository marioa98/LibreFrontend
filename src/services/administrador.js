import libreBackendService from './libre-backend'

const requestMapping = '/administradores'
const administradorService = {}

administradorService.agregar = function (body) {
  return libreBackendService.post(requestMapping, body).then((res) => res.data)
}

administradorService.obtenerTodos = function () {
  return libreBackendService.get(requestMapping).then((res) => res.data)
}

administradorService.obtenerPorId = function (id) {
  return libreBackendService.get(`${requestMapping}/${id}`).then((res) => res.data)
}

administradorService.modificar = function (id, body) {
  return libreBackendService.put(`${requestMapping}/${id}`, body).then((res) => res.data)
}

administradorService.eliminar = function (id) {
  return libreBackendService.delete(`${requestMapping}/${id}`).then((res) => res.data)
}

administradorService.login = function (body) {
  return libreBackendService.post(`${requestMapping}/login`, body).then((res) => res.data)
}

export default administradorService