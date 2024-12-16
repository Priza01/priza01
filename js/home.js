class HomeController {
    constructor() {
        this.urlHash()
        this.executeAllMethods()

    }

    executeAllMethods() {
        this.ativadorDasOpcoesDoMenu()
        this.activeMenuTaxaJuros()
        this.ativandoAsLinhaRegistosTaxaJuros()
        this.activandoMenuCliente()
        this.activandoMenuCredito()
        this.activandoMenuCompliance()
        this.activandoOInputBalancet()
        this.activandoBtnProximo()
        this.activandoModalPerfil()
        this.verifyToken()
        this.logout()
    }

    urlHash() {
        const randomNumber = String(crypto.randomUUID()).split('-').join(String(crypto.randomUUID()).split('-').join("l")) + String(crypto.randomUUID()).split('-').join(String(crypto.randomUUID()).split('-').join("fe"))
        window.location.hash = `${String(crypto.randomUUID()).split('-').join("")}=${randomNumber}`;
    }

    verifyToken() {
        const token = localStorage.getItem("token");
        if (!token) {
            location.href = "https://priza01.github.io/index.html"

        }
        document.body.classList.remove('hide')
    }
    logout() {
        const btn = document.querySelector(".logout")
        btn.addEventListener("click", () => {

            localStorage.removeItem("token")
            location.href = 'https://priza01.github.io/index.html'

        })
    }
    activandoModalPerfil() {
        const btn = this.$(".conta");
        const perfilUserModal = this.$(".perfilUserModal");
        const boxInfoPerfil = this.$(".boxInfoPerfil");

        btn.addEventListener("click", (e) => {
            perfilUserModal.classList.toggle("hide")
        })
        perfilUserModal.addEventListener("click", (e) => {
            perfilUserModal.classList.add("hide")
        })
        boxInfoPerfil.addEventListener("click", (e) => {
            e.stopPropagation()
        })
    }

    activandoBtnProximo() {
        const proximo = document.querySelector(".proximo")
        const primeiroForm = document.querySelector(".primeiroForm")
        const segundoForm = document.querySelector(".segundoForm")
        const anterior = document.querySelector(".anterior")

        proximo.addEventListener("click", () => {

            primeiroForm.classList.add("hide")
            segundoForm.classList.remove("hide")
            proximo.classList.add("hide")
            anterior.classList.remove("hide")
        })
        anterior.addEventListener("click", () => {

            segundoForm.classList.add("hide")
            primeiroForm.classList.remove("hide")
            anterior.classList.add("hide")
            proximo.classList.remove("hide")
        })

    }

    activandoOInputBalancet() {
        const dropBalancete = document.querySelector(".dropBalancete")
        const input = document.querySelector(".inputDropBalancete")

        dropBalancete.addEventListener("click", () => {
            input.click()
        })

        input.addEventListener("change", (e) => {
            const sub = String(e.target.value)
            console.log(sub.split('\\'));

            const nomeFile = document.querySelector(".nomeFile")
            nomeFile.innerHTML = sub.split('\\')[2]
        })
    }

    activandoMenuCredito() {
        const opcao = document.querySelectorAll(".opcaoMenuCreditos")


        const areaCredito = document.querySelectorAll(".areaCredito")
        opcao.forEach(e => {
            e.addEventListener("click", () => {
                opcao.forEach(o => o.classList.remove("activeMenuTaxaJuros"))
                e.classList.add('activeMenuTaxaJuros')

                const { menu } = e.dataset
                const areaOpen = document.querySelector("." + menu)
                areaCredito.forEach(a => a.classList.add("hide"))
                areaOpen.classList.remove("hide")
            })
        })
    }
    activandoMenuCliente() {
        const opcao = document.querySelectorAll(".opcaoMenuGeral")


        const areaCliente = document.querySelectorAll(".areaCliente")
        opcao.forEach(e => {
            e.addEventListener("click", () => {
                opcao.forEach(o => o.classList.remove("activeMenuTaxaJuros"))
                e.classList.add('activeMenuTaxaJuros')

                const { area } = e.dataset
                const areaOpen = document.querySelector("." + area)
                areaCliente.forEach(a => a.classList.add("hide"))
                areaOpen.classList.remove("hide")
            })
        })
    }

    activandoMenuCompliance() {
        const opcao = document.querySelectorAll(".opcaoMenuCompliance")


        const areaCompliance = document.querySelectorAll(".areaCompliance")

        opcao.forEach(e => {
            e.addEventListener("click", () => {
                opcao.forEach(o => o.classList.remove("activeMenuTaxaJuros"))
                e.classList.add('activeMenuTaxaJuros')

                const { menu } = e.dataset
                const areaOpen = document.querySelector("." + menu)
                areaCompliance.forEach(a => a.classList.add("hide"))
                areaOpen.classList.remove("hide")
            })
        })
    }
    ativandoAsLinhaRegistosTaxaJuros() {
        const boxInformacaoRegistosTaxaJuros = this.$('.boxInformacaoRegistosTaxaJuros')
        const tableRegistosTaxaJuros = this.$('.tableRegistosTaxaJuros')

        const linhaRegistosTaxaJuros = this.$('.linhaRegistosTaxaJuros')
        linhaRegistosTaxaJuros.forEach(linha => {
            linha.addEventListener("click", (_) => {

                const numero = +linha.dataset.num

                switch (numero) {

                    case 0:
                        tableRegistosTaxaJuros.classList.add('menosTaxa')
                        boxInformacaoRegistosTaxaJuros.classList.remove('maisTaxa')
                        linha.dataset.num = '1'
                        console.log(numero);
                        break;
                    case 1:
                        tableRegistosTaxaJuros.classList.remove('menosTaxa')
                        boxInformacaoRegistosTaxaJuros.classList.add('maisTaxa')
                        linha.dataset.num = '0'
                        console.log(numero);
                        break;

                }





            })
        })
    }
    activeMenuTaxaJuros() {
        const btns = this.$(".opcaoMenuTaxaJuros")
        const btnsCancelar = this.$(".btnCancelar")
        const modalAddNovoCliente = this.$(".modalAddNovoCliente")
        const modalGerarTaxa = this.$(".modalGerarTaxa")
        btns[0].addEventListener("click", (event) => {
            btns[0].classList.toggle("activeMenuTaxaJuros")
            btns[1].classList.remove("activeMenuTaxaJuros")
            modalGerarTaxa.classList.add("hide")
            modalAddNovoCliente.classList.toggle("hide")
        })
        btns[1].addEventListener("click", (event) => {
            btns[0].classList.remove("activeMenuTaxaJuros")
            btns[1].classList.toggle("activeMenuTaxaJuros")
            modalAddNovoCliente.classList.add("hide")
            modalGerarTaxa.classList.toggle("hide")
        })

        for (const btnCancelar of btnsCancelar) {

            btnCancelar.addEventListener("click", (e) => {
                e.target.parentElement.parentElement.classList.add('hide')
            })
        }

    }
    ativadorDasOpcoesDoMenu() {
        const lis = this.$(".boxAllOptions ul li")
        const _this = this
        lis.forEach(li => {

            li.addEventListener("click", function (e) {

                const { option } = e.target.dataset;

                const texto = e.target.innerText

                const h3subtitulo = _this.$(".subtitulo h3")

                const todasAreas = _this.$(".area")
                const area = _this.$("." + option)

                h3subtitulo.innerText = texto
                console.log(todasAreas);

                todasAreas.forEach(area => area.classList.add("hide"))

                area.classList.remove("hide")

                lis.forEach(lisRemove => {
                    lisRemove.classList.remove("active")
                })

                this.classList.add('active')
            })

        });

    }
    $(selector) {
        const elemento = document.querySelectorAll(selector)
        if (elemento.length === 1) return elemento[0]
        return elemento
    }
}

new HomeController()
