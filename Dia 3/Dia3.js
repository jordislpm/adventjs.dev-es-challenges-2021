export default function isValid(letter) {
    let parentesis = letter.split(" ")
    console.log(parentesis)
    console.log(letter)

    

    let result = false
    let esoMismo = false;


    let vaina = parentesis.some((x)=>{

        let inicio = false;
        let final = false;

        if(x[0] == "("){
            inicio = true;
        }

        if(x[x.length -1] == ")"){
            final = true
        }

     

        return inicio && final
    })

    console.log(vaina)

    if (vaina){
        let correcto = parentesis.filter((x)=>{
            if(x[0] == "(" && x[x.length -1] == ")"){
                return x
            }
    
        })

        console.log(correcto)

      


        let valido = correcto[0];
        console.log(valido)

        if (vaina){

            let limpio = valido.split("")
            let arr = []
            for (let i = 0; i < limpio.length; i++) {
                const el = limpio[i];
                if(el != "(" || el != ")"){
                arr.push(el)
                } 
            }
          
            console.log(arr)
            console.log(limpio)


            
          }

        
         
        
        }
       
        console.log(result)

    
     
    
    


    // ¡No dejes que el Grinch gane!
    return vaina && esoMismo
   }




   let primer = "bici coche (balón) bici coche peluche" // ✅
   let segundo = "(muñeca) consola bici" // ✅
   
   let tercer = "bici coche (balón bici coche" // -> ❌
   let cuarto = "peluche (bici [coche) bici coche balón" // -> ❌
   let quinto = "(peluche {) bici" // -> ❌
   let sexto = "() bici" // ❌
   let septimo ="(()) bici"

   console.log(isValid(primer))
   console.log(isValid(septimo))
   console.log(isValid(sexto))

