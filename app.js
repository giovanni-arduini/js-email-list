axios
  .get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((res) => {
    console.log(res.data, "Questo è il dato restituito");
  })
  .catch((err) => {
    console.log(err, "Qualcosa è andato storto!");
  });
