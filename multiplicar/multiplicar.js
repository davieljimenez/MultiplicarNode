const colors = require('colors');
const fs = require('fs');


let listarTabla = (base, limite = 10) => {
    console.log(`=======================`.green);
    console.log(`======Tabla de ${base}`.green);
    console.log(`=======================`.green);

    for (let i = 1; i <= limite; i++) {
        datos = `${base} * ${i} = ${base *i}`
        console.log(datos);
    }



}



let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ingresado "${base}" no es un numero`)
            return
        }
        let data = ''
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${ i } = ${base * i}\n`;
        };

        fs.writeFile(`archivos/Tabla del ${base} hasta el ${limite}.txt`, data, (err) => {
            if (err)
                reject(err)

            else
                resolve(`Tabla del ${base} hasta ${limite}.txt`.green);

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}