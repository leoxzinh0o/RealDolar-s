function converterMoeda(){var a=parseFloat(document.getElementById("realInput").value);if(isNaN(a))return void alert("Por favor, insira um valor num\xE9rico v\xE1lido.");document.getElementById("resultado").innerText=a.toFixed(2)+" Reais \xE9 igual a "+(a/5.35).toFixed(2)+" D\xF3lares."}const express=require("express"),bodyParser=require("body-parser"),axios=require("axios"),app=express(),port=3e3;app.use(bodyParser.json()),app.use(bodyParser.urlencoded({extended:!0})),app.post("/converter",async(a,b)=>{const{valorEmReais:c}=a.body;try{const a=await axios.get("https://economia.awesomeapi.com.br/json/last/BRL-USD"),d=a.data[0].bid;b.json({valorEmDolares:c/d})}catch(a){console.error("Erro ao obter taxa de c\xE2mbio:",a.message),b.status(500).json({error:"Erro interno do servidor"})}}),app.listen(port,()=>{console.log(`Servidor rodando em http://localhost:${port}`)});