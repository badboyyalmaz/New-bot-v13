const { ShardingManager } = require("discord.js");
const config = require("./config"),
express = require('express'),
app = express()
const manager = new ShardingManager("./index.js", {
    token: config.token,
    shardArgs: process.argv,
    totalShards: 3,
});

console.log("[Shards] Starting spawn");
app.get('/', (req,res)=>{
  res.end("My bot is online")
})

function live(){
  app.listen(3000, function(){
  console.log("bot is online")
})}
live();
manager.on('shardCreate', (shard) => console.log(`Shard ${shard.id} launched`));

manager.spawn();
