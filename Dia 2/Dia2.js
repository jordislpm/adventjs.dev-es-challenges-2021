export default function listGifts(letter) {

    let juguetes = letter.split(" ")
    let juguetesCorrectos = juguetes.filter((x)=>{
        if(x[0] != "_"){
            return x
        }
    })
let name = "";
let value = 0;

let obj = new Object;
for (let i = 0; i < juguetesCorrectos.length; i++) {
    let num = 1;
    if(!obj.hasOwnProperty(juguetesCorrectos[i])){
        
         obj[juguetesCorrectos[i]] = num
    }
    else if (obj.hasOwnProperty(juguetesCorrectos[i])){
        num+=1
        
 
        obj[juguetesCorrectos[i]] = num
   }

  
}


    // ¡Tú puedes!
    return obj
   }