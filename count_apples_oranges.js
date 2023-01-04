/**
 * https://www.hackerrank.com/challenges/apple-and-orange/problem
 * @param {*} s 
 * @param {*} t 
 * @param {*} a 
 * @param {*} b 
 * @param {*} apples 
 * @param {*} oranges 
 */
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let aCount = 0; // apples that fall on the house
    let oCount = 0; // oranges that fall on the house
    let length = Math.max(apples.length, oranges.length)
    // let newApples = [];
    // let newOranges = [];
    for(let i = 0; i < length; i++) if((apples[i] + a) >= s && (apples[i] + a) <= t) aCount++;
    for(let j = 0; j < length; j++) if((oranges[j] + b) >=s && (oranges[j] + b) <=t ) oCount++;
    
    // console.log(`length : ${length}  apples:${apples} a: ${a} s:${s}, oranges: ${oranges} b${b},t:${t}`)
    
    // newApples.forEach(distance => {if(distance >= s ) aCount++})
    // newOranges.forEach(distance => {if(distance >= t  ) oCount++})
    
    console.log(aCount + '\n' + oCount)
    

}
countApplesAndOranges(8, 16, 4, 20, [-2, 4, 8, 18], [-4, -6, 18, 9, 12])
