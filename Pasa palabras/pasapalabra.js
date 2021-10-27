


function calculator(num1, num2) {	
    debugger;
    const results = [];	
    const sum = num1 + num2;	
    const res = num1 - num2;	
    const mult = num1 + num2;	
    const div = num1 * num2;
	results.push(`Sum: ${sum}`);	
    results.push(`Res: ${res}`);	
    results.push(`Mult: ${mult}`);	
    results.push(`Div: ${div}`);
	return results;
}

console.log(calculator(3,5));