
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
	}//chunk 分块  将数组按照规定的个数分块
	function uniq(ary) {
		return ary.filter((element,index,ary)=> ary.indexOf(element) === index);
	}
	function uniqby(){

	}


	/*  _.compact 
		:Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
	*/
	function compact(arr) {
		// var result = [];
		// for(let i = 0;i < arr.length;i++){
		// 	if(arr[i]){
		// 		result.push(arr[i]);
		// 	}
		// }
		// return result;
		var index = -1;
		var length = array == null ? 0 : array.length;
		var resIndex = 0;
		var result = [];

		while (++index < length) {
			var value = array[index];
			if (value) {
				result[resIndex++] = value;
			  }
			  // ++index
		}
			return result;
	}// compact 简洁的 紧密的 结实的


	function difference(ary,...values){
		let result = [];
		let tmp = flatten(values);
		for(let i = 0;i < ary.length;i++) {
			for (let j = 0; j < tmp.length; j++) {
				if(ary[i] !== tmp[j]){
					if(j == tmp.length - 1){
						 result.push(ary[i]);
					}
					continue;
				}
				 break;
			}
		}
		return result;
	}
	function differenceby(){

	}
	/**
	 * _.concat  拼接数组
	 *    Creates a new array concatenating array with any additional arrays and/or values.
	 */
	function concat(ary,...values) {
		var result; 
		for(let i of values){
			if(!Array.isArray(i)){
				result = ary.push(i)
			} else {
				result = ary.push(i.flatten())
			}

		 }
		 return result 
	}// 需要判断数组为二元数组时的情况
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



