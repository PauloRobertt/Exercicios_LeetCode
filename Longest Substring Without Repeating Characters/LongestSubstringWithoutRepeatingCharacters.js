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
    
    string.forEach((el,i)=>{
        if(!array.includes(el)){
            console.log(`Numero: ${el}`)
            console.log(`Posição: ${i}`)
            console.log(`Array: ${array}`)
            console.log(`Count: ${count}`)
            console.log("Não inclui")
            array.push(el);
            count = array.length;
            console.log("")
        }else{
            array.splice(0, array.indexOf(el) + 1);
            console.log(`Numero: ${el}`);
            console.log(`Posição: ${i}`);
            console.log(`Array: ${array}`);
            console.log(`Count: ${count}`);
            console.log("Inclui");
            console.log("")
        }

        if(result < count){
            result = count;
        }

    })

    return result;
}

console.log(lengthOfLongestSubstring("dvdf"));
