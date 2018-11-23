// landing
import LibreLanding from './pages/Landing.vue'
import LibreLogin from './pages/Login.vue'
import LibreSingup from './pages/SingUp.vue'
// // user
// import LibreUserHome from './pages/UserHome.vue'
// // admin
// import LibreAdminHome from './pages/AdminHome.vue'
// import libreAdminArchivoList from './pages/AdminArchivoList.vue'
// import LibreAdministradoresList from './pages/AdminAdministradoresList.vue'
// import LibreUsuariosList from './pages/AdminUsuariosList.vue'
// import LibreFacultadesList from './pages/AdminFacultadesList.vue'
// import LibreAdministradorInfo from './pages/AdminAdministradorInfo.vue'
// import LibreArchivoInfo from './pages/AdminArchivoInfo.vue'
// import LibreFacultadInfo from './pages/AdminFacultadInfo.vue'
// import LibreUsuarioInfo from './pages/AdminUsuarioInfo.vue'
// import LibreAdminAdd from './pages/AdminAdministradorAdd.vue'
// import LibreFacultadAdd from './pages/AdminFacultadAdd.vue'
// import LibreArchivoAdd from './pages/AdminArchivoAdd.vue'

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
  }
]
export default routes
