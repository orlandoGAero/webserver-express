const http = require('http');

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});

    let salida = {
        nombre: 'Orlando',
        edad: 25,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    res.end();
})
.listen(3200);

console.log('Escuchando desde el puerto 3200');