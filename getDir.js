import * as fs from 'fs';
const url = process.argv.at(-1);

fs.readdir(url, function(err, data){
	if(err) {
		console.log('path is required' + __dirname);
		return
	}
	console.log(data);
});