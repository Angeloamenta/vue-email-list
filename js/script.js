
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
        // console.log(this.emails.length);
        // while (this.emails.length < 9) {
        //     axios
        //     .get("https://flynn.boolean.careers/exercises/api/random/int")
        //     .then((response) => {
        //         if (this.emails.includes(response.data.response) ) {
        //             console.log("incluso")
        //         }else {  
        //             this.emailUser = response.data.response;
        //              this.emails.push(this.emailUser);
        //              console.log(this.emails)
        //              console.log(this.emails.length);
        //         }
              
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     });
        // }
        
        console.log(this.emails.length);
        
    for (let i = 0; i < 10; i++) {
             axios
             .get("https://flynn.boolean.careers/exercises/api/random/mail")
             .then((response) => {
                 if (this.emails.includes(response.data.response)) {
                     console.log("incluso")
                }else{
                 console.log();
                     this.emailUser = response.data.response;
                     this.emails.push(this.emailUser);
                     console.log(this.emails)
                     console.log(this.emails.length);
                 }
             })
             .catch((error) => {
               console.log(error);
             });
         }

     }
  })