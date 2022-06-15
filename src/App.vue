<script setup>
import HeaderCabecalho from "@/components/template/HeaderCabecalho.vue";
import FooterRodape from "@/components/template/FooterRodape.vue";
import MainConteudo from "@/components/template/MainConteudo.vue";
</script>

<template>
  <HeaderCabecalho />
  <main>
    <MainConteudo />
  </main>
  <FooterRodape />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap");
body {
  background-color: #fbf6d6;
}
#app {
  max-width: 1280px;
  margin: 0 auto;
  font-weight: normal;
  height: 100vh;
}
main {
  height: 80%;
}
a {
  color: inherit;
  text-decoration: none;
}
.router-link-active {
  color: #fb00a3;
}
</style>