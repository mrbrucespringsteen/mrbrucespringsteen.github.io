window.addEventListener('DOMContentLoaded', () => {

    const apiUrl = "https://api.sheety.co/3c4e73c3bfbcbf603944bdd17c210881/planckShoulders/attributions"

    const formBuilder = () => {
        let formDiv = document.querySelector(".form")
        let form = document.createElement("form")
        let inputText = document.createElement("input")
        let lineBreak = document.createElement("br")
        let lineBreak2 = document.createElement("br")
        let submitButton = document.createElement("input")
        let label = document.createElement("label")
        label.innerHTML = "You created something great: "
        let attributionEnding = document.createElement("label")
        attributionEnding.innerHTML = ". And when someone else used it and received funds, they thought you should have some too."

        form.appendChild(label)
        form.appendChild(inputText)
        form.appendChild(attributionEnding)
        form.appendChild(lineBreak)
        form.appendChild(lineBreak2)
        form.appendChild(submitButton)
        formDiv.appendChild(form)

        //! input
        inputText.placeholder = "Type your attribution"
        inputText.style.backgroundColor = "transparent"
        inputText.style.border = "none"

        //! submit button
        submitButton.type = "submit"
        submitButton.classList.add("note")
        submitButton.style.border = "1px solid #f8f8f8"

        form.onsubmit = function (e) {
            e.preventDefault()
            let formData = e.target.children[1].value
            sendAttributionToApi(formData)
            form.reset()
        }
    }

    const sendAttributionToApi = (formData) => {
        //! random id_key generation
        let result = [];
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;

        for (let i = 0; i < 10; i++ ) {
            result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
        }
        let idKey = result.join('')

        let formDiv = document.querySelector(".form")
        formDiv.innerHTML = `<h4>Your link is here: <a href="https://www.p1anck.com/shoulders/${idKey}" target="_blank" rel="noopener">https://www.p1anck.com/shoulders/${idKey}</a></h4>`

        let body = {
            attribution: {
                idKey: idKey,
                attrMessage: formData
            }
        }

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
    }

    const keyLookup = () => {
        let buttonLookup = document.querySelector("#btn-lookup")

        buttonLookup.onclick = function () {
            let lineBreak = document.createElement("br")
            let lineBreak2 = document.createElement("br")
            let formDiv = document.querySelector(".form")
            formDiv.innerHTML = " "
            let inputField = document.createElement("input")
            inputField.placeholder = "Type your attribution"
            inputField.style.backgroundColor = "transparent"
            inputField.classList.add("note")
            inputField.style.border = "1px solid #f8f8f8"        

            let submitButton = document.createElement("input")
            submitButton.type = "submit"
            submitButton.classList.add("note")
            submitButton.style.border = "1px solid #f8f8f8"

            buttonLookup.innerHTML = " "

            let form = document.createElement("form")
            form.appendChild(inputField)
            form.appendChild(lineBreak)
            form.appendChild(lineBreak2)
            form.appendChild(submitButton)
            formDiv.appendChild(form)


            form.onsubmit = function (e) {
                e.preventDefault()
                let formData = e.target.children[0].value
                lookupAttribution(formData)
                form.reset()
        }}
    }

    const lookupAttribution = (idKey) => {

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            
            for (let attr of data.attributions) {
                if (attr.idKey === idKey) {
                    let formDiv = document.querySelector(".form")
                    formDiv.innerHTML = `You created something great: ${attr.attrMessage}. And when someone else used it and received funds, they thought you should have some too.`

                    document.querySelector("#btn-lookup").previousElementSibling.innerHTML = " "
                }
            }
        })
    }

    formBuilder()
    keyLookup()
})