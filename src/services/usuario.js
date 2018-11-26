import libreBackendService from './libre-backend'

const requestMapping = '/usuarios'
const usuarioService = {}

usuarioService.agregar = function (body) {
  return libreBackendService.post(requestMapping, body).then((res) => res.data)
}

usuarioService.obtenerTodos = function () {
  return libreBackendService.get(requestMapping).then((res) => res.data)
}

usuarioService.obtenerPorId = function (id) {
  return libreBackendService.get(`${requestMapping}/${id}`).then((res) => res.data)
}

usuarioService.modificar = function (id, body) {
  return libreBackendService.put(`${requestMapping}/${id}`, body).then((res) => res.data)
}

usuarioService.eliminar = function (id) {
  return libreBackendService.delete(`${requestMapping}/${id}`).then((res) => res.data)
}

usuarioService.agregarFacultad = function (id, body) {
    return libreBackendService.put(`${requestMapping}/${id}`, body).then((res) => res.data)
}

usuarioService.login = function (body) {
  return libreBackendService.post(`${requestMapping}/login`, body).then((res) => res.data)
}

export default usuarioService