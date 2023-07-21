const botonlogin = document.getElementById("botonlogin")
const inputEmail = document.getElementById("usuario")
const inputPassword = document.getElementById("clave")

const users =[
  {
    email: "jeimyandrea@gmail.com",
    password: "1234",
    balance: 350
  },
  {
    email: "danielacuna@gmail.com",
    password: "4567",
    balance: 1000
  },
  {
    email: "thanos@gmail.com",
    password: "8912",
    balance: 5000
  }, 
];

botonlogin.addEventListener("click", function (event) {
  event.preventDefault();
 let email = inputEmail.value
 let password = inputPassword.value

 let loggedUser = users.find( 
  (user) => user.email === email && user.password === password
  );

 if(loggedUser){
  localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
  window.location.href = "./home.html";
 } else {
   alert("El usuario o contraseña son incorrectos, intente de nuevo");
 }
});
