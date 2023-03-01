function unique(arr) {
    const result = [];
    arr.forEach(el => {
        if (!result.includes(el)) {
            result.push(el)
        }
    });
    return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings));