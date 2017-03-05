(function(ext){
	ext._shutdown=function(){};
	ext._getStatus=function(){
		return {
			status:2,
			msg:"Ready",
			
		};
		
	};
	ext.cons=function(a,b){
		return [a,b];
	};
	ext.car=function(a){
		return a[0];
	};
	ext.cdr=function(a){
		return a[1]
	};
	var descriptor={
		blocks:[
			["r", "cons %s %s", "cons", 1,2],
			["r", "car %s", "car", 1],
			["r", "cdr %s", "cdr", 1],
		
		],
		
	};
	ScratchExtensions.register("Pairs", descriptor, ext);


})({});
