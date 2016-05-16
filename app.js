$("#saludo").click(saludar); //el $ selecciona desde el css según el nombre, por eso el #. $ + # selecciona según Id. Luego se llama al evento click (en vez de usar el onclick y los parametros) y se le pasa el nombre de la funcion

function saludar(){

	alert("Hola");

}

function hay(){

	alert("Hay Internet");

}

function noHay(){

	alert("No hay Internet");

}

if(navigator.offline){
	alert("No hay señal")
}else{
	alert("Hay señal")
}

function guardar(){
	localStorage.setItem("nombre", "Pepe"); //le paso la variable y el valor asociado

}

function ver(){
	alert (localStorage.getItem("nombre")); //solo getteo la variable

}


$("#btn_guardar").click(guardar);

$("#btn_ver").click(ver);

//guardar datos localmente en el celular

