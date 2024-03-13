// function reverse (str) {

//     let reversed = ''

//     for (let char of str) {
//         reversed = char + reversed
//     }

//     return reversed
// }

// console.log(reverse('Naboth'))

function reverse(str) {

    return str.split('').reverse().join('')


}

console.log(reverse('Naboth'))