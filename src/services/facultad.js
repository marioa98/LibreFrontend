import libreBackendService from './libre-backend'

const requestMapping = '/facultades'
const facultadService = {}

facultadService.agregar = function (body) {
    return libreBackendService.post(requestMapping, body).then((res) => res.data)
  }
  
  facultadService.obtenerTodos = function () {
    return libreBackendService.get(requestMapping).then((res) => res.data)
  }
  
  facultadService.obtenerPorId = function (id) {
    return libreBackendService.get(`${requestMapping}/${id}`).then((res) => res.data)
  }
  
  facultadService.modificar = function (id, body) {
    return libreBackendService.put(`${requestMapping}/${id}`, body).then((res) => res.data)
  }
  
  facultadService.eliminar = function (id) {
    return libreBackendService.delete(`${requestMapping}/${id}`).then((res) => res.data)
  }