/*
Given a string s, find the length of the longest substring without repeating characters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let string = s.split('');
    let array = [];
    let count = 0;
    let result = 0;

    for(let i=0; i < string.length; i++){
        if(!array.includes(string[i])){
            array.push(string[i]);
            count = array.length;
            console.log(`Numero: ${string[i]}`)
            console.log(`Posição: ${i}`)
            console.log(`Array: ${array}`)
            console.log(`Count: ${count}`)
            console.log("Não inclui")
            console.log("")
        }else{
            array.splice(0, array.indexOf(string[i]) + 1);
            i--
            count = 0;
            console.log(`Numero: ${string[i]}`);
            console.log(`Posição: ${i}`);
            console.log(`Array: ${array}`);
            console.log(`Count: ${count}`);
            console.log("Inclui");
            console.log("")
        }

        if(result < count){
            result = count;
        }
    }

    return result;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
