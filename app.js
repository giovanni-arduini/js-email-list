let userMails = [];
const mailList = document.getElementById("mail-list");
// console.log(mailList);
const buttonElement = document.querySelector(".btn");
console.log(buttonElement);

function generateTenEmails() {
  for (let i = 0; i < 10; i++) {
    axios
      //questa è la chiamata alla API
      .get("https://flynn.boolean.careers/exercises/api/random/mail")

      //questa è la risposta
      .then((res) => {
        const mail = res.data.response;
        mailList.innerHTML += `<li>${mail}</li>`;
      })

      //questa è risposta in caso di errore
      .catch((err) => {
        console.log(err, "Qualcosa è andato storto!");
      });
  }
}

generateTenEmails();
// console.log(userMails);

// let listElement = document.createElement("li");
// listElement.innerHTML = `userMails[2]`;
// mailList.appendChild(listElement);

buttonElement.addEventListener("click", () => {
  generateTenEmails();
});
