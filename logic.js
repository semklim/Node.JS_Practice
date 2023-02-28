import * as fs from 'fs';
/**
 * 
 * @param {string} data text file
 * @returns {Array<number>} arr with words
 */
function getWords(data) {
	data = String(data);
	data = data.replace(/[\r\n]+/g, " ");
	data = data.split(' ');
	return data;
}
/**
 * 
 * @param {Array<string>} arr Array of files that you want del
 * @param {string} url link to dir
 * @returns {void} 
 */
function delFiles (url, arr){
	if(arr.length <= 0) return console.log("directory already clear");
	arr.forEach((el) => {
		fs.unlink(url + el, (err) =>{
			if(err) throw err;
		});
	})
	console.log('remove done');
}
export { getWords, delFiles };