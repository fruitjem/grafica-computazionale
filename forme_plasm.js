--------------------------------------------------------
var dominio = DOMAIN ([[1.5,5.5]])([4]);
var mapping_function = function (p){
	var u = p[0];
	return [u,1];
}
var retta = MAP(mapping_function)(dominio);

---------------------------------------------------------


var domain = DOMAIN ([[0,5]])([10]);

var mapping_function = function(p){
	var u = p[0];
	return [u,u];
}
var bisettrice = MAP(mapping_function)(domain); 

----------------------------------------------------------

var domain = DOMAIN ([[0,PI]])([10]);

var mapping_function = function (p){
	var u = (p[0]);
	var v = SIN(u);
	return [u,v];
} 
var sinusoide = MAP(mapping_function)(domain);

-----------------------------------------------------------

var domain= DOMAIN ([[0, r*2*PI]])([10]);

var mapping_function = function (p){
	var u = COS(p[0]);
	var v = SIN (p[0]);

	return [u,v];
}

var cerchio = MAP(mapping_function)(domain);

-----------------------------------------------------------

var draw_cilindro = function (r,h,color){
	var domain = DOMAIN([[0, 2*PI*r],[0,h]])([200,200]);
	var mapping_function = function (p){
		var x = p[0];
		var y = p[1];

		return [r*COS(x),r*SIN(x),y];	
	}
	var cilindro = MAP(mapping_function)(domain);
	COLOR(color)(cilindro);
	DRAW(cilindro);
}

------------------------------------------------------------

var draw_sfera = function (r){ 
	var domain = DOMAIN([[0, 2*PI*r],[0,2*PI*r]])([200,200]);

	var mapping_function = function (p){
		var x = p[0];
		var y = p[1];

		return [r*COS(x)*COS(y),r*COS(x)*SIN(y),r*SIN(x)];
	}

	var sfera = MAP(mapping_function)(domain);
	DRAW(sfera);

	
}

