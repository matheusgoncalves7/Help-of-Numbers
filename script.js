function Elevar() {
    
    var tn1 = window.document.getElementById('txtn1')
     var tn2 = window.document.getElementById('txtn2')
     var res = window.document.getElementById('res')
     var n1 = Number(tn1.value)
     var n2 = Number(tn2.value)
     var s = n1 ** n2

     res.innerHTML= ` ${n1} Elevado a ${n2} é igual a <strong>${s}</strong>`

      }

function Multiplicar() {
    
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 * n2
    
    res.innerHTML= ` ${n1} Vezes ${n2} é igual a <strong>${s}</strong>`
    
        }

function Somar() {
    
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
        
    res.innerHTML= ` ${n1} Mais ${n2} é igual a <strong>${s}</strong>`
        
    }

function Subtrair() {
    
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 - n2
    
    res.innerHTML= ` ${n1} Menos ${n2} é igual a <strong>${s}</strong>`
    
    } 

function Dividir () {
    
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 / n2
    
    res.innerHTML= ` ${n1} Dividido por ${n2} é igual a <strong>${s}</strong>`
    
    }

function Resto () {
   
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 % n2
    
    res.innerHTML= `O resto de ${n1} Dividido por ${n2} é igual a <strong>${s}</strong>`
    
    }   