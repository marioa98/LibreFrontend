<template>
  <div class="menu">
    <p class="menu-label">General</p>
    <ul class="menu-list">
      <li>
        <router-link to="/admin/home">Inicio</router-link>
      </li>
      <li>
        <router-link to="/">Pefil</router-link>
      </li>
    </ul>
    <p class="menu-label">Archivos</p>
    <ul class="menu-list">
      <li>
        <router-link to="/admin/archivos">Ver archivos</router-link>
      </li>
      <li>
        <router-link to="/admin/agregar/archivo">Agregar archivos</router-link>
      </li>
    </ul>
    <p class="menu-label">Administradores</p>
    <ul class="menu-list">
      <li>
        <router-link to="/admin/administradores">Ver administradores</router-link>
      </li>
      <li>
        <router-link to="/admin/agregar/administrador">Agregar administrador</router-link>
      </li>
    </ul>
    <p class="menu-label">Facultades</p>
    <ul class="menu-list">
      <li>
        <router-link to="/admin/facultades">Ver facultades</router-link>
      </li>
      <li>
        <router-link to="/admin/agregar/facultad">Agregar facultades</router-link>
      </li>
    </ul>
    <p class="menu-label">Autores</p>
    <ul class="menu-list">
      <li>
        <router-link to="/admin/autores">Ver autores</router-link>
      </li>
      <li>
        <router-link to="/admin/agregar/autor">Agregar autor</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'AdminMenu'
  }

</script>
