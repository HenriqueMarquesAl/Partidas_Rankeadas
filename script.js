let vitoria = 55
let derrota = 5
let saldo = vitoria - derrota

function getResultado(vitoria, derrota){
    let resultado = vitoria - derrota

        if (resultado <= 10){
            return "Ferro"
            
        } else if (resultado <= 20) {
            return "Bronze"        
        }
         else if (resultado <= 50) {
            return "Prata"        
        }
         else if (resultado <= 80) {
            return "Ouro"        
        }
         else if (resultado <= 90) {
            return "Diamante"        
        }
         else if (resultado <= 100) {
            return "Lendario"        
        }
         else if (resultado >= 101) {
            return "Imortal"        
        }
        
    }

    let nivel = getResultado(vitoria, derrota)

    console.log("O Herói tem saldo de " + saldo + " está no nível " + nivel)



//console.log("O Herói tem o saldo de " + saldo + " está no nível" + resultado)
//console.log(getResultado(vitoria, derrota))


