const express = require('express');
const app = express();

//Se ve en el navegador con 
const mockUserData = [{
    name: 'Mark'
  },
  {
    name: 'Jill'
  }
]

//sin parametros, se pasa user mediante constante del json
app.get('/users', function (req, res) {
  res.json({
    success: true,
    message: 'successfully got users. Nice!',
    users: mockUserData
  })
});
// Esto http://localhost:8000/users/mark  es yna GET route creo ????????
//:id significa variable y se le llama asi req.params.id
// el parametro de la variable se pone en el navegador 
//se ve en el navegador con http://localhost:8000/users/mark
app.get('/users/:id', function (req, res) {
  //muestra en consola
  console.log(req.params.id)
  //muestra en navegador
  res.json({
    success: true,
    message: 'got one user',
    user: req.params.id
  })
})


app.listen(8000, function () {
  console.log("server is running")
});