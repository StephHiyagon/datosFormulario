function myFunction() {
var nombre=document.getElementById('name').value;
var mail=document.getElementById('email').value;
document.getElementById('mostrarNombre').innerHTML = "El nombre ingresado es:" + nombre;
document.getElementById('mostrarMail').innerHTML = "El mail ingresado es: " + mail;
}
