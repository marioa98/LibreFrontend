import libreBackendService from './libre-backend'

const requestMapping = '/tipos'
const tipoService = {}

tipoService.agregar = function (body) {
    return libreBackendService.post(requestMapping, body).then((res) => res.data)
  }
  
  tipoService.obtenerTodos = function () {
    return libreBackendService.get(requestMapping).then((res) => res.data)
  }
  
  tipoService.obtenerPorId = function (id) {
    return libreBackendService.get(`${requestMapping}/${id}`).then((res) => res.data)
  }
  
  tipoService.modificar = function (id, body) {
    return libreBackendService.put(`${requestMapping}/${id}`, body).then((res) => res.data)
  }
  
  tipoService.eliminar = function (id) {
    return libreBackendService.delete(`${requestMapping}/${id}`).then((res) => res.data)
  }

  export default tipoService