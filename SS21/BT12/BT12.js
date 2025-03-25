for (let i = 0; i < 10; i++) {

    let randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

    console.log(`%cMàu sắc ngẫu nhiên ${i + 1}: ${randomColor}`, `color: ${randomColor}; font-size: 16px; font-weight: bold;`);
}