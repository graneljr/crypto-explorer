const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()
const axios = require('axios')
const cors = require('cors')
app.use(express.json())
app.use(cors())
app.get('/top-10-cryptocurrency', async (req, res) => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets',{
            params:{
                vs_currency: "usd",
                order:"market_cap_desc",
                per_page:"10",
                page:"1",
                sparkline:"true",
                price_change_percentage:'1h'
            },
            headers:{
                "x-cg-demo-api-key":process.env.COINGECKO_API
            }
    })
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
        res.status(500).json({
            message: "Error fetching data from CoinGecko",
            error: error.response?.data || error.message,
        });
    }
})

app.get("/search/:crypto", async (req, res)=>{
   try{
       const response = await axios.get('https://api.coingecko.com/api/v3/search', {
           params: {
               query: req.params.crypto
           },
           headers: {
               "x-cg-demo-api-key": process.env.COINGECKO_API
           }
       })
       if (response.data.coins.length === 0) {
           return res.status(404).json({ message: "Coin not found" });
       }
       const searched = response.data.coins[0]?.id;
       const coinInfo = await axios.get('https://api.coingecko.com/api/v3/coins/markets',{
           params: {
               vs_currency: "usd",
               ids: searched,
               order: "market_cap_desc",
               sparkline: "true",
               price_change_percentage: '1h'
           },
           headers: {
               "x-cg-demo-api-key": process.env.COINGECKO_API
           }
       })
       
    res.json(coinInfo.data)
    
   }catch (error){
    console.log("Error fetching data: ", error.message)
    res.status(500).json({
        message:"Error fetching data from caoingecko",
        error:error.response?.data || error.message
    })
   }
})

app.listen(port,()=>{
    console.log('server running')
})