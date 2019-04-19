const { argv } = require('./config/yargs');
const colors = require('colors');

const { crearArchivo, listar } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.b, argv.l);
        break;
    case 'crear':
        crearArchivo(argv.b, argv.l)
            .then(resultado => console.log(resultado))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}