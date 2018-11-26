import libreBackendService from './libre-backend'

const requestMapping = '/etiquetas'
const etiquetaService = {}

etiquetaService.agregar = function (body) {
    return libreBackendService.post(requestMapping, body).then((res) => res.data)
  }
  
  etiquetaService.obtenerTodos = function () {
    return libreBackendService.get(requestMapping).then((res) => res.data)
  }
  
  etiquetaService.obtenerPorId = function (id) {
    return libreBackendService.get(`${requestMapping}/${id}`).then((res) => res.data)
  }
  
  etiquetaService.modificar = function (id, body) {
    return libreBackendService.put(`${requestMapping}/${id}`, body).then((res) => res.data)
  }
  
  etiquetaService.eliminar = function (id) {
    return libreBackendService.delete(`${requestMapping}/${id}`).then((res) => res.data)
  }

  export default etiquetaService