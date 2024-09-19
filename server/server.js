import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:'crud'
})

app.get('/', (req,res)=>{
    const sql = "SELECT * FROM users";
    db.query(sql, (err, result)=>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.post('/user', (req,res)=>{
    const sql = "INSERT INTO users (`nome`,`telefone`,`email`) VALUES (?)";
    const vlaues = [
        req.body.nome,
        req.body.telefone,
        req.body.email
    ]
    db.query(sql, [vlaues], (err, result) =>{
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.get('/read/:id', (req,res)=>{
    const sql = "SELECT * FROM users WHERE id_user = ?";
    const id = req.params.id;

    db.query(sql,[id], (err, result)=>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.listen(8081, ()=>{
    console.log("Start Aplication");
})