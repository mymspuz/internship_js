let n = 10;

label:
    for (let i = 2; i <= n; i++) {
        for (let x = 2; x < i; x++) if (!(i % x)) continue label;
        alert( i );
    }