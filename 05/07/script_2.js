// function aclean(arr) {
//     const result = [];
//     const sort = [];
//     arr.forEach(e => {
//         const temp = e.toLowerCase().split('').sort().join('');
//         if (!sort.includes(temp)) {
//             result.push(e);
//             sort.push(temp);
//         }
//     })
//     return result;
// }

function aclean(arr) {
    const map = new Map();

    arr.forEach((e) => {
       const order = e.toLowerCase().split('').sort().join('');
       map.set(order, e)
    });

    return Array.from(map.values())
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );