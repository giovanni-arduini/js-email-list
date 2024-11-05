let userMails = [];
const mailList = document.querySelector("mail-list");

function generateTenEmails() {
  for (let i = 0; i < 10; i++)
    axios
      //questa è la chiamata alla API
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      //questa è la risposta
      .then((res) => {
        // console.log(res.data, "Questo è il dato restituito");

        const mail = res.data.response;
        // console.log(mail);
        userMails.push(mail);
      })
      //questa è risposta in caso di errore
      .catch((err) => {
        console.log(err, "Qualcosa è andato storto!");
      });
}

generateTenEmails();
console.log(userMails);
