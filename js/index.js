const form = document.querySelector("form")

crypto.randomUUID()

const regexToEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const data = Object.fromEntries(new FormData(form))

    if (regexToEmail.exec(data["email"])) {

        const resultado = await request(`${CONFIG.API_URL}/auth/entrar`, data);

        if (resultado.ok) {
            localStorage.setItem("token", resultado.token);
            location.href = 'https://priza01.github.io/priza01/_.html'
        }

        else {
            alert("Email ou password incorrecto")
        }

    }

    else {
        alert("Email Invalido")
    }

})

async function request(url, data) {
    const req = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),

    })
    const resultado = await req.json()
    return resultado
}



