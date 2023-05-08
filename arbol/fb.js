//Conectarse al api de facebook
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = function () {
        var appId = '152356695367845';
        FB.init({
            appId: appId,
            xfbml: true,
            version: 'v2.9'
        });
    };

function compartirEnFB(link){
          /* event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();*/

                // Open FB share popup
				FB.ui({
    				method: 'feed',
    				display: 'popup',
    				mobile_iframe:true,
    				link: link,
				}, function(response){});
       
	}

var ultimaImgBajada=null;
        function compartir(e) {
            if(ultimaImgBajada!=null){
                  compartirEnFB(ultimaImgBajada);
            }else{
                bajar(e, true)
            }
        }

         function bajar(e, cmp) {
            console.log(e, cmp)
            console.log("bajar img");
            exportRoot.objetos.visible = false;
            exportRoot.cerrar.visible=false;
                 var bitmap = new createjs.Bitmap("logoUni2.png");
           stage.addChild(bitmap);
          bitmap.scaleX=bitmap.scaleY=0.25;
          bitmap.y=521;
          bitmap.x=1011;


    

            setTimeout(function() {

                var nuevoCanvas = document.createElement("canvas");
                 nuevoCanvas.width=640;
                 nuevoCanvas.height=640;

                 image_data=canvas.getContext("2d").getImageData(496, 0, 640, 640);
                 nuevoCanvas.getContext("2d").putImageData(image_data, 0, 0);
                var imagen= nuevoCanvas.toDataURL("image/jpeg");


                $.ajax({
                    url: "server/image.php",
                    data: {
                        img: imagen                     
                    },
                    type: "post",
                    success: function(a) {
                       
                        console.log(a)
                        if (a != -1) {
                            ultimaImgBajada = a;
                             if(cmp==true) {
                                compartirEnFB(ultimaImgBajada);
                             }else{
                                  link = document.createElement("a");
                                    link.href = a;
                                    link.download = "Arbol Navidad Magica Unicenter.jpg";
                                    link.click();
                             }
                                         
                            exportRoot.objetos.visible = true;
                            exportRoot.cerrar.visible=true;
                           bitmap.visible=false;

                        } //a!=1
                    } //success
                }); //ajax
            }, 50); //timeout


            return 1;
        } //bajar
