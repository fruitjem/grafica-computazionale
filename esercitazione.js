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




