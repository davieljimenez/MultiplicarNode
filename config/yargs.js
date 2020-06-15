const colors = require('colors');


const opcs = {
    base: {
        demand: true,
        alias: "b"
    },
    limite: {
        alias: 'l',
        default: 10
    }
}



const argv = require('yargs')
    .command(colors.green('list', 'imprime en consola la tabla de multiplicar', opcs))
    .command(colors.green('crear', 'Genera un archivo txt de una tabla de mutliplicar de una base con un limite definido por el usuario', opcs))
    .help()
    .argv;


module.exports = {
    argv
}