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
        function compartir() {
            if(ultimaImgBajada!=null){
                  compartirEnFB(ultimaImgBajada);
            }else{
                bajar(true)
            }
        }

         function bajar(compartir) {
            console.log("bajar img");
            exportRoot.ui.visible = false;
            setTimeout(function() {

                $.ajax({
                    url: "server/image.php",
                    data: {
                        img: canvas.toDataURL("image/jpeg")
                    },
                    type: "post",
                    success: function(a) {
                        exportRoot.ui.visible = true;
                        console.log(a)
                        if (a != -1) {
                            ultimaImgBajada = a;
                             if(compartir) {
                                compartirEnFB(ultimaImgBajada);
                                }else{
                                  link = document.createElement("a");
                                    link.href = a;
                                    link.download = "duende.jpg";
                                    link.click();
                                }
                                         
                            exportRoot.ui.visible = true;
                           

                        } //a!=1
                    } //success
                }); //ajax
            }, 50); //timeout


            return 1;
        } //bajar
