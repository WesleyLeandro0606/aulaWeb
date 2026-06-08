document.addEventListener("DOMContentLoaded", () => {
    
    const numeroWhats = "5551984796538"; 

    const btnTopo = document.getElementById("btn-whats-topo");
    const btnHome = document.getElementById("btn-whats-home");

    // Se o usuário clicar no botão do topo (Menu)
    if (btnTopo) {
        btnTopo.addEventListener("click", () => {
            const mensagem = encodeURIComponent("Olá! Gostaria de mais informações sobre o consultório.");
            window.open(`https://wa.me/${numeroWhats}?text=${mensagem}`, '_blank');
        });
    }

    // Se o usuário clicar no botão do Banner Inicial (Home)
    if (btnHome) {
        btnHome.addEventListener("click", () => {
            const mensagem = encodeURIComponent("Olá! Gostaria de agendar uma consulta.");
            window.open(`https://wa.me/${numeroWhats}?text=${mensagem}`, '_blank');
        });
    }
    // ==========================================
    // 1. MODO CLARO/ESCURO COM LOCAL STORAGE (Garantido)
    // ==========================================
    const botaoTema = document.getElementById("toggle-tema");
    const corpoPagina = document.body;

    // Verifica se já tem preferência salva
    const temaSalvo = localStorage.getItem("temaSelecionado");

    if (temaSalvo === "dark") {
        corpoPagina.classList.add("dark-mode");
    }

    if (botaoTema) {
        botaoTema.addEventListener("click", () => {
            corpoPagina.classList.toggle("dark-mode");

            if (corpoPagina.classList.contains("dark-mode")) {
                localStorage.setItem("temaSelecionado", "dark");
            } else {
                localStorage.setItem("temaSelecionado", "light");
            }
        });
    }

    // ==========================================
    // 2. ROLAGEM SUAVE ENTRE SEÇÕES
    // ==========================================
    const linksMenu = document.querySelectorAll('nav a[href^="#"]');
    
    if (linksMenu.length > 0) {
        linksMenu.forEach(link => {
            link.addEventListener("click", function (e) {
                const idAlvo = this.getAttribute("href");
                if (idAlvo !== "#") {
                    e.preventDefault();
                    const secaoAlvo = document.querySelector(idAlvo);
                    if (secaoAlvo) {
                        secaoAlvo.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });
                    }
                }
            });
        });
    }

    // ==========================================
    // 3. VALIDAÇÃO DO FORMULÁRIO DE CONTATO
    // ==========================================
    const formulario = document.querySelector(".form-agendamento");
    
    if (formulario) {
        formulario.addEventListener("submit", function (e) {
            const nome = document.getElementById("nome")?.value.trim();
            const email = document.getElementById("email")?.value.trim();
            
            if (!nome || !email) {
                e.preventDefault();
                alert("Por favor, preencha os campos obrigatórios.");
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                alert("Por favor, insira um e-mail válido.");
                return;
            }

            e.preventDefault();
            alert(`Obrigado, ${nome}! Solicitação enviada.`);
            formulario.reset();
        });
    }
});