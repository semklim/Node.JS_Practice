import * as fs from 'fs/promises';
const url = './fs_test_directory/';
	function random(){
		return '\n' + Math.floor(Math.random() * 100 + 1);
	}

	fs.readdir(url)
	.then((data) => data.filter((el) => !el.match(/(.png|.html)/)))
	.then((arr) => arr.forEach((el) => fs.appendFile(url + el, random())))
	.then(console.log('append done'));