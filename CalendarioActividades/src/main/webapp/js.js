/**
 * 
 */

 const array = [
	 {nombre: "clase", duracion: "1 hora"},
	 {nombre: "comer", duracion: "45 minutos"},
	 {nombre: "viaje", duracion: "20 minutos"},
	 {nombre: "dormir", duracion: "8 horas"},
	 {nombre: "ejercicio", duracion: "1 hora y 30 minutos"}
 ]
 const arrayFechas = [];
 
 function aniadirActividad(){
	 
	 const nombre = prompt("Nombre de la actividad");
	 
	 const fecha = prompt("fecha del evento yyyy-MM-dd");
	 
	 const eventoFiltrado = array.find(actividad => actividad.nombre.toLowerCase() === nombre.toLowerCase());
	 
	 if(eventoFiltrado){
		 const duracion = eventoFiltrado.duracion;
		 
		 arrayFechas.push({nombre, duracion, fecha: new Date(fecha)});
		 
		 const resultado = arrayFechas.map(actividad => `<tr><td>${actividad.nombre}</td><td>${actividad.duracion}</td><td>${actividad.fecha.toLocaleDateString()}</td></tr>`).join("");
	 
	 	 document.getElementById("tabla").innerHTML = resultado;
	 }
	 else{
		 alert("No hay eventos con ese nombre");
	 }
	 
	 	 
 }
 
 function proximaActividad(){
	 
	 const hoy = Date.now();
	 
	 const actividadesNoRealizadas = arrayFechas.filter(actividad => actividad.fecha > hoy);
	 
	 actividadesNoRealizadas.sort((a, b) => a.fecha - b.fecha);
	 
	 if(actividadesNoRealizadas.length > 0){
		 const proximaActividad = actividadesNoRealizadas[0];
		 const queda = Math.ceil((proximaActividad.fecha - hoy) / (1000 * 60 * 60));
		 
		 const resultado = `La próxima actividad es ${proximaActividad.nombre} y quedan ${queda} horas`;
		 
		 document.getElementById("resultado").innerHTML = resultado;
	 }
	 else{
		 document.getElementById("resultado").innerHTML = "No hay actividades próximas.";
	 }
	 
 }
 