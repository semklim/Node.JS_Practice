import * as fs from 'fs';
import { delFiles } from './logic.js';

const url = './fs_test_directory/';

fs.readdir(url, function (err, data){
	if(err) throw err;
	const files = data.filter((el) => !el.match(/.html/));
	delFiles(url, files);
});
