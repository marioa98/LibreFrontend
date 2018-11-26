<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/admin/home"><strong>LIBRE</strong></router-link>
      </div>
      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-end">
          <router-link class="navbar-item" to="/admin/home">Inicio</router-link>
          <router-link class="navbar-item" to="/admin/archivos">Archivos</router-link>
          <router-link class="navbar-item" to="/admin/administradores">Administradores</router-link>
          <router-link class="navbar-item" to="/admin/usuarios"> Usuarios</router-link>
          <router-link class="navbar-item" to="/admin/facultades">Facultades</router-link>
          <router-link class="navbar-item" to="/admin/autores">Autores</router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Cuenta</a>
            <div class="navbar-dropdown">
              <router-link class="navbar-item" to="">Perfil</router-link>
              <hr class="navbar-divider">
              <router-link class="navbar-item" to="/">Salir</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
