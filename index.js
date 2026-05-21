let btnp = document.querySelector(".btnp")
// button moin 
let btnm = document.querySelector(".btnm")
// button restar
let btnr = document.querySelector(".btnr")
let zero = document.querySelector(".zero")

let clienHeader = document.querySelector("#span")
let number = 0


// function button plus si clicker le zero 1++
btnp.addEventListener("click",
    function (e) {
        e.preventDefault()
         if (number <=10) {
            number++
             zero.innerHTML = number
             span.textContent = number
         }
    }
)

// function moin 

btnm.addEventListener("click",
    function (e) {
        e.preventDefault()
        if (number >0 &&  number  <=11) {
            number--
            zero.textContent = number
            clienHeader.textContent = number
            
        }
        
    }
)




// function restart si restart click go to zero

btnr.addEventListener("click",
    function (e) {
        e.preventDefault()
        if (number <=12) {
            zero.textContent = 0
          number = 0
            clienHeader.textContent = 0
           

        }
        
    }
)