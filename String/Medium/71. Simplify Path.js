/** method 1 
 * 
 */
var simplifyPath = function(path) {
	const array = path.split("/")
	const stack = []

	for(let i = 0; i < array.length; i++){
		const item = array[i]

		if (item === '' || item === '.') continue
		if (item === '..') {
			stack.pop()
		} else {
			stack.push(array[i])
		}
	}
	return '/' + stack.join('/')	
};
