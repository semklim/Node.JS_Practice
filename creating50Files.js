import * as fs from 'fs';
import { getWords } from './logic.js';

const wordsArr = getWords(fs.readFileSync('./стих.txt'));

wordsArr.forEach((el, i) => {
	fs.writeFileSync(`./fs_test_directory/${i+1}.txt`, el, function (err){
		if(err) throw err;
	})
});

console.log('files created');
