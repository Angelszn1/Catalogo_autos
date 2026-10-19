const express = require('express');
const app = express();
const port = 3000;
const catalogoAutos = 
[{
    marca: 'Toyota',
    modelo: 'Prius',
    año: 2026,
    precio: 599000,
    color: 'Blanco',
},

{
    marca: 'Honda',
    modelo: 'Civic',    
    año: 2025,
    precio: 450000,
    color: 'Gris',
},

{
    marca: 'Ford',  
    modelo: 'Fiesta',
    año: 2016,
    precio: 130000,
    color: 'Blanco',
},

{
    marca: 'Tesla',
    modelo: 'Roadster',
    año: 2026,
    precio: 1500000,
    color: 'Fiusha'
}
]

app.get('/autos', (req, res) => {
    res.json(catalogoAutos);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en ${port}`);
});

