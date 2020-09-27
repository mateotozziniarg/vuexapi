import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(Buefy)

export default new Vuex.Store({
  namespaced: true,
  state: {
    noticias:[],
    fuentes:[]
  },
  mutations: {
    setNoticias(state,  noticias){
      state.noticias = noticias;
    },
    setFuentes(state, noticias){
      state.fuentes = [...new Set(noticias.map(x => x.source.name))];
    }
  },
  actions: {
    async getNews({commit}, q){
      if(!q){ 
        var url = 'http://newsapi.org/v2/top-headlines?' +
        'country=ar&' +
        'apiKey=81651ccd4f4e41be9fe011fa63daf543';
       }else{
        var url = 'http://newsapi.org/v2/everything?' +
        'q='+ q + '&' +
        'apiKey=81651ccd4f4e41be9fe011fa63daf543';
        }
      var req = new Request(url);
      fetch(req)
      .then(async function(response) {
        let rsp = await response.json();
        commit('setNoticias', rsp.articles)
        commit('setFuentes', rsp.articles)
          })
          .catch(err => {
            console.log(err);
          });
    }
  },
  mounted(){
    
  },
  modules: {
  },
})
