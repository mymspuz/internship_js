function unique(arr) {
    const result = [];
    const set = new Set(arr);
    set.forEach(e => result.push(e));
    return result;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values));