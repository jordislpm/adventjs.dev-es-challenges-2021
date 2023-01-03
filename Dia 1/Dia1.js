export default function contarOvejas(ovejas) {

    let ovejasRojas = ovejas.filter((oveja)=>{
        if(oveja.color = "rojo"){
            return  oveja
        }
    })

    ovejasRojas = ovejasRojas.filter((oveja)=>{
        let letraA = false;
        let letraN = false;

        if (oveja.name.includes('Na') || oveja.name.includes('NA')){
            letraA = true;
        }
        if (oveja.name.includes('AN') || oveja.name.includes('an')){
            letraN = true;
        }

        if(letraA){
            return oveja
        }

        if(letraN){
            return oveja
        }

    })
    // aquí tu magia
    return ovejasRojas
  }