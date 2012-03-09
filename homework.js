
function Point (x,y){
	this.x = x;
	this.y = y;
}

Point.prototype.getDistance = function (point){
	var distance;
	
	distance = Math.sqrt( Math.pow((this.x - point.x) , 2) + Math.pow( (this.y - point.y) ,2));
    return distance; 
}

function Triangle (p1,p2,p3){
	this.p1 = p1;
	this.p2 = p2;
	this.p3 = p3;

	this.getPerimeter = function() {
		var lato1 = this.p1.getDistance(p2); 
		var lato2 = this.p1.getDistance(p3);
		var lato3 = this.p2.getDistance(p3);
      	var perimeter;
      	return perimeter = lato1 + lato2 + lato3;
    }

    this.getArea = function () {
    	 
        var lato1 = this.p1.getDistance(p2); 
		var lato2 = this.p1.getDistance(p3);
		var lato3 = this.p2.getDistance(p3);
		var area;
		var p = ( this.getPerimeter()/2 ) ;
		//Formula di ERONE
		// A = |p (p - l1) (p - l2) (p - l3)|
		return area = Math.sqrt(p * (p - lato1) * (p - lato2) * (p - lato3));
	}
}