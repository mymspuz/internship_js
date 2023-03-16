
const sumTo_1 = (n) => {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

const sumTo_2 = (n) => n === 1 ? n : n + sumTo_2(n - 1);

const sumTo_3 = (n) => n * (n + 1) / 2;

console.log(sumTo_1(100));
console.log(sumTo_2(100));
console.log(sumTo_3(100));

// sumTo_3 - самый быстрый, минимум операций
// sumTo_2 - самый медленный, рекурсия требует дополнительных ресурсов
// sumTo(100000) - вызовет переполнение стека в случае использования рекурсии