const fs = require('fs');
const Questions = {
	"radio": new Array()
}
fs.readFile('radio.csv', 'utf8', function (err, data) {
	data.split("\n").forEach(line => {
		const fields = line.split(',')
		// console.log(fields)
		let code = fields[0]
		let definition = fields[1]
		Questions["radio"].push({
			"q": code,
			"a": definition
		})
		Questions["radio"].push({
			"q": definition,
			"a": code
		})
	})
});
module.exports = Questions;