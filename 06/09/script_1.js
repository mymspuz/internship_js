function work(a, b) {
    console.log( a + b );
}

function spy(func) {
    function getCalls(...data) {
        getCalls.calls.push(data);
        return func.apply(this, data);
    }
    getCalls.calls = [];
    return getCalls;
}

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
    console.log( 'call:' + args.join() );
}