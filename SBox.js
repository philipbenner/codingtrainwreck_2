function SBox (w, d, h, r){
	this.w = w
	this.d = d
	this.h = h
	this.r = r

	this.show = function(){

		box(this.r, this.r, this.r);
	}
}