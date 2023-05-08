(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.Bitmap14copy = function() {
	this.initialize(img.Bitmap14copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2763,1312);


(lib.botonGOMA = function() {
	this.initialize(img.botonGOMA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,231);


(lib.botonColorText = function() {
	this.initialize(img.botonColorText);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,231);


(lib.botonFlechaverde = function() {
	this.initialize(img.botonFlechaverde);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,233,231);


(lib.botones = function() {
	this.initialize(img.botones);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,1167);


(lib.grosores = function() {
	this.initialize(img.grosores);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,176);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.texto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.texto = new cjs.Text("df adf adfafdf dffdfsdfsfasdf sdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdfasdfaf\nadfaa afaf dadf adf adf adf ssdfsdfsdfsfsdfsff", "26px 'Baloo'");
	this.texto.name = "texto";
	this.texto.lineHeight = 34;
	this.texto.lineWidth = 468;
	this.texto.parent = this;
	this.texto.setTransform(412.4,171.8,1,1,-2);

	this.timeline.addTween(cjs.Tween.get(this.texto).wait(1));

}).prototype = getMCSymbolPrototype(lib.texto, new cjs.Rectangle(410.3,153.4,484.2,372.7), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// boton-ColorText.png
	this.instance = new lib.botonColorText();
	this.instance.parent = this;
	this.instance.setTransform(-10,73,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.botonGOMA, null, new cjs.Matrix2D(0.5,0,0,0.5,-75.4,-57.7)).s().p("ApTJCIAAyCISnAAIAASCg");
	this.shape.setTransform(39.5,414.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.botones, null, new cjs.Matrix2D(0.488,0,0,0.488,-42.7,-48.3)).s().p("AmqHjIAAvFINVAAIAAPFg");
	this.shape_1.setTransform(44,37.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.botones, null, new cjs.Matrix2D(0.488,0,0,0.488,-42.7,-236.3)).s().p("AmqHHIAAuNINVAAIAAONg");
	this.shape_2.setTransform(44,223);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(img.botones, null, new cjs.Matrix2D(0.488,0,0,0.488,-42.7,-330.4)).s().p("AmqHmIAAvLINVAAIAAPLg");
	this.shape_3.setTransform(44,323.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(img.botones, null, new cjs.Matrix2D(0.488,0,0,0.488,-42.7,-427.6)).s().p("AmqHmIAAvLINVAAIAAPLg");
	this.shape_4.setTransform(44,512.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(img.botones, null, new cjs.Matrix2D(0.488,0,0,0.488,-42.7,-522.9)).s().p("AmqHSIAAujINVAAIAAOjg");
	this.shape_5.setTransform(44,612.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.1,-11,119.2,670);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.149)").s().p("AmWGHIAAsNIMtAAIAAMNg");
	this.shape.setTransform(40.7,39.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mascara = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhDtgn4MCFfgDbMAB8BR9MiFcAEqg");
	this.shape.setTransform(580.1,329.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mascara, new cjs.Rectangle(146.7,52.3,866.8,554.5), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,204,0)").s().p("EgzjAr3MAAAhXtMBnHAAAMAAABXtg");
	this.shape.setTransform(576.3,359.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(246.3,78.6,660,561.5), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.grosores, null, new cjs.Matrix2D(0.488,0,0,0.488,-148.6,-42.9)).s().p("A3NGtIAAtaMAgXAAAIAABCIOEAAIAALbIsGAAIAAA9g");
	this.shape.setTransform(148.6,43);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,297.2,85.9), null);


(lib.grosores_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.grosores_1, null, null);


(lib.pincel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.fondo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap14copy();
	this.instance.parent = this;
	this.instance.setTransform(-81,0,0.498,0.488);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fondo, new cjs.Rectangle(-81,0,1375.9,639.8), null);


(lib.cerrar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.botonFlechaverde();
	this.instance.parent = this;
	this.instance.setTransform(-13,-10,0.412,0.412);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cerrar, new cjs.Rectangle(-13,-10,96.1,95.3), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.grosor0 = new lib.Symbol15();
	this.grosor0.parent = this;
	this.grosor0.setTransform(276.7,39.1,0.921,1,0,0,0,40.8,39.1);
	new cjs.ButtonHelper(this.grosor0, 0, 1, 2, false, new lib.Symbol15(), 3);

	this.grosor1 = new lib.Symbol15();
	this.grosor1.parent = this;
	this.grosor1.setTransform(199.1,42.5,0.786,1,0,0,0,40.6,39.1);
	new cjs.ButtonHelper(this.grosor1, 0, 1, 2, false, new lib.Symbol15(), 3);

	this.grosor3 = new lib.Symbol15();
	this.grosor3.parent = this;
	this.grosor3.setTransform(129.7,42.5,0.786,1,0,0,0,40.6,39.1);
	new cjs.ButtonHelper(this.grosor3, 0, 1, 2, false, new lib.Symbol15(), 3);

	this.grosor5 = new lib.Symbol15();
	this.grosor5.parent = this;
	this.grosor5.setTransform(53.1,42.5,1,1,0,0,0,40.6,39.1);
	new cjs.ButtonHelper(this.grosor5, 0, 1, 2, false, new lib.Symbol15(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.grosor5},{t:this.grosor3},{t:this.grosor1},{t:this.grosor0}]}).wait(1));

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(158.6,43,1,1,0,0,0,158.6,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,314,85.9), null);


(lib.botGrosor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer 1
	this.instance = new lib.Tween5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(44,44);

	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(44,44,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:0.9,scaleY:0.9},3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.botonera = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.botonColor = new lib.Symbol15();
	this.botonColor.parent = this;
	this.botonColor.setTransform(76.4,320.5,1.08,1.105,0,0,0,40.6,39.1);
	new cjs.ButtonHelper(this.botonColor, 0, 1, 2, false, new lib.Symbol15(), 3);

	this.goma = new lib.Symbol15();
	this.goma.parent = this;
	this.goma.setTransform(72.3,409.7,1.08,1.105,0,0,0,40.6,39.1);
	new cjs.ButtonHelper(this.goma, 0, 1, 2, false, new lib.Symbol15(), 3);

	this.bajarImg = new lib.Symbol15();
	this.bajarImg.parent = this;
	this.bajarImg.setTransform(72.3,582.4,1.08,1.105,0,0,0,40.6,39.1);
	new cjs.ButtonHelper(this.bajarImg, 0, 1, 2, false, new lib.Symbol15(), 3);

	this.compartir = new lib.Symbol15();
	this.compartir.parent = this;
	this.compartir.setTransform(76.2,496,1.08,1.105,0,0,0,40.6,39.1);
	new cjs.ButtonHelper(this.compartir, 0, 1, 2, false, new lib.Symbol15(), 3);

	this.pincel = new lib.Symbol15();
	this.pincel.parent = this;
	this.pincel.setTransform(77.7,221.3,1.08,1.105,0,0,0,40.6,39.1);
	new cjs.ButtonHelper(this.pincel, 0, 1, 2, false, new lib.Symbol15(), 3);

	this.colorTexto = new lib.Symbol15();
	this.colorTexto.parent = this;
	this.colorTexto.setTransform(77.7,139.1,1.08,1.105,0,0,0,40.6,39.1);
	new cjs.ButtonHelper(this.colorTexto, 0, 1, 2, false, new lib.Symbol15(), 3);

	this.texto = new lib.Symbol15();
	this.texto.parent = this;
	this.texto.setTransform(76.4,48,1.08,1.105,0,0,0,40.6,39.1);
	new cjs.ButtonHelper(this.texto, 0, 1, 2, false, new lib.Symbol15(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.texto},{t:this.colorTexto},{t:this.pincel},{t:this.compartir},{t:this.bajarImg},{t:this.goma},{t:this.botonColor}]}).wait(1));

	// Symbol 18
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(71,282.3,0.92,0.92,0,0,0,42.8,284.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// grosoresGoma
	this.grosoresGoma = new lib.Symbol13();
	this.grosoresGoma.parent = this;
	this.grosoresGoma.setTransform(177.3,401.5,0.92,0.92,180,0,0,158.5,42.8);

	this.timeline.addTween(cjs.Tween.get(this.grosoresGoma).wait(1));

	// grosoresPincel
	this.grosoresPincel = new lib.Symbol13();
	this.grosoresPincel.parent = this;
	this.grosoresPincel.setTransform(179.8,228.4,0.92,0.92,180,0,0,158.5,42.8);

	this.timeline.addTween(cjs.Tween.get(this.grosoresPincel).wait(1));

	// cerrar
	this.cerrar = new lib.cerrar();
	this.cerrar.parent = this;
	this.cerrar.setTransform(1093.7,50,1,1,0,0,0,34.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.cerrar).wait(1));

}).prototype = getMCSymbolPrototype(lib.botonera, new cjs.Rectangle(13.1,4.5,1129.2,621.8), null);


(lib.pintar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// botonera
	this.botonera = new lib.botonera();
	this.botonera.parent = this;
	this.botonera.setTransform(-10.9,3.6);

	this.timeline.addTween(cjs.Tween.get(this.botonera).wait(1));

	// Layer 12
	this.txt = new lib.texto();
	this.txt.parent = this;
	this.txt.setTransform(81.5,232.7,1,1,0,0,0,236,178.2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg4PgjzMCFfgDbMAB7BR9MiFcAEqg");
	mask.setTransform(506.7,303.4);

	// supDibujo
	this.supDibujo = new lib.Symbol11();
	this.supDibujo.parent = this;
	this.supDibujo.setTransform(-10.9,3.6);

	var maskedShapeInstanceList = [this.supDibujo];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.supDibujo).wait(1));

	// supDibujoCache
	this.supDibujoCache = new lib.Symbol11();
	this.supDibujoCache.parent = this;
	this.supDibujoCache.setTransform(-10.9,3.6);

	var maskedShapeInstanceList = [this.supDibujoCache];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.supDibujoCache).wait(1));

}).prototype = getMCSymbolPrototype(lib.pintar, new cjs.Rectangle(2.2,8.1,1129.1,621.8), null);


// stage content:
(lib.carta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ui
	this.instance = new lib.pintar();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.fondo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(688,319.9,1,1,0,0,0,688,319.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(487,320,1375.9,643.6);
// library properties:
lib.properties = {
	width: 1136,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap14copy.jpg?1510336401210", id:"Bitmap14copy"},
		{src:"images/botonGOMA.png?1510336401210", id:"botonGOMA"},
		{src:"images/botonColorText.png?1510336401210", id:"botonColorText"},
		{src:"images/botonFlechaverde.png?1510336401210", id:"botonFlechaverde"},
		{src:"images/botones.png?1510336401210", id:"botones"},
		{src:"images/grosores.png?1510336401210", id:"grosores"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;