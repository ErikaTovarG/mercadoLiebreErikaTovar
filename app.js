const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))
//el objetivo de la linea 6 es decirle a express que quiero tener la carpeta public como un recurso de archivos staticos para que siempre lo pueda consumir de manera sencilla. 

app.listen(3300, () => {
    console.log('Servidor activo')
});

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})
//Ruta para la raiz en donde nosotros enviamos al navegador a traves del metodo sendfile del objeto res, como respuesta un archivo html tomando como herramienta el modulo path y su modulo resolve.
