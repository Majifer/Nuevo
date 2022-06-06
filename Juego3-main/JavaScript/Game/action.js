
const newMap = initMap();
const verbs = createVerbsActions();
const button = document.getElementById("do");
button.onclick = verb;



//Definimos la posicion Inicial de nuestro jugador que se inicia al inicio de cada juego.
let player = {initialPosition: [0,0]}
let initialPosition = newMap[player.initialPosition[0]][player.initialPosition[1]].description;
document.getElementById("description").innerHTML = initialPosition;
/*
let jugador = {initialPosition: [0,0]};\
   let n1 = player.initialPosition[0,1]
   let n2 = player.initialPosition[0,2]
*/
/*button.onclick = validationVerbs;*/
//console.log(newMap[0][0].exit.include(Sur));
//console.log(newMap[0][1].exit.include(Sur));
/*Funcion que Inicializa nuestro mapa*/
function initMap(){
    const newMap = new Array();

    newMap[0] = new Array();
    newMap[1] = new Array();
    newMap[2] = new Array();
    
    newMap[0][0] = {description: 'ZONA [0][0]' + "<br />" + "<br />" +'Te acabas de despertar dentro de una celda que se encuentra con la puerta abierta', exits:['Sur','Este','Oeste']}
    newMap[0][1] = {description: 'ZONA [0][1]' + "<br />" + "<br />" +'Te encuentras en una galeria que conecta a traves de la pared', exits:['Sur,Este,Oeste']}
    newMap[0][2] = {description: 'ZONA [0][2]' + "<br />" + "<br />" +'Te encuentras en un almacen en donde puedes observar que tienes objetos de interes', exits:['Norte,Sur,Este,Oeste']}
    newMap[1][0] = {description: 'ZONA [1][0]', exits:['Norte,Sur,Este,Oeste']}
    newMap[1][1] = {description: 'ZONA [1][1]', exits:['Norte,Sur,Este,Oeste']}
    newMap[1][2] = {description: 'ZONA [1][2]', exits:['Norte,Sur,Este,Oeste']}
    newMap[2][0] = {description: 'ZONA [2][0]', exits:['Norte,Sur,Este,Oeste']}
    newMap[2][1] = {description: 'ZONA [2][1]', exits:['Norte,Sur,Este,Oeste']}
    newMap[2][2] = {description: 'ZONA [2][2]' + "<br />" + "<br />" +'Te encuentras en la casilla de Victoria, por lo que has ganado la Partidad.' , exits:['Norte,Sur,Este,Oeste']}

    return newMap;
}
   /*Funcion que sirve para crear los verbos*/
function createVerbsActions(){

  const verbs = new Map();

  verbs.set("ir",true);
  verbs.set("mirar",true);
  verbs.set("usar",true);
  verbs.set("coger",true);
  verbs.set("hablar",true);

  return verbs;
}
/*Inicialiazacion de los objetos del Mapa*/
function createObjects(){

  const items = new Map();

  items.set = ("Espada",true);
  items.set = ("Lampara",true);
  items.set = ("Piedra",true);
   
  return items;

}
function objectUsageValidation(object){
  /*Inicializamos los objetos del mapa al Inicio del Videojuego, validadamos su uso en cada casilla bidimensional 
    para ello necesitamos comparar el objeto que vamos a usar y verificar su disponibilidad mediante el input de
    string y comprobar
  */
  /*Validamos cada una de direcciones del segundo input que metemos por consola y al validarlo, damos paso a la
    condicion de sumar o restar en funcion de la casilla actual en la que te encuentras.
  */
   if(items.has(object)=== true){
      console.log("Se ha comprobado la direccion del Jugador");
   }
   
}
/*button.onclick = validationVerbs();*/
function validationVerb(verb){
  if(verbs.has(verb)=== true){
    console.log("Has introcido bien el verbo");
  }
  else{

    console.log("Has introducido un verbo no valido");
  }

}
function object(){
    let command = document.getElementById("commands").value;
    let LowerCaseWords = command.toLowerCase();
    let words = LowerCaseWords.split(" ");
    let object = words[1];
    console.log(object);
    objectUsageValidation(object)
    showOutPut(object);
}
function verb(){
  let command = document.getElementById("commands").value;
  let LowerCaseWords = command.toLowerCase();
  let words = LowerCaseWords.split(" ");
  let verb = words[0];
  console.log(verb);
  validationVerb(verb);
  showOutPut(verb);
  /*
  let firstWord = command.split(" ");
  let verb = firstWord[0];
   */
}

function movePlayerDirection(){
  /*Interacciones de suma y resta de casillas */
    


  /*
   let ir= {position: [x][y]}
    let x = [0]
    let y = [1]

   */
}
/*
function validationVerbs(){

    let commands = document.getElementById("commands").value;

    commands - commands.toLowerCase();
    console.log(commands);

    let commands
   
}
*/
