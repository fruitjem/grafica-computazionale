var apply = function (array){
	fun = array[0];
	return fun(array[1]);
}

var aa = function (f){
	return fun = function (array){
		return result = array.map(fun);
	} 
}

var comp2 = function (array){
	var f1 = array[0];
	var f2 = array[1];
	
	return fun = function (x){
		f1(f2(x));
	}
}

