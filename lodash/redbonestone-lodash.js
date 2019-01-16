
var redbonestone = (function() {
	function chunk(ary, size = 1) {
		let result = [];
		for(let i = 0; i < ary.length;i+=size) {
			if(i+size > ary.length){
				result.push(ary.slice(i,ary.length));
				break;
			}
			result.push(ary.slice(i,i+size));
		}
		return result
	}
	function uniq(ary) {
		let tmp = {};
		let result = [];
		for(let i = 0;i<ary.length;i++){
			if(ary[i] in tmp){
				tmp[ary[i]]++
			} else {
				tmp[ary[i]] = 1
			}
		}
		for(var item of tmp){
				result.push(item);
		}
		return result;
	}
	function uniqby(){

	}
	function compact(arr) {
		var result = [];
		for(let i = 0;i < n;i++){
			if(arr[i]){
				result.push(arr[i]);
			}
		}
		return result;
	}
	function difference(){

	}
	function differenceby(){

	}
	function concat() {

	}
	function keys(){

	}
	function flatten(ary) {
		let result = [];
		for(let item of ary){
			if(Array.isArray(item)){
				for(let val of item){
					result.push(val);
				}
			}else {
				result.push(item);
			}
		}
		return result;
	}
	function flattendeep() {

	}
	function flattendepth() {

	}
	function some() {

	}
	function every() {

	}
	function groupby(){

	}
	function mapvalues(){

	}
	function filter(arr,test) {
		let result = [];
		for(let i = 0;i < arr.length;i++){
			if(test(arr[i])) {
				result.push(arr[i]);
			}
		}
	}
	function map(arr,test){
		let result = [];
		for(let i = 0;i < arr.length;i++){
			 result.push(test(arr[i],idx,arr));
		}
	}
	return {
		chunk: chunk,
		compact: compact,
		concat:concat,
		difference:difference,
		differenceby:differenceby,
		uniq:uniq,
		uniqby:uniqby,
		keys:keys,
		map:map,
		filter:filter,
		flatten:flatten,
		flattendeep:flattendeep,
		flattendepth:flattendepth,
		some:some,
		every:every,
		groupby:groupby,
		mapvalues:mapvalues,

	};
})();



