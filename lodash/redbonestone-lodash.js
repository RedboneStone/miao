
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
		return ary.filter((element,index,ary)=> ary.indexOf(element) === index);
	}
	function uniqby(){

	}
	function compact(arr) {
		var result = [];
		for(let i = 0;i < arr.length;i++){
			if(arr[i]){
				result.push(arr[i]);
			}
		}
		return result;
	}
	function difference(ary,...values){
		let result = [];
		for(let i = 0;i<ary.length;i++) {
			for (let j = 0; j < values.length; j++) {
				if (ary[i] !== arguments[1][j]) {
					result.push(i);
					break;
				}
			}
		}
		return result.map(it => ary[it]);
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
	function some(ary,func) {
			for(let i = 0;i<ary.length;i++){
				if(!func(ary[i])){
					return false
				}
			}
			return true
	}
	function every() {

	}
	function groupby(){

	}
	function mapvalues(){

	}
	function filter(arr,test) {

		// for(let i = 0;i < arr.length;i++){
		// 	if(test(arr[i])) {
		// 		result.push(arr[i]);
		// 	}
		// }
		// return result;

			let result = [];
			return arr.reduce((returnValue, currentValue) => {
				if(test(currentValue)){
					result.push(currentValue);
				}
				return result;//返回结果放if外头,否则会出bug
			},0);
	}
	function map(arr,test){
		// let result = [];
		// for(let i = 0;i < arr.length;i++){
		// 	 result.push(test(arr[i],index,arr));
		// }
		// return result;
		let result = [];
		return arr.reduce((returnValue,num) => {
			result.push(test(num));
			return result
		},0);
	}//根据所传函数 将数组映射到另一个数组上
	function reduce(ary,func,initialVal) {
		let result = initialVal;
		for(let i = 0;i<ary.length;i++){
			 result = func(result,ary[i]);
		}
		return result;
	}//根据整个数组 计算出 一个值.
	function ary() {
		
	}
	function unary(){

	}
	function flip(){
		
	}
	function slice(ary,start = 0,end = ary.length) {
		let result = [];
		for(let i = start;i < end;i++){
				result.push(ary[i]);
			}
		return result;	
	}// ary 是 类数组对象即可
	function trim(str = " ",char = whitespace) {
		return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
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
		slice:slice,
		filter:filter,
		flatten:flatten,
		flattendeep:flattendeep,
		flattendepth:flattendepth,
		some:some,
		every:every,
		groupby:groupby,
		mapvalues:mapvalues,
		reduce : reduce,
		ary:ary,
		unary:unary,
		flip:flip,
		trim:trim,




	};
})();



