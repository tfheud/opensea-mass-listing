const { k }  = require("./list.js");
let arh = [];
for(let i = 0; i<200; i++){
let f = ('"'+k["nfts"][i].identifier +'"');
arh.push(f);
}

console.log(arh);
console.log("nft in wallet: " + arh.length);
