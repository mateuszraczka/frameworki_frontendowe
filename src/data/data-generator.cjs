const fs = require('fs');

const count = Number(process.argv[2]); // odczyt liczby obiektów
let names = [];                        // tablica z obiektami 
let eyeColors = ["blue","gray","green"];

let getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

fs.readFile('./src/data/names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    //podział łańcucha z imionami na wiersze.
    names = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);
    let content = "export const data = [";
    for(let i = 0; i < count; i++){
        //losowanie imienia z bilioteki imion
        content += `
        {
            id: ${i},
            name: '${names[~~((Math.random() * names.length) / 1)]}',
            birth: '${new Date(`${getRandomNumber(1960, 2002)}-${getRandomNumber(1,12)}-${getRandomNumber(1, 28)}`)}',
            eyes: '${eyeColors[getRandomNumber(0, eyeColors.length-1)]}',
        },`; 
    }
    content += "];"
    //zapis łańcucha do pliku 
    fs.writeFile('./src/data/module-data.js', content, (err) => {
        if (err) {
           console.error(err);
        }
        console.log("module-data.js generated");
       });
});