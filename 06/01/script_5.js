const printReverseList_1 = (src) => {
    let temp = src;
    const tmpArray = [];
    while (temp) {
        tmpArray.push(temp.value);
        temp = temp.next;
    }
    tmpArray.reverse().forEach(e => console.log(e));
}

const printReverseList_2 = (src) => {
    if (src.next) printReverseList_2(src.next);
    console.log(src.value);
}


let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printReverseList_1(list);
printReverseList_2(list);