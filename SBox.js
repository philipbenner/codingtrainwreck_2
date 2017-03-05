function SBox (x, y, z, r){
	this.x = x
	this.y = y
	this.z = z
	this.r = r

	this.show = function(){
		push();
		translate(this.x, this.y, this.z);
		box(this.r);
		pop();
	}

	this.division = function (){
		var newList = [];
		for (var i = -1; i < 2; i++) {
			for (var j = -1; j < 2; j++) {
				for (var k = -1; k < 2; k++) {
					var val = abs(i)+abs(j)+abs(k);
					if(val > 1){
						var newR = this.r/3;
						var b = new SBox (this.x+i*newR, this.y+j*newR, this.z+k*newR, newR);
						newList.push(b);
					}
				}
			}
		}
		

		return newList
	}
}