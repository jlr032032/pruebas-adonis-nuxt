<template>
  <nav>
    <nuxt-link to="/" tag="li">Inicio</nuxt-link>
    <nuxt-link to="/login" tag="li">Login</nuxt-link>
    <nuxt-link to="/signup" tag="li">Registro de usuario</nuxt-link>
    <nuxt-link to="/logged" tag="li">Ruta restringida</nuxt-link>
  </nav>
</template>

<style>
  li{
    list-style: none;
    text-decoration: none;
    color: #007bff
  }
  li:hover{
    text-decoration: underline;
    cursor: pointer
  }
</style>
