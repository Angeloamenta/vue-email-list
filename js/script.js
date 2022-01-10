
// Descrizione:
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

var app = new Vue({
    el: '#app',
    data: {
      emailUser: null,
      emails: []
    },
    created () {
        for (let i = 0; i < 10; i++) {
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
              console.log(response.data.response);
              this.emailUser = response.data.response;
              this.emails.push(this.emailUser);
              console.log(this.emails)
            })
            .catch((error) => {
              console.log(error);
            });
        }

    }
  })