class Recover_account {
    constructor() {
        this.executeAll()
    }

    executeAll() {
        this.sendEmail()
    }

    async sendEmail() {
        const form = this.$('form')
        form.addEventListener("submit", async (e) => {
            e.preventDefault()
            const data = Object.fromEntries(new FormData(form))
            const response = await this.fetchRecover(data)
            if (response.ok) {
                alert(response.sms)
                location.href = "https://priza01.github.io/priza01/pages/auth/recoverAccount/confirm_recover_code.html"
            }
            else {
                alert(response.sms)
            }
            ;

        })
    }
    async fetchRecover(email) {
        const req = await fetch(`${CONFIG.API_URL}/auth/recuperarconta`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(email)
        })
        return req.json()
    }


    $(selector) {
        const elemento = document.querySelectorAll(selector)
        if (elemento.length === 1) return elemento[0]
        return elemento
    }
}

new Recover_account()
