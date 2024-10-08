const { StringTemp } = require('../dist/bundle.umd.js'); // Adjust the path as needed


test('Capitalize', () => {
    const test1 = new StringTemp("hello world");  
    expect(test1.capitalize()).toBe("Hello world");
});
test('All Caps', () => {
    const test2 = new StringTemp("hello world");  
    expect(test2.allCaps()).toBe("HELLO WORLD");
});
test('Captialize words', () => {
    const test3 = new StringTemp("hello world");  
    expect(test3.capitalizeWords()).toBe("Hello World");
});
test('remove extra spaces', () => {
    const test4 = new StringTemp("hello      goodbye    ");  
    expect(test4.removeExtraSpaces()).toBe("hello goodbye");
});
test('Kebob', () => {
    const test5 = new StringTemp("hello goodbye");  
    expect(test5.kebobCase()).toBe("hello-goodbye");
});
test('Snake', () => {
    const test6 = new StringTemp("what    the    heck");  
    expect(test6.snakeCase()).toBe("what_the_heck");
});
test('Camel', () => {
    const test7 = new StringTemp("Camel Case");  
    expect(test7.camelCase()).toBe("camelCase");
});
test('Shift', () => {
    const test8 = new StringTemp("Hello World");  
    expect(test8.shift()).toBe("ello WorldH");
});

test('HashTage', () => {
    const test9 = new StringTemp("Amazing bongo drums for sale");  
    expect(test9.makeHashTag()).toEqual(["#Amazing", "#bongo", "#drums"]);
});


test('Empty True', () => {
    const test10 = new StringTemp("                       ");  
    expect(test10.isEmpty()).toBe(true);
});

test('Empty False', () => {
    const test10 = new StringTemp("Hello World");  
    expect(test10.isEmpty()).toBe(false);
});

