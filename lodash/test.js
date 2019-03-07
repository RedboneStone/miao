var a = 3
var b = 9
console.log(
		function (n) {
			return [2, 3, a, b, a + b, a * b, n]
		}(7)[Math.round(Math.sin(3.14)) + 3])