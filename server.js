const express = require('express');
const app = express();
//  se añade esto para hacer un POST
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//Se ve en el navegador con 
const mockUserData = [{
    name: 'Mark'
  },
  {
    name: 'Jill'
  }
]

//* GET ////////////////////
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

//*  POST ////////////////
// Escribamos una función para manejar una solicitud POST realizada al punto final de 'inicio de sesión', como si un usuario intentara iniciar sesión:
app.post('/login', function (req, res) {
  // Typically passwords are encrypted using something like bcrypt before sending to database
  const username = req.body.username;
  const password = req.body.password;
  // This should come from the database
  const mockUsername = "billyTheKid";
  const mockPassword = "superSecret";

  if (username === mockUsername && password === mockPassword) {
    // In practice, use JSON web token sign method here to make an encrypted token
    res.json({
      success: true,
      message: 'password and username match!',
      token: 'encrypted token goes here'
    })
  } else {
    res.json({
      success: false,
      message: 'password and username do not match'
    })
  }
})




app.listen(8000, function () {
  console.log("server is running")
});