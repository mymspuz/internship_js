function topSalary(salaries) {
    const result = { name: '', salary: 0 };
    for (let [name, salary] of Object.entries(salaries)) {
        if (result.salary < salary) {
            result.name = name;
            result.salary = salary;
        }
    }
    return result.name;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries));