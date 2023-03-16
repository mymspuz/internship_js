const printList_1 = (src) => {
    let temp = src;
    while (temp) {
        console.log(temp.value);
        temp = temp.next;
    }
}

const printList_2 = (src) => {
    console.log(src.value);
    if (src.next) printList_2(src.next);
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

printList_1(list);
printList_2(list);