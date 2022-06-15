import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoriasView from "../views/CategoriasView.vue";
import ContatoView from "../views/ContatoView.vue";
import DestaquesView from "../views/DestaquesView.vue";
import RecomendacoesView from "../views/RecomendacoesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/categorias",
      name: "categorias",
      component: CategoriasView,
    },

    {
      path: "/contato",
      name: "contato",
      component: ContatoView,
    },
    {
      path: "/destaques",
      name: "destaques",
      component: DestaquesView,
    },
    {
      path: "/recomendacoes",
      name: "recomendacoes",
      component: RecomendacoesView,
    },
  ],
});

export default router;