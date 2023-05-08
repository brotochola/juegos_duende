function coord2Tiles(num){
	return Math.floor(num/tile);
}


function downloadJSON(que){

	 var atag = document.createElement("a");
  var file = new Blob([stringify(que, null, 2)], {type: 'text/plain'});
  atag.href = URL.createObjectURL(file);
  atag.download = "grid.json";
  atag.click();
}

function bajarGrid(){
	downloadJSON(simplificarGrid());
}


function ordenarHero(){
	objs=nivel.escenario.objetos.children;
	cualObj={};
	arrayParaOrdenar=[]; //array bidimensional q va a tener la data de los panes, para ordenarlos.
	for(i=0; objs.length>i;i++){
		arrayParaOrdenar.push([Math.floor(objs[i].y), objs[i]]);
	}
	arrayParaOrdenar.push([Math.floor(hero.y), hero]); //meto a bellota para ordenarla
	arrayParaOrdenar.sort(Comparator);//ordena el primer valor del array [este][esteNo]
	
	for(i=0; i<arrayParaOrdenar.length;i++){
		if(arrayParaOrdenar[i][1]==hero){
			nivel.escenario.objetos.setChildIndex(hero, i+2);
			break;
		}	
	}
	
}
function ordenarTipitos(){
	objs=nivel.escenario.objetos.children;
	arrayParaOrdenar=[]; //array bidimensional q va a tener la data de los panes, para ordenarlos.
	for(i=0; objs.length>i;i++){
		arrayParaOrdenar.push([objs[i].y, objs[i]]);	
	}
	arrayParaOrdenar.push([hero.y, hero]); //meto a bellota para ordenarla
	
	arrayParaOrdenar.sort(Comparator);//ordena el primer valor del array [este][esteNo]
	//yPanes.reverse(); 
	for(i=0; i<arrayParaOrdenar.length;i++){
		nivel.escenario.objetos.setChildIndex(arrayParaOrdenar[i][1], i);		
	}

	//console.log(yPanes);
}



function piso2Grid(){
	console.log("piso 2 grid");

	
	if(escanearPiso){
		console.log("ESCANEANDO PISO... esto puede tardar")
			//escanearPiso es una variable mia para saltear esto, y poder testear mas rapido
		for(n=0; n<=anchoTiles;n++){
				grid[n]=new Array(altoTiles);				
				for(m=0; m<=altoTiles;m++){
					grid[n][m]=new Spot(n,m);	
					//caminable se llama el simbolo donde pinto donde se puede caminar y donde no
					grid[n][m].muro=nivel.escenario.caminable.hitTest(n*tile+tile/2,m*tile+tile/2);
				
					if(visibleTiles){ //puedo hacer visibles los tiles
						 grid_el = new createjs.Shape();
				            grid_el.graphics.setStrokeStyle(2,"square").beginStroke("#000000");
				             if(grid[n][m].muro==true) grid_el.graphics.beginFill("#70FF85");
				            else grid_el.graphics.beginFill("#aaaaaa");
				            grid_el.graphics.rect(n*tile ,m*tile,tile,tile);
				               grid_el.x_pos = n*tile;
				               grid_el.y_pos = m*tile;
				               grid_el.alpha=0.3;
						 nivel.escenario.addChild(grid_el);
					} //if visibleTiles
								
			} //m
				

		}//n
		if(dibujarGridEnConsola) dibujarGrid(grid);
	}else{
		console.log("CARGANDO GRID DE grid.json...")
			//si no se escanea el piso, se carga la grid q alguna vez guarde
						//q sale de haber escaneado el piso anteriormente
						//cuando el nivel este listo, ya no escaneo mas la grid y queda como data.
						   $.ajax({
					          url: "grid.json",
					        crossDomain: true,   
					          success: function(data) {
					          	//console.log(data);
					          	console.log("grid cargada del archivo");
					          	gridCargada=data;
					            grid=parsearGridCargada(data);	

					            if(dibujarGridEnConsola) dibujarGrid(grid);
					          }});
	}

		
	nivel.escenario.removeChild(nivel.escenario.caminable);
	//pa q no joda, dps de escanear donde se puede caminar y donde no, borro el obj
	
		
		
} //piso2grid



function DiagonalNeighbours(myN, myS, myE, myW, N, S, E, W, result)
	{
		if(myN)
		{
			if(myE && canWalkHere(E, N))
			result.push(grid[E][N]);
			if(myW && canWalkHere(W, N))
			result.push(grid[W][N]);
		}
		if(myS)
		{
			if(myE && canWalkHere(E, S))
			result.push(grid[E][S]);
			if(myW && canWalkHere(W, S))
			result.push(grid[W][S]);
		}
	}


function vecinos(x,y){

		result=[];
		sp=new Spot(x-1, y-1);
		if(canWalkHere(sp.x, sp.y)) result.push(sp);
		sp=new Spot(x-1, y);
		if(canWalkHere(sp.x, sp.y)) result.push(sp);
		sp=new Spot(x-1, y+1);
		if(canWalkHere(sp.x, sp.y)) result.push(sp);
		sp=new Spot(x, y-1);
		if(canWalkHere(sp.x, sp.y)) result.push(sp);
		//result.push(x, y);
		sp=new Spot(x, y+1);
		if(canWalkHere(sp.x, sp.y)) result.push(sp);
		sp=new Spot(x+1, y-1);
		if(canWalkHere(sp.x, sp.y)) result.push(sp);
		sp=new Spot(x+1, y);
		if(canWalkHere(sp.x, sp.y)) result.push(sp);
		sp=new Spot(x+1, y+1);
		if(canWalkHere(sp.x, sp.y)) result.push(sp);
		return result;
	}
function Neighbours(x, y){
		var	N = y - 1;
		var S = y + 1;
		var E = x + 1;
		var W = x - 1;
		var myN = N > -1 && canWalkHere(x, N);
		var myS = S < altoTiles &&  canWalkHere(x, S);
		var myE = E < anchoTiles && canWalkHere(E, y);
		var myW = W > -1 && canWalkHere(W, y);
		result = [];
		if(myN)
		result.push(grid[x][N]);
		if(myE)
		result.push(grid[E][y]);
		if(myS)
		result.push(grid[x][S]);
		if(myW)
		result.push(grid[W][y]);

	
		DiagonalNeighbours(myN, myS, myE, myW, N, S, E, W, result);
	
		return result;
	}

	function canWalkHere(x, y)
	{
		rta=false;
		try{
			rta= !grid[x][y].muro;
		}catch(e){
			//console.log(e);
		}
		return rta;
		 	
		
	}

function dibujarTile(spot, color){
	grid_el = new createjs.Shape();
	grid_el.graphics.setStrokeStyle(2,"square").beginStroke("#000000");
	grid_el.graphics.beginFill(color);
	grid_el.graphics.rect(spot.x*tile ,spot.y*tile,tile,tile);
	grid_el.x_pos = spot.x;
	grid_el.y_pos = spot.y;
	grid_el.alpha=0.5;
	nivel.escenario.piso.addChild(grid_el);
}


function dibujarPath(path){
	for(var i=0;i<path.length; i++){
		dibujarTile(path[i], "#aaaaaa");
	}
 
}


function aStar(source,dest){
//esto funciona asi:
//aStar(grid[0][0],grid[4][4]);
//devuelve un array de Spots


	if( source==undefined || dest==undefined ||  source.muro ==true || dest.muro ==true || source.x<0 || source.x>anchoTiles || source.y>altoTiles || source.y<0 || dest.x<0 || dest.x>anchoTiles || dest.y>altoTiles || dest.y<0){
		console.log("el punto de partida o destino no se pueden caminar");
		return [source];
	}
	var d = new Date();
	var tiempoInicial = d.getTime();
//	console.log("!!!! Empieza a star !!!!");
	var openSet=[];
	var closedSet=[];	
	var path=[];
	openSet.push(source);	
	
	
	var winner=0;
	var cuenta=0;

		//console.log("openSet.length="+openSet.length);
		while(openSet.length>0){
			cuenta++;
			//console.log(openSet);
			if(cuenta>anchoTiles*altoTiles){
				var d = new Date();
				var tiempoFinal = d.getTime();
				console.log("a star no encontró un camino en un tiempo prudente");
				console.log("a star demoró "+(tiempoFinal-tiempoInicial));
				return [source]; 	//no hay camino ,pero porq tardo mucho en encontrarlo
			} 
		
			
			for(var i=0;i<openSet.length-1;i++){
				if(openSet[winner].f>openSet[i].f) winner=i;
			}
			current=openSet[winner];
		//	console.log("current="+current);
			if(current==dest){
				var temp=current;
				path.push(temp);
				var cnt=0;
			
				while(temp.cameFrom){
					if(temp.cameFrom==source) break;
					if(temp.cameFrom !=undefined && temp.cameFrom.cameFrom!=undefined)  if(temp==temp.cameFrom.cameFrom) break;
					path.push(temp.cameFrom);
					temp=temp.cameFrom;
					if(cnt<60) cnt++;
					else break;

				}
				if(dibujarPathAstar) dibujarPath(path);
				var d = new Date();
				var tiempoFinal = d.getTime();
			//	console.log("a star demoró "+(tiempoFinal-tiempoInicial));
				
			//	console.log("path encontrado!");
			//	console.log(path);
			
				return path.reverse();
				

			}
			closedSet.push(current);
			removeFromArray(openSet, current);
		
			vecis = Neighbours(current.x, current.y);
		//	console.log(vecis);

			

			for(i = 0; i< vecis.length;  i++)
			{

				veci=vecis[i];	
							


				if(arrIncludes(closedSet,veci)) continue; //si esta celda esta en el closedSet, no la evalua
					//	dibujarTile(veci, "#00ff00");
				tempGScore=current.g+1;
				
				var newPath=false;
				if(arrIncludes(openSet,veci)){
					if(tempGScore<veci.g){
						veci.g=tempGScore;
						newPath=true;
					}
				}else{
					newPath=true;
					veci.g=tempGScore;
					openSet.push(veci);
				}//openset includes veci
				if(newPath){
					veci.h=calcularDistanciaObj(veci, dest);
					veci.f=veci.g+veci.h;
					veci.cameFrom=current;
				}
				


			}//for neighboors
		

	}//while


	

}

function dibujarGrid(g){
	drawGrid=new Array();
		for(x=0; x<g.length;x++){
			
			for(y=0;y<g[1].length;y++){
				if(g[x][y].muro==true  )	drawGrid[y]+="#";
				else drawGrid[y]+="-";
			}			
		}

		for(var i=0;i<drawGrid.length;i++){
			num=i;
			if(i<10)num="0"+i;
			console.log(num+". "+drawGrid[i]);
		}
}

function parsearGridCargada(g){
	try{g=JSON.parse(g);}catch(e){console.log(e)}
	arr=new Array(anchoTiles);
	for(i=0;i<g.length;i++){
		arr[i]=new Array(altoTiles);
		for(j=0;j<g[0].length;j++){
			
			if(g[i][j]==1) arr[i][j]=new Spot(i,j, true);
			else arr[i][j]=new Spot(i,j, false);
		}
	}
	return arr;
}


function estanEnElMismoTile(obj1,obj2){
	if(obj1.tileX==obj2.tileX && obj1.tileY==obj2.tileY) return true;
	else return false;
}

function simplificarGrid(){
	arr=new Array(anchoTiles);
	for(i=0;i<anchoTiles;i++){
		arr[i]=new Array(altoTiles);
		for(j=0;j<altoTiles;j++){
			
			if(grid[i][j].muro) arr[i][j]=1;
			else arr[i][j]=0;
		}
	}
	return arr;

}
