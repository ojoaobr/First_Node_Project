const express = require('express');

const app = express();

app.get('/produtos', (request, response) => {

  var produto = [
    {
      Camisa_com_foto_do_Farlen: 'R$ 45,00',
      Caneca: 'R$ 10,00',
      Pôster: 'R$ 60,00',
      Moletom: 'R$ 120,00',
      Calça: 'R$ 120,00',
      Boné: 'R$ 20,00',
      Meia: 'R$ 10,00',
      Camiseta: 'R$ 35,00',
      Tênis: 'R$ 320,00',
      Chinelo: 'R$ 35,00',
      Bermuda: 'R$ 50,00',
      Copo: 'R$ 3,00',
      Taça: 'R$ 10,00',
      Pote: 'R$ 6,00',
      Talheres: 'R$ 20,00'
    }
  ]

  response.json({Produtos: produto})
});

app.listen('3333', ()=> {
  console.log('👍 Servidor tá on!!')
});
