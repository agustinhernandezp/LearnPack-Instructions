const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(sum(14, 9)).toBe(23);
});

test("One euro should be 1.2 dollars", function () {
    expect(fromEuroToDollar(3.5).toBe(4.2);
});


test("One dolar should be 106,583333 Yens", function () {
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3)).toBe(319.75); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})


test("One yen should be 0.8", function () {
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(10)).toBe(8); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});