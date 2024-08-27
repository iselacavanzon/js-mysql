const mysql= require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'anrec1988',
    database: 'ejemplo_db'
});

conexion.connect((error)=>{
    if (error){
        console.error('Error al conectar la base de datos: ', error);
        return;
    }
    console.log('Conexion a la base de datos exitosa!');
});

conexion.query('SELECT * FROM usuarios',(error, resultados, campos)=>{
    if (error){
        console.error('Error al ejecutar la consulta.', error);
        return;
    }
    console.log('Resultados de la consulta: ', resultados);
});