<template>
  <div class="hello">
      <b-loading :is-full-page="true" v-model="loader"></b-loading>
    <div v-if="$store.state.noticias">
       <b-input placeholder="Search..."
                type="search"
                icon-pack="fas"
                icon="search"
                style='width:20%;display:inline-block'
                v-model='filtroMovie'
                />
        <b-select v-model="selectedFuente" style='display:inline-block' placeholder="Fuentes"> 
          <option value=''>All</option>
          <option v-for='(fuente,index) in fuentes' :key='index' :value='fuente.toLowerCase()' >{{fuente}}  </option>  
        </b-select>
      <b-button v-if="filtroMovie != ''" @click='init(filtroMovie)'> LOOK DEEPER </b-button>
      <div class=''>
        <div class=' column is-one-quarter' 
              style='display:inline-flex;vertical-align:top;'
              v-for="(noticia, index) of noticias.filter(x => x && x.description && x.description.toLowerCase().includes(filtroMovie.toLowerCase()) && x.source.name && x.source.name.toLowerCase().includes(selectedFuente))"
              :key="index"
              v-show='noticia.description != "" && noticia.description != "&nbsp;" '
              >
          <b-collapse 
              class="card"
              style='width:100%;text-align:center'
              animation="slide"
              :open="true"
              >
              <div
                  slot="trigger"
                  class="card-header card-header-news"
                  :style="'background-image: url('+noticia.urlToImage+');'"
                  role="button"
                  >
                  <p class="card-header-title" style='background-color:rgba(0, 1, 0, 0.6)'>
                      {{ noticia.description }}
                  </p>
              </div>
              <div class="card-content">
                  <div class="content">
                      {{noticia.content}}
                  </div>
              </div>
              <footer class="card-footer">
                  <a class="card-footer-item" :href='noticia.url' target="_blank" >Ver Noticia Completa en {{ noticia.source.name }}</a>.
              </footer>
          </b-collapse>
        </div>
      </div>
    </div>
    <h4 ></h4>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      filtroMovie : "",
      started : false,
      loader:false,
      filtroFuente:'',
      selectedFuente:''
    }
  },
  namespaced: true,
  methods: {
        ...mapActions({
          getNews : "getNews",
        }),
        async init(q = ''){
          this.loader = true
          await this.getNews(q);
          this.selectedFuente = ''
          this.filtroMovie = ''
          this.loader=false
        }
  },
      computed: {
      ...mapState({
        noticias : state => state.noticias,
        fuentes : state => state.fuentes
      }),
      arrayFuenteFiltrado(){
        return this.fuentes.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.filtroFuente.toLowerCase()) >= 0
                })
      }
    },
  created () {
    this.loader=true;
    this.init()
  },
  name: 'FindMovie'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-header-news{
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height:250px;
}
.card-header-title{
  color:#ffffff;
}
</style>
