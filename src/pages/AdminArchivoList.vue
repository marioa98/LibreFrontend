<template>
  <div>
    <admin-table v-bind:headers="headers">
      <archivo-table-element v-for="archivo in archivos" v-bind:archivo="archivo" v-bind:key="archivo.id" />
    </admin-table>
  </div>
</template>
<script>
  //layout
  import AdminBaseLayout from '../components/layout/AdminBaseLayout.vue'
  //shared
  import AdminTable from '../components/shared/Table.vue'
  import ArchivoTableElement from '../components/shared/ArchivoTableElement.vue'

  export default {
    name: 'AdminArchivoList',
    components: {
      AdminBaseLayout,
      AdminTable,
      ArchivoTableElement
    },
    data() {
      return {
        admin: {
          id: 1,
          nombre: 'Gerry'
        },
        headers: [{
            id: 1,
            name: '#'
          },
          {
            id: 2,
            name: 'Nombre'
          },
          {
            id: 3,
            name: 'Estado'
          }, {
            id: 4,
            name: 'Tipo'
          },
          {
            id: 5,
            name: 'Acción'
          }
        ],
        archivos: [{
          "id": 1,
          "nombre": "Mujeres",
          "descripcion": "Descripción no disponible",
          "uri": "https://www.gandhi.com.mx/mujeres-12",
          "img": "fuck base64",
          "activo": true,
          "createdAt": "2018-11-19T18:52:23.408+0000",
          "updatedAt": "2018-11-19T18:52:23.408+0000",
          "autores": [{
            "id": 1,
            "nombre": "Charles Bukowski",
            "alias": "Bukowski",
            "createdAt": "2018-11-19T19:13:08.177+0000",
            "updatedAt": "2018-11-19T19:13:08.177+0000"
          }],
          "etiquetas": [{
            "id": 1,
            "keyword": "novela",
            "createdAt": "2018-11-19T19:13:31.344+0000",
            "updatedAt": "2018-11-19T19:13:31.344+0000"
          }],
          "comentarios": [{
            "id": 1,
            "texto": "Nice book.",
            "createdAt": "2018-11-19T19:17:35.950+0000",
            "updatedAt": "2018-11-19T19:17:35.950+0000",
            "usuarios": {
              "id": 1,
              "nombre": "Paco",
              "apellidos": "Batizo",
              "correo": "psagags4@ucol.mx",
              "activo": true,
              "password": "someshit",
              "createdAt": "2018-11-19T19:17:31.680+0000",
              "updatedAt": "2018-11-19T19:17:31.680+0000",
              "facultad": null
            }
          }],
          "tipos": {
            "id": 1,
            "tipo": "video",
            "createdAt": "2018-11-19T19:14:52.729+0000",
            "updatedAt": "2018-11-19T19:14:52.729+0000"
          }
        }]
      }
    }
  }

</script>
