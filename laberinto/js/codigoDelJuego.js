var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
var targetX=0;
var targetY=0;
var isphone=false;
var hero;
var mitadX, mitadY;
var  angulo=0;
var requestAnimationFrame;
var arrayParaOrdenar=[];
var progreso;
var videocjs, video;
var mcTile;
var ui;
var gridCargada;
var ganaste=0;
var anchoTiles; //ancho medido en tiles
var altoTiles;   //alto medido en tiles
var fr=0;
var grid= new Array();
var ahora, antes;
var nivel;
var loading;
var arrayDinos=[];
var popup;
var coeficiente=0.1;
var audioVoz;

var popupFX=new Audio("popup.mp3");
var botonFX=new Audio("click.mp3");
var caminandoFX=new Audio("pasos.mp3");
caminandoFX.volume=0.35;
caminandoFX.loop=true;
popupFX.volume=0.5;




///////////// PANEL DE CONTROL
var mostrarFPS=false;
var anchoStage=640;
var altoStage=1136;
var tile=50;
var velLider=8;
var visibleTiles=false;
var dibujarGridEnConsola=true;
var dibujarPathAstar=false;
var escanearPiso=false; //esto deberia estar en un archivo aparte, no leerse cada vez q entras al jeugo
//si escanearPiso==false, se carga de grid.json.
//lo q guardo es 0,1, nada mas
var numFramesChangui=10;
var cantBolitas=0;
var distanciaDelLider=0;
//////////////////////////


//bolitas=new Array();
var pause=true;





function Lider(){
	obj=new lib.lider(); //disque extencion de la clase lib.lider
	
	obj.velocidad=velLider;
	obj.dinoTarget=null;
	obj.x=canvas.width/2;
	obj.y=canvas.height/2	
	
	obj.gotoAndStop("parado");
	obj.tileX=coord2Tiles(obj.x);
	obj.tileY=coord2Tiles(obj.y);
	obj.stepX=0;
	obj.stepY=0;	
	obj.estado=0;
	obj.direccion=[0,0]
	obj.path=[];
	obj.pathNum=0;

	

	obj.caminar=function(stepX,stepY){
		obj.stepX=stepX;
		obj.stepY=stepY;
		obj.x-=stepX*obj.velocidad;
		obj.y-=stepY*obj.velocidad;
	}
	obj.distDinos=function(){
		for(i=0; i<arrayDinos.length;i++){
			console.log(i)
			console.log(calcularDistanciaObj(obj, arrayDinos[i])+" "+i);
		}
	}

	return obj;
}



function teclaApretada(a)
{

		

	 if(a.key=="ArrowRight" || a.key=="d"){
		hero.direccion[0]=1;
		hero.gotoAndStop("e")
		
	}
	else if(a.key=="ArrowLeft" || a.key=="a"){
		hero.direccion[0]=-1;
		hero.gotoAndStop("o")
	}
	else if(a.key=="ArrowUp"  || a.key=="w"){
		hero.direccion[1]=-1;
		hero.gotoAndStop("n")

	}
	else if(a.key=="ArrowDown"  || a.key=="s"){
		hero.gotoAndStop("s")
		hero.direccion[1]=1;
	
	}

	
}

function teclaArriba(a){
	
	 if(a.key=="ArrowRight"  || a.key=="d"){
		hero.direccion[0]=0;
		
	}
	else if(a.key=="ArrowLeft"  || a.key=="a"){
		hero.direccion[0]=0;
	
	}
	else if(a.key=="ArrowUp"  || a.key=="w"){
		hero.direccion[1]=0;

	}
	else if(a.key=="ArrowDown"  || a.key=="s"){
		hero.direccion[1]=0;
	
	}
	if(hero.direccion[0]==0 && hero.direccion[1]==0) hero.gotoAndStop("parado")
}

function setupJuego(){
video.removeEventListener('ended', setupJuego);
	video.webkitExitFullscreen();
	video.src="4final.mp4";
		video.paused=true;
	$("#loading").show();
  pause=false; //arranca el gameloop
document.addEventListener("keyup", teclaArriba, false);

document.addEventListener("keydown", teclaApretada, false);



	console.log("game setup");



	nivel= new lib.nivel1();
	stage.addChild(nivel);
	ui= new lib.ui();
	stage.addChild(ui);
	ui.der.addEventListener("mousedown",function(){
		hero.direccion[0]=1;
		hero.gotoAndStop("e");
	})
	ui.der.addEventListener("pressup",function(){
		hero.direccion[0]=0;
		hero.gotoAndStop("parado")
	})
	ui.izq.addEventListener("mousedown",function(){
		hero.direccion[0]=-1;
		hero.gotoAndStop("o");
	})
	ui.izq.addEventListener("pressup",function(){
		hero.direccion[0]=0;
		hero.gotoAndStop("parado")
	})
	ui.ab.addEventListener("mousedown",function(){
		hero.direccion[1]=1;
		hero.gotoAndStop("s");
	})
	ui.ab.addEventListener("pressup",function(){
		hero.direccion[1]=0;
		hero.gotoAndStop("parado")
	})
	ui.arr.addEventListener("mousedown",function(){
		hero.direccion[1]=-1;
		hero.gotoAndStop("n");
	})
	ui.arr.addEventListener("pressup",function(){
		hero.direccion[1]=0;
		hero.gotoAndStop("parado")
	})

	stage.update();
		

	mitadX=canvas.width/2;
	mitadY=canvas.height/2;



	anchoTiles=Math.floor(nivel.escenario.piso.nominalBounds.width/tile);
	altoTiles=Math.floor(nivel.escenario.piso.nominalBounds.height/tile);
	hero=new Lider();


	console.log("fin game setup");
       musica.muted=false;
       musica.currentTime=0.1;

	


}



        function cerrar() {

            console.log("cerrar");
            
            video.onended = function() {
            
            		video.paused=true;
            	video.src="";
  				stage.removeAllChildren();
                
                console.log("termino el video de cierre");
                $("html").html("");
                	video.webkitExitFullscreen();
            }

            
   		  stage.removeAllChildren();
            stage.addChild(videocjs);
    

            //  createjs.Sound.stop("musica");
            //musica.autoplay=false;

            musica.muted = true;
            musica.pause();
            video.play();
        
        

              stage.update();

        }

function setupJuego2(){

	piso2Grid();
	
	nivel.escenario.objetos.addChild(hero);
	hero.x=tile*coord2Tiles(155);
	hero.y=tile*coord2Tiles(900);
	//nivel.x=mitadX-hero.x;
	//nivel.y=mitadY-hero.y;
	
	objs=nivel.escenario.objetos.children;
	for(i=0; objs.length>i;i++){
		objs[i].y+=Math.random()*4-2;
	}
	setTimeout(function(){	$("#loading").hide();}, 500);

}




function Spot(x,y, muro){
	this.x=x;
	this.y=y;
	this.h=0;
	this.f=0;
	this.g=0;
	this.muro=muro;


}

function init() {


            video = document.createElement('video');
            video.onended = setupJuego;
            video.src = '4intro.mp4';
            video.id = "video";



	canvas = document.getElementById("canvas");
	images = images||{};

	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);

	 isphone = false;
    if(document.URL.indexOf("http://") === -1 
        && document.URL.indexOf("https://") === -1) {
        isphone = true;
        console.log("ES UN TELEFONO");
    }else{
     	console.log("ESTAMOS EN LA COMPU...");
    }
   
	
}




function handleFileLoad(evt) {	
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
}




//////////////////////////////////////////////////////////////////////////////


function gameLoop(){



  try{
  	if(videocjs.scaleX!=1136 / video.videoWidth){
 		videocjs.scaleX = videocjs.scaleY = 1136 / video.videoWidth;
        console.log("ok!! videocjs.scaleX")
     }
  }catch(e){}



		antes=ahora;
		var d = new Date();
		 ahora = d.getTime();
		 fps=1000/(ahora-antes);
	
	
			
		

		if(fr==10){				
			setupJuego2();
		} 
		if(mostrarFPS) if(fr%60==0) console.log("fps: "+fps);
		
		if(fr>15){
			movCamara(nivel);			
			x=coord2Tiles(hero.x+hero.direccion[0]*hero.velocidad);
			y=coord2Tiles(hero.y+hero.direccion[1]*hero.velocidad);
			try{
				if(!grid[x][y].muro){
					if(hero.direccion[1]!=0 && hero.direccion[0]!=0){
						ratio=0.75;	
					} else{
						ratio=1;
					}
				hero.x+=hero.direccion[0]*hero.velocidad*ratio;
				hero.y+=hero.direccion[1]*hero.velocidad*ratio;
			}else{
				hero.gotoAndStop("parado");
			}
			
		}catch(e) {console.log(e)}
			
			if(fr%3==0){
				ordenarTipitos();
				if(ganaste==0 && calcularDistanciaObj(hero,nivel.escenario.objetos.papanoel)<110){
					ganaste=1;
					console.log("llegaste... 1s");
					setTimeout(cerrar, 1000);
				}

			}
			
	
		}
		
		stage.update();

		if(!pause) fr++;; //no suma fr
			




		
		
} //fin gameloop




function movCamara2(){

		nivel.x=mitadX-hero.x;
		limiteAlto=-nivel.escenario.piso.nominalBounds.height+canvas.height;

			if(hero.y>nivel.escenario.piso.nominalBounds.height-canvas.height/2){
				nivel.y-=parseInt((nivel.y-limiteAlto)/10);
				

			}else if(hero.y<canvas.height/2){
				nivel.y-=parseInt((nivel.y)/10);
			}else{
				nivel.y+=((mitadY-hero.y)-nivel.y)*coeficiente;
			}

			if(hero.x>nivel.escenario.piso.nominalBounds.width-canvas.width/2){
				nivel.x=-nivel.escenario.piso.nominalBounds.width+canvas.width;
			}else if(hero.x<canvas.width/2){
				nivel.x=0;
			}else{
				nivel.x+=((mitadX-hero.x)-nivel.x)*coeficiente;
			}

}


function movCamara(nivel){

			//mov camara
			//console.log(hero.x+" "+nivel.x);

			nivel.x=mitadX-hero.x;
			if(hero.y>nivel.escenario.piso.nominalBounds.height-canvas.height/2){
				nivel.y=-nivel.escenario.piso.nominalBounds.height+canvas.height;
			}else if(hero.y<canvas.height/2){
				nivel.y=0;
			}else{
				nivel.y=mitadY-hero.y;
			}

			if(hero.x>nivel.escenario.piso.nominalBounds.width-canvas.width/2){
				nivel.x=-nivel.escenario.piso.nominalBounds.width+canvas.width;
			}else if(hero.x<canvas.width/2){
				nivel.x=0;
			}else{
				nivel.x=mitadX-hero.x;
			}


}




function handleComplete(evt) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.

	//exportRoot = new lib.necromancer();

	

	stage = new createjs.Stage(canvas);
	   stage.enableMouseOver();
       createjs.Touch.enable(stage, true, false);

	//createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	//stage.addChild(exportRoot);
	//canvas.addEventListener("click", fullscreen);
	stage.snapToPixel=true;
	createjs.Ticker.setFPS(24);

	createjs.Ticker.addEventListener("tick", gameLoop);
	//createjs.Ticker.addEventListener("tick", stage);



            $("#empezar").show();
            $("#empezar").click(clickEmpezar) //click;



	
}

function clickEmpezar() {
                $("#empezar, #loading").hide();
                musica = new Audio('musica.mp3');
                musica.volume = 0.3;
                musica.muted = true;
                setTimeout(function() {
                    $("#empezar").hide();
                }, 300)
                musica.loop = true;
                musica.addEventListener('ended', function() {
                    this.currentTime = 0.1;
                    this.play();
                }, false);

                musica.play();
                video.play();   
                //  setTimeout(setup, video.duration*1000*1.2); //20% de changui
                videocjs = new createjs.Bitmap(video);

                stage.addChild(videocjs);
              

  			

            }

 function Comparator(a, b) {
   if (a[0] < b[0]) return -1;
   if (a[0] > b[0]) return 1;
   return 0;
 }




function fullscreen(){
           var el = document.getElementById('canvas');

           if(el.webkitRequestFullScreen) {
               el.webkitRequestFullScreen();
           }
          else {
             el.mozRequestFullScreen();
          }            
}


