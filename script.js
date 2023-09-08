const mostrarTela = document.querySelector(".result");

function APIValueBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((data) => {
      const valueBitcoinReal = data.BRL.last;
      mostrarTela.innerHTML = `Valor atual do Bitcoin R$ ${valueBitcoinReal}`;
    })
    .catch((err) => console.error(err));
}
