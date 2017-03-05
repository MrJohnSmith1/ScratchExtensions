(function(ext){
	ext._shutdown=function(){};
	ext._getStatus=function(){
		return {
			status:2,
			msg:"Ready",
			
		};
		
	};
	ext.emptyList=function(){
		return [];
	};
	
	ext.addToList=function(a,b){
		return b.concat([a]);
	};
	
	ext.joinTwoLists=function(a,b){
		return a.concat(b);
	};
	ext.itemOfList=function(a,b){
		return b[a-1];
	};
	ext.parseIntoList=function(a,b){
		return a.split(b);
	}
	
	
	
	var descriptor={
		blocks:[
			["r", "Empty List", "emptyList"],
			["r", "Add %s to list %s", "addToList"],
			["r", "Join lists %s %s", "joinTwoLists"],
			["r", "Item %n of list %s", "itemOfList"],
			["r", "Split %s with delimiter %s", "parseIntoList"],
		],
		
	};
	ScratchExtensions.register("First-class lists", descriptor, ext);


})({});
