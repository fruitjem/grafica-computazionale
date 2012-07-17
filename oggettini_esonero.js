--------------------------------------------------------------------------

var disegna_tavolino = function (x,y,z){
	var base1 = function () {
	var domain = INTERVALS(1)(30);
	var controlpoints = [[0,0],[0,1],[1,1],[-1,1]];
	var curveMapping = CUBIC_HERMITE(S0)(controlpoints);
	var base_dx = MAP(curveMapping)(domain);
	return base_dx;
}

var base2 = function () {
	var domain = INTERVALS(1)(30);
	var controlpoints = [[0,0],[0,1],[-1,1],[1,1]];
	var curveMapping = CUBIC_HERMITE(S0)(controlpoints);
	var base_sx = T([0])([0.3])(MAP(curveMapping)(domain));
	return base_sx;
}

var base1 = COLOR([0,0.2,0.6,0.6])(EXTRUDE([0.2])(base1()));
var base2 = COLOR([0,0.2,0.6,0.6])(EXTRUDE([0.2])(base2()));
var tavolo = BOUNDARY(COLOR([0.65,0.792,0.941,0.5])(T([0,2])([-0.1,0.2])(SIMPLEX_GRID([[0.5],[1],[0.02]]))));

var tavolino = STRUCT([T([0,1,2])([x,y,z]),base1,base2,tavolo]);

return tavolino;
}


------------------------------------------------------------------------------------------------
var disegna_scivolo = function (x,y,z){
var piedi_scivolo = BOUNDARY (COLOR([1,0,0,0.8])(SIMPLEX_GRID([[0.5,-1.5,0.5],[0.5,-1.5,0.5],[5]])));
var base_scivolo = BOUNDARY(COLOR([1,0,0,0.8])(T([2])([5])(SIMPLEX_GRID([[2.5],[2.5],[0.3]]))));

/*
var curva_scivolo = function () {
	var domain = INTERVALS(1)(20);
	var controlpoints = [[2,5],[0,5],[-3,4.5],[-5,1],[-8,2],[-10,0],[-11,0.5],[-12,0]];
	var splineCubic = SPLINE(CUBIC_UBSPLINE(domain))(controlpoints);
	var scivolino = EXTRUDE([2.5])(splineCubic);
	var scivolato = COLOR([0,1,0,0.5])(COMP([R([1,2])([PI/2]),T([0,1,2])([0.2,0.4,-2.5])])(scivolino));
	return scivolato ;
}
*/

var curva_scivolo = function(){
	var domain = PROD1x1([INTERVALS(1)(14),INTERVALS(1)(14)]);
	var c1 = CUBIC_HERMITE(S0)([[0,0,5],[-12,0,0],[1,1,5],[-2,0,1]]);
	var c2 = CUBIC_HERMITE(S0)([[0,2.5,5],[-12,2.5,0],[1,1,5],[-2,0,1]]);
	var sur3 = CUBIC_HERMITE(S1)([c1,c2,[-1,-1,-1],[1,1,2]]);
	var out_base = MAP(sur3)(domain);
	var out = COLOR([0,1,0,0.9])(T([0,2])([0.1,0.2])(out_base));
	return out;
}


var scivolino = curva_scivolo();

var poggia_mani1 = function (){
	var domain = INTERVALS(1)(20);
	var controlpoints = [[0,0],[2.5,0],[1,10],[1,-10]];
	var curveMapping = CUBIC_HERMITE(S0)(controlpoints);
	var curve = MAP(curveMapping)(domain);
	var mani = EXTRUDE([0.1])(curve);
	var poggia_mani = COLOR([1,0,0,0.5])(COMP ([R([1,2])([PI/2]),T([1])([5])])(mani));
	return poggia_mani; 
}

var poggia_mani2 = function (){
	var domain = INTERVALS(1)(20);
	var controlpoints = [[0,0],[2.5,0],[1,10],[1,-10]];
	var curveMapping = CUBIC_HERMITE(S0)(controlpoints);
	var curve = MAP(curveMapping)(domain);
	var mani = EXTRUDE([0.1])(curve);
	var poggia_mani = COLOR([1,0,0,0.5])(COMP([R([1,2])([PI/2]),T([1,2])([5,-2.5])])(mani));
	return poggia_mani; 
}

var scalinata = function (){
	
	  var scalini = SIMPLEX_GRID([[0.1],[1.5],[-0.5,0.25,-0.25,0.25,-0.25,0.25,-0.25,0.25,-0.25,0.25,-0.25,0.25,-0.25,0.25,-0.25,0.25,-0.25,-0.5]]);
	  return scalini;
}

var poggia1 = poggia_mani1();
var poggia2 = poggia_mani2();
var scalini_grezzi = scalinata()
var scalini = COLOR([0,1,0,0.8])((T([0,1])([2.4,0.5])(scalini_grezzi)));

var scivolo = STRUCT([T([0,1,2])([x,y,z]),piedi_scivolo,base_scivolo,scivolino,poggia1,poggia2,scalini]);
return scivolo;
}


--------------------------------------------------------------------------------------------------
>>>>SEDIA<<<<

var disegna_sedia = function(x,y,x){
var domain = INTERVALS(1)(30);
var controlpoints = [[0,-1],[0,0],[0,1],[1,1],[1.5,1],[1.5,1.5],[2,3],[3,3]];
var schienale = COLOR([0,0.8,1,0.5])(T([1])([1])(R([1,2])([PI/2])(EXTRUDE([1])(SPLINE(CUBIC_UBSPLINE(domain))(controlpoints)))));
var base1 = COLOR([1,1,1])(SIMPLEX_GRID([[1.45],[1],[0.01]]));
var base2 = BOUNDARY(COLOR([0,0.8,1,0.5])(T([0])([1.35])(SIMPLEX_GRID([[0.1],[0.2,-0.6,0.2],[1.07]]))));

var sedia = STRUCT([T([0,1,2])([x,y,z]),schienale,base1,base2]);
return sedia;

}

-----------------------------------------------------------------------------------------

