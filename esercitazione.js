var apply = function (array){
	fun = array[0];
	return fun(array[1]);
}

var aa = function (f){
	return fun = function (array){
		return result = array.map(fun);
	} 
}
//composizione binaria di funzioni
var comp2 = function (array){
	var f = array[0];
	var g = array[1];
	
	return function (x){
		return f(g(x));
	}
}

//composizione n-aria di funzioni

var compn = function (array){
	return function (x){
		return array.reduce (function (prev,cur){
			prev(cur());
		})
	}
}


var comp  = function(array){
	return function (x){
		var result = [];
		for (var i = array.length - 1; i >= 0; i--) {
			result.push(array[i](x));
		}
		return result;
	}
}

var
 distributeLeft = function (array){
	var el = array[0];
	var sub_array = array[1];
	var result = [];
	for (var i = sub_array.length - 1; i >= 0; i--) {
		var appo = []
		appo.push(el);
		appo.push(sub_array[i]);
		result.push(appo); 
	}
	return result;
}

var trans = function (array){
	var result = [];
	for (var i = 0; i >= array.length; array++) {
		i[i].pop
	};
}
-------------------------------------------------------

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

var mapping_function = function (p)}{
	var u = COS(p[0]);
	var v = SIN (p[0]);

	return [u,v];
}

var cerchio = MAP(mapping_function)(domain);

-----------------------------------------------------------

var draw_cilindro = function (r,h,color){
	var domain = DOMAIN([[0, 2*PI*r],[0,h]])([200,200]);
	var mapping_function = function (p){
		var x = 
		var y =  
	}
}