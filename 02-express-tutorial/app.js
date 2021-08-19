const express =  require('express')
const app = express()
let { people} = require ('./data')


app.use(express.static(('./methods-public')))
app.use(express.urlencoded({extended:false}))

app.get('/api/people',(req,res)=>{
    res.status(200).json({sucess:true,data:people})
})


app.post('/login',(req,res)=>{
    console.log(req.body)
    res.send('post')
})

app. listen(5000,()=>{
    console.log('server is listning on port no 5000')
})