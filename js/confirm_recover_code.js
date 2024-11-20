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
            const response = await this.sendConfirmation(data)
            if (response.ok) {
                localStorage.setItem('data', JSON.stringify(data))
                alert(response.sms)
                location.href = "./new_password.html"
            }
            else {
                alert(response.sms)
            }
            ;

        })
    }
    async sendConfirmation(data) {
        const req = await fetch(`${CONFIG.API_URL}/auth/confirmarcodigo`, {
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