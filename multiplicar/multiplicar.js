const fs = require('fs');
let data = '';

let listar = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i} = ${base*i} \n`);
    }
}



let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || base === 0) {
            reject(`El valor introducido '${base}' es invalido'`)
            return;
        }


        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n `;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });
    });
}



module.exports = {
    crearArchivo,
    listar
}