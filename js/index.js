var elementoA;
var elementoB;
var operacion;

let elementos_numero = document.getElementsByClassName("boton_numero")  ;

let elementos_operacion = document.getElementsByClassName("boton_operacion")  ;

let visor_contenedor = document.getElementById("visor");
visor_contenedor.textContent = "";

for(var i=0;i<elementos_numero.length;i++){
  var elemento = elementos_numero[i];
  elemento.addEventListener('click', function Visor(e) {
    // const numero_contenedor = document.createElement('div',);
    // numero_contenedor.innerHTML=`
    // ${e.target.innerHTML}
    // `;
    // visor_contenedor.append(numero_contenedor)
    let valor = e.target.textContent
    visor_contenedor.textContent = visor_contenedor.textContent + valor

  });
  
};
for(var i=0;i<elementos_operacion.length;i++){
  var elemento = elementos_operacion[i];
  elemento.addEventListener('click', function Visor(e) {
    elementoA = visor_contenedor.textContent;
    operacion = e.target.textContent;
    elementoB="";
    // console.log(elementoA+" "+operacion);

    limpiar()
    // let valor = e.target.textContent
    // visor_contenedor.textContent = visor_contenedor.textContent + valor
    
  });

};

var coma = document.getElementById('botonComa');
var igual = document.getElementById('botonIgual');
var reset = document.getElementById('botonReset')

coma.onclick = function (){
  if(elementoA===undefined || elementoA===""){
    elementoA = visor_contenedor.textContent

    if((!(elementoA.includes("."))) && (!(visor_contenedor.textContent==="")) ){
      elementoA = elementoA+"."
      visor_contenedor.textContent = elementoA
    }

  }else if(elementoB===undefined || elementoB===""){

    elementoB = visor_contenedor.textContent

    if((!(elementoB.includes("."))) && (!(visor_contenedor.textContent==="")) ){
      elementoB = elementoB+"."
      visor_contenedor.textContent = elementoB
    }
    elementoB = visor_contenedor.textContent

  }
}

igual.onclick = function (e) {

  if((elementoB===undefined || elementoB==="")){

    console.log('elementoA = '+elementoA);
    console.log('elementoB = '+elementoB);

    elementoB = visor_contenedor.textContent
    resolver();

    console.log('elementoA = '+elementoA);
    console.log('elementoB = '+elementoB);
    console.log('res = '+res);
    

  }
  else if(elementoB.includes(".")){

    // if(elementoB.split(".")[1]===0){
      elementoB = visor_contenedor.textContent
      console.log("con coma");
      console.log(elementoB);
      resolver();
      console.log('elementoA = '+elementoA);
      console.log('elementoB = '+elementoB);
      console.log('res = '+res);  
    // }else{
    //   resolver();
    //   console.log('elementoA = '+elementoA);
    //   console.log('elementoB = '+elementoB);
    //   console.log('res = '+res); 
    // }
  }
  else{
    // console.log("primer B "+elementoB);
    // elementoB = visor_contenedor.textContent
    // console.log("segundo B "+elementoB)
    console.log("sin coma");
    resolver();
    console.log('elementoA = '+elementoA);
    console.log('elementoB = '+parseFloat(elementoB));
    console.log('res = '+res);  
  }
}

reset.onclick = function (e) {
  resetear()
}


function limpiar() {
  visor_contenedor.textContent = ""
}

let res = 0;

function resolver() {
  
  switch(operacion){
    case "+":
      res = parseFloat(elementoA) + parseFloat(elementoB);
      break;
    case '-':
        res = parseFloat(elementoA) - parseFloat(elementoB);
        break;
    case '*':
        res = parseFloat(elementoA) * parseFloat(elementoB);
        break;
    case '/':
        res = parseFloat(elementoA) / parseFloat(elementoB);
        break;   
    }
    // resetear()

    visor_contenedor.textContent = res.toFixed(2);
    elementoA=res
    console.log("primer res "+res);
}

function resetear(){
  elementoB="";
  elementoA="";
  operacion="";
  visor_contenedor.textContent=""
}