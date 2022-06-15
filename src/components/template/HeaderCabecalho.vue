<template>
  <header>
    <div class="menu-principal">
      <span> <RouterLink to="/">Home</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/destaques">Destaques</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/categorias">Categorias</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/contato">Contato</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/recomendacoes">Recomendações</RouterLink> </span>
    </div>
    <div class="menu-direito">
      <span>Sair</span>
    </div>
  </header>
</template>

<style>
header span {
  padding: 0 20px;
}
header {
  height: 10%;
  background-color: #b8dfb2cc;
  color: #000000;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding-left: 20px;
  justify-content: space-between;
}
</style>
