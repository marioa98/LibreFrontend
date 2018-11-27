// landing
import LibreLanding from './pages/Landing.vue'
import LibreLogin from './pages/Login.vue'
import LibreSingup from './pages/SingUp.vue'
// // user
// import LibreUserHome from './pages/UserHome.vue'
// admin
import LibreAdminTemplate from './pages/AdminTemplate.vue'
import LibreAdminHome from './pages/AdminHome.vue'
import libreAdminArchivoList from './pages/AdminArchivoList.vue'
import LibreAdministradoresList from './pages/AdminAdministradoresList.vue'
import LibreUsuariosList from './pages/AdminUsuariosList.vue'
import LibreFacultadList from './pages/AdminFacultadList.vue'
import LibreAutorList from './pages/AdminAutorList.vue'
// import LibreAdministradorInfo from './pages/AdminAdministradorInfo.vue'
// import LibreArchivoInfo from './pages/AdminArchivoInfo.vue'
// import LibreFacultadInfo from './pages/AdminFacultadInfo.vue'
// import LibreUsuarioInfo from './pages/AdminUsuarioInfo.vue'
import LibreAdminAdd from './pages/AdminAdministradorAdd.vue'
import LibreFacultadAdd from './pages/AdminFacultadAdd.vue'
import LibreArchivoAdd from './pages/AdminArchivoAdd.vue'
import LibreAutorAdd from './pages/AdminAutorAdd.vue'

const routes = [{
    path: '/',
    component: LibreLanding,
    name: 'landing'
  },
  {
    path: '/login',
    component: LibreLogin,
    name: 'login'
  },
  {
    path: '/singup',
    component: LibreSingup,
    name: 'singup'
  },
  {
    path: '/admin',
    component: LibreAdminTemplate,
    children: [{
        path: 'home',
        component: LibreAdminHome,
        name: 'adminHome'
      },
      {
        path: 'archivos',
        component: libreAdminArchivoList,
        name: 'archivoList'
      },
      {
        path: 'administradores',
        component: LibreAdministradoresList,
        name: 'administradoresList'
      },
      {
        path: 'usuarios',
        component: LibreUsuariosList,
        name: 'usuariosList'
      },
      {
        path: 'facultades',
        component: LibreFacultadList,
        name: 'facultadesList'
      },
      {
        path: 'autores',
        component: LibreAutorList,
        name: 'autorList'
      },
      {
        path: 'agregar/administrador',
        component: LibreAdminAdd,
        name: 'adminAdd'
      },
      {
        path: 'agregar/facultad',
        component: LibreFacultadAdd,
        name: 'facultadAdd'
      },
      {
        path: 'agregar/archivo',
        component: LibreArchivoAdd,
        name: 'archivoAdd'
      },
      {
        path: 'agregar/autor',
        component: LibreAutorAdd,
        name: 'autorAdd'
      }
    ]
  }
]

export default routes
