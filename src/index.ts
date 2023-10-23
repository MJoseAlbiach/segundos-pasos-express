import express from 'express';

const app = express();
const PORT: number = 3000;

app.get("/", (req, res)=>{
res.send ('Hola mundo!');
});

app.listen(PORT, ()=>{
    console.log(`la app está escuchando en el puerto ${PORT}`);
});
