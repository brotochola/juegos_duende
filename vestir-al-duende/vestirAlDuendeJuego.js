
        var duende;


        var arrPartes = [];
        var itemActivo = 0;
        var drawing, colorTexto;
        var audioclick = new Audio("click.mp3");
        var audioflechita = new Audio('flechitas.mp3');
        var link;
        var intro;
        var musica;
        var videoEnded=0;
        var lastShape, currentShape;
        var ctx;
        var loaded=0;
        var stage;
        var ultimaImgBajada=null;
        var flag=0
        var videocjs;
        var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;


	function listenersVideo(videoID){
		v=document.getElementById(videoID);
	        $("#"+videoID).on("timeupdate", function(event) {
	        		////alert(this.currentTime+" "+this.duration )
	            if ( this.currentTime >= this.duration * 0.98) {
                    //alert("el video terminó")
	                console.log("### TIMEUPDATE");	               
	                videoTermino();
	            }
	        }); //cierra timeupdate

	        v.addEventListener("abort", videoTermino); //cierra abort
	      v.addEventListener("webkitendfullscreen", videoTermino, false); //cierra webkitendfullscreen
	       v.addEventListener('ended', videoTermino, false);
          // v.addEventListener('canplaythrough', mostrarEmpezar, false);
           

        //   if(platform.os.family=="iOS"){
            console.log("es ios.. en 5s temrina de cargar")
            setTimeout(mostrarEmpezar,6000);
          
     
      



	
	} //listeners video

    function mostrarEmpezar(a){
         v.oncanplaythrough = null;
            console.log(a)
      if(videoEnded==0)  $("#empezar").hide().fadeIn(100);

    }

	function videoTermino(){
        //alert("function videoTermino()")
     
         video.removeEventListener('abort', playVideo);
           video.removeEventListener('webkitendfullscreen', playVideo);
            video.removeEventListener('ended', playVideo);
             video.removeEventListener('canplaythrough', mostrarEmpezar);


		 $("#video").hide();
	
            video.src="final.mp4";
         if(loaded==1)  {
            console.log("loaded=1; videotermino=0;")
         	setup();
            loaded=0;
            videoEnded=0; //sino se ejecuta mas de una vez
         }else{
         	videoEnded=1;
              $("#loading").show();
              //alert("el video termino pero todavia no cargo el juego")
         }
	}

        function playVideo(){

                //$("#video").show();
                 $("#empezar").hide();
                 video.play();

                    musica = new Audio('musica.mp3');
                    musica.volume = 0;
                    musica.muted=true;
                    musica.loop=true;
                    musica.addEventListener('ended', function() {
                        this.currentTime = 0.1;
                        this.play();
                    }, false);
                    musica.play();
        }

        function init() {
             video = document.createElement('video');
             video.onended=setup;
            video.src = 'intro_duende_vestir.mp4';
            video.id="video";
            window.onbeforeunload = guardarData;

          //  $("#empezar").click(playVideo);
//            $("#video")
		//	listenersVideo("video");

            canvas = document.getElementById("canvas");
            anim_container = document.getElementById("animation_container");
                dom_overlay_container = document.getElementById("dom_overlay_container");

               var loader = new createjs.LoadQueue(false);
            loader.installPlugin(createjs.Sound);
         
            loader.addEventListener("fileload", handleFileLoad);
            loader.addEventListener("complete", handleComplete);
            loader.loadManifest(lib.properties.manifest);


         
              

        }


        function handleFileLoad(evt) {
            if (evt.item.type == "image") {
                images[evt.item.id] = evt.result;
            }
        }

    function playSound(id, loop) {
    	console.log(id, loop)
    	return createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
    }






        function handleComplete(evt) {
            //alert("handle complete")

                console.log("handle complete")
           
            //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
            var queue = evt.target;
            var ssMetadata = lib.ssMetadata;
            for (i = 0; i < ssMetadata.length; i++) {
                ss[ssMetadata[i].name] = new createjs.SpriteSheet({
                    "images": [queue.getResult(ssMetadata[i].name)],
                    "frames": ssMetadata[i].frames
                })
            }
           


             stage = new createjs.Stage(canvas);
            exportRoot = new lib.vestir_al_duende();
                createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", gameLoop);

              $("#empezar").show();
                $("#empezar").click(function(){
                      $("#empezar, #loading").hide();
                    musica = new Audio('musica.mp3');
                     musica.volume = 0.3;
                     musica.muted=true;
                     setTimeout(function(){$("#empezar").hide(); }, 300)
                    musica.loop=true;
                     musica.addEventListener('ended', function() {
                          this.currentTime = 0.1;
                          this.play();
                      }, false);
                      musica.play();    
                      video.play();
                    //  setTimeout(setup, video.duration*1000*1.2); //20% de changui
                      videocjs=new createjs.Bitmap(video);
                        
                      stage.addChild(videocjs);
                    
           
                 })


      
        } // handle complete



        var scaling, width, height, frame;

    
        function gameLoop(){
           try{
                            if(videocjs.scaleX!=1136 / video.videoWidth){
                              videocjs.scaleX = videocjs.scaleY = 1136 / video.videoWidth;
                             console.log("ok!! videocjs.scaleX")
                          }
                        }catch(e){}


          stage.update();



        }


        /*
        function initZim(){


        	 scaling = "fit"; // this will resize to fit inside the screen dimensions
        	 width = 1136;
        	 height = 640;

        	// as of ZIM 5.5.0 you do not need to put zim before ZIM functions and classes
        	 frame = new Frame(scaling, width, height);
        	 frame.on("ready", handleCompleteZim);
        }
        function handleCompleteZim(){
        	  zog("ready from ZIM Frame"); // logs in console (F12 - choose console)

             stage = frame.stage;
            var stageW = frame.width;
            var stageH = frame.height;
            frame.outerColor = "#444";
            frame.color = "#ddd";

            // see http://zimjs.com/code/learn.html for video and code tutorials
            // see http://zimjs.com/code/docs.html for documentation
            // see http://zimjs.com/code/bits.html for 64 Interactive Media techniques

            // put your code here (you can delete this sample code)

          	duende=new lib.duende();
          	stage.addChild(duende);
           // duende.center(stage).drag();


            stage.update(); // this is needed to show any changes
        }

        */

        function fullscreen() {
            console.log("fullscreen")
            var el = document.getElementById('canvas');

            if (el.webkitRequestFullScreen) {
                el.webkitRequestFullScreen();
            } else {
                el.mozRequestFullScreen();
            }
        }


       
/*
function introTermino(){
      createjs.Sound.stop();
      console.log("intro temrino");
      musica.muted=false;  
        
         stage.addChild(exportRoot);
         stage.update();
         stopAll();    
        stage.removeChild(intro);  
     
      
} //intro termino

*/





        function setup() {

                video.removeEventListener('ended', setup);

            stage.enableMouseOver();
              createjs.Touch.enable(stage, true, false);

            //alert("setup!")
            
         /*   setTimeout(function(){     
                 $("#empezar").show();          
                $("#loading").hide();
             },300)*/
         
            video.webkitExitFullscreen();
            stage.removeChild(videocjs);    
           
              console.log("setup")
             stage.addChild(exportRoot);
               video.src="final.mp4";
             musica.muted=false;
            musica.currentTime=0.1;

               
      
           
          //  stage.addChild(exportRoot);
     
    

            arrPartes = [
                [exportRoot.duende.cabeza.cara.sombrerosFront, exportRoot.duende.cabeza.sombrerosBack], exportRoot.duende.cabeza.cara.anteojos, [exportRoot.duende.bufanda, exportRoot.duende.bufanda2, exportRoot.duende.bufandaAtras],
                [exportRoot.duende.torso.remeras, exportRoot.duende.brazoL, exportRoot.duende.brazoR],
                [exportRoot.duende.pataL_atras, exportRoot.duende.pataR_atras, exportRoot.duende.pataL, exportRoot.duende.pataR, exportRoot.duende.torso.cadera],
                [exportRoot.duende.pieL, exportRoot.duende.pieR]
            ];

            stage.update();
            
            cargarData();

            //exportRoot.duende.cabeza.anteojos.gotoAndStop(exportRoot.duende.cabeza.anteojos.totalFrames-1);
           // exportRoot.ui.cursor = "pointer";

            //stage.addEventListener("click", fullscreen)
            exportRoot.ui.left.addEventListener("mousedown", function() {
                cambiar(-1)
            })
            exportRoot.ui.right.addEventListener("mousedown", function() {
                cambiar(1)
            })

            exportRoot.ui.botAbajo1.addEventListener("mousedown", function() {
                setearItem(1)
            })
            exportRoot.ui.botAbajo2.addEventListener("mousedown", function() {
                setearItem(2)
            })
            exportRoot.ui.botAbajo3.addEventListener("mousedown", function() {
                setearItem(3)
            })
            exportRoot.ui.botAbajo4.addEventListener("mousedown", function() {
                setearItem(4)
            })
            exportRoot.ui.botAbajo5.addEventListener("mousedown", function() {
                setearItem(5)
            })
            exportRoot.ui.botAbajo6.addEventListener("mousedown", function() {
                setearItem(6)
            })

            exportRoot.ui.bajar.addEventListener("mousedown", bajar);
            exportRoot.ui.compartir.addEventListener("mousedown", compartir);
            exportRoot.ui.cerrar.addEventListener("mousedown", cerrar)

            exportRoot.ui.botAbajo1.gotoAndStop(1);
            //setTimeout(stopAll,50)


        }

        var dataGuardada = [0, 0, 0, 0, 0, 0];



        function cerrar() {
        	
            console.log("cerrar");
            
              video.onended=function(){
                video.webkitExitFullscreen();
                console.log("termino el video de cierre");
                }

             stage.addChild(videocjs);

           
            musica.muted=true;
            musica.pause();
           video.play();
            stage.removeChild(exportRoot);
 		

        }


        function cargarData() {
            console.log("cargando data de local storage");
            try {
                a = JSON.parse(localStorage["duende"]);
                if (a.length == 6) dataGuardada = a;
                for (i = 0; i < a.length; i++) {
                    if (arrPartes[i].length == undefined) {
                        parte = arrPartes[i];
                        parte.gotoAndStop(a[i])
                    } else {
                        for (j = 0; j < arrPartes[i].length; j++) {
                            parte = arrPartes[i][j];
                            parte.gotoAndStop(a[i])
                        } //for

                    } //if
                } //for
            } catch (e) {}
        } //cargarDAta


        function guardarData() {
            localStorage["duende"] = JSON.stringify(dataGuardada);
        }


        function setearItem(q) {
            audioclick.play();
            eval("exportRoot.ui.botAbajo" + (itemActivo + 1)).gotoAndStop(0);
            //console.log("setearItem", q);
            itemActivo = q - 1;
            eval("exportRoot.ui.botAbajo" + q).gotoAndStop(1);
            //console.log(arrPartes[itemActivo])

        }


        function cambiarParte(parte, q) {
            audioflechita.play();
            console.log(parte.currentFrame);
            //console.log(parte.currentFrame+q, parte.totalFrames-1)
            if (parte.currentFrame + q == parte.totalFrames) {
                console.log("yendo al frame 0")
                parte.gotoAndStop(0);
            } else {
                if (parte.currentFrame + q == -1) {
                    console.log("yendo al frame final")
                    parte.gotoAndStop(parte.totalFrames - 1);
                } else {
                    console.log("yendo al frame " + parseInt(parte.currentFrame + q))
                    parte.gotoAndStop(parte.currentFrame + q);
                }
            }

            //excepciones


            exportRoot.duende.pataR.gotoAndStop(exportRoot.duende.torso.cadera.currentFrame);
            exportRoot.duende.pataL.gotoAndStop(exportRoot.duende.torso.cadera.currentFrame);
            exportRoot.duende.pataL_atras.gotoAndStop(exportRoot.duende.torso.cadera.currentFrame);
            exportRoot.duende.pataR_atras.gotoAndStop(exportRoot.duende.torso.cadera.currentFrame);
            //console.log(exportRoot.duende.pieL.currentFrame)


            dataGuardada[itemActivo] = parte.currentFrame;
            guardarData();

        }




        function cambiar(q) {
            console.log(arrPartes[itemActivo])
            if (arrPartes[itemActivo].length == undefined) {
                parte = arrPartes[itemActivo];
                cambiarParte(parte, q);
            } else {
                for (i = 0; i < arrPartes[itemActivo].length; i++) {
                    parte = arrPartes[itemActivo][i];
                    cambiarParte(parte, q);
                }

            }

            console.log("cambiar", q);

        }

        function stopAll() {
            for (i = 0; i < arrPartes.length; i++) {
                if (arrPartes[i].length == undefined) {
                    parte = arrPartes[i];
                    parte.gotoAndStop(0)
                } else {
                    for (j = 0; j < arrPartes[i].length; j++) {
                        parte = arrPartes[i][j];
                        parte.gotoAndStop(0)
                    }

                }
            }


        }
    