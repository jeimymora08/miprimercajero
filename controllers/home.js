const infodiv = document.getElementById("usuario-info")
const btologout = document.getElementById("boton-cierre")
const loggedUser = JSON.parse(localStorage.getItem ("loggedUser"));

infodiv.innerHTML = `<span>BIENVENIDO ${loggedUser.email} A TU BANCO</span>`

btologout.addEventListener("click", function(){
    localStorage.removeItem("loggedUser");
    window.location.href = "./index.html";
});

