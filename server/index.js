const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/login', (req,res) =>{
    const loginData ={
        Username : req.body.username,
        Password : req.body.password
    }
    if (loginData.Username == 'vishnu' && loginData.Password =='1234'){
        console.log("Login Successfully");
        res.json({ msg : "Login Successfully "});
    }else{
        console.log("check your username or password")
        res.json({ msg : "check your username or password "});
    }
})

//port address details
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});