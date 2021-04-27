window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');


    const formBuilder = () => {
        let formDiv = document.querySelector(".form")
        let form = document.createElement("form")
        let textArea = document.createElement("textarea")
        let lineBreak = document.createElement("br")
        let lineBreak2 = document.createElement("br")
        let submitButton = document.createElement("input")


        form.appendChild(textArea)
        form.appendChild(lineBreak)
        form.appendChild(lineBreak2)
        // form.innerHTML = "<br><br>"
        form.appendChild(submitButton)
        formDiv.appendChild(form)

        //! textArea
        textArea.classList.add("note")
        textArea.style.width = "70%"
        textArea.style.border = "1px solid #A19DAA"

        //! submit button
        submitButton.type = "submit"
        submitButton.classList.add("note")
        submitButton.style.border = "1px solid #A19DAA"

        form.onsubmit = function (e) {
            e.preventDefault()
            let formData = e.target.children[0].value
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

        let body = {
            attribution: {
                idKey: idKey,
                attrMessage: formData
            }
        }

        fetch("https://api.sheety.co/3c4e73c3bfbcbf603944bdd17c210881/planckShoulders/attributions", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        // .then(data => {
        // console.log("Data Sent", data);
        // });
    }


    formBuilder()
})