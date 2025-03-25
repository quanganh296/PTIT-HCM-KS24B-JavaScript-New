let n = 8;

for (let i = 0; i < n; i++) {
    let a = '*'.repeat(n - i).padEnd(n, ' ');  
    let b = '*'.repeat(i + 1).padEnd(n, ' '); 
    let c = ' '.repeat(n - i - 1) + '*'.repeat(i + 1);
    let d = ' '.repeat(i) + '*'.repeat(n - i); 
    console.log(a + '   ' + b + '   ' + c + '   ' + d);
}
