import libreBackendService from './libre-backend'

const requestMapping = '/archivos'
const archivoService = {}

archivoService.agregar = function (body) {
  return libreBackendService.post(requestMapping, body).then((res) => res.data)
}

archivoService.obtenerTodos = function () {
  return libreBackendService.get(requestMapping).then((res) => res.data)
}

archivoService.obtenerPorId = function (id) {
  return libreBackendService.get(`${requestMapping}/${id}`).then((res) => res.data)
}

archivoService.modificar = function (id, body) {
  return libreBackendService.put(`${requestMapping}/${id}`, body).then((res) => res.data)
}

archivoService.agregarAutores = function (id, body) {
  return libreBackendService.put(`${requestMapping}/${id}/autores`, body).then((res) => res.data)
}

archivoService.agregarEtiquetas = function (id, body) {
  return libreBackendService.put(`${requestMapping}/${id}/etiquetas`, body).then((res) => res.data)
}

archivoService.agregarTipo = function (id, body) {
  return libreBackendService.put(`${requestMapping}/${id}/tipo`, body).then((res) => res.data)
}

archivoService.eliminar = function (id) {
  return libreBackendService.delete(`${requestMapping}/${id}`).then((res) => res.data)
}

export default archivoService
