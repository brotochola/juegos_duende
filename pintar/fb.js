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
          botonera.visible = false;


             var bitmap = new createjs.Bitmap("logoUni2.png");
           stage.addChild(bitmap);
          bitmap.scaleX=bitmap.scaleY=0.25;
          bitmap.y=521;
          bitmap.x=1011;



            setTimeout(function() {

                $.ajax({
                    url: "server/image.php",
                    data: {
                        img: canvas.toDataURL("image/jpeg")
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
                                   link.download = "Navidad Magica en Unicenter.jpg";
                                    link.click();
                             }
                                         
                          botonera.visible = true;
                           bitmap.visible=false;

                        } //a!=1
                    } //success
                }); //ajax
            }, 50); //timeout


            return 1;
        } //bajar
