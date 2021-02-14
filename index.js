/* 
Exercise 2
Ambil lah data dari API berikut “https://restcountries.eu/rest/v2/all”

Gunakan async await

Tampilkan seluruh bendera negara dan nama negaranya ke dalam dom

*/


const getData = async () => {
  const api = "https://restcountries.eu/rest/v2/all"
  let response = await fetch(api);
  let results = await response.json();

  results.map(result => {
    console.log(result)
    let negara = document.querySelector(".flag")
    let cards = document.createElement("div");

    cards.innerHTML = `
      <div class="country">
        <img src="${result.flag}"/>
        <span>${result.name}</span>
      </div>
    `
    negara.appendChild(cards)
  })
    
}
getData()