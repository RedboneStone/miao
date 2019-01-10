
var redbonestone = {
	chunk: function chunk(ary, size = 1) {
		var result = []
		for(var i = 0; i< ??; i++) {
			result.push(ary.slice(i, i + size))
		}
		return result
	},
	compact: function(ary) {
		var result = []
		for(var item of ary) {
			if (item) {
				result.push(item)
			}
		}
		return result
	},
	uniq: function uniq(ary) {
				let tmp = {};
			  for(let i = 0;i<ary.length;i++){
			  	if(ary[i] in tmp){
			  		  tmp[ary[i]]++
				  } else {
			  		  tmp[ary[i]] = 1
				  }
			  }
			  return Object.keys(tmp);
	}
};

