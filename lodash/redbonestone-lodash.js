
var redbonestone = (function() {
	function chunk(ary, size = 1) {
		let result = [];
		for(let i = 0; i < ary.length;i+=size) {
			f(i+size > ary.length){
				result.push(ary.slice(i,ary.length));
				break;
			}
			result.push(ary.slice(i,i+size));
		}
		return result
	}
	function uniq(ary) {
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
	function compact() {

	}
	function difference(){

	}
	function concat() {

	}
	return {
		chunk: chunk,
		compact: compact,
		concat:concat,
		difference:difference,
		uniq:uniq,
	};
})();



