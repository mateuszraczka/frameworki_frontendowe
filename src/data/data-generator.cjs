const fs = require('fs');

const count = Number(process.argv[2]); // odczyt liczby obiektów
let names = [];                        // tablica z obiektami 
let eyeColors = ["blue","gray","green"];

let getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let generateRandomBirthDate = () => {
    const month = getRandomNumber(1, 12);
    const day = getRandomNumber(1, 28);
    const year = getRandomNumber(1960, 2002);
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
};

fs.readFile('./src/data/names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    names = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);
    let content = "export const data = [";
    for(let i = 0; i < count; i++){
        content += `
        {
            id: ${i},
            name: '${names[~~((Math.random() * names.length) / 1)]}',
            birth: '${generateRandomBirthDate()}',
            eyes: '${eyeColors[getRandomNumber(0, eyeColors.length-1)]}',
            rating: ${getRandomNumber(0, 10)},
        },`; 
    }
    content += "];"

    fs.writeFile('./src/data/module-data.js', content, (err) => {
        if (err) {
           console.error(err);
        }
        console.log("module-data.js generated");
       });
});