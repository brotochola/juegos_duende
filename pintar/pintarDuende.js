(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bajar = function() {
	this.initialize(img.bajar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,179);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1976,979);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1029,607);


(lib.col = function() {
	this.initialize(img.col);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,179);


(lib.compartir = function() {
	this.initialize(img.compartir);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,180);// helper functions:

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


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,1029,607), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.compartir();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,87,90), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bajar();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,87,89.5), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.col();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,87,89.5), null);


(lib.dibujo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFFH/QjWhFj0AAQmKAAnmERIgfgYQgDgUgHgZQgHgUAAgKQABg2AygzQAbgcBUg6QBPg2AhgkQAyg4AAhAQAAhXg3hCQg4hDhQAAQglAAg/AXQhKAbhDAtQi1B5gcCrQhOhZgnhLQgkhEAAgzQAAhIBbhKQAygpCVhYQCOhUA6g0QBbhRgBhTQAAhWgYgxQgbgmgGgMQCqghDAgWQC0gUBnAAQGVAAF2BrQGPByErDbQBXBBBdBTICRCIQBcBWAAAEQAAAIgmA3QgKAOg+BKQgcifinh6QhDgyhIgdQhFgcguAAQhPAAg6BFQg3BBABBPQgBBBAzA7QAiAnBOA4QBWA/AZAZQAzAyAAAxQAAAogIATQgJAWgbAYQhsBMh/BgQk7imi6g8g");
	this.shape.setTransform(1436.1,210.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EABrAp7QAAjKh8h+QiPiPj+AVQAGgiAJhIQAJhHAAgNQAAjshkjkQhNiyh+iUIAA3RIhdgtIgji1QgRhbgYhJQg9i4jPmHQCVi9AvhiQA7h/AAiqQAAi+hdivQhji8jajAQCviTBAgmQBkg9ByAAQFEAAEsGvQD6FoEZLjIBECyQAUAzAvCKIB2FoIBmEzQBHDUAAAPIgRCQQgQCiAABfQAAGsCPGJQCWGYEFDyIAMCeQAEAnAAAvQAAB7gXBaQgXBeg6BjQgMAVgdAiQglAqgeARQh6BKgYAAIh3gIQgbAAhEAVQg8ASgXALQgIAEh2ACImaAEg");
	this.shape_1.setTransform(1735.5,381.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AFKehQlFjCjoj4QgYgZhGhVQhDhPgPgVQiDithYjTQi3m5AAnaQgBhzARiRQANhzAaijQAZicBpjaQByjtCijSQDckdEFjDQFAjtFdhMMAAABDNQivgTktizg");
	this.shape_2.setTransform(1887.8,422.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 8
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJBrQg5gmhUhNIABlOQBOAlBXDGQBYDHAvD7Qh8jHgkglg");
	this.shape_3.setTransform(1282.5,870.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 9
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AguAvQgTgTAAgcQAAgaATgUQAUgTAaAAQAbAAAUATQATAUAAAaQAAAcgTATQgUATgbAAQgaAAgUgTg");
	this.shape_4.setTransform(1275.1,822.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 10
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ApjF9QgugdguiQQgriMgBhhQABhoA4ibIBYjXQBGgFC+gTQDGgRC5AAQBEABDfANQCtAKBeAHQgXAtARAlQAHAOAvA5QBkB2AACzQABEwi3CcQiuCUlGgBQmmAAj+ijgAEFlkQAgAHBFAPQATAAAKgNQAIgLAAgNQAAgagegLIhPgRQihghgmAAQhCAAhrAbQh2AcAAAbQgBAWAMAKQALAKAPAAIB2ghQBdgSArAAQAJAAChAdg");
	this.shape_5.setTransform(428.6,878.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 11
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AqdBdQgDgVAAgIQAAgxAxgoQA/g1B+gLICvgTQCZgOB1AAQAsAABlAIQBlAIA4AAQBZAABAAPQAkAJA4ASQBGAaAXAXQAWAWAAAwQAAAcgHARQgIAVgRAAQhvgJiEgKQkGgTiUAAQiKAAizAOQjSASh8AIQgDgIgDgWg");
	this.shape_6.setTransform(433.9,808.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 12
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ACPH2QiMgPgugWQgxgOmlhuQiigrgjgiQg/g8glhMQgtheAAhoQAAhXArh1QAnhoAogzQA/A6AqAQQA7AXB9AAQA1AACIgfQDPgvAsgIIEqg2QDNglAYgHQDCCuA+BvQBNCJAADcQAAEEh8BQQg0AhhVALQg3AHh0AAQiQAAiJgPgACcm6QhpAMhGAXQjiBQhFAqQgkAWAAAYQAAARAQAKQAKAHAJAAQAEAABhgzQBsg5BqgXQA3gNBGgMQBjgQA5AAQAQAACCAQQCCAQALAAQAQAAAJgMQAJgLAAgQQAAgYgbgIQgNgDhWgKIhagMQhLgJgeAAQg1AAhIAIg");
	this.shape_7.setTransform(603.9,854);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer 13
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AlZB0QhCgJgwgQIgBhRQCpgSCaADQCngLGohoIAHB8QleApikAtQhIATgRAEQgtAHhQABIgMAAQgYAAgqgFg");
	this.shape_8.setTransform(592.2,770.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer 14
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhVifQCqAAAAgCIABA4IgFgBQgogMgLAAQgsAAgaBUQgMAqgDArQAAAYALAsQABAGAFALQAEAJAAAFQAAAIgJACQgKACggAAg");
	this.shape_9.setTransform(530.2,788.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer 16
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AnPAMQAAgwAFgnQAIhEAEg5QC+BPEjAvQDaAjDQAJQABDOABAAQj+gXiBAAQiUgBiJAMQiUANhkAYQgKiZAAgkg");
	this.shape_10.setTransform(427,773.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer 17
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ai5B3IAAjtIFzAAIAAAfIgPCBIgCBNg");
	this.shape_11.setTransform(356.7,759.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// Layer 18
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ACHIiQhpgOhUgXQAmg6AVhPQAVhMAAhOQAAiXgvhwQgshshchRIhvhhQg4gxgIgWQgBgFhBhRQhAhPgLgMICPAjIB3AdIBtAcQCLAaE/AhIgDA4IAICfQAAA9hpBvIhIBIQghAgAAAGQAAAMAFAMIEqHXQAJAMAKAEQjTgQh/gSg");
	this.shape_12.setTransform(413.9,639.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	// Layer 19
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhlGeQhfgah8gbIhggYQgJgCgKgHQgSgMAAgVIgbieQgJguhBhuQhGh2grgdQAGguAiibIAeiBQHcB+FvA7QCZAZENAaQgYAeg5BlQg+BvgOAwQgKAjgbBSQgbBQgBAAQgCAAgMBIQgOBdgMBpQmPg7hsgYg");
	this.shape_13.setTransform(410.1,540.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer 20
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AALEaQg6hPgnhBQiBjZAAjaIAGhKQAsAGAZAGQAYAGA/AVQAsAOBqBEQCABRgKAhQgVA5gkCAQguCkgkCfQgHgOg6hMg");
	this.shape_14.setTransform(356,444.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	// Layer 21
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhSglQCngOgCAEIgzBgQgIgDhqhTg");
	this.shape_15.setTransform(377.8,417.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

	// Layer 22
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgiAjQgPgOAAgVQAAgUAPgOQAOgPAUAAQAVAAAOAPQAPAOAAAUQAAAVgPAOQgOAOgVAAQgUAAgOgOg");
	this.shape_16.setTransform(457.3,417.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

	// Layer 23
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AmiHpQAXgVA3g8IAyg3QAYggAYgzQAYgzAAgUIgIigQAAguAZijQAWiMAIgiQAfhoAsh0QAEgLAphLQAohMABAAQAGAAAzhWQAWghANgIIA3gfQBAgcBCAAQBiAAAhBCQAVArAABsQAAAMgyAyQg3A2gQAxQgmB2gLDnQgFB5gFCaQglFThuDmQhsDniGATg");
	this.shape_17.setTransform(479.2,598.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(1));

	// Layer 24
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgiAjQgOgOAAgVQAAgUAOgOQAOgPAUAAQAUAAAPAPQAPAOAAAUQAAAVgPAOQgPAOgUAAQgUAAgOgOg");
	this.shape_18.setTransform(554.7,417.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(1));

	// Layer 25
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AjlB3IAAjtIHLAAIAADtg");
	this.shape_19.setTransform(229.3,759.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(1));

	// Layer 26
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AjlhlIHLAAIAABsQjbA4g3AMQhdAUhcAHg");
	this.shape_20.setTransform(229.3,702.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

	// Layer 27
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AjlgBQCHgMAjgHIEhhHIAABZQgXAGg1AMQhUAUhSAQIhwAVQhRAQgYADg");
	this.shape_21.setTransform(229.3,720.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1));

	// Layer 28
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AjeIXQglgUiliAQgtgjgYguIgmheQgshoAAhqQgBjwCrioQCoioDtAAQCbAABUA2QA3AjCBB3QBJA7AoBjQAoBmAACDQABB+hAB1QgsBPg3AwIhRBHQgrAlgmAUQhgA0ilAAQiHAAhOgog");
	this.shape_22.setTransform(351.5,658.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));

	// Layer 29
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AjlB3IAAjtIHLAAIAADtg");
	this.shape_23.setTransform(229.3,673.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));

	// Layer 30
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AliPhIAA4/QgBicBMhyQBChiBNgSQicDJAAELQAACCBVBlQAuA2BwBOIAfAVQAhAZAQAXQACAFAgAiQAnApAgAYQA0AqBLAuQBJAtAUADIAANNgAiLCkQg5A6AABQQAABSA5A5QA6A5BQAAQBRAAA5g5QA5g5AAhSQAAhRg5g5Qg6g5hQAAQhQAAg6A5gAhXGFQgkgkAAgzQAAgyAkgkQAjgkAzAAQAyAAAkAkQAkAkAAAyQAAAzgkAkQgkAkgyAAQgzAAgjgkg");
	this.shape_24.setTransform(295.2,705.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

	// Layer 31
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ak5HwQhUg6gog/QgshDAAhTQABhCAPhWQAOhOAHAAIAyhiQAyhjAIAAQAEAAALgbQANghApgVIBMg4QBOg5AigPQB5g3A3gQQBBgTBOAAQAPAAA1ARIBFAZQAMADBcBuQhggVhTAAQkLAAi+C8QjAC9ABEPQgBA4ANBBQANA9AQAng");
	this.shape_25.setTransform(321.3,630.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1));

	// Layer 32
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ai7B3IAAjtIF3AAIAADtg");
	this.shape_26.setTransform(112.4,759.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));

	// Layer 33
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AiCAxQjFg8g+iBQCkBZDtAxQC/AmC7AEIAABlQmBgxiHgrg");
	this.shape_27.setTransform(92.2,716.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));

	// Layer 34
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AlKAAQAJgLAygCQAagBBXgIQBcgJA0gHQAUgCBlgVQBfgUAFAAICFA0QgyAkjNAhQjNAijbAIQAAhGAJgMg");
	this.shape_28.setTransform(34,664);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

	// Layer 35
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AjagKQAFj1AKAUQAdA0AfAsIA6BDQA0A8gEAAQAfAkBMBAQBZBJA9AeQhbARhGAIQh3APigAHQAAh/ACh5g");
	this.shape_29.setTransform(22.1,631.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1));

	// Layer 36
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ai7B3IAAjtIF3AAIAADtg");
	this.shape_30.setTransform(112.4,673.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1));

	// Layer 37
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Aj5BxQighHAAhPQAAgdAMgUQAJgPAEAAQACAAAhgbQAmghAXgOQDJhEAEgBQAKAAAiAJQAADrADAKIAIAMIAMAIQAFACA3AAIFuABIAADTQm8gljXheg");
	this.shape_31.setTransform(90.3,689.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1));

	// Layer 38
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AktNdIAA3CQAAgLAohsQAMgiAzgjQAwgbAAgBQAAgGAbgIIAsgKQAggHAdAAQCDAABRA3QBVA5AXBzIAAXWgAiXAhQg5A5AABRQAABRA5A5QA6A5BRAAQBQAAA5g5QA5g5AAhRQAAhRg5g5Qg5g5hQAAQhRAAg6A5gAhjEBQgkgkAAgyQAAgzAkgkQAkgkAzAAQAxAAAkAkQAkAkAAAzQAAAygkAkQgkAkgxAAQgzAAgkgkg");
	this.shape_32.setTransform(168.8,718.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(1));

	// Layer 39
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ah0nwQAEisALgFIAqgOQAOgGAtgJQALAAAeAKIBTAdIAAUGQgugGhOAaQhKAZgxAjQAAuVAHkag");
	this.shape_33.setTransform(155.3,562.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(1));

	// Layer 40
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AkXCOQAmhvAaglQAuhoA0g8QBfhtCdguQBiBnAqBfQAxBvACCcIgBAEIgggKIgagJQAAgGgLgBIgYgCQgSgEgKAAQiNAAiEA9QhcApikBwQAGhCAoh2g");
	this.shape_34.setTransform(324.9,561.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1));

	// Layer 41
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AqaZzQgfgDgOgEQg6gPjahnQh4g5hvh0QhRhVg4hbQgGgKgwhoQgeg/gagHIABgqQADgrAFAAQAJgDAFgEQAGACADgHIAZhKQBwlBAphwQEQroBejjQDkofDxkaQDZj/C6AAQA1AAB4AwQBbAlBLAnQAzAcBJAgQA5AgA1BFQCaDJBvDSQBrDIBrEaQBJDBAtCEIBtE/QATA5C5IAQgBAQgTAxIgXA5IgLAwQgOA1gIAnQgGAkgGAOQgKAYgVAEQgeAIgPAFQgYAKgeAVQgpAcgaAgQhTBsgXBmQgMA0gFBKIglAWQgtAfiFA8Ij2AAQgEhlhihYQhjhZhwgDIAA0jQgIgkhXgeQhGgZgfABQglAAhJAaQhZAfADAhIAAXMQgjBdgGATQmjAAgLAEIgMAIQgBABgEALQgFAMAAAFQgkgJgdgDg");
	this.shape_35.setTransform(146.6,491.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

	// Layer 42
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("ArDgBUAAMgm7AAdAADQAvAKAuALQALACBQAeQBgAkA2AcQBTAsB4BXQBrBNApAqQEIDwBnDaQAcA8AYBOQAUBBALAPQB6F5BGHnQA2F3gCDHQjQANjTDqQjXDujJHCQjJHCiXGoQhVDviaHCQAAzeAGzdg");
	this.shape_36.setTransform(71.4,319.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(1));

	// Layer 43
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgtgKQhRhgiJh/QAhgbA+gRQAxgOAdAAQCOAABkBcQBwBnAACqQAAAtgNAvQgLAtgIgBIgRAXQgWAegZAdQhlishwiCg");
	this.shape_37.setTransform(567.8,273.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(1));

	// Layer 44
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AE6EhQi0gSiXAAQgtAAhRAEQh3AGhnAMIlHApQCVlhDCirQCpiUDCABQB4AABMAtQA9AkB2CAQDHDVA6BxQAgBAAOBMQjVghilgQg");
	this.shape_38.setTransform(511.9,282.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(1));

	// Layer 45
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AoDWJQhoklhBjEQhgkliUlBQjZnbi+jFQB5lEDkkiQEElJEuiVQAxgYB5hCQB3g+BvgoQFDh3GgAAQB4AACUAVQCLATDWAtQiBFAguCBIjLJbQmFA2jFEIQisDmAFFOQhzgmgVgFQg8gRgpAAQgeAAgLANQgGAGgFAZQgMA1AAAyQAADABVC1QA3B3B6CkQgQAZgSACIgXgCQgXAAgNAfQgTAqgUB7QgHAsghCeQikAxhoBrQhIBKgtBsIh8lZg");
	this.shape_39.setTransform(336.8,379.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1));

	// Layer 46
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AifB2IAAjrIE/AAIgCDrg");
	this.shape_40.setTransform(1262.2,748.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(1));

	// Layer 47
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AiGB2IghgaQACiWgCg7IFPAAIAADrg");
	this.shape_41.setTransform(1154.3,748.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(1));

	// Layer 48
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AktNXIAAy2QCzhRBkigQBaiRgZh1IA0AJIALC5IAaDqQAJBNAFAOIAXAzQAKAaAWAsIAKAVQAEAHBXByIAAOfgAiDAaQg5A6AABRQAABRA5A5QA5A5BQAAQBRAAA5g5QA6g5AAhRQAAhRg6g6Qg5g4hRAAQhQAAg5A4gAhPD7QgkgkAAgyQAAgzAkgkQAkgkAxAAQAzAAAkAkQAkAkAAAzQAAAygkAkQgkAkgzAAQgxAAgkgkg");
	this.shape_42.setTransform(1208.6,708.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(1));

	// Layer 49
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgqCOIABhVQAAgVgKhfIgJhWQAigJBXgZIAAFnQgrgdg8gJg");
	this.shape_43.setTransform(1124.1,709.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(1));

	// Layer 50
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("ArDDeQhNhBgNibQACguAOggQARgoAfAAQAJAAANACQBNANCXAeQAzAKAUAAQBvAAF+hrQF/hrBGAAQAZAACaARQA9AOARAuQAHATAAAuQAABIgrAjQgdAZgkAAQgEAAhHAQQhMASgQADIi0AbQgqAHhSASQhQARgXAHIjSBGQjFBDAAABQAAAFhsALQhnAKgZAAQh2AAg+g2g");
	this.shape_44.setTransform(1050.6,757);

	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(1));

	// Layer 51
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AmmDoQhUgRiMgZIAAkNQIMgeEVgkQDEgbEWg/QgCA+AKApQAKAsAAA/IgBAQIgBAmIhWgGQhbAAl+BqQl9BrhbAAQgQAAgUgEg");
	this.shape_45.setTransform(1048,719.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_45).wait(1));

	// Layer 52
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAHgNQAagOAagKQgiAjgZAPQgWAOgjALQANgZAzgag");
	this.shape_46.setTransform(1038.8,561);

	this.timeline.addTween(cjs.Tween.get(this.shape_46).wait(1));

	// Layer 53
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgEAgQgqgOAAgJQAAgCgtgwQApAYApARQAeAMBHAYIgqAGIgFAAQgPAAgigKg");
	this.shape_47.setTransform(981.2,584.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(1));

	// Layer 54
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AsrEkQAGg1APgKIAigZIAUgQIATgTIAhgjQAQgRAHgFQAQgMATgBQAIAAAngLIAugPQArgRAwgzQAsguAMghIANglQAHgVAEgiQAAgZASgjQAPgeAEAAQACAAAPg1QFhhKC2g/QDUhJCrh4IAjBJQAoBXAhBfQBoEqAAEGQAAA6gDAJQgBAEgWAVQgdAdgpASQgoARhAAOQhIAOiXAoIjPA2Qm1BspABOQAAkBAKhbg");
	this.shape_48.setTransform(1093.1,562.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(1));

	// Layer 55
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AhaghQiTjegth9QEaDCBpA0QBUApBeADQgHAugNCoQgMCegDBjQimiaiskEg");
	this.shape_49.setTransform(1193,539.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_49).wait(1));

	// Layer 56
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("ACCD6QgMgEhIgjQgYgLh0hOIimhuQAhgOBShRQBjhiAvhUIBxACQgHBGA1CMQA2CLAuAjIgWCOQgPADgKAAQgpAAgqgQg");
	this.shape_50.setTransform(1198.6,496.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_50).wait(1));

	// Layer 57
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FEFEFE").s().p("AglAdQgYgmAAgdQACgOAHgPQAOgeAbgJIAqgPQAcgKADABIgDAcQgCAYgHAqQgEAUgIAQQgHAOAAAHQAAAFAFAJQAFAKAAAFIgEBLIgFAHQg9hZgIgOg");
	this.shape_51.setTransform(1234.7,454.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_51).wait(1));

	// Layer 58
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("Ai8F6QAjhNAMg2QAQhJAAh1QAAiFgYg/Qgfg7gPg0QAZgNBygoQCGgvBtgdQgEAsgDA0QgBAYAIALQAJANAAAHQAAAPgXA3IgcBEQgLAigHAyQgHAnAAAQQgCAdgOANQgJAJgUAEQg3ALg+BUQhFBbgBBag");
	this.shape_52.setTransform(1222,425.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_52).wait(1));

	// Layer 59
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AggCFQAKh5AWg+QAYgzAJgfQgDALgdCbQgRBjgPAAIgBAAg");
	this.shape_53.setTransform(1244.3,420.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_53).wait(1));

	// Layer 60
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("Al8JnQl4hRkLhoIg0hnQAKgZAKhKQAKhNAAg7QAAg5gRhXQgRhXAAgkQAAg3A/iIQAuhnAbgpIBVA+QAhAYAAABQAAANBEAJQA0AHAcAAQBXAABtgQQB/gTAugcQA3gXEehbQAJAAB0gWICUgcIBogRQBTgOAlgKIBEgTQALgDAVgMQARgJAFAAQAGAAARANIA0AuQAxApA2A6QAZAaAuBAQAtA+ALAUQBHCMAZBhQAbBoAACXQAAFujOB/QhcA5iSAWQh1ARjAAAQkhAAmihbgADio3QhjANgaAOQiPA0gTAIQgzAUhjAxQiBA+gqAWQhDAjAAAXQAAAPALALQALALAPAAQAQAAAegQIBSgrICAg/QBWgqAAgBQAAgBBOgeQBRgfAggKQAggLBWgMQBkgOBQAAQEPAbAJAAQAPAAAKgNQAIgMAAgPQAAgYghgHQgMgCiCgNIiKgOQhcAAhlAMg");
	this.shape_54.setTransform(1064.4,831.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_54).wait(1));

	// Layer 61
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgtFoQgYgpAAgHQAAgDgagsQgphDAAgBQAAgWAPg9IAPg5QAAhXgfgxQgfgyhBgNIABj/IBEAAQgXANgLAzQgFAagBAYQAABgBHA3QA7AtBKAAQAgAAAvgWQAvgXAAgPQAogyAGgMIAIghQAGgeAAgFQADgVgKgmQgLgugUgWIBVgCQABAbAABhIgBCGQhPAagYAyQgOAcgJBbIAdCQIhGB8QgOAagJATQgHAQgPAQQgPAPgHAAQgRAAgbgvg");
	this.shape_55.setTransform(952.7,752.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(1));

	// Layer 62
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AhdBJQgdglAAgmQAAgEAKgbQALghALgOIAIgHIARgOQAJgGAsgHQAlgFAMAAQAnAAAZAsQAWAkAAAlQAAA4gxAlQglAdglAAQg6AAgjgvg");
	this.shape_56.setTransform(951.8,724.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_56).wait(1));

	// Layer 63
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AsCKaQiNgnhLhRQhDhJgZh8QgShhAAixQgBjxCLjmQB6jLCphrQBUArDgApQB3AWC7AeQB8AXBdAjQAbAKBrAvQBFAfA+ANQBUARCAABQA1AABDgQIBDgQQAEAAAXgNQAYgQALgNIAmgrQASAWAuBkQAzBsAJArQAtEBABBEQgBA5gPBVIgSBcQgPBIg5AlQgTAMgeAMIgvATQghARiBAfQjHAxhqAdQjQA6kIAcQi8AViTgBQjzAAiVgogACFlxQAwAYB4BGQBJArAYAAQAPAAAKgLQAKgLAAgPQABgZhBgeQhogxgqgdQh/hXjSgxQirgqiIAAQhAAAhUAIIhSAIQg+AJgUAKQgQAKAAAXQAAARAPAKQAMAGAIABQAZAAA9gPQA+gOCRAAQEbAAEPCKg");
	this.shape_57.setTransform(842.7,831.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(1));

	// Layer 64
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AhlB2IAAjrIC4AAQgDAMgMA6QAAAcALAnQAMAmALARIg3Arg");
	this.shape_58.setTransform(760.6,748.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_58).wait(1));

	// Layer 65
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AFFGCQg0gLhBgeQhXgog6gUQh0goizgjQmAg/hRgZQg8gTgVgdQgVgdAAg7QAAgQASgpQATgtAQgFQALgEBXgTQAfgHAAgbQAAgPgJgKQgKgNgVABIAogJQgBg0AJh7QByAMDpAmQEGAfGeAAIEEgBQAAEsACAFIACAGIAHAIQADACAMAEQAMAEAGgBQAjgEAVAYQAaAeAABJIgLA3QgIAygQAiQgIARgGAHQgYAygkAXQg0AghpAAQiIAAhJgOg");
	this.shape_59.setTransform(854.7,745.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_59).wait(1));

	// Layer 66
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("ApxgVQAAgUAUhLIByAjQBmAbBjAAQBfAAELg7QENg9CGABQA7gBAsAcQAvAfAAAxQABAsgmATQgqAUh/AQIkdAvQiHAYg4AOQhkAahWAPQhVAQgqAAQj/AAAAjEg");
	this.shape_60.setTransform(594.5,795.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_60).wait(1));

	// Layer 67
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("Ah1BDQi8hShBh+QBmBYEmA2QBfARD6AdIAAArQgFAAhTAXIgSAPQgSAOgcAAQimAAiqhLg");
	this.shape_61.setTransform(748.5,715);

	this.timeline.addTween(cjs.Tween.get(this.shape_61).wait(1));

	// Layer 68
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAgBzQiXgchKgeQg1gUgbgSQgcgSg6g0QgjgeAEgiQADgXAYghQBVA2ESBgQEkBnBnABIAABZQkLgohcgRg");
	this.shape_62.setTransform(747.4,695.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_62).wait(1));

	// Layer 69
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgBAOQgUhHgbgyQAGAFAmAeIASAbQATAcACAFQAEAMAKA5QAAADgIAQQgIAPgFAGIgMAKQAAgfgRg+g");
	this.shape_63.setTransform(687.4,690.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_63).wait(1));

	// Layer 70
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AooGgQj4gWiqgpIi8gtQhwghighNQglgRhchDQhahCgYgaIAlABQB7AABegcQA7gSA4giQAJgGAnggQAsgkAngkQAJgIAegnQAZgeAIAAIAmAKQAqALAJABQBRAQArAGQCTAUCNALQEhAWGQABQJCAAFhg+QGdhICRiiQAdANAhBgQAiBgAABEQAAAZgJA3IgGAWQgHAagFAfQgFAdgxAwQjEC/iKAkQibAqi7AmQjQAqhJABQhBABi0AMQixAMiRAAQlXAAkWgag");
	this.shape_64.setTransform(514.4,721.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_64).wait(1));

	// Layer 71
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AwjJLQC5gSCAj+QB/j/AkmpQJCgQDYgdQFBgqHhiWQABAWAIAiQAJBBAICwIAIAAIAKCCQADA1AAA1QAABogPBiQgGAkgQBOQgNA8hKA6QhBA0hpAsQlWCOt6ABQmWAAi7gRg");
	this.shape_65.setTransform(569,638.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_65).wait(1));

	// Layer 72
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AwxI6QjngSiMgeQg8gNgwgDQgwgDgagCQhagJjOhGQjkhNhrg0Qg1gahPg3QhTg5gwhtQgzhwAAiPQAAhdBAhjQBBhlB2hVQAfBaCoA8QBbAhCdAnQHHCGGyBHQG2BHF5AAQBhAAFmgUQFZgTA6gHQA7gGFHg6QFNg6BKgSQAagGDCg1QCbgqCBgaQBxgXBbglQCDg1APg7QApAeBSAlQBCAnAQBOIAeCFQAFAZAAAZQAADVjyCXQhQAyhtAsIiHAyQnlC+sDA+Qm8Ajs+AAQktAAj4gSg");
	this.shape_66.setTransform(948.7,647.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_66).wait(1));

	// Layer 73
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AihGMIAEg2QADghAAgYIABhOQAAhXgJhpQgLiCgejrQBiglAVgqQANgbgMhCQAhAHBTADQBcAFBPgDIgLBjQgFAtgEA4QihBkhTCDQhKBzAABzQAAAsAGA0IANBVQAFAgAWA3QAZBBAcAjIiXADQAHgHASh3g");
	this.shape_67.setTransform(697.7,611);

	this.timeline.addTween(cjs.Tween.get(this.shape_67).wait(1));

	// Layer 74
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgHEaIiBgGQgGitgFhDQgNivgeh2QB6gMBAgHQAcgDCngFQgnA9gdBoQgcBmAABLQAAAoATBJIAiBxIhFABIhWgDg");
	this.shape_68.setTransform(702.3,524.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_68).wait(1));

	// Layer 75
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AhjBqQAAhcAhhbQARgwA2hwIBfAEQhQCdgQAtIhLENQgchaAAgqg");
	this.shape_69.setTransform(729.1,519.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_69).wait(1));

	// Layer 76
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AtOEQQAJhqAOhDQAFgbAOgkQAMgiACAAQANAAAXgYIAngvQAKgMAJgUQALgWAAgRQAAghgGgxIgDgVQgDgWgBAAIAZACIEHgOQFFgbE/g8QDRgnBogiQBDgWCXg6QAgBEAXC1QAUCcABBrQAABrAIA5IAIA2QAAAcizA7QjUBGliBJQiyAljdAQQi/AOl6AIQgBh7ALh7gAq6kJIAAAAg");
	this.shape_70.setTransform(597,542.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_70).wait(1));

	// Layer 77
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AB7H2QgXgXgjgbQBggOBkhBQBXg6AAgXQAAgTgOgLQgLgIgOAAIhqAhQhoAghOAAQguAAhbgLQhCgIgcgFQgkgGgSgIQgWgKgUgLQgLgGgFAAQgPAAgMAJQgNAKAAAPQAAAaAwAbQAUALCZBJQgZAFgiANQgdAMgSAKIgcAPIgYAMQh5AAk0gxQldg4lghUQAvjgAyitQApiPAbg7QAMgZAagyIAjhBIAOgfIBhgFIBTgFIBwgIIEsgPQgoAqgRArQgTArAAA3QAAAUAIAWIAfBaIg3AmIA+gBQA/AAAnAJQAMADBUAdQgTgugRgMQAlgMAUg8QATg2AAhMQAAgsgNgeIgkhAIF0gHIG5AGQgcAlgNAhQgOAjAAAqQAAAaAMApQAVBGAwBAIgIAUIgNAdIgHALQAygOBbgcQBJgVAjAGQgGgIgVgSIgTgQQAQgwAEgUIAFgbIADgdQAAg5gSgqQgTgtgsgmQD5AMAyAEICpAKICkAJIA3BvIARAgIALAXIBqFTQBKDpAAAvQAAANh7AeQhCAQhEANQiwAjg8AKQh4AViFANIlxAkQhfAJgfAAQg0AAgOgLgAimi8QhEBEAABgQAABfBEBEQBEBEBgAAQBdAABAg3QBLhAAAhwQAAhdg6hCQhBhKhtAAQhgAAhEBFgAhvBfQgygsAAhLQAAhCAvgvQAvgvBBAAQBXAAAqA+QAeAsAAA+QAABEgyAqQgtAnhAAAIgDAAQg/AAgrgmg");
	this.shape_71.setTransform(512.5,458.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_71).wait(1));

	// Layer 78
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("ANkGVQhigDkzgQIn+gGIjbAFQjcAEgIACQgBAGgKAAQgFAAgHgDQgGgEgFgBQg4AAhuAHIigAJIhjAGQhCAGg+AEQh1AHkSgBQAGjsBRipQB2j5EQhVQDFg8AVgEQAdgFC0gXQCPgWCpgNQCOgLBiAAQB2AACjANQDaAQCjAgIAuAKQAbAGAXADIAuAAQBKAEAuANIB2AoQA0ASBtBcQCHBxAxBnQAqBXANAiQARAuATBVQANA7gDB+Qo7grghgCg");
	this.shape_72.setTransform(511.9,361.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_72).wait(1));

	// Layer 79
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AhQgzIChAPIhuBYg");
	this.shape_73.setTransform(645.9,417.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_73).wait(1));

	// Layer 80
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("Ah5CgQgxioguiGQA9g/ArgfQAjgaA0gZQA3gaAxgZQAjgNBlgMIACAgQAAAwgYBzQgTBbgKAiQgUA/gIAXQgHATgdBBQgeBGg9BOQg8BIgNARQgJgsgwigg");
	this.shape_74.setTransform(667.7,444.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_74).wait(1));

	// Layer 81
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("Aj8EnQgIgEggAEQgFgLgIgKIgHgJQAAgFACgJIACgHQBOhHBIi4QBJi7APiwICBA5QALAEAGATQAOAlANBqQACANAWBXQAXBdAEASQAOBKA4BfQAyBYAnAeIhIgCQhkAAiRAMQiXAOhAAEQgPhDgSgNg");
	this.shape_75.setTransform(703.2,453.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_75).wait(1));

	// Layer 82
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("ABlH2QgngPgdgTQhahEgfgWIglghQgbgZgIAAQgSAAg7hVQg4hVgBAAQgDAAg2ixQhCknAAg5QABh1Aah1QAYBIAiBMIAbA+QAAAKgJBnQAAEjC3DIQA5BUCwBYQCvBXCNASIgMCIIkxhwg");
	this.shape_76.setTransform(759.1,454.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_76).wait(1));

	// Layer 83
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("ApeDLIAAlVQAiAiA3gvQAngiATglQBJBgA+AuQBZBCBlAAIAxgFQAzgGAVgIQBAgcBThAQBLg5AfgpQAoA8A9AaQArASAyAAIBLgJQBNgMAVgSIAAFbQmoAWh7ADQgjgBgeADIh0AIg");
	this.shape_77.setTransform(942.9,608.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_77).wait(1));

	// Layer 84
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgMgBIgNgDIAEAAIAvgIQgGABgHAMIgHANQgFgKgNgFg");
	this.shape_78.setTransform(881.1,590.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_78).wait(1));

	// Layer 85
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AC6IjQl2hOiXg2QjBgvhSgfQiPg2AAhQQAAg1AViLQAdi+AtiHQALgeAThDQAPg4AEgFQA/h5AXgzQBCAsAsAiQAeAZAPAIIF8COQALCqBVBsQBaBxCXAVQA2B6CMBrQCHBmBUgFIAAEqQjRgYlrhKg");
	this.shape_79.setTransform(799.1,562.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_79).wait(1));

	// Layer 86
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAFAlQg9gsgmhIQAnAmAxASQArAPAkgDQAGAiAQA5QgsgKgughg");
	this.shape_80.setTransform(821.3,549.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_80).wait(1));

	// Layer 87
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("ARdWWQAFg4gUgUQgKgKgQAAQgJAAg4AKIg7ALIgoAGIhfAAQAPhbg/i6QhIjQhxhzQh2h4iLhDQiOhEiMAAIgWg+QAQgZAggkQAigmANgTQAwhJABh7QgBjTiWh3Qh5hhicAAQgZAAgoAIQg4AMgoAWIhUAsQgGAAgEgDQgIgFgEgCIgYgJIhLgRQgggHg3AAQhCAAhPATQhpAZhBAwQhzBTg8BCQglAohRBwQA4iqBCipQBfj3CNk/QA2h5BxieQB6isBuhfQBphaBSgtQBfgzBUAAQCrAACrCIQCdB9B+DSQAmBAByC5QBkCrAeBfQAQAyAeBBIAuBmIBHCnQBBCUBFC8QA6CcEELRQgWA2gaCNQgaCSAEA1g");
	this.shape_81.setTransform(584.8,265.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_81).wait(1));

	// Layer 88
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("Ag6BEQgLg1AAgUQAAgDAOgxQAQhBARgXQAJgMAUgGIAtgRIASAeQgwECgMASQgHADgDAEQgJAGgNAqQgVgugPhDg");
	this.shape_82.setTransform(737,377.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_82).wait(1));

	// Layer 89
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AhEBBQgThAAAgZQAAhGAogpQAtgtBagJIg+DSIgpCpQgdgygYhLg");
	this.shape_83.setTransform(748.1,333.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_83).wait(1));

	// Layer 90
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AnECsQhQiyjuo7QAIgnAzhkQA5hwA8hVQBtiUAjghQBMCyCoBSQCAA/CjAAQCWAAB0hGQBeg5BtiDQAeAWAwA/QAqA3ASAiQAUAhAXAtQAdA5AHAZQhfAjiSDEQicDRgxC2QhSEzAACKQAAATAOALQALAIAKAAQAHAAAIgCIApgLQgbAvgNAmIgLAoQgEAKgOACIg6AEQg3ADgzAfQgpAaAAAHIgXAhQgXAigCAGQgEAJgGAsIgFAqQAAAbANA1QAPA7AbBCQgzAKgtAfQgvAggaAsg");
	this.shape_84.setTransform(732.4,253.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_84).wait(1));

	// Layer 91
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AkSGSQiUh3gfjWQgJgvAAgWQAAjRCViVQCViVDRAAQBrAABYAsQA6AdByBaQhqCyg9CbQg0CGAABDQAAAnASAJQAPAHBRAIQAuAFASgCQAKABBSAcQhqB3g1AjQhpBFiaAAQi5AAiGhqg");
	this.shape_85.setTransform(735.3,118.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_85).wait(1));

	// Layer 92
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FEFEFE").s().p("Ah3EcQgFAAAAgPQgCg6AOhRQANhNBiilQBdifAGALIAcggQheC2g8CZQg5CRgWBpQgEgJgIAAg");
	this.shape_86.setTransform(1259.7,370.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_86).wait(1));

	// Layer 93
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AjQIDQC1iKBMkNQA0i2AAjoQAAgngHg5IgRh4IAGAHQBRCRATA3QAbBMgBB5QAACbglBdQgRArhKBuQhDBjhLBAQhNBChCALg");
	this.shape_87.setTransform(1181.1,443);

	this.timeline.addTween(cjs.Tween.get(this.shape_87).wait(1));

	// Layer 94
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("ApVL8IACgvQAAgZgDguQgEgtgEgUQA1AVAtAJQBTAQB9AAQCvAACDhIQCDhJCEimQAqg1AyhnQAvhjALg2IAPhCQAFgiAAg+IgGg6QgGgzAAgVIA0hsQATgxAFgQQAGgUAGglQAJg0AAgmQAAhQgfgxQgpgwgWghIgMgMQA4AbASASQAPAQAZAwQAHAOAEAkQADAiACAEQAXAxATB8QARBuAAA6QAABdgDAoIgPB0QgKBYgXBFQgSA2gEAAQgRAmgcA0Qg4Bng6BAQgUAVhPA4QhRA5hDAoQhgA4jZBEQjZBCjIAlIAFhBg");
	this.shape_88.setTransform(1123.2,441.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_88).wait(1));

	// Layer 95
	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgOgYQgQhTAAgOQAAgGAEgFIAEgDQA1AmAABhQAAAkgFAtQgFAmgEARQgIgugXhyg");
	this.shape_89.setTransform(1160.7,376.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_89).wait(1));

	// Layer 96
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgbAbIhKjfQBqgBAwAnQAxAoAABcQAAA7hPCkQgWhPgchbg");
	this.shape_90.setTransform(1152.8,334.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_90).wait(1));

	// Layer 97
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AiqRrQhKgWhGgyQhthSg3g+QgCgDgKgFIgKgEQgaAAgMAWQgQAogRAiQgMAXgHAGIgVAUQgNAKgHAAQhFAAhGgqQg1gghsheQiGiZgbgyQgEgHgGgOQgMgegHgoQgCgKgHgIQgKgMgRAAQgEAAgOAEQgOADgEAAQg+AAhIhGQhMhMAAhRQAHhWADhAIAjAAQCmAAB+gzQBNgfCUhSQBagrALgHQANgJA1gqQB6haAcgXQBOg+BqhjQCAh4A6gtQAlgeAmgZQATgOAAgPQAAgWgPgKQgKgHgOAAQgZAAhlBZQiKB+hVBJQhXBKg5AuQg1AqhGAzIg6AqIhBAjQggASiFA/Ih6A7QAAAYjpAMQh1AAixhGQi+hJheheQhRhRgyh0Qg4iBAAiIQAAg9AThVQAWhhAggnQAKgNASgqQALgcAkgXQAigWAUgXQAPgQAEAAQAKAAARATIgkB0QglCBAABGQAADQBZBzQBHBbBVAAQAUAABuh1QCfiqCNh5QDXi5EFiHQEPiMCgAAQAYAAArAaQA7AjAjAMQAkANAvAMQBAAPAgAAQCHAABVghIBOghQA2goACAAQBTAACIAuQDGBBD/CUQBSAwBtBTQBQA9AeAcQDdDyBAA/QBTBRAjAAQBzAABDh9QA8hvAAicQAAiHglhnQgmhPABgTQgBgCALgIQALgJAFAAQAVAAAuAmQA/A0AgBPQAhBMASBYQAOBCAAAuQAAAsgGAtQgFAngEAHQgEAJgQA1QgQA0gzBeQhfCyiOBfQiMBfigAAQjTAAiAguQgqgPhCggQhMglgngPQiLg6hkhMQhRg9lIkhQhVhKgmgdQgtghgUAAQgOAAgKANQgKAMAAAOQAAAUAcASIBDAuQBJA7DdC/IDPCyQAcAUCQBKQCFBFAkAQIAnAPQAmAOAEAFQAKAwACATIAEA0IACAuQAACVgmBYQgtBrhvA1QADgoAMgdQAJgaABgIQgBgTgKgMQgLgLgPAAQgXAAgJAXIgJAlIgNA/QgNAzgVAwQgQAlhUBbQhfBmgnAAIgSACQgMAAAAgGIhkgcQhkgdAAgGQAAgDgZgLQgfgMgNgSQgIgKgOgJQgJgHgDAAQgSAAgUAiQglA/gRAVQgcAjhOA8QhUBCghAAQgkAAgwgPg");
	this.shape_91.setTransform(947.4,483.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_91).wait(1));

	// Layer 98
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AZjNqIhBhHQiRiji+iyQgmgkhwhJQiPhcifhPQkPiJjBgKQAFgvAAgKQAAg1gLghQgMgjglg7Qg1g0gngZQgegUgLAAQgSAAgLANQgJAKAAAMQAAAQALAJIAsAgQATAMAeAiIAbAeQAMAAAIAxQAFAYACAZQAAAwgLAWQgLAZghASQgnAVhHASQhJARg6ABQgeAAg9gLQg+gKAAgHQAAgBgsgSQgzgVgVgPQgIgGgFgaQgDgRAAgKQAAgrAOglQAMgiAfguQAKgOAjgbQAjgbADgFQAKgOAAgMQAAgOgMgLQgKgKgNAAQgHAAgTALQgcAQgjAhQgVAVgPAWQgIALgaArQgRAdgHBAQgFAwACAYQjNAJkgCcQiUBPjICNQhvBTguAqIh2B3Ih2CBQhlBugLAAQg6AAgyhTQg8hkAAidQAAhkAlhlIAZhCQAMghAAgSQAAgZgcgdQghgkgrABQgOgBgeAUQgVAOgSAOQBVl+AchkQA1i9BgjEQG8htGRg1QGlg5GaAAQFqAAE9AjQBSAJFkA1QByAQDGAoIGbBWQCMFoBADbQAyCsAZCtQhJhJgdgWQgigYgjAAQgQACgPADQgeAJAAALQAAAGgLAJQgOALgFAIQgJANAAAUQAAAfAMAbQAHAQATAkQAlBPAACRQAACHgxBdQgwBchDAAQgMABgWgWgAqyqSQggAEgnAcQgjAagLAVQgvBVgHARQghBKAAA+QAABIAkAoQAfAkAtgBQBjAABAhtQA6hjAAh/QAAg5gignQgfgjgtAAIgTACgAGpppQgcAoAABBQAACMBNBfQBDBTBOAAQArAAAcgZQAogkAAhSQACh5hChiQhFhmhfABQgxAAgcAogAIrn6QgPgPAAgVQAAgVAPgPQAPgPAWAAQAVAAAPAPQAPAPAAAVQAAAVgPAPQgPAPgVAAQgWAAgPgPgAqmn6QgPgPAAgVQAAgVAPgPQAPgPAWAAQAVAAAPAPQAPAPAAAVQAAAVgPAPQgPAPgVAAQgWAAgPgPg");
	this.shape_92.setTransform(951.4,359);

	this.timeline.addTween(cjs.Tween.get(this.shape_92).wait(1));

	// Layer 99
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AARAXQADAAhogyQANgLAXgLQAZgKATAAIAlAGQAmAHAFAIQAFAeAEAkIAAAgg");
	this.shape_93.setTransform(1072.8,172.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_93).wait(1));

	// Layer 100
	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("ANpHIQnVg/nAAAQnyAAniBNQiWAYioAjIi/AoQgWAEh9AcQg6AOhVACQAKi0BPjYQBKjMBPhgQCYi8Bdg7QAsgdBJgfICqhFQE2hbgPAHQCmgdC/gZQExgpCiAAQEHAADeAhQBfAODMAtQA5AOAqAFQAvAKCOAvQAWAHAyAbIBTAtQAuAXAsAfQBgBEBQBgQD7EtAKHaIAAAdQoRh6mmg5g");
	this.shape_94.setTransform(946.8,222.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_94).wait(1));

	// Layer 101
	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("Au2GPQhuiug/geQhogxgrgEIh5gJQAThoA2iCQAuhvArhEIAWgoQAKgRANgNQAegcCHhQQDChzEHAAQCxAAC3AhQA8ALFOBKQEsBCG5FKQC8CSBpBqQBkBkBCBrQglgGhYgUQhmgYhEgMQj6gulAAAQjnAAigARQi1AUj6A5QhnAXg5AQQhZAYhrAnQgaAKhUAkQhQAigKAGQgshXg3hYg");
	this.shape_95.setTransform(901.1,122.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_95).wait(1));

	// Layer 102
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("ANUdrIghgrIgygxQgZgagGgjQgNhYhAhBQg5g5hFgNQARgiAQgxQAahGAAgfQgBkWkvAcIg2iFQAEgLAEgBIAHABQAEgFAAhbQAAkNhcjrQhfj1i6iyIg0gnQgzglgCgCIAAgwIgBgmQAAgagIglQgHgjgFgHQgPgVgygNQgqgMgjgBQgzAAgjATQgjASgeAsIhOgVQgFg8h2iDQh3iFiyiRQjEigjGh2QjiiHi6g3QBKhlChiDQDDidDHhbQHnjFGbABQJ3AAHgFCQH8FXErKqQg+AthmBqQh2B9gxBWQiGDdAADPQAACZA4CQQA0CKBXBUQBABABeBYIA0A5IEqDHQgzA7gkAgQgTARgiAWQgeAXgeAYIhxBzQgnAohCBzQhOCGgkBuQhyAdiWAzQh8AqgmATQgMgXgUgbg");
	this.shape_96.setTransform(1111,198.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_96).wait(1));

	// Layer 103
	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgaI6IADhBQAAoUjukwQhdh4h1hAQhng5hdAAQgsAAg0ALQg6ANgrAXQAggSA1gZQBlgwBTgZQAeABByAJQB5AJAVADQCYAaCyBqQBLAsAaAKQBRAfB4AAQAeAAA2gEQA6gEAlgGIA1gOIAIgEQAKgEAGAAQANAAAigXQAWgPAWgRQAWAaAtAvQAoAsAXAqQBBB2AADfQAACNgSBLQgbBuhOBLQi7CzpJA3IAEhIg");
	this.shape_97.setTransform(1337.9,863.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_97).wait(1));

	// Layer 104
	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AhgEVQg4hTAAiNQAAhqAsiAQAyh8AJgpIAlFIICliUQh6D+gDCnQgBAlACAkQgCATgYAAQg1AAguhGg");
	this.shape_98.setTransform(1475.2,906.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_98).wait(1));

	// Layer 105
	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAVAWABAeQgBAfgVAWQgWAVgfAAQgeAAgWgVg");
	this.shape_99.setTransform(1535.1,867.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_99).wait(1));

	// Layer 106
	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("ALhJtQAAgogFgzQgGg3gBhPQgCiBgGgsQgQh3g6hyQh6jwj7iBQjLhnjOAAQirAAiOA7QiPA8hoB1QhwB9gtB2Qg2CIgFDcIgBAXQgViJAAhrQAAh0AYhsQAZhyAwhYQA7htAdgiQA1g8BggmQAKgDAxgZQA8gdBBgVQDQhEEJAAQBQAAEEA2QBvAXAyAQQA9ATA8A+IBUBlQBxCIApDeQAYCHAADXQAAC8ggBHQgpBaiDAfQADgXAAgmg");
	this.shape_100.setTransform(1531,884.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_100).wait(1));

	// Layer 107
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("Aj0B3IAAjsIHpAAIAADsg");
	this.shape_101.setTransform(1630.5,782.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_101).wait(1));

	// Layer 108
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AinB3IAAjsIFPAAIAADsg");
	this.shape_102.setTransform(1765.4,782.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_102).wait(1));

	// Layer 109
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AifB3IAAjsIE/AAIAADsg");
	this.shape_103.setTransform(1873.3,782.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_103).wait(1));

	// Layer 110
	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AifB2IAAjrIE/AAIAADrg");
	this.shape_104.setTransform(1873.3,696.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_104).wait(1));

	// Layer 111
	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AktNaIAA2+QgBhPAcg6QAYg0AcgBQASgBAcgPIAagPQAFAAASgGQAXgIANgEIA6gGQA4AAA2AQQBQAYAoA1QAgArAoAvQAZAfAIAaIAAXDgAiDAdQg5A5AABRQAABRA5A5QA5A6BQAAQBRAAA6g6QA5g5AAhRQAAhRg5g5Qg6g4hRAAQhQAAg5A4gAhPD+QgkgkAAgzQAAgyAkgkQAkgkAxAAQAzAAAkAkQAkAkAAAyQAAAzgkAkQgkAkgzAAQgxAAgkgkg");
	this.shape_105.setTransform(1819.7,742.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_105).wait(1));

	// Layer 112
	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgkgQIBIAAQgPAIg5AZg");
	this.shape_106.setTransform(1752.3,717.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_106).wait(1));

	// Layer 113
	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgwAYIAfgOQAkgRAegQIAAAvg");
	this.shape_107.setTransform(1650.1,706);

	this.timeline.addTween(cjs.Tween.get(this.shape_107).wait(1));

	// Layer 114
	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AheAzIAAhlQAtAMBLAtQAmAWAeAWg");
	this.shape_108.setTransform(1758.1,672.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_108).wait(1));

	// Layer 115
	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AinB2IAAjrIFPAAIAADrg");
	this.shape_109.setTransform(1765.4,696.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_109).wait(1));

	// Layer 116
	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AmQRPIAA0KQDCiRBHi6QAwh6AAiwQAAg7gIgfQgIgfAAgTQAAgKAKgSQAMgWABgFQAAgMAUg3QAIgXAYgBQAQgBA/AGQBLAMAzAaQAkASA5AuQBJBRAdBDQAdBFAABfQAAALgGArQgGAqAAAlIAAJqIABAEIgBQHgAiqETQg5A5AABRQAABRA5A5QA5A5BRAAQBQAAA6g5QA5g5AAhRQAAhRg5g5Qg6g6hQAAQhRAAg5A6gAh2HzQgkgkAAgyQAAgzAkgkQAkgkAyAAQAyAAAkAkQAkAkAAAzQAAAygkAkQgkAkgyAAQgyAAgkgkg");
	this.shape_110.setTransform(1702.4,717.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_110).wait(1));

	// Layer 117
	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgXEJIgpgfQAWguAjh+QAmiRAQh1QAKhJAIhKIAAK3QhChBgWgSg");
	this.shape_111.setTransform(1655.9,462.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_111).wait(1));

	// Layer 118
	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AqJlmQBfAAEFgTQDDgOCygRIAAgKQB+gHCegmQCVgkAngcIBiPNQhzgkiqgcQiWgZhAAAQjtAAi9A5QhAAThbAkQh4AwgeALg");
	this.shape_112.setTransform(1521.3,773.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_112).wait(1));

	// Layer 119
	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAdIdIhowXIA5gjQAmgZALgJIAuANIAARyg");
	this.shape_113.setTransform(1591,766.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_113).wait(1));

	// Layer 120
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AAdA7IkRgYIAAhjQCxAUBBAGQB+AKB5gBIAABeIguAAQhOAAhcgGg");
	this.shape_114.setTransform(1630.5,725.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_114).wait(1));

	// Layer 121
	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("ABlGoQg6gRgwglQijhoizgkQhpgViYgBIAdqKQBZAUBfANQB7ARDfARIAAAKQBwAFEJAPQDdAMA0gFIgqK2QgRAmhIAYQhPAZh3AAQhqAAhFgTg");
	this.shape_115.setTransform(1344.4,771.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_115).wait(1));

	// Layer 122
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AhJHFQgNgghFhTIhUhiIAqqyIFvgCIAGBSQgRgagpgSQgpgSgsAAQhQAAg5A5Qg5A6gBBQQABBSA5A5QA5A5BQAAQAxAAAjgSQAkgTAqgwIAtJDg");
	this.shape_116.setTransform(1432.1,782.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_116).wait(1));

	// Layer 123
	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AhWBWQgkgjAAgzQABgxAjglQAkgjAygBQAzABAjAjQAkAlAAAxQAAAzgkAjQgjAkgzAAQgyAAgkgkg");
	this.shape_117.setTransform(1435.4,759);

	this.timeline.addTween(cjs.Tween.get(this.shape_117).wait(1));

	// Layer 124
	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FCFCFC").s().p("Ar+CuQllgkiKglIgggHQgRgDgTgHQhDgaiEhSQixhvgghKQIYBwI+AtQGsAhIfAAQCYAADfgIQC3gHBVgGQCIgIDcgZQC2gVBcgOQALAIArAYIBDAmQhRA4hHAhQiBA8jkAdQlXAsjbAMQkIAOo0AAQjzAAlqgkg");
	this.shape_118.setTransform(1412.5,709.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_118).wait(1));

	// Layer 125
	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FCFCFC").s().p("ACfC1QhYgKiigYQjDgchxgYIgMkwQB4ATKuBVQgjANgSAjQgOAZABAbQAAAXAdAgQAhAlACAFIAKA4IAJA+QhXgHimgWg");
	this.shape_119.setTransform(1265.9,621.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_119).wait(1));

	// Layer 126
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AhICdQgUg4ghg+QAbgSAAglQAAhng+gTQgXgGgUAHQgUAHAAALQAAgEAOA2QASA/ATAWQgHAAgOATQgVgMgWgIIAIAJIAUAOQAGAEAGAQQASAuAVArIgPgIQhVgghAhsQg8hlADhRIAeAAQCeAECxAWQD6AfCOA0QgiBohpBNQhqBNh1AAQhIAAgRgbg");
	this.shape_120.setTransform(1350.4,649.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_120).wait(1));

	// Layer 127
	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FCFCFC").s().p("AtFC9QlsgqmshbQgIgRgNhmIgWjCQABAEAoAFIApAFIBaAPIDKAfQByASF6A0QA5BOBiA6QBXA0AwAAQAKAABSAHQBmAABQgnQAGgDBIgvIBHgwQB3AABoAIQBnAIEoAAQDvAAEegLQD1gIDcgVQABBBCaDWQlnAphnAIQkgAXmIAAQsHAApShFg");
	this.shape_121.setTransform(1394,668.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_121).wait(1));

	// Layer 128
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AFGA3IhtgaQgjgHhQgMQhmgPhAgGIiUgPQhigIgpACQgpACgTgDQgigFAAgSQAAgcAegFQAMgCBcAAQB8AABTAKQBsAMC1ArQDMAuAiAMQATAGADAHIABAOQAAAKgDAVIgEABIgJABQg8gbgsgKg");
	this.shape_122.setTransform(1350.7,626.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_122).wait(1));

	// Layer 129
	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FCFCFC").s().p("Ar+CkQAGgIALgbQAJgUAMgFQALgFASgQQALgMAHgTQAIgZAAgdQAAgYgFgOQgGgSgOgKIgOgMQgIgHgBgIIgDghQgDgVgDAAQBZAFFbACQGEAADwgGQD6gHC3gSQgcBmgDA2QgDAnADBwQj+AYj0AJQjVAHlDAAQkPgEjFgGgAraiVIAAAAIAAAAg");
	this.shape_123.setTransform(1469.9,632.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_123).wait(1));

	// Layer 130
	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AAGACIgQgMIgLgEQAdACAOAOIAAANIgQgNg");
	this.shape_124.setTransform(1370.9,572.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_124).wait(1));

	// Layer 131
	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgnBKQjmgkhhAKIAjg4QAQgbAGgHQALgMAhgXQAcgSAAgGQAAgKAxgUQAsgTARgCQATgEAzgDIA4gDQBxgBBcBAQB7BVAoCyQiyg1jkglg");
	this.shape_125.setTransform(1353.5,605.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_125).wait(1));

	// Layer 132
	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FCFCFC").s().p("AhnCQInHgxIAJkYQHXAtBWAEQBQAHDIALIEKANIAFCDQgHADhCAlIhGAoQgYASgcAhQgXAdgBAAQg4AAmDgqg");
	this.shape_126.setTransform(1280.7,581);

	this.timeline.addTween(cjs.Tween.get(this.shape_126).wait(1));

	// Layer 133
	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FCFCFC").s().p("AEuC5QivgNhcgKQiVgQhZgIQiXgNi8gKIAAgPIAVimIAUiHQCqCKGPBGQDRAmEKAVIAACIQhUgEidgNg");
	this.shape_127.setTransform(1281.5,534.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_127).wait(1));

	// Layer 134
	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FEFEFE").s().p("ADcFCQk/guinhNQhfgrhTg7QhDgxgOgWQgQgZgjhfQgphwAAgtQAAgLAJhkQABBWCcBuQCbBvCtAjQDvA7EDArQA/ALC0AZIgXBGQgEAZgHAbQgGAhgEBaQi9gRilgYg");
	this.shape_128.setTransform(1279.3,497.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_128).wait(1));

	// Layer 135
	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgFFyQghgBhFAHIgKkYQAAipALhMQANg4ADgtQAAgJANgmQAMgkADgGQAJgNAHgQQALgJAyAAQAggBAeAEQAcAFANAGQgnA3gRB3QgRByAAC5IACBpQADBrADA5QgrgIgPgBg");
	this.shape_129.setTransform(1354.6,544.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_129).wait(1));

	// Layer 136
	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AhfKeQhsgPg9gcQg7gcg7glQg4gkgUgYQh3iDguhfQg2hxAAiWQAAhIAHgxQANhfAmhEQAagtAUg1QAVgrA3g4QA3g4Bfg8QBqhDBAgJIBZgKQBLgJAOABQFAgBDGD8QBOBhArB4QAmBqAABXQAADJhECGQgoBNhaBYQhxBviAAwQhlAlh1ABQgrgBhJgJg");
	this.shape_130.setTransform(1618.5,637.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_130).wait(1));

	// Layer 137
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AAzDuQighejMAAIgmAIQghAHgugDIAAmuIAggSQAngVAcgUIA3g5QBoiPAhhhQBhBLAcASQAQANCICEQA5A2BeC3QBZCsAOBFQAVBoAGAlQAMBMAABFQAAAhgVBuQgSBggHAUQh/kQjPh5g");
	this.shape_131.setTransform(1649.7,548.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_131).wait(1));

	// Layer 138
	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FCFCFC").s().p("AtgC2QgaAAgogCQgGgEgNgXIgNgZQgcgdgegaIg2grQACgDADgMQACgIAFAAQAHAAALg2QAKg3gBggQCkgDClALQE1AEO7gfIE0gRQB1gHBcgJQhaAmhpBOQiTBugpBvQm3AkpIAAQmkgDhxgCg");
	this.shape_132.setTransform(1484.1,585.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_132).wait(1));

	// Layer 139
	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FCFCFC").s().p("AoZCsIpygQIAAh/QCaALFZAAQJfAAF2gnQHWgvF4iBIABErQiJAOiNAHQirAKkpAIImFAMQg7ABixAAQi4AAiSgEg");
	this.shape_133.setTransform(1483.1,540.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_133).wait(1));

	// Layer 140
	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FEFEFE").s().p("A0mGoQgBgcAThmQAVhvAQAAIC7AGIDrAKQA9ADBxAAQCaAABygGQD2gMDDgmQHkg3ElhoQG2iegFkEQBDBEAACcQAAA7gvBiQg2ByhSBOQgXAWgkASQgkATg/AVQitA5iCAeQlABIl3AcQk6AXnpAAQk0gDi7gFg");
	this.shape_134.setTransform(1499,494.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_134).wait(1));

	// Layer 141
	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FEFEFE").s().p("AgYhZQAXAJAOAeQAMAXAAARQAAAPgLAhQgNAmgNAOg");
	this.shape_135.setTransform(1610.6,452.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_135).wait(1));

	// Layer 142
	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FEFEFE").s().p("AjYKyQgogcgJgLIhXhVQgagWgngmQgugtgQgWQhUh3gihhQgihjAAh/QAAhaAfhpQAUhCAshRQBKiLCLiJQCHiDBKgdQAUgHAkgKQAigKAigYQAagMAggJQArgNATAAQA9AAAtAWQAyAaA2BAQARAaAaAjQAOASAEALIALAjQAHAdAAAzQAABNhbBMQg1AuiSBWQiPBUg4AwQhaBPAABPQAAAvAWA5QAYA+AvA+QA8BQAtAoQAeAaAMAAQATAAAJgOQAGgLAAgOQAAgIgGgGQgRgQgXggQAWhgBghhQBMhMAigKIBegmQA7gYAdAAQA+AAAuA3QAuA3AABKQAAAKgCAQQgFAZgIAOQgKAQgJALIgGAHQAAAJhRA3IhuBLQgWASgeAmQgrA3AEAkQgPgLgZgUQgGgFgOAAQgPAAgKANQgIAMAAAOQAAAHADAFIAFAIIBqBaQhRA3guAiQhSA+hKBNQjGiEhCgug");
	this.shape_136.setTransform(1295.4,218);

	this.timeline.addTween(cjs.Tween.get(this.shape_136).wait(1));

	// Layer 143
	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AhrgxIAqhQQCtBoAABWIgWBGg");
	this.shape_137.setTransform(1579.1,198.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_137).wait(1));

	// Layer 144
	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgFgyIALAFIAABgQgBgTgKhSg");
	this.shape_138.setTransform(1661.9,364.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_138).wait(1));

	// Layer 145
	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AjATGQiBgGh+gDQgaAAgygIIgwgJQgbgHiEAAQgVAAjkgmQjZgjhpgUQhKgJgegIQgogJihhAIiyhSQASkaAZiDQAhiLAYiFQAZiMAwh6QBCioCakXQAYgrA0gyQAegdAWggQAWghAlgkQCQiKA+goICGhXQAogXDuh1QBhgwCrgnQCzgpCBAAQDYAPAPACQBOALBWAWQCJAiDNBiQCRBGB5BTQAYARAaAVQAXATAAABQAAACAWAUQAcAZAMANIgPAAQgeAAgNAOQgJAJAAAQQAAAQAQAJQAQAKAZgBQALAYAuBWQA4BrAxBWQgJAJgFALQgEAIAAADQAAAbAzBxQA4B8AqAoIBiBdQBVBLBBAfQA8CkAjDmQAfDGAACRQAAAyi2BFQh7AvipArQklBMmnAmQlKAekyAAQgrAAhsgFgAuTFVQAADfCmCbQCrCgEDAAQE0AACmi7QCMicAAjfQAAjfitiSQiriSkDAAQg7AAhZAUQhwAZg7AnQArgpAThIQAMgwAAg5QAAhKglgnQgdgfgpAAQhmAAhGBqQhABgAAByQAABPAtAmQAnAgA5gHQigCaAADRgAD9lUQghBEAHBgQAIBhAuBCQA0BKBSAAQA3AAAjguQAlgwAAhYQAAh7g4hWQg3hVhLAAQhDAAgkBLgAGCjqQgOgSAAgaQAAgaAOgTQAOgSAUAAQAUAAAOASQAOATAAAaQAAAagOASQgOATgUAAQgUAAgOgTgAqrkvQgPgSAAgaQAAgZAPgSQAPgSAVAAQAVAAAPASQAPASAAAZQAAAagPASQgPASgVAAQgVAAgPgSg");
	this.shape_139.setTransform(1423.9,381.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FEFEFE").s().p("A0BJmQiPiGAAi+QAAgmAHgaIAdhqQADgLAvhDQAwhDAHAAQAfglBXguQBmg3BVgIQgcAUgRAlQgTAnAAAnQAAAMAEAYQAIAiALAQQAPAWAMAMIAHAJQAAACAcARQAcARAGADQANAEA8AJQBOAAA6g0QA5g0AAhDQAAgngHgaQgLgngdgZQC6BHBSBrQBNBkAACXQAAC5h6CFQiTCjkQAAQjnAAiWiNgArUGKQAxAWBCAAQAnAAA2gRQBBgUgBgZQAAgPgKgLQgKgMgPAAQgWAAg2ANQgzANgcgBQiJgrghg9QgLgbgEgJQgJgOgVAAQgHAAgWATQgiAdgSANQhWA8hhAAQgvAAgngVQgngWgdAAQgPAAgLALQgLALAAAPQAAArBkAWQAyAMAyACQAnAAApgJQAGgBAhgKQALgFBxhIQBPBRBCAdgAUNBhQgtgKAAgFQAAgJg6gWQhQgfgWgLQgqgVhCg3QhRhDgjg2Qg0hQgziAQgOgjgKgKQgNgNgaAGQgxhWg3hrQgvhXgLgYQBugHCNAZQBfARBuBBQBbA4BDBCQCXCWBJC6QAzCBAABjQAAAjgKAPQgFAJgFAAQgoAOgNAAQgPAAgsgKgAumAoQgjggAAgsQAAgtAjggQAjgfAxAAQAyAAAjAfQAjAgAAAtQAAAsgjAgQgjAggyAAQgxAAgjggg");
	this.shape_140.setTransform(1482.1,386.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_140},{t:this.shape_139}]}).wait(1));

	// Layer 146
	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AESQKQADgeAAgNQAAiahBhfQgng6hHgpQgYgOgVgHIhGgSQgVgGgEgPIABgSQgGglgKgtQgShXgtiVQAsAPA7AYQAqAQAfAAQBAAAAogdQAygjAAhJQAAhcgoh3QgsiFhPh5QjGkwk6hMIHOkzQBRg9AcgaQC+FKBUFBQBOEvAAFrQAADZgdC9QggDKhIDgg");
	this.shape_141.setTransform(1610.4,374.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_141).wait(1));

	// Layer 147
	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FEFEFE").s().p("AlSOqQhYhagYgWQgagYhUg9QCNhmAigfIAWgRICFhwQAGgFAEgJQADgIAAgHQAAgRgNgKQgLgIgJAAQgGgBgKAEQgTAHgWAXQgLhDgjgmQgfgjhlg+QhFgqgmgwQgngyAAgwQAAheBGgyQAuggAnAAQAUAAAmALQAiAJAQAIQBqArBcBaQBiBhAGBRQgXAjgSAPQgHAGAAAMQAAAPAMAKQALAKALAAQAcAABFhVQA7hIAlhBQAMgUAliFQAAhlhxhbQghgcg6glQg8gmgOgLQgWgSg7gdQhJgjgbgRQh5hJAAhoQAAh4BehiQBahcBhAAQAsAAA+AVQBCAWBQAsQAkAUA1AXQAzAdBTBXQCPCYBDCAQBUCfAAC3QAADeh0CyQhYCGiuCEIoTFhg");
	this.shape_142.setTransform(1581,210.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_142).wait(1));

	// Layer 3
	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AAwDeQhhgqgpguIgyg8QAgAbBsApQBwApBHAJIAABIQg0gHhTgjgAgsAoQiKhAAAgwQAAgxBsg1QBeguCjgrIAAF+QhvgYh0g3g");
	this.shape_143.setTransform(1950.1,668);

	this.timeline.addTween(cjs.Tween.get(this.shape_143).wait(1));

	// Layer 1
	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("EjE5BdeMAAAi67MGJzAAAMAAAC67g");
	this.shape_144.setTransform(1260.2,529.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_144).wait(1));

}).prototype = getMCSymbolPrototype(lib.dibujo, new cjs.Rectangle(0,-68.3,2520.4,1196.4), null);


(lib.contorno = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(987.9,489.6);

}).prototype = getMCSymbolPrototype(lib.contorno, new cjs.Rectangle(0,0,1976,979), null);


(lib.dib2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// contorno
	this.contorno = new lib.Symbol5();
	this.contorno.parent = this;
	this.contorno.setTransform(607,315.9,1,1,0,0,0,514.3,303.3);

	this.timeline.addTween(cjs.Tween.get(this.contorno).wait(1));

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjcC4QgHgEgDgHIghhVQgCgIACgHQADgHAHgDIHbj1QAFgDAFAAQAGABAEADQAFADACAFIAOAeQADAHgCAHQgCAHgGAEQhcA4hYBXQh5B3ihApIgFABQgFAAgEgCg");
	this.shape.setTransform(432.5,495.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 10
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjcDrQgwgIgkg/QgTgjAKgjQACgGAEgEQAEgEAGAAQB8gTBghRQB8hqCLhSQAigUApgHQAFgBAFABQAFACADAEIAhAmQAGAGgBAIIgCArQAAAEgCAEQgCAEgEADQjSCcjTCkIAAAAQgvAkgoAAQgKAAgJgCg");
	this.shape_1.setTransform(437,508);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 11
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai9CfQgFgBgFgDQgEgDgCgFIhTjQQgDgHACgGQABgGAGgEQAFgFAGAAQAGAAAGADQBuBGBVhWIAAAAIACgEQADgFAFgEQAGgDAGABQAGAAAFAEQBzBkBphpQAOgPALgQQADgGAHgCQAHgCAGACQAHADAEAGIAoBEQADAFAAAGQAAAFgDAFQgEAFgFACInJDRQgEACgEAAIgDAAg");
	this.shape_2.setTransform(383.1,464.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 12
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPAaQgHgCgFgHQgEgHACgHIABgFQABgFADgEQADgEAFgCIAQgGIAFgCIAHAAQAHAAAEAEIgBAAQALAHgDANQAEAHgiASQgFACgEAAIgGAAg");
	this.shape_3.setTransform(433.3,424.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 13
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkDE0QgGgEgCgFIgUgxQgCgGABgGQACgGAFgEQAEgFAHAAQBzgNAthzQAJgXAHgYIABgBIAEgMQADgHAGgDQBFgiARhPQAGgbgDgbIAAgBQgCgbgGgbQgBgFABgFQABgFAEgDIAXgZIAFgEICAhAQAHgDAIACQAHACAEAGIAeAuIABACIBECGQADAGgBAIQgCAGgFAFIoGGRQgGAEgGAAIgBAAQgGAAgEgDg");
	this.shape_4.setTransform(439.4,427);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 14
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AlWGAQgIAAgGgHQg7hDgchWQgWhHgGhNQgDg1AIgpQACgIAHgFQAGgFAIACQCKAZBqhwQCUiaC4hsQAGgEAIABQCCAVBgBxIAAAAQCFCegsDAIAAABQgFAUgQAOIAAABQj7DPlOAmQg/AIg+AAQglAAgkgDgAl/BlQgPAeAAAqQAAAqAPAdQAJAUAMACQALgCAKgUQAOgdAAgqQAAgqgOgeQgKgUgLgCQgMACgJAUgAAPAYIAAAAQC+hBA2i2QADgMgKgIIgBAAQgTgOgYABIABAAQifAUhXBnQAVgTAXgRQBlhVB8AHIAGACIAHADQAHADADAGQACAHgBAHQgsCjiwBEIAAAAQg9AZg4gTQArAZA1gTgAhgAIIgCgEQgFgMgBgNQgGASAOALg");
	this.shape_5.setTransform(456,534.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 15
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AF0BsQgsgQgzgtIAAAAQgoglg2gKIAAAAQjogrjoAcIhVBEQgFAEgGAAQgHABgFgDQgFgDgDgGQgDgGABgGIAKg8QABgFADgEQADgEAFgCQFfiNFdCZIgBAAQA/AbANBCIAAAAQAEAXgFAKQgDAHgHAEQgEABgEAAIgHgBg");
	this.shape_6.setTransform(336.1,542.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 16
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiVF6IABABQiCgMhYhfIAAAAQg0g3gOhMIAAAAQg2kqDWjVQAFgFAHAAQERgeEFBTIAAAAQAVAHATAPIACADQC2DVhNEHQgZBThQAmIABAAQiuBUi+AAQgyAAg0gGgAjBjPQhEAegDAoQADAoBEAeQBPAjBwAAQBwAABPgjIAWgLQgRAJgWAHQhIAZhlAAQhlAAhIgZQhXgdAEguQgEguBXgdQBIgYBlAAQBlAABIAYQAXAIAQAIIgWgLQhPgihwAAIAAAAQhwAAhPAigAD/iJQACAVgSASQATgSACgVQgCgUgTgSQASARgCAVg");
	this.shape_7.setTransform(335,578.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer 17
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AD/BjQjlhOjvAjIABAAIgzAJQgGACgGgDQgFgCgDgFQgEgFAAgGIAAgWQAAgJAFgGQAGgGAIAAQCwgECmgrQBfgZBdgdQAHgCAGACQAGACAEAFQAEAGgBAGIgHCgQAAAGgEAFQgEAGgGABIgGABIgGgBg");
	this.shape_8.setTransform(338.7,526.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer 18
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AunHSIABAAQgVgEgUgJQgHgDgDgHQgDgIADgHQACgHAHgEQAHgEAHACIAWAFQFnATFIieIEgiMQFQikE+jCIAAAAQCXhbBgiLQAHgLAFgMQACgHAHgDQAGgEAHABQAHABAEAFQAFAFABAIQALCiiABxQhcBQhoBAQkiCyk5CFQlZCTlvA8IAAAAQhCALhAAAQhTAAhRgSg");
	this.shape_9.setTransform(390,478.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer 19
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AtqIPIgCAAIhigVQgEgBgEgDQgDgDgCgEQghhDAPhKQAIgoAVggQAEgGAGgCQAHgCAHACQA6AXBMgQIgBAAQA+gPBAgIQIehKHXkUQErivDqj4IADgHQAEgHAHgDQAIgCAIAEIB1A+QAEADADAEQADAFAAAFQALCjiTBYIAAAAQhCAohBAsIAAAAQpxGgrPDPIAAAAQhaAbhdAAQgtAAgtgHg");
	this.shape_10.setTransform(383.7,466.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer 20
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AmSgRIAAABQgugXgMgQQgFgFAAgHQgBgHAEgGQAEgFAGgCQAHgCAGACQBOAaBYAZIABABQBIAWBHgZIACAAQCFg6CdAFIACAAQAyAGAzgIIABAAQBcgKBGADQAHABAFAEQAFAEACAHIASBZQABAHgDAGQgEAHgGACQjABLi9AAQjvAAjsh3g");
	this.shape_11.setTransform(237.2,515.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// Layer 21
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AlBEBQgGgDgDgHQg8iUgDigQgChPAGhOQAAgHAGgGQAFgFAIAAIH/gXQAIAAAGAFIB3BiQADADACAEIByD6QACAGgBAGQgBAGgEAFQgFAEgGABIquCCIgEABQgEAAgFgDg");
	this.shape_12.setTransform(322.6,469);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	// Layer 22
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ACkEqQgGgCgDgFQgDgGAAgGQACgwgHhRQgQi9iwhLQhrguhuAkQgIACgHgDQgHgDgDgHQgPgXA6g5QBfheCEALIAEABQEOBNAhERIAAAAQAIBCgeA9IAAAAQgfA/gzAzQgEAFgGABIgEAAQgEAAgEgCg");
	this.shape_13.setTransform(231.6,459.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer 23
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Aj0EdQgGgDgDgFQgCgGABgGQABgGAEgFICjixIBDh5IAQg/QABgGADgEICqikQAFgEAGgCQAGgBAGADQAFADADAFQAEAFgBAGIgFBlQAAAFgCAEQgDAEgEADIgDACQBSBTgbCDIAAAAQgDAOAGARIAAABIAIAaQADAIgEAHIgxBfQgDAFgEADQgEADgFAAImlAqIgBAAQgGAAgEgDg");
	this.shape_14.setTransform(262.2,478.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	// Layer 24
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAkDcQgFgFgCgGQg1jMi/hZIAAAAIgagLQgHgEgEgHQgDgIADgHQADgIAHgDICvhRIAFgCIApgHQAHgCAGAEQAGAEACAHQA/ClCiA+QALADAKAIQAFAEACAGQACAFgBAGQgCAGgFAEIi6CfQgFAEgHABIgBAAQgGAAgGgEg");
	this.shape_15.setTransform(258.9,439.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

	// Layer 25
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AjSC/IAAAAQgzgXgggtQgsg/ghhGIgCgFIghjtQgBgHAEgHQAFgGAHgCQAHgCAHAEQAHADADAHQA4CVBuBnQBmAVBoADQAFABADACQAEACADADQBWBsCKABQA1AAAzgPQAIgDAHAEQAIAEACAIIAfBmQACAFgCAGQgBAFgFAEQgEAEgFABQhmAUhjAAQjOAAjBhVg");
	this.shape_16.setTransform(295.4,417.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

	// Layer 26
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGAeIgHgEIAAgBQgFgFAAgHIgCgMIAAgDIAAgBIAAAAIAAgBIAAgBQACguAiAjQACAAADAaQABAHgEAGQgFAHgHABIgFABQgDAAgEgCg");
	this.shape_17.setTransform(253.8,360.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(1));

	// Layer 27
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("EgFeAg0QheglhpgBQiAgBhwhBQiqhjh8iaIgqgKQgHgCgEgFIgMgTIgBAAQgKgWADgXIgBABQADgdAUgJQgiiNAHiVQAZoQCnn0IAAAAQAUg7Abg2IAAAAQAqhUAShZQAli6A1i7IAEgKIAAABQCWlHB1lZQBpk0B8ksQBWjRCqiQQBNhCBkgeIAAAAQDyhGCuDDQCXCoBVDVQALAbAOAXQAyBQASBeQARBcAsBOIAAAAQAYAqgHAMQgCAPgNACIBIEgIAGAEIABABQAFAFAEAHIACAFIBnFFQADAHgDAGQgCAHgGADIg/AmQgYBbhYApIAAAAQgZALgMAZIAAAAQgTAlgSAIQgRALgQgHIgKAMQAJAggRAGQgJALgUgLIh3BdIAAAFQAAAIgFAFQggAigUAmIgcA4QhcDEBEDNIABAEQAEAsgUAKQgPAOgegOIgpAXQgEADgEAAQgFABgEgCIgcgLIAAABIAAAAQgWAbANAdIAAAAIBECWQACAGgBAGQgCAHgFAEQgEADgBAEIgBABQhDCkA7CtQACAFgBAGQgBAFgEAEQgEAEgFACIgmAMIgBAAQgOAGgOAHQhxA7h0AgIAAAAQhHAVgsgBQgRADgMAPQhrCGh1CCQhdBmBGBlQADAFAAAGIABADIAAADIACALIAAADIgBAKIABADIACAEIABACIABACQAEAFAAAGIAAAHIAAADIABAEIAAAAQAAAEgCAEIgMA8IAbBTQACAHgCAGQgDAHgGADQgRALgMARQgjA0gxAAQgWAAgYgJgAxrZkIAAABIAAgBgAq6YdIACgBIACgBIgEgCIAAAEgAkoLtIAAAOQASAJACACIAKgCIAEgHIgQgIQACgCgCACIgRgJIgBABgAo0nlIAQACIgBgKIgPAIgAGPwgQAAgBgPgFIgEATIAAABIgDASIACABIgCAAIAAgBIgFgBIAPAGIACABQA2AggshGgAH9zkIgDgCIgBAAQABAAAAABQAAAAABAAQAAAAABAAQAAABABAAgAILz4IAJgHIgEgFgAGFv6IAAAAIAAAAIACAAIgCAAg");
	this.shape_18.setTransform(207.9,301.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(1));

	// Layer 161
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhAFAQijgeg5iaQgMgggFgKQgDgEAAgFIgBgBIgBgKIAAgBIgCgDIgCgGIgCgDQgCgEAAgEIgBgHIAAgCIABgKIgBgFIgBgFIgBgGIAAgDQgBgDAAgFQgCiABZheQCyi6DVB8QBDAnApBHQBgCmhUCaQhdCvivAAQgkAAgogIg");
	this.shape_19.setTransform(215.2,478.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(1));

	// Layer 28
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAAEhQhxAAhRhWQhPhUgBh3QABh2BPhUQBRhWBxABQBygBBQBWQBQBUAAB2QAAB3hQBUQhQBWhyAAIAAAAg");
	this.shape_20.setTransform(519.5,377.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

	// Layer 29
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ABCEjQjhgegNjhQgDg3ANg3QA9j0DvAfIADABIATAGQAHACAEAHQAEAHgCAIQgCAIgHAEQgnAXg0A2QhjBnATCOQANBqBNBJQAEAEACAGQABAHgDAGQgDAGgGADQgEACgFAAIgDAAg");
	this.shape_21.setTransform(492.8,373.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1));

	// Layer 30
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhWDHQgGgGgBgIQAAgIAGgGQBWhcgKh8IAAAAQgEg1gNgwQgBgHADgHQAEgHAHgCIBRghQAHgCAGACQAHACAEAFQAEAGgBAHQgBAkgXBQQgmB7A0B1QADAGgCAHQgBAHgGAEQgFAEgHAAIiJACIgBAAQgIAAgFgFg");
	this.shape_22.setTransform(470,373.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));

	// Layer 31
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAQB1QgGgEgCgHIhAjIQgCgGADgHQADgHAHgEQAGgDAIACQBDASAPBEQANA2gMA3IgGAcQgBAHgFAFQgFAEgHAAIgBABQgGAAgFgEg");
	this.shape_23.setTransform(439,351.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));

	// Layer 32
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AATBvIg1gnQgGgFgCgHIgHgbQgBgFACgGIAbhZQABgQACgHQACgIACgDQAMgUAPALQAMABAKAyIAAAAQAPBMAABOQAAAHgFAGQgFAGgHAAIgDABQgGAAgFgEg");
	this.shape_24.setTransform(447,365.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

	// Layer 33
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AARBaQgGgEgDgGIg6iQQgCgGABgGQACgGAEgEQAFgEAGgBQAGgBAGADQBdAvgXBsIgBAIQgBAHgFAFQgEAFgHABIgDAAQgFAAgFgCg");
	this.shape_25.setTransform(429.4,328.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1));

	// Layer 34
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAgF6QgEAAgEgCIiDhUIhiBQQgDADgEABQgEABgEgBQhbgKg7hOQiUgdgNikQgBgGADgFQADgFAFgDQDpiBB4jsQAthaBhACQAGAAAGADQDjClETAuQAEAAAEADQA7AkglBTQgOAfgbAXQgEADgEABIgaAHQgaCpiOBaQgGAEgGAAQgHgBgFgEIgxgqQgrAygzAxQgbAagoANIgGAAIgDAAg");
	this.shape_26.setTransform(386.4,419.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));

	// Layer 35
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AsYFMIgZgZIgCgCQiHiwByi0QAEgGAHgCQAHgCAHADQAHADADAGQARAigHA4QgJA/AYA6QAnBcBRgSQCMlfFSiSQAIgDAIADQBLAdBPgXIgBAAQAygQAjgqQAFgFAHgCQDugsDRCUQBhBFBpA4QBghbhAiIIgmhOQgCgGABgGQABgGAEgFQAEgEAGgCQAHgBAFACQCPA9gDC2QgEDSjBBaQihBKimhRIAAAAQgugYgtgZIgBAAQh3hEh+guIAAAAQgQgGgQAHQhtAvgrB2QgOApgbAfQh0CCiZBKQhIAjhAAAQhqAAhYheg");
	this.shape_27.setTransform(378.8,387.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));

	// Layer 36
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ar8HUQgbgUgLgiQgdhbAOhZQABgGAEgFQAFgFAGgBIAGAAQhehNgbh1IAAAAQgRhJA4goQAFgEAGAAQAGAAAFADIA/AnIgNgQQgDgDgBgEQgCgEABgFIANhQQAAgEADgEQADgEAEgCQKllwMCAUQAFAAAEACQAEADADAEQChDtBTEWQACAGgDAHQgDAGgHAEQgHADgHgCQgkgKhQgtQiuhijGATQgIABgGgFQgHgFgBgIQgLhGg5gZQA0AeAIBAIAAgBQABANgBAOQgBAHgFAEQhWBah7ghIgBgBIgagHQgFgCgDgDQgEgDgCgEQgehIA1g3IAAABQAHgIACgIIAAgIIgGAGQguAvAGBBIACAIQABAFgBAFQgLAyhNAdIgBAAQgmAOghAaQjKCnhqDqQgDAFgFADQgFADgGAAQgGAAgFgDQiOhcAri6IAAAAIABgEIgfgRQh2BzBDCtIAZA0QADAGgBAHQgCAHgFAEQgFAFgHAAIgNAAQhvAAhPg8gAsODkIALAIIABABIgDgcIgBgBIAAAAIgKANIAHAEIABAAIABABIgBgBgAhfkjQgPAbAAAmQAAAnAPAbQALATAOABQAPgBAKgTQAPgbAAgnQAAgmgPgbQgKgTgPgCQgOACgLATgAGBmhIgSAnQAHBcBUATQAkhLhMg/IAAAAQgOgMgRAAIgCAAg");
	this.shape_28.setTransform(348.3,365.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

	// Layer 37
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FDFDFE").s().p("AotDcQgGgBgEgGQgEgFAAgHQgBgHAFgFQDvk+GChOQB5gZB5AXIAAAAQDwAqAgD3QABAGgDAGQgDAGgGACIiUBHQgEACgFAAQgEABgEgCQkViAk2A/IAAABQh0AWhuAoIAAAAQhBAYg+AZIgHACIgGgBg");
	this.shape_29.setTransform(357.6,258.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1));

	// Layer 38
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FDFDFE").s().p("ArbGFQgHgBgEgEQgFgFgBgGQg6kwDSjQQA6g6BMgjIAAAAQCFg+CNgqQFJhiFIBXIAAAAQBAAPA2AoIAAAAQAyAmAiA1IABADIBYDTQADAHgCAHQgCAGgFAEQgGAEgHAAQrJgXqEE8Qg0AZgzAcQgEACgFAAIgDAAg");
	this.shape_30.setTransform(341.5,308);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1));

	// Layer 39
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgsELQgjgDgfgHQgFgCgFgEIhUhaQgEgFgBgGQgBgHAEgGQADgGAGgCICRg7QgFhig1hXQgcgvgtgfQgGgFgCgGQgCgHADgGQADgHAGgDIAigTIADgBQDchKBqDRQArBVgXBbIAAAAQgwC9jDAOIgCAAIgBAAg");
	this.shape_31.setTransform(420.9,262.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1));

	// Layer 40
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AH8HHQjliWjsiEQj8iOjxiNIAAAAQg8gjghg9Ihlg/QgHgFgCgHQgCgIAEgHIAyhfIATg1QADgIAHgDQAHgEAIADIR6FoQAEABADAEQAEADABAEQAbBHAOBIIAAAAIAIAxQAKA9gNA8QgcB8hVBjQgFAFgHABIgDABQgGAAgFgEg");
	this.shape_32.setTransform(466.7,215.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(1));

	// Layer 41
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAAH6QjHABiNiVQiNiUAAjSQAAjRCNiUQCNiVDHABQDIgBCNCVQCNCUAADRQAADSiNCUQiNCUjIAAIAAAAg");
	this.shape_33.setTransform(361.2,156.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(1));

	// Layer 42
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("ADAIIIjnhUQgHgCgEgGQgDgGABgHQAAgEACgEIgCgHIAAgBQg1kohLkcIAAAAQgNgtgIgyQgQhjgBhnQAAgHAEgFQAFgGAGgCIBPgWQAIgCAHAEQAHAEACAHIE9PrQADAHgDAHQgEAHgHADQgEACgDAAIgHgCg");
	this.shape_34.setTransform(464.2,139.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1));

	// Layer 43
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("ACbBqQgGgBgEgDQgjghghg0IAAAAQgRgZgegHIgBAAQhigYhiAMQgIABgGgFQgGgEgCgHQgCgIAEgHQAEgGAHgDIBjgkIAEgCQCxgTBLCNIAAAAQAZAvgeAjQgEAEgFACIgGABIgEgBg");
	this.shape_35.setTransform(446.5,35.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

	// Layer 44
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AiMEsIAAAAQjuiMBMkLQAyixCvg1QAHgCAIAEQAHAEACAIQADAHgEAIQgDAHgIADQgpAOgJATQgFATAVAaIAAAAQADADAFgBIAAAAQDTg2BeC2QADAGAIABIAXgEIATgZQAEgFAHgCQAGgCAHADQAbAGADBYIAAABQAID/j1BZIAAAAQgvARgsAAQhEAAhBgmgADbCcQARgBAMgSQAQgXAAghQAAgTgFgPQAIAwgfAnIgBAAQgNARgSgBQAHAFAIABgAC+AZQgPAXAAAhQAAAWAHASIAhhgQADgGAFgEQAFgEAHAAIAAAAQgHgFgJAAQgQABgNASg");
	this.shape_36.setTransform(439.3,55);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(1));

	// Layer 45
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAAAaQgLAAgHgKQgFgHgBgJQABgIAFgHQAHgKALAAQAMAAAHAKQAFAHABAIQgBAJgFAHQgHAKgLAAIgBAAg");
	this.shape_37.setTransform(1024.2,557.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(1));

	// Layer 46
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgBBMQgGgEgCgIIgThTIAAgGIACgcQgBgMADgCQAHgOAOADQAEgBAHAHIAFAGQADAGAHAUIACAGIAFBdQAAAHgFAGQgFAGgIABIgDABQgGAAgEgEg");
	this.shape_38.setTransform(999.9,576.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(1));

	// Layer 47
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AEOEPQgGgBgEgEQgFgFgBgFQgMgwgEhVQgIipiRhWQhqhBh0ApQiNAygkCLQgCAHgGAEQgHAFgHgBQgIgCgFgFQgFgGABgIQAIjDCthCIAAAAQCSg5CbAiIABABQC1AuAkDBQAaCQhAB0IAAAAQgKASgSAIQgEACgEAAIgDAAg");
	this.shape_39.setTransform(1023,564.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1));

	// Layer 48
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgrAfQgFgDgDgGQgCgFABgHIAFgbQABgFAEgFQAEgEAGgCQAGgBAGACIA9AXQAGADAEAGQADAFgBAHQgBAHgFAEQgFAFgHABIhCAFIgBAAQgGAAgFgDg");
	this.shape_40.setTransform(976,508.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(1));

	// Layer 49
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AjQCNQgHgBgFgFQgEgFgBgHIgQjzQAAgGADgGQAEgFAGgCQAGgDAGACICsAsIDsABQAIAAAFAEQAGAFABAHIAeCtQABAHgEAGQgDAGgHADQgGACgHgCQiGgqiLATIAAAAQhJAMhBAiQgEADgFAAIgEgBg");
	this.shape_41.setTransform(1019.5,527.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(1));

	// Layer 50
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AABA2QgFgDgDgHIgWg6QgBgEAAgFQABgFACgEQASgbAMAEQAZgGACAnIAAABIABA6QAAAHgFAGQgEAFgIACIgDAAQgFAAgFgDg");
	this.shape_42.setTransform(971,469.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(1));

	// Layer 51
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhOA+QgFgCgDgFQgDgFAAgGIAAhhQABgGADgFQAEgGAGgCQAGgCAGACICKAnQAHACADAFQAFAFAAAGQAAAGgDAGQgOAUgVAUQgoAlgqAAQgXAAgZgMg");
	this.shape_43.setTransform(987.4,474);

	this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(1));

	// Layer 52
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("ABzBJIjug0QgHgBgEgGQgFgFAAgHQAAgGAEgGQAkgsA4gOIABAAQBbgUA8BIIACAEIAbA5QADAHgCAHQgDAIgGAEQgFACgFAAIgFAAg");
	this.shape_44.setTransform(984.2,457);

	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(1));

	// Layer 53
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgRCZQgbgFAHgPQgKg1gFg1IAAAAQgKhrA7hBQAEgFAHgCQAGgBAHADQA0AYgdBSQgRAvAEAyQAIBRgsARQgEACgFAAIgDAAg");
	this.shape_45.setTransform(985.9,433.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_45).wait(1));

	// Layer 54
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AFZCKIlchsIgBAAIlgiBQgIgDgDgHQgEgIACgHQADgIAHgDQAHgFAHACIKeCiQAFACAEADQADADACAEIAeBMQADAHgDAIQgDAHgHADQgEACgEAAIgGgBg");
	this.shape_46.setTransform(1026.1,449.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_46).wait(1));

	// Layer 55
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AE4CdIpTi2QgEgBgDgDQgEgDgBgDIgfg9IgagbQgEgFgBgGQgBgHAEgGQADgGAHgCQAGgDAHACIKjDNQAIACAEAIQAEAHgCAIIgVBGQgDAIgHAEQgFACgEAAIgGgBg");
	this.shape_47.setTransform(1028.2,464.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(1));

	// Layer 56
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AESB9IpBikQgGgCgEgGQgEgFAAgHQAAgHAEgFIAmgvQAEgFAFgBQAGgCAGABIIuCjQAFACAEAEQAEAEABAGQABAGgCAFIgTAwQgDAIgHADQgEACgEAAIgGgBg");
	this.shape_48.setTransform(1026.5,483.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(1));

	// Layer 57
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("ADCCjQgGgBgFgFQiJh8imBYQgFADgGAAQgGgBgEgDQgFgEgCgFIhCigQgDgHADgIQACgHAHgDICYhUIAIgDQA7gJBBA/QBsBnAdCPQABAGgCAGQgDAGgGADQgFADgFAAIgCAAg");
	this.shape_49.setTransform(1082.6,460.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_49).wait(1));

	// Layer 58
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAAEPQhqABhMhRQhLhPAAhwQAAhvBLhPQBMhRBqAAQBrAABMBRQBLBPAABvQAABwhLBPQhMBQhrAAIAAAAg");
	this.shape_50.setTransform(1083.8,496.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_50).wait(1));

	// Layer 59
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("Ah+BPIAAAAQihg0icg7QgHgDgEgHQgDgGABgHIAOhBQABgGAEgEQAEgEAFgBQAFgCAGACIFvBrIAAAAQC0A3C6gWIAAgBQBAgEAqgwQAFgEAGgCQAGgBAHADQAGACADAGQADAGgBAGQgVCpisAAIgGAAQjGAAi6g6g");
	this.shape_51.setTransform(1035.2,436.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_51).wait(1));

	// Layer 60
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AiVAzQgHgFgBgIQgCgIAEgHQAEgHAIgCIEVhCQAIgCAHAEQAHADACAIQACAHgDAIQgDAHgHADIgiANIgDABIj0A1IgEABQgGAAgFgDg");
	this.shape_52.setTransform(786.1,522.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_52).wait(1));

	// Layer 61
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgiBEQgFgCgEgEQgEgFgBgFIgQhgQgBgHADgFQADgGAFgDQAGgDAHABIAnAHQAVACASAGQAGACAEAFQAEAFAAAHQAAAGgDAFIgDAFIgBAAIgCADIAUAhQAEAFgBAHQAAAGgEAFQgEAFgHABIhJAUIgFABIgGgBg");
	this.shape_53.setTransform(732.7,430.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_53).wait(1));

	// Layer 62
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AlRDSQgHgFgBgJIgokOQgBgHAEgHQAFgGAHgCIHzh0QAGgCAHAEQAGACADAHIBHCMICSBJQAEACADAEQADAEABAEIAHA0QABAIgFAHQgFAGgHACIq0BwIgEABQgGAAgFgEg");
	this.shape_54.setTransform(767.1,447.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_54).wait(1));

	// Layer 63
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AANBAQgHgBgFgGIgggnQgDgDgBgFQgBgDABgFIAGgwQABgHAFgFQAFgFAHgBQAHAAAFAEQAGAEACAHIAbBYQACAHgDAGQgDAHgGADQgFADgFAAIgDgBg");
	this.shape_55.setTransform(920.4,535.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(1));

	// Layer 64
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgMASQgFgFgCgHIgBgFQgBgFADgGQACgFAFgEQAFgDAGAAIABAAQAGAAAFADQAFAEADAFQACAGgBAFIgBAFQgCAHgFAFQgGAFgHAAQgGAAgGgFg");
	this.shape_56.setTransform(921.4,519.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_56).wait(1));

	// Layer 65
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AhXEOQgGAAgFgEQgFgEgCgGQgCgFABgHQBIkDi2i5IAAgBQgOgOgSgFIgJgCQgHgCgEgFQgEgGAAgHQAAgHAEgFQAGgKAUgEQAFgBAEABIAHACQCYAvCHBLQAbAPAgAAIACAAQAtAEAngTQAIgDAHADQAIACAEAIQBkDHiUCbQgaAcgmAHIgBAAQhiAPhgAAIgNAAg");
	this.shape_57.setTransform(947.4,536.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(1));

	// Layer 66
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("ABEC4IgBAAIgSgEIgBAAQghgKgcgWIABABIgPgLIi+hUQgGgDgDgGQgDgGABgHIAjjLQABgGAFgEQAEgFAGgBQAHgBAFADIF/C5QAGACADAGQADAGgBAHIgaCMQgBAGgEAEQgEAEgFABQgkAMgnAAQgWAAgYgEg");
	this.shape_58.setTransform(948,504.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_58).wait(1));

	// Layer 67
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AmZCaQgHAAgGgGQgFgFgBgIIgFhdQAAgHAFgGQAEgGAHgCIMyivQAFgBAGACQAFACAEAFQADAEABAGIAIBgQABAHgEAGQgEAGgIACIhtAbQgHACgIgEQgHgEgCgHIgHgaQlJASkzBxQAVAagSAPQgGAOghAAIgPgBg");
	this.shape_59.setTransform(785.2,566.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_59).wait(1));

	// Layer 68
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAPAdIgHgCIgMgGIAAAAQgXgMgDgDQgGgGAAgDQgGgSAUgGQADgCAJACIALADIADACQAZAOACADQAJAIgCAFIAAABQACAPgRAFIgEAAIgEAAg");
	this.shape_60.setTransform(840.7,500.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_60).wait(1));

	// Layer 69
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AlwFCQgGgCgEgEQgEgFgBgGIgunWQAAgIAEgGQAFgGAHgCIKdiHQAHgBAGADQAGADADAGQADAGgBAGIgZCPQgBAIgGAFIkRDQIGWhfQAFgBAFABQAGACADAEQAEAEABAGIAZCCQABAIgEAGQgEAHgIACIizA1QgGACgHgCQgGgDgDgFQgEgGAAgGQABgHAEgFIAnguQgygYhDAVQhuAihuARQiIAWhxBLIABgBIgBACIAOAYQADAFAAAGQgBAGgEAFQgDAFgGACIgcAJIgGABIgFgBg");
	this.shape_61.setTransform(778.2,506.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_61).wait(1));

	// Layer 70
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("ACHCNIg8gPIgBgBQiyg+h0iUIgSgYQgEgHABgIQACgIAGgFQAHgEAIABIG8BIQAGACAEAEQAFAFABAGQABAGgDAGIhSCpQgDAGgHADQgEACgEAAIgFAAg");
	this.shape_62.setTransform(879.7,522.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_62).wait(1));

	// Layer 71
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Al8CVQgFgCgEgFQgEgEAAgGIgRiGQgBgIAEgGQAFgHAIgBIL9h8QAIgBAHAEQAHAFABAIIARBdQABAFgCAGQgCAFgEADQgEADgGABIiCARIgHAAQiNgaiSAZQhyAWhyASIABAAQgpAIgKAfIAQAWQAEAFgBAHQAAAHgEAFQgEAFgHACIhBARIgFAAIgGAAg");
	this.shape_63.setTransform(774.2,471.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_63).wait(1));

	// Layer 72
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAEMNIAAAAQgPgFgQgMIgBAAIgMgKQgDgCgCgEQgCgEgBgEIgWlIQAAgHAEgGQAFgGAHgCIBYgTIACgEIAAgBQARgkAEgoIAAAAQABgLgDgIIAAAAIgJgUIgNgXIAAgBQgDgEgFgEIhSAPQgGABgFgCQgFgCgEgFQgDgEgBgGIgSj6QgBgHAEgGQAFgFAGgCIAygPQAQglgEgpQgEg3gbguIAAAAQgEgGgGgEIgkAGQgFAAgFgCQgFgCgEgEQgDgEgBgGIgekJQgBgIAEgGQAEgGAHgCIAtgMQAGgHADgJIAAgBQAKgdgJgfIAAAAIgEgNIAAgBIgJgXIAAgBQgFgNgGgMIAAAAIgFgIIguAEQgIABgGgFQgHgFgBgIIgFglQgBgFACgGQADgFAFgEQAFgDAGAAIDOACQAHAAAGAFQAFAFABAIIAZCsIAAABIBnUqQABAEgCAEQgBAEgDAEQgRASgUAJIABgBQgqAWgsAAQgbAAgdgJg");
	this.shape_64.setTransform(824.4,528.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_64).wait(1));

	// Layer 73
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgIAWQgIABgDgPIgBgFIAAgFIAAgBQAAgLAKgIQAHgEAHABQAIABAFAGQAFAHgBAIQgCAPgCABQgIAOgIAAQgEAAgFgFg");
	this.shape_65.setTransform(834.2,458.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_65).wait(1));

	// Layer 74
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AkDBiIAAABQgdgjgCguQgGiWBmhpQAEgDAEgCQAFgBAFAAICGAaQAIABAEAHQAFAGgBAIQAAAHgGAFQgGAGgIAAIglgBIgPADQBhAABZAhQgWgLgXgHQgHgDgEgHQgEgHACgHQACgIAHgEQAHgEAHABIDGAmQAGABAFAFQAEAEABAGIAYCRIAAABQAFCaiABDIAAAAQgXAMgcAFIAAAAQglAFgiAAQi4AAh5iSgAB4hmIAKgPIAAgBIgIgFgACDh2IAAABIAKgBIABAAIgPgHIAEAHIAAgBg");
	this.shape_66.setTransform(812.3,425.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_66).wait(1));

	// Layer 75
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("ACYDAQh0gphygnQkJhXjNisIgDgFIgrhAQgEgGAAgHQABgHAFgFQAEgFAHgBQAHgBAGAEQFLDAFuB9QDgBNDmAzQAHACAFAGQAEAFAAAIQgBAHgEAFQgFAGgIABQg6AHg6AAQieAAibg4g");
	this.shape_67.setTransform(979.3,493.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_67).wait(1));

	// Layer 76
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AJ2EjQpnhjohk6IiIhPQgGgEgCgFQgDgGABgGIAKgzQABgHAEgEQAFgEAGgBQAGgCAGADIENB+IAAAAQCpBMCcBgIAAAAQANAHASABIACAAQB8AMB8AyQB6AxB/AfIAAABQBWAWBZATQAGABAFAFQAEAEABAGQABAGgDAGIgYAyQgDAFgFAEQgFACgFAAIgDAAg");
	this.shape_68.setTransform(985,480.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_68).wait(1));

	// Layer 77
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAAAjQgOAAgKgLQgKgKABgOQgBgNAKgKQAKgLAOAAQAPAAAKALQAKAKgBANQABAOgKAKQgKALgPAAIAAAAg");
	this.shape_69.setTransform(914.8,467.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_69).wait(1));

	// Layer 78
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("ACxCdImVjTQgGgEgDgGQgDgHACgHIAUhCQABgGAFgEQAFgEAGAAQAGgBAFACIGjDRQAHAEADAIQACAIgDAHIgiBFQgCAFgFADQgFADgFAAIgBAAQgFAAgEgCg");
	this.shape_70.setTransform(945.1,450.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_70).wait(1));

	// Layer 79
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgGAuQgGgEgCgHIgNg8QgBgHADgGQADgHAGgDQAHgDAHACQAFACAFAFIAQAVQAFAGgBAHIgDAoQgBAHgFAGQgFAFgIAAIgBABQgGAAgFgFg");
	this.shape_71.setTransform(918.6,437.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_71).wait(1));

	// Layer 80
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("ADjCWIkqhyIgBAAIi4hbQgHgDgDgIQgDgHADgHIAWg6QACgFAEgEQAFgDAFgBQAGAAAFACIHaDRQAGADAEAHQADAHgCAHIgPA1QgBAFgEAEQgFAEgFABIgEABIgHgCg");
	this.shape_72.setTransform(952.6,435.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_72).wait(1));

	// Layer 81
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AhCAYQgHgFgBgIQgCgIAEgGQAmhABbAsIAEACQAOAMAAAKQAEAQgSALQgMAKgqADIgKABQgiAAgdgSg");
	this.shape_73.setTransform(926.7,403.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_73).wait(1));

	// Layer 82
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("ADMCfImojGQgHgDgDgHQgDgGACgHIAVhTQACgHAGgEQAGgEAHAAQAHABAFAFICDB5IENCcQAHAEACAIQACAIgEAHQgDAHgIACIgGACQgFAAgEgCg");
	this.shape_74.setTransform(957,418.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_74).wait(1));

	// Layer 83
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("ABYC1QhJgrhHglQiRhMgeiYQgBgEABgEIANg9QACgGAEgEQAFgEAGgBQAGgBAFACQAGADADAFQBtC5DSBQIAAAAQBQAgANAtQADAGgDAHIgOApQgCAFgDADQgDADgEABQgMAHgQAAQglAAg0ggg");
	this.shape_75.setTransform(959.7,405.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_75).wait(1));

	// Layer 84
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgdAWQgCgGgBgNIAAgBQAAgFACgHQACgQAIgHQALgMARACIACABQAcAGgGAYQgBAJgMAMQgKAhgLgBQgFADgFAAQgMAAgFgWg");
	this.shape_76.setTransform(946.7,382);

	this.timeline.addTween(cjs.Tween.get(this.shape_76).wait(1));

	// Layer 85
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("ABrCdQgUAAgggSIgBAAIgDgCQiehHhQigIAAAAIgHgSIgCgHQAAgTAPgGQAIgFAPAEQAPADAeARIABAAQA8AlBEgNQA+gLAygoQAFgDAGgBQAGAAAFADQAFACADAGIAkBCQADAFgBAGQAAAGgEAFQg/BQATBgQACAFgCAFQgKAcgeAAIgBAAg");
	this.shape_77.setTransform(921.7,385.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_77).wait(1));

	// Layer 86
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AivCvIAAABQgegegQgoIgBAAQhMixCViBIAAAAQCChwCTBcIgBAAQBfA7AVBsIAAAAQASBlgoBgIAAAAIgTArQgDAGgGADQgFAEgHgBIgFgBIgDAAIAAAAIgEgBIgBABQgSAOgSALQhCAog+AAQhcAAhXhYg");
	this.shape_78.setTransform(919.1,348.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_78).wait(1));

	// Layer 87
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AADA4QgGgDgDgHQgPglgIglIAAAAIgCgIQAAgEACgDIAAAAQAHgTAQAHQAGgCAGALIACAEIAGASIAAABIARA4QACAHgEAHQgDAHgIADIgHABQgEAAgEgCg");
	this.shape_79.setTransform(919.5,315.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_79).wait(1));

	// Layer 88
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AA8AgIh/gRQgHgBgFgGQgFgGAAgGQAAgIAFgGQAGgFAHgBIBXgHIADAAIArAEQAIAAAFAHQAGAGgBAJIgCAUQgBAFgDAEQgDAFgFACIgIACIgDgBg");
	this.shape_80.setTransform(829.8,383.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_80).wait(1));

	// Layer 89
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAVAnIgIAAQgFAAgFgDIgYgOIgFgFQgKgMgDgGQgKgZASgHQAJgMAmARIACABQAXAJACAWIAAAGIgBAGIAAABIgBAFQgBAGgFAFQgFAGgJAAIAAAAg");
	this.shape_81.setTransform(847,381.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_81).wait(1));

	// Layer 90
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AhFC6QgRAAgMgMIAAAAQgLgMgBgQIAAkjQABgQALgMIAAAAQAMgMARAAICMAAQAQAAAMAMIAAAAQALAMAAAQIAAEjQAAAQgLAMIAAAAQgMAMgQAAg");
	this.shape_82.setTransform(844.9,296.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_82).wait(1));

	// Layer 91
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FEFEFE").s().p("AgtA8QgHgCgFgGQgEgFAAgHIAEhQQAAgHAEgGQAFgFAHgBQAGgCAGADIBPAoQAHADADAIQADAHgDAGQgCAHgHAEIhTApQgEADgEAAIgFgBg");
	this.shape_83.setTransform(875.5,293.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_83).wait(1));

	// Layer 92
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FEFEFE").s().p("AADAeQgFAAgFgFIgHgGIgBgBQgDgCgFgMQgDgFACgHQADgLAEgDQAJgKAIADQAIgBAIAJQAFAFAEAXQABAHgCAFQgDAGgGADQgEADgFAAIgDgBg");
	this.shape_84.setTransform(865.9,274.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_84).wait(1));

	// Layer 93
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AhFC4IAAAAQgKgGgGgKQgGgKAAgLIAMkgQABgPAKgLQALgLAPgCIBagHIAAAAQAMgBALAGIAAAAQALAGAFAKIAAAAQAGALgBAMIgeEgQgBAOgKAKIgBAAQgKAKgOACIhJAHIAAAAIgEAAQgJAAgJgEg");
	this.shape_85.setTransform(860.5,295.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_85).wait(1));

	// Layer 94
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FEFEFE").s().p("AgJAfQgGgBgFgEQgFgDgCgGIgGgVQgCgHADgHQADgHAHgDQAGgDAHACIAdAIQAIACAEAHQAEAHgCAHQgCAIgHAEIgXAOQgEADgFAAIgCAAg");
	this.shape_86.setTransform(861,249.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_86).wait(1));

	// Layer 95
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FEFEFE").s().p("AgOBUQgGgFgBgHIgPh2QAAgGACgFQADgGAFgDIAhgTQAGgEAIABQAIACAEAGQAFAHgCAIIgSCJQgBAHgGAFQgFAFgHAAQgHAAgGgFg");
	this.shape_87.setTransform(862.9,259.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_87).wait(1));

	// Layer 96
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgHBvQgFgFgBgHIgbi/QgBgGADgGQADgGAFgDQAGgDAGABIApAFQAIABAFAGQAFAGAAAIIgHBwIAAABIgJBKQgBAIgFAFQgGAFgHAAIgBAAQgGAAgGgFg");
	this.shape_88.setTransform(813.3,290.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_88).wait(1));

	// Layer 97
	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AhsCyQgKgGgFgLIgBAAQgFgLACgMIAikSQACgOAKgJQAKgKAOgCICJgLIAAAAQALgBAKAFQAKAFAGAJQAGAJAAALIAFBdIAAAGIAAAAIgOC2QgBAPgLAKQgKALgPABIiiAJIgDAAQgKAAgKgFg");
	this.shape_89.setTransform(825.3,296.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_89).wait(1));

	// Layer 98
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAAAlQgOABgMgMQgLgLABgPQgBgOALgMQAMgLAOABQAPgBALALQAMAMgBAOQABAPgMALQgLAMgOAAIgBgBg");
	this.shape_90.setTransform(824.9,244);

	this.timeline.addTween(cjs.Tween.get(this.shape_90).wait(1));

	// Layer 99
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAYBHQgHgCgEgFIhOhmQgEgGAAgHQAAgHAFgGQAEgFAHgBQAHgBAGADIArAXQADACADADIA4BFQAEAFABAGQAAAHgDAFQgDAGgGACIgVAKQgEACgEAAIgFgBg");
	this.shape_91.setTransform(873.7,230.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_91).wait(1));

	// Layer 100
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgZAoQgGgGAAgJIgBgxQAAgIAGgGQAGgGAIAAQAJAAAEAGIAaAZQAGAGAAAHQAAAJgGAGIgZAZQgFAFgIAAIAAAAQgIAAgGgFg");
	this.shape_92.setTransform(871.7,238.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_92).wait(1));

	// Layer 101
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FEFEFE").s().p("AAAEEQhlAAhIhOQhHhLAAhrQAAhqBHhMQBIhNBlAAQBmAABIBNQBHBMAABqQAABrhHBLQhIBOhmAAIAAAAg");
	this.shape_93.setTransform(888.4,259.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_93).wait(1));

	// Layer 102
	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("Ag2AgQgogLAFgVQgFgUAogLQAXgGAfAAQAgAAAWAGQApALgGAUQAGAVgpALQgWAGggAAQgfAAgXgGg");
	this.shape_94.setTransform(917.5,296.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_94).wait(1));

	// Layer 103
	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FEFEFE").s().p("AghBeIgBAAQhagKhGg5QgFgEgBgHIgMgzQgCgGADgGQACgGAFgEQAGgDAGAAQAGAAAFAEQC1COCligIAAgBIAOgNQAFgGAIAAQAIgBAGAFQAGAFABAIIABADQAAAEgBAEQgrChitAAIgegBg");
	this.shape_95.setTransform(889.4,282.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_95).wait(1));

	// Layer 104
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgaArQgGgEgCgHIgLgmQgBgGABgFQABgFAEgEQAEgEAFgBIA1gOQAGgBAGACQAGADADAFQAEAGAAAGQgBAGgEAFIgqA0QgEAGgIABIgDAAQgFAAgGgDg");
	this.shape_96.setTransform(915.9,257.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_96).wait(1));

	// Layer 105
	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AC+BWIABAAQhmgphtgPQh0gQhngeQgPACgFgUQgBgEAAgJQAAgFADgFQADgEAFgDIAvgZQAEgCAEAAQDsgPDDB0IAAAAQARAKAGATIABAEQADAlgXAJQgHAFgLAAQgNAAgUgIg");
	this.shape_97.setTransform(814.3,400.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_97).wait(1));

	// Layer 106
	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAAA2QgGAAgFgEQgGgFgBgGIgRhDQgBgGACgGQACgGAFgDQAFgEAGAAIAhAAQAGAAAFAEQAFADACAGQACAGgBAGIgRBDQgBAGgGAFQgFAEgHAAIAAAAg");
	this.shape_98.setTransform(797,385);

	this.timeline.addTween(cjs.Tween.get(this.shape_98).wait(1));

	// Layer 107
	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("ACbA/IgDAAIgHgBIgBAAIktg4IgBAAQgWgGABgMQgEgQADgSQABgGAEgEQADgEAFgCQAGgBAFABIFDBJQAIABAEAHQAFAHgCAIQgCALgGAIIACgBQgCAMgTgBIAAAAg");
	this.shape_99.setTransform(819.1,387.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_99).wait(1));

	// Layer 108
	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgZCDQgFgBgEgEQgEgEgCgGIggiSQgBgEABgFIAIgeIABgQQABgFACgEQADgEAEgDQAqgXAxgHQAIgBAHAFQAGAFACAHIAMA9QACAIgFAHQgEAHgIACQgVAEgMARQgiAzAvAkQAGAFACAHQABAHgDAHQgEAGgHADIguARIgHACIgFgBg");
	this.shape_100.setTransform(786.8,393.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_100).wait(1));

	// Layer 109
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAvAkIiBghQgIgCgEgGQgEgHABgIQACgIAGgEQAHgFAIACICbAaQAHABAFAFQAFAEAAAHQABAHgFAGQgEAGgGACIgbAHIgFABIgFgBg");
	this.shape_101.setTransform(766.2,377.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_101).wait(1));

	// Layer 110
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AkmCoQgcgKgHgfIAAAAQgfiFBKhzIADgEIBrhcQAEgEAGgBQAFgBAFACIAsASQAGACADAFQAEAGgBAGQAAAGgDAFQgEAFgGACIgPAGQCBgEBdBYIAAgCIgEgEQgEgEAAgDQgHgSAOgGQAEgHAPAFQAHACAcAPIAAAAQBHAoBGgnQAFgDAGAAQAGABAEADQAFAEACAFQBCCeh+BpIgBAAQgTAQgYAGIAAAAQhqAZhoAAQiXAAiRg3g");
	this.shape_102.setTransform(748.3,402.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_102).wait(1));

	// Layer 111
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("ABIBbIgBAAQiKhKiZg0QgNgDgGgTQgCgGADgGQACgGAFgEIAqgdQAEgDAFAAQAFgBAEACQCcA4CfAlQAZAGAagBQAEAAAFACQAEADADADIAZAhQAEAFAAAGQABAGgDAFQgbAygrAJQgLADgLAAQghAAgpgWg");
	this.shape_103.setTransform(755.7,382.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_103).wait(1));

	// Layer 112
	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AihDPQi2gsiqhUIAAAAQiXhNAkifQAJgrAXgoQADgFAGgDQAGgDAHACQAGABAEAFQCHCbDWAnIAAAAQBHANBGARIAAAAQEdBFEeg2IBlgfQAFgCAFABQAFACAEADQAEAEACAFQAfBrgqA/QgoBAhwASQiBAVh/AAQi5AAi0gsg");
	this.shape_104.setTransform(792.7,355.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_104).wait(1));

	// Layer 113
	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgiBoQgGgDgDgFIhHh9QgDgGABgGQAAgGAEgFQAEgFAGgBICXguQAFgBAFABQAFABAEADIArAmQAEADACAGQABAFgBAFQgBAFgEAEIh7CFQgFAFgGABIgFABQgEAAgDgCg");
	this.shape_105.setTransform(802.2,338.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_105).wait(1));

	// Layer 114
	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAAA4QgWAAgQgQQgRgRAAgXQAAgWARgRQAQgQAWAAQAXAAAQAQQARARAAAWQAAAXgRARQgQAQgXAAIAAAAg");
	this.shape_106.setTransform(776.2,341.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_106).wait(1));

	// Layer 115
	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("Ai0EoIAAAAQgOgEgIgNIAAABQgIgNACgOQABgOALgKIAAgBQAegdACgWQgGgSgggRIgCgBQgdgOgSAcIAAAAQgOAXANAZQAIAOgEAPIAAABQgEAPgOAIQgNAJgQgEQhngVh0g5IgCgCQi+heA6jYQALgoAGgrQAIg3AQg0IAAAAQADgKAJgIIAAAAQAIgIALgCIAAAAQALgCALAEIHLCyIABABQALAEAHALIAAAAQAHAKAAANIgCBPQAAARgMALIAAAAQgMALgQAAQgRAAgLgMQgogogqAjQgMAcAGASQALARAhAIIACAAQAUADANgQIABAAQAHgJALgDIAAAAQAJgDAKABQAngDAMBpQAKBNA6AhIB9iEQg6hhAghjQAEgNAKgIIABAAQAKgIAOAAIHaAKQAPABALAKIAAAAQALALACAPQATDPh6CTIAAAAQgSAXgiAJQiiArikAAQizAAi0g0g");
	this.shape_107.setTransform(798.5,324);

	this.timeline.addTween(cjs.Tween.get(this.shape_107).wait(1));

	// Layer 116
	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgmAnQgPgQAAgXQAAgWAPgQQAQgPAWgBQAXABAQAPQAPAQABAWQgBAXgPAQQgQAPgXABQgWgBgQgPg");
	this.shape_108.setTransform(778.8,323.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_108).wait(1));

	// Layer 117
	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("ABQBJIifAAQgJABgFgGQgGgGAAgJIAAhqQAAgIAGgGQAFgGAJAAICfAAQAJAAAGAGQAFAGAAAIIAABqQAAAJgFAGQgGAFgJAAIAAAAg");
	this.shape_109.setTransform(800.8,308.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_109).wait(1));

	// Layer 118
	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AhUBPQgGgCgDgFQgEgFAAgGIgEh4QAAgFADgFQACgGAGgCQAFgDAFAAIBJAGIAEABIBVAXQAFABAFAFQADAFABAGIAGA0QABAHgEAHQgFAGgHACIifAnIgFABIgHgCg");
	this.shape_110.setTransform(800,323);

	this.timeline.addTween(cjs.Tween.get(this.shape_110).wait(1));

	// Layer 119
	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AA+FPQgGgEgCgIIiSp9QgCgHAEgHQAFgHAHgCQAIgCAHAEQAHAEADAHIB8G3IAAADIAWDHQABAIgFAGQgEAGgIACIgEAAQgFAAgGgEg");
	this.shape_111.setTransform(695.1,364.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_111).wait(1));

	// Layer 120
	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AhlBjQgGgFgCgHIgmikQgBgHADgHQAEgGAGgDQAHgDAHACICYAvQAEACADADIBnBeQAGAFABAIQAAAIgFAGQgFAHgIAAIjZAXIgCABQgGAAgGgEg");
	this.shape_112.setTransform(725.5,357.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_112).wait(1));

	// Layer 121
	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAmAkIhVgZQgHgCgEgGQgFgFABgHQABgHAFgFQAFgFAHgBIBNgIQAIgBAGAEQAGAFACAHIAIAgQABAHgDAHQgDAGgHADQgEACgEAAIgFgBg");
	this.shape_113.setTransform(722.2,347.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_113).wait(1));

	// Layer 122
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AhFBeQgGgEgCgGQgahCgQhJQgBgGACgGQACgFAFgEQAFgDAFAAIDHgRQAHgBAGAEQAFAEADAGQACAGgCAHQgCAGgFAEQgNAKgVACIgHADIgKAFIAAAAQgbAQADAeQABAFgCAFQgCAEgDADIhMBFQgFAEgHABIgCAAQgFAAgFgDg");
	this.shape_114.setTransform(727.5,376.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_114).wait(1));

	// Layer 123
	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgDC1QgGgEgCgIIgyjfQgCgIAEgGIA0hjQAEgGAGgDQAfgMALAGQARAGAAASQABAIgHAMQgDAGgFADQgGACgGAAIgGAAIgBAEQgQCNAPCRQAAAIgFAGQgEAGgIACIgDAAQgGAAgFgEg");
	this.shape_115.setTransform(682.4,315.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_115).wait(1));

	// Layer 124
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AguAvQgGgFgBgIQgBgIAFgHIAcghIADgDIAlgeQAGgFAIABQAIABAFAFQAFAGABAHIACA5QAAAIgFAGQgFAGgIABIhDAGIgCAAQgHAAgGgFg");
	this.shape_116.setTransform(729.2,320.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_116).wait(1));

	// Layer 125
	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AhpBgQgGgFgCgHIgahoQgBgGACgFQACgGAEgDQAFgEAFgBIAxgFIBKglIAHgCIBvgJQAIgBAGAGQAGAFABAIQABAIgFAHIgkAtQgEAFgFACIhzAmQAlAIAnAEQAHABAFAGQAGAFAAAIQAAAHgFAGQgFAGgHABIiQAWIgDAAQgGAAgFgDg");
	this.shape_117.setTransform(720.7,335.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_117).wait(1));

	// Layer 126
	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("ACVWlQgMgBgLgDQgNgDgMgGIgCgBQgSgKgPgMIAAAAQgUgQgLgVQgDgEAAgFIgChAIABgHQADgKAHgCQAHgFAKAEQAEABAGAHIAIAMQAHAOAPAfIAAgBQARAjAmgDIgBAAIAGgBIAIgCIgBgSIgugWQgFgCgDgEQgDgEAAgGQgWi1gBi8QgBmOhKl/IgJADIADCMQAAAIgEAFQgFAGgIABQgIABgGgFQgHgFgBgIIhfqUQgBgHADgFQAqhPgEhoQgFhZgJhaQgjlgiFlMIAAgBIgEgNQgCgGADgHQACgGAGgDQAGgDAGAAQAHABAFAFIAZAYIBpBHQAHAEACAHICRJAQABAIgEAHQg7BoASB5QACAMADANQAPAxA1ANIABABIAVAHQAGABADAFQAEAEABAFQBAFwAqFzQA4IBAKIHQAAAGgDAFQgrBAhOAHIgBAAIgEgBg");
	this.shape_118.setTransform(714.7,464.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_118).wait(1));

	// Layer 127
	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("ABiCJQgGgEgCgHQgCgOgUg+IAAAAQgfhkhpgYQhOgRASggQADgEADgDQAEgDAEgBQCeglBECiQAbA/gJBGQgBAHgGAFQgFAFgHABIgBAAQgHAAgFgFg");
	this.shape_119.setTransform(720.8,296.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_119).wait(1));

	// Layer 128
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AiTCUQg9g9AAhXQAAhWA9g9QA9g9BWAAQBXAAA9A9QA9A9AABWQAABXg9A9Qg9A9hXABQhWgBg9g9g");
	this.shape_120.setTransform(708.5,309);

	this.timeline.addTween(cjs.Tween.get(this.shape_120).wait(1));

	// Layer 129
	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AhPBaQgRAAgLgMIAAAAQgMgMAAgQIAAhjQAAgQAMgMIAAAAQALgMARAAICfAAQARAAALAMIABAAQALAMAAAQIAABjQAAAQgLAMIgBAAQgLAMgRAAg");
	this.shape_121.setTransform(801.3,294);

	this.timeline.addTween(cjs.Tween.get(this.shape_121).wait(1));

	// Layer 130
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AhFA9QgMgFgHgMQgGgLABgNIADgcIAAAAQABgNAJgKIASgTQAHgIALgDIAAAAQAKgDALACIBXAVQANADAJALIAAAAQAIALAAAOQAAANgIALIAAAAQgJALgNADIAAAAIhsAbIgJABQgIAAgIgDg");
	this.shape_122.setTransform(797.4,275.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_122).wait(1));

	// Layer 131
	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("ABGBBIh1AAQgJAAgIgEIABAAQgIgDgGgGIAAAAIgVgXQgJgKgBgNIAAgBQgCgMAIgLIAAgBQAHgLANgFIA0gTIAKgDIABAAIBMgHQAPgBANAKIAAgBQAMAKADAPIAAAAIAJAxQACAMgFALQgEALgKAGQgKAHgMAAIAAAAg");
	this.shape_123.setTransform(800.3,282.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_123).wait(1));

	// Layer 132
	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AALC8IhugYQgLgDgIgIQgJgIgCgLQgDgLAEgLIBekRIAAAAQAFgQAPgHIAAAAQAOgHAPAFIAAAAIBZAcQAPAFAIAPQAHAOgEAQIgiBwIgmCbIAAAAQgEAQgOAIQgKAGgKAAIgJgBg");
	this.shape_124.setTransform(772.4,286.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_124).wait(1));

	// Layer 133
	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AAbDAIhegZQgQgEgIgOIAAAAQgJgOAEgQIAoipIAAgBIABgCIAghpQADgPAIgFQAMgNAOAAQAPgDASAFQAOAEAHAMIABAAQAIAMgCAOIgDAkQAyB9guCXIAAAAQgFAPgOAIIAAAAQgJAFgKAAIgLgBg");
	this.shape_125.setTransform(784.1,291.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_125).wait(1));

	// Layer 134
	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AA3CLQgGgEgDgHQgYhThKgyIgBgBQgSgNgUgLQgGgEgDgHQgCgHADgHQADgIAHgDICihKQAHgDAHACQAHACAEAGQAEAGAAAHIgQDzQgBAIgFAFQgEAFgIABIgDAAQgFAAgFgDg");
	this.shape_126.setTransform(729.2,285.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_126).wait(1));

	// Layer 135
	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgrCnIgegRQgEgDgDgEQgCgDgBgFQgUiSBPiUQAEgHAIgCQAIgCAGADIBLAmQAHAEADAHQACAHgCAHIhlEFQgDAGgEADQgFAEgGAAIgBAAQgFAAgFgDg");
	this.shape_127.setTransform(747.5,274.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_127).wait(1));

	// Layer 136
	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AAACxIhtg1QgHgDgDgHQgDgHACgHIAviQIABgDIA3h3QAEgHAHgDQAHgDAHADIBlAsQAIADADAIQADAHgDAHIheEQQgBAFgFAEQgFAEgFAAIgDAAQgEAAgDgBg");
	this.shape_128.setTransform(758.3,281);

	this.timeline.addTween(cjs.Tween.get(this.shape_128).wait(1));

	// Layer 137
	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FEFEFE").s().p("AIQEMIAAAAQoPiQoeg3QgMgBgJgHIAAAAQgJgHgEgKIABAAQgFgLACgLIAAAAQAQhZA5hIQBviPC2AQIAAAAIABAAQGJgZE1DhIAAAAQAjAaAJAoQAaBuAQByQACANgHAMQgHAMgMAFIAAAAQgIADgHAAQgGAAgFgBg");
	this.shape_129.setTransform(812.1,222.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_129).wait(1));

	// Layer 138
	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AldIPIAAAAQgLgJgDgPQhXm/D2mAQBTiBCQg0IAEgCQA6gUA8gEQAPgBAMAJQBvBTBCB4QAgA4AFAfQACAMgGAMQgFAMgMAGIAAAAQgLAGgNgCIghgEIACC3QAUAwAMAsQAFAOgHAOIAAAAQgGANgOAHIgBAAIgIACIg3BwQgHAPgQAGQjZBKi8B4IgDACQglAXgaAkIAAAAQgFAIgJAFIAAAAQgJAEgJAAIg1ABIAAAAQgPAAgLgJg");
	this.shape_130.setTransform(716.6,245.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_130).wait(1));

	// Layer 139
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FEFEFE").s().p("AgFAeQgGgCgEgGIgQgWQgEgFABgHQABgIAFgFQAGgFAIAAIAdAAQAIAAAGAFQAFAFABAIQABAHgEAFIgQAWQgEAGgGACIgGABIgFgBg");
	this.shape_131.setTransform(761.7,231);

	this.timeline.addTween(cjs.Tween.get(this.shape_131).wait(1));

	// Layer 140
	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FEFEFE").s().p("AgdCtQgPgHgGgPIAAABIgohcQgDgHgBgHIgHizQAAgRALgMQALgMAQgBQAQgBAMALIB7BqIAAAAQAKAJADANIAAAAQADANgGAMIAAABIhMCkIAAAAQgHAOgPAGQgGADgIAAQgHAAgIgDg");
	this.shape_132.setTransform(753.3,239);

	this.timeline.addTween(cjs.Tween.get(this.shape_132).wait(1));

	// Layer 141
	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AA3B7QgIgCgFgGIiWjEIAAAAQgNgSAIgJQACgRAZADQANABAiAOIAAAAQBYAnA/BHQAEAFABAGQAAAGgCAFIgeA6IgIAaQgCAHgGAEQgFADgFAAIgEAAg");
	this.shape_133.setTransform(749.7,207.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_133).wait(1));

	// Layer 143
	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FEFEFE").s().p("AIIERInngNQgIAAgIgEIAAAAQgIgEgFgGIAAgBIgMgNIAAgBIAAAAQgbgbgigRIgCgBQgngTgcAlIAAAAQgJAKgMAEIAAAAQgNADgMgEIgBAAIleiIIAAgBQgKgEgHgJQgHgJgBgLIAAgBQgBgLAFgKIAAAAICOkTQAGgMAMgFIAAAAQALgGANACIDYAmQALACAJAIQAIAIADALQADALgDAMIgIAXIATgmIABgBQAGgLALgGIAAAAQAMgHANADIAAAAIEEAtQANACAKAKIAFgDIABAAQALgEALADID6A3QAMADAJAJIAAAAQAIAKACAMIAoEvIAAABQABALgFALIABAAQgFAKgKAHIgBAAQgJAGgMAAIgBAAgABJCaIAEglIgeAIIAFACIgLAAIAGgCIgxgQQADAFABAGQAAAFgCAEIAAACIgBADQgFAGgHABQgGACgFgCQAaANAegCIAEgBIgCAAIADgBIgBABIANgBQAOAAAKAEgAgVggIAAABQgQAPAAAVQAAAVAQAQIAAAAQAPAPAUAAQAWAAAPgPIAAAAQAPgQAAgVQAAgVgPgPIAAgBQgPgPgWAAQgUAAgPAPg");
	this.shape_134.setTransform(806.4,253.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_134).wait(1));

	// Layer 144
	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("EgKNAjYQkrhEj9isQi/iBh5i9IAAAAQgJgOgBgSQgGhPgGhQQAAgJAGgGQAtgzAdg9QAfhBgNhJQgJg0gcgrIAAAAQgZglglgWQgEgDgDgEQgDgFAAgEIgLivQAAgHADgFQADgFAFgDQAGgDAGACQAGABAFAEQBAA+BaAMIAAAAIDDAhIAAAAQCKAZBghoQCKiYhfi/QhSimi6gBQgUAIgUgJIAAAAQifhHiGB2QgEAEgGABIgdAEQgGAAgFgCQgFgDgDgFQgEgFABgGIAsw0QAAgIAFgFQAFgFAHgBQAHgCAHAEIFZDTQA5g5AkhIQAhhEAFhJIAAgBQAGhagWhWQgOg8gZg3Il2h9QgGgCgDgEQgEgFgBgFQgBgGADgFICgmBIABgDQDGlCE7jTQFEjZGEgzIAAAAQF5g0FuBqQF1BrDrE2QDMEOA1FRIAXCYQABAGgCAGQgDAFgFADQgFADgGAAQgvAAgrAJIgBAAQggAGgeAOIAAAAQgWALgUAOIgBAAQgUAPgRARQgDAEgGACQgFABgGgBQgygQhHgwQhUg5hlABQiqADh5B7QhqBsg3CQIAAABQh4E7BEFOQABAHgDAGIg+B2QCoJvBnJ8QA7FvAnFwQAOB+AFB9QAAAHgEAGQgFAGgHABQkKA3kRACIgjAAQm3AAmthigEAA8gipQj/AGj2A7QhkAZgwBPIAEAVQBpBjCYARIAAAAQCxAXCyAFIABAAQFoAUFihFQBpgVBBhPIAAAAQAJgLgIgNIAAAAQgvhNhfgUQk4hBlAAAIhPABgAnp+yQgVgGgTgIQgGgDgDgFQgEgGAAgGQABgGAEgFQAEgFAGgCIC7g2Ig8AMIAAAAQhVARhGAeQgGACgGgBQgGgCgFgEQgEgFAAgHQgBgGADgGQA0hXB4gZIABAAQFnhGFwAaQDXAIDUAqIAAAAQBaAQBAA/IAAAAQAJAJAEAOQACAFgCAFQgBAFgDAEQgRAXgggFIABACQADAFABAGQAAAGgEAFQgDAFgGADQigBAiuASIAAAAQiiATifAAQlcAAlThagAMe/2QgrgWgvgJQgvgKgvgIQBdASBbAfgEgEJggqQFEguFIAWQAkACAjADQiSgRiSAAQjXAAjYAkg");
	this.shape_135.setTransform(633.6,306.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_135).wait(1));

	// Layer 145
	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FEFEFE").s().p("ADcC3InKhhQgPgDgJgMIAAAAQgJgLABgPQAAgPAKgKICfiqQAGgHAJgDIAAAAQDRhRBoDTIABABQAhBDAJBPIAAgBQAEATgIAWIAAAAQgFAOgNAHIAAABQgJAFgKAAIgJgBg");
	this.shape_136.setTransform(822.2,190.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_136).wait(1));

	// Layer 159
	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgYBFIABABQgggEgOgTIAAgBQgMgOgCgbIAAgBQAAgfAOgSIAAAAQAJgNAOgGIABAAQARgIAQAGIALAEIABgBIAAgBIAAAAQAmgMAQAOQAQAJAIAdIAAAAQAHAUgBALIAAAAQAAAMgLAUIAAAAQgJARgKAGQgIAGgOABIgCABIgOAAIgSAAIgHAAIgPgBg");
	this.shape_137.setTransform(807.4,253.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_137).wait(1));

	// Layer 160
	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AiCBXIgBAAQgMgFgHgLIgBgBQgPgVAKgXIABgEIAGgLIABgBIADgKIABgCQAHgUAXgQIABAAQANgIATgFQAKgMATgIIADgBIAfgHIABAAIAcgHIABgBQAXgEAQAEIAAAAQALACAPAIIAAABIATAKIAAAAIAaANIABAAQAXANAHAQIABABQAPAbgTAVIABAAQgMATgiAAIgBAAQgPABgYgDIgkgDIg5gBIgCAAIgCACQgFAHgEACIAAAAIgRALIABAAIgOAJIgOAKIABAAQgLAIgKACIAAAAIgJABQgIAAgIgDg");
	this.shape_138.setTransform(818.5,171.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_138).wait(1));

	// Layer 148
	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("Ag3CHQgqgSgWgoQgOgYgFgYQgFgJAAgLIAAgBIACgUQAAgTACgKIABgDIACgIIADgSQAEgeAmggIgBAAQAPgNAMgDIgBAAQAIgDAMAAIANABIABAAIAQgBIAAAAQAMAAAIABIABAAQAMACASAHIABAAQAVAHAIAKIAAAAIADADQATANATAUIAAABQA+BCgmBTIAAAAQgoBahLAAQgfAAgngRg");
	this.shape_139.setTransform(814.5,29.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_139).wait(1));

	// Layer 149
	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("ABKDQQhpgcgmh9IAAgBQgXhPgIhMIgKhVQgBgHAEgGQAEgGAHgCQAHgCAHADIAYALIACABQDNCHguDyIgBAAQgBAJgEAHQgEAGgGACQgEACgDAAIgGgBg");
	this.shape_140.setTransform(1077.8,389.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_140).wait(1));

	// Layer 150
	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgfCLQgFgEgCgGQgDgFACgGIAKgsIhDiGQgCgFAAgHQABgGAEgEIAwg1QAFgEAGgCQAGgBAGACQB7A3gCCIQAAAFgDAEQgCAFgEACIhiBHQgFAEgHAAIAAAAQgGAAgFgDg");
	this.shape_141.setTransform(1079.8,339.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_141).wait(1));

	// Layer 151
	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AjmE7QgGgDgDgGIgZgsQgDgGAAgGQABgGAEgFQAEgFAFgBIBZgbQAIgCAHAEQAGADADAHQBHADBGgqIAAAAQAWgNAHgVQgSgSAEgRQABgTAdgOIAYgrIiCjcQgDgHABgHQAMhMAsgZQApgbBIAYIAAABQAgALAVAYIAAAAQCyDLhzDwQgKAVgKAHQgOALgOgEImIBqIgFAAQgEAAgEgBg");
	this.shape_142.setTransform(1091.8,332.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_142).wait(1));

	// Layer 152
	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AEuIBQivgrirgzIAAAAQhLgWg8gsQkMhWjAjAQgEgEgBgFQgCgGACgFQBulOEqiwIAAAAQBog9B7gJQFLgbDHEUQAbAlANArIAAAGQAFAHgKAIQADB+AYCCQAMBDAuA0QADADABAFQABAEAAAEIgpEHQgBAFgDAEQgEAEgEACQhSAihYAAQg7AAg+gPgADIBfIgBAAQAQgugTgrIgCgFQAfBOhEBcIAAAAQgyBEhTAGQgUACgSgBQCbANA7ikgAhHDsIAAAAIAZAFQgvgJgqgdIgCgBQgXgTgQgVQAlA5BEARgAB4CLQADgCACgDIgHAAQgtgFgdgfQgYgagGgfIgtALIgBAAQgnALgfgbIAAAAQgPgMgQgFIgCAHQAdAZAmAJIgBAAQANADAOgCIAUgFQAHgBAHAEQAeARAnAnIAAAAQAUAUAdAFIgBAAQAGAAAFgBgAhSj8Qg3AYgHBCIAgAOQAFACAEAGQADAFAAAGQADAMgyAsQhNBEAMBPQgDg+A4hDIABAAQA/hMBkADQAGAAAFAEQAFAEACAGQACAGgCAGQgCAGgFAEQgRAOgDAZIAAAAQgDAVALAQQAIANAOAFQAFADACAEIACAAQANACAUgHQgGABgIAAQgXAAgPgOQgQgQAAgXQAAgWAQgQQAPgQAXAAQAXAAAQAQQAQAQAAAWQAAAXgQAQQgGAGgHADIAJgEIABAAQARgIAGgTIAAgBQACgHABgJQAAgJAGgFQAGgGAIAAQAIAAAGAGQARARAMASQhMh/igAbIgDAAQgYAAAAgWQgBgHAHgMQAEgJAKgOIANgRQAQgUACgOIAAgEQgDgJgOgHQgSAEgOAGgAEAhdQgOAVAAAfQAAAeAOAVQALAQAOABQAOgBAKgQQALgQADgXQgGACgGAAQgRABgLgRQgJgMAAgRQAAgQAJgMQADgFAFgEIgGgBQgOABgLAQg");
	this.shape_143.setTransform(1011,384.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_143).wait(1));

	// Layer 156
	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgrE2QgHgCgEgGIiwkLQgEgGABgHQAWkPEMg4IABgBQA/gMA+AXQAFACAEAFQASAYANAeIAAAAQAQAogHAsQgEAdgXARIAAAAIgQAKQgFAEgGgBQgTgBgGgLIgBgCQgFgHABgNQhOgghOA1QhNAzAeBOIAMAJQAEAEACAFIAXA/IBCguIAAAAQBDguBJAbQAGACADAFQAEAEAAAGIAIBQQABAGgDAGQgDAFgGADQgzAZg3AUIAAAAQgjANgDAlQAAAGgDAEQgDAFgFACIhMAnQgEACgEAAIgGgBg");
	this.shape_144.setTransform(993.9,304.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_144).wait(1));

	// Layer 157
	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("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");
	this.shape_145.setTransform(929.1,269.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_145).wait(1));

	// Símbolo 59
	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgxEVIgZgGIgVgIIAAAAQhRghgvhLQgFgCgEgEIgRgZQgDgFgBgGIAAgRIAAgEIAAgBIgGgZQgLg1AHg1IgBAAIAEgbIABgGIAAgBQgBgtAZglQAGgIADgHIAAgBQAZg2A7gLIAAAAIABAAIAJgFIABgBQBZgxBiAWQA+ANAuAmIAEAEQAUAQgBAYIAOAOQADADABAEQACAEAAAFQgBAGACAHIAAAAQANAnAaAiQAFAGAAAHQgBANAEAKQACAHAGAHQAEAGAAAFIAABaQAAAFgDAFQgQAfgMAkQgDAHgHAEIg+AhQgIAIgLAGIAAAAQgXAOgbABQgMAMgQADIgBAAQgRADgRgCIgJAGQgFADgGAAIgFAAIAAAAQgXABgWAIIgHACIgEgBg");
	this.shape_146.setTransform(866.2,75.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_146).wait(1));

	// Símbolo 58
	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AkWHCQgIgCgEgHQgkg4gmg2IgNgQIAAAAQgegkgMgrIgLgFQgFgCgEgFQgDgFAAgGQAAgHAEgFQADgFAGgCIAOgFIAEgGQAigvBAAFIAEABIACAAIgBAAIBYgnIABgBIAMgEIAGgJQAUgZAOgkIAAgBQAEgKAGgJIAAgBQAbgkAPgtQAFgOAIgOIAAAAQAXgnAQgnIgBAAQAEgJACgLIAAAAQACgMAEgKQADgHAHgEIAEgCIBmjLQAEgHAHgDQAIgDAHADQAHADADAHQAEAHgDAIIhwFpIABAHIAAAAQAEAvgcAlQgHAKgFANIgCAFQB9gaB6goIABAAQAfgKAbgTIAAAAQA2glBBgBIAAAAQAXAAARANQADADACAEQADAEAAAFIAAAKIAOAUQAEAFAAAGIAAABIAAACQgEAognAVIAAAAQg/AghCAdQgXAKgXANIAAAAQj1CWjzCbQgFADgFAAIgFAAg");
	this.shape_147.setTransform(802.3,90.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_147).wait(1));

	// Símbolo 42
	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("EhYvAyAMAAAhj/MCxfAAAMAAABj/g");
	this.shape_148.setTransform(568,320);

	this.timeline.addTween(cjs.Tween.get(this.shape_148).wait(1));

}).prototype = getMCSymbolPrototype(lib.dib2, new cjs.Rectangle(0,0,1136,640), null);


(lib.dib1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.contorno = new lib.contorno();
	this.contorno.parent = this;
	this.contorno.setTransform(570.1,319.9,0.577,0.577,0,0,0,987.8,489.7);

	this.dibujo = new lib.dibujo();
	this.dibujo.parent = this;
	this.dibujo.setTransform(3.9,44.8,0.577,0.577,0,0,0,3.1,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dibujo},{t:this.contorno}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dib1, new cjs.Rectangle(0,0,1456.6,690.5), null);


(lib.botonera = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.compartir = new lib.Symbol3();
	this.compartir.parent = this;
	this.compartir.setTransform(64.2,552,1,1,0,0,0,43.5,45);

	this.bajar = new lib.Symbol2();
	this.bajar.parent = this;
	this.bajar.setTransform(64.2,407.8,1,1,0,0,0,43.5,44.8);

	this.color = new lib.Symbol1();
	this.color.parent = this;
	this.color.setTransform(64.2,263.8,1,1,0,0,0,43.5,44.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.color},{t:this.bajar},{t:this.compartir}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.botonera, new cjs.Rectangle(20.7,219,87,378), null);


// stage content:
(lib.pintarDuende = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// botonera
	this.instance = new lib.botonera();
	this.instance.parent = this;
	this.instance.setTransform(58.3,298.5,1,1,0,0,0,58.3,298.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dib1 copy
	this.instance_1 = new lib.dib2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(728.3,345.2,1,1,0,0,0,728.3,345.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 2
	this.instance_2 = new lib.dib1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(726.2,345.3,1,1,0,0,0,728.3,345.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(565.9,320,1456.6,690.6);
// library properties:
lib.properties = {
	width: 1136,
	height: 640,
	fps: 24,
	color: "#00FF00",
	opacity: 1.00,
	manifest: [
		{src:"images/bajar.png?1511929156293", id:"bajar"},
		{src:"images/Bitmap1.png?1511929156293", id:"Bitmap1"},
		{src:"images/Bitmap2.png?1511929156293", id:"Bitmap2"},
		{src:"images/col.png?1511929156293", id:"col"},
		{src:"images/compartir.png?1511929156293", id:"compartir"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;