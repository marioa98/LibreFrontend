import libreBackendService from './libre-backend'

const requestMapping = '/autores'
const autorService = {}

autorService.agregar = function (body) {
    return libreBackendService.post(requestMapping, body).then((res) => res.data)
  }
  
  autorService.obtenerTodos = function () {
    return libreBackendService.get(requestMapping).then((res) => res.data)
  }
  
  autorService.obtenerPorId = function (id) {
    return libreBackendService.get(`${requestMapping}/${id}`).then((res) => res.data)
  }
  
  autorService.modificar = function (id, body) {
    return libreBackendService.put(`${requestMapping}/${id}`, body).then((res) => res.data)
  }
  
  autorService.eliminar = function (id) {
    return libreBackendService.delete(`${requestMapping}/${id}`).then((res) => res.data)
  }

  export default autorService