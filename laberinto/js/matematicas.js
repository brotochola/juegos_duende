function coord2Tiles(num){
	return Math.floor(num/tile);
}

function eliminateDuplicates(arr) {
  var i,
      len=arr.length,
      out=[],
      obj={};

  for (i=0;i<len;i++) {
    obj[arr[i]]=0;
  }
  for (i in obj) {
    out.push(i);
  }
  return out;
}

function modulo(numero){
	return Math.sqrt(numero*numero);
}
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function arrIncludes(arr, obj){
	if(obj==undefined || obj.x==undefined || obj.y==undefined || arr==undefined) return -1;

	for(var i=0; i<arr.length;i++){
		if(arr[i].x==obj.x && arr[i].y==obj.y) {
			return true;
		}
	}
	return false;
}



function removeFromArray(arr,elt){
	for(var i=arr.length -1; i>=0; i--){
		if(arr[i]==elt){
			arr.splice(i,1);
			return i;
		}
	}
}

function calcularDistancia(x1,y1,x2,y2){
	distX=x1-x2;
	distY=y1-y2;
	distancia=Math.sqrt(distX*distX+distY*distY);
	return distancia;
}
function calcularColision(x1, y1, x2, y2, width1, width2){
	distX=x1-x2;
	distY=y1-y2;
	distancia=Math.sqrt(distX*distX+distY*distY);
	if(distancia<=(width1/2+ width2/2)){ 
		return 1				
	}else{
		return 0
	}
}

function colisionItems(tipo, obj){

	rta=false;
	if(tipo.x>obj.x && tipo.x<obj.x+obj.nominalBounds.width){
		if(tipo.y>obj.y && tipo.y<obj.y+obj.nominalBounds.height){

			rta=true
		}

	}
	return rta;
		
}


function floorTile(n){
	return Math.floor(n/tile)*tile;

}

//no sirve para spots
function calcularDistanciaObj(o1,o2){
	x1=o1.x;
	y1=o1.y;
	x2=o2.x;
	y2=o2.y;
	distX=x1-x2;
	distY=y1-y2;
	distancia=Math.sqrt(distX*distX+distY*distY);
	return distancia;
}

function calcularSteps(obj1, obj2){


	difX=obj1.x-obj2.x;
	difY=obj1.y-obj2.y;
	hipotenusa=Math.sqrt(difX*difX+difY*difY);
	seno=difY/hipotenusa;
	coseno=difX/hipotenusa;
	stepY=seno;
	stepX=coseno;
	objReturn= new Object();
	objReturn.stepX=stepX;
	objReturn.stepY=stepY;
	return objReturn;
}