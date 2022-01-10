
// Descrizione:
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },
    created () {
        axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        console.log(response.data.response);
        
      })
      .catch((error) => {
        console.log(error);
      });

    }
  })