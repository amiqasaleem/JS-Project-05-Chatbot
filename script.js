// let placeholder = document.querySelector("input")
// placeholder.style.input:focus::placeholder.color = 
// // let remove = () => {
// //     input.innerText = ""
// // }
// // placeholder.addEventListener("click",remove)

function send(event) {
    var msgs = document.getElementById('msgs')
    var input = event.target
    if (event.keyCode === 13) {
        msgs.innerHTML += `${input.value}`

        if (["hi", "hey", "hello"].indexOf(input.value) != -1) {
            setTimeout(function () {
                msgs.innerHTML += `</br>Hello, How are you?</br>` 
            }, 2000)
            input.value = ""
        }
        else if (["fine", "im fine"].indexOf(input.value) != -1) {
            setTimeout(function () {
                msgs.innerHTML += `</br>Good to know</br>`         
            }, 2000)
            input.value = ""
        }
        else if (["are you a chatbot?"].indexOf(input.value) != -1) {
            setTimeout(function () {
                msgs.innerHTML += `</br>Yes, I am. How can i help you?</br>`         
            }, 2000)
            input.value = ""
        }
        else if (["how to take admission in saylani"].indexOf(input.value) != -1) {
            setTimeout(function () {
                msgs.innerHTML += `</br>The Saylani course admission for Karachi in 2024 is now open for online registration. Visit the official Saylani Welfare website at www.saylaniwelfare.com to get started, and complete the Saylani Mass Training Admission Form.</br>`         
            }, 2000)
            input.value = ""
        }
        else if (["what is the fee of saylani"].indexOf(input.value) != -1) {
            setTimeout(function () {
                msgs.innerHTML += `</br>Saylani Welfare Scheme offers its courses free of charge to help individuals from all backgrounds access valuable education and training</br>`         
            }, 2000)
            input.value = ""
        }
        else if (["thank you", "Thank you"].indexOf(input.value) != -1) {
            setTimeout(function () {
                msgs.innerHTML += `</br>You're Welcome!</br>`         
            }, 2000)
            input.value = ""
        }
        else if (["bye"].indexOf(input.value) != -1) {
            setTimeout(function () {
                msgs.innerHTML += `</br>Goodbye! Have a great day!</br>`         
            }, 2000)
            input.value = ""
        }
        else{
             msgs.innerHTML += `</br>Sorry, I didn't understand that.</br>`
             input.value = ""
        }
    }
}
// document.querySelector(".sendbtn").addEventListener("click", send)

