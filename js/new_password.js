class Confirm_Recover_Code {
    constructor() {
        this.executeAll()
    }

    executeAll() {
        this.sendData()
    }

    async sendData() {
        const form = this.$('form')
        form.addEventListener("submit", async (e) => {
            e.preventDefault()
            const data = Object.fromEntries(new FormData(form))
            if (data.passe !== data.confirmPasse) {
                alert("Passwords diferentes")
                return
            }

            const dataUser = JSON.parse(localStorage.getItem("data"))
            localStorage.removeItem("data")
            console.log(data);
            console.log(dataUser);


            dataUser.passe = data.passe

            const response = await this.sendConfirmation(dataUser)
            if (response.ok) {
                alert(response.sms)
                location.href = "https://priza01.github.io/priza01/pages/auth/index.html"
            }
            else {
                alert(response.sms)
            }
            ;

        })
    }
    async sendConfirmation(data) {
        const req = await fetch(`${CONFIG.API_URL}/auth/novapasse`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        return req.json()
    }


    $(selector) {
        const elemento = document.querySelectorAll(selector)
        if (elemento.length === 1) return elemento[0]
        return elemento
    }
}

new Confirm_Recover_Code()
