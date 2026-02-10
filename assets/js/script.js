AOS.init({
    duration: 1000,
    once: false,
});


document.getElementById("year").textContent = new Date().getFullYear();

const projects = [
    {
        id: 1,
        title: "Login Animado",
        category: "Login/Signup",
        description: "Interface moderna de autenticação com animação entre Login e Sign Up.",
        fullDescription: "Uma interface moderna de autenticação, contendo telas de Login e Cadastro (Sign Up) integradas em um único layout. O projeto inclui animações suaves, transições entre etapas e design responsivo. Ideal para aplicações que desejam uma experiência de entrada elegante e intuitiva.",
        image: "assets/img/login.png",
        tags: ["HTML5", "CSS3", "Interface Moderna", "Animação", "JavaScript", "UI/UX", "Design"],
        demoLink: "./demo/demo01.html",  // ← Caminho para a demo
        codeLink: "./codes/code01.html"   // ← Caminho para o código
    },
    {
        id: 2,
        title: "Website Developer",
        category: "Website",
        description: "Website profissional focado em manutenção de sites, suporte técnico contínuo e desenvolvimento web sob medida.",
        fullDescription: "Website desenvolvido com foco em serviços de manutenção de sites e desenvolvimento web profissional. Apresenta claramente soluções como correções técnicas, atualizações, otimização de performance, segurança, criação de novos sites e melhorias contínuas. O layout é moderno, responsivo e orientado à conversão, com navegação intuitiva, chamadas estratégicas para contato e foco em credibilidade, suporte e confiabilidade. Ideal para demonstrar expertise técnica, organização de serviços e relacionamento com clientes.",
        image: "assets/img/site-dv.png",
        tags: ["HTML5", "CSS3", "JavaScript", "Desenvolvimento Web", "UI/UX", "Projeto Pessoal", "Responsividade"],
        demoLink: "./demo/demo02.html",
        codeLink: "./codes/code02.html"
    },
    {
        id: 3,
        title: "Website Restaurante",
        category: "Website",
        description: "Website institucional para restaurante, com visual atrativo, cardápio organizado e foco na experiência do cliente.",
        fullDescription: "Website desenvolvido para restaurante, com design visualmente atrativo e identidade alinhada à proposta gastronômica do negócio. Possui layout responsivo, navegação simples e foco na apresentação do cardápio, ambiente, localização e formas de contato. O projeto valoriza imagens, tipografia elegante e organização das informações para facilitar reservas e visitas presenciais. Ideal para fortalecer a presença digital do restaurante e proporcionar uma experiência agradável ao cliente antes mesmo da visita.",
        image: "assets/img/site-saborearte.png",
        tags: ["HTML5", "CSS3", "Aplicação Criativa", "Layout Profissional", "UI/UX", "Desenvolvimento Web", "JavaScript"],
        demoLink: "./demo/demo03.html",
        codeLink: "./codes/code03.html"
    }
];

// Renderizar projetos
function renderProjects() {
    const container = document.getElementById('projectsContainer');
    container.innerHTML = projects.map(project => `
                <div class="project-card" onclick="openModal(${project.id})">
                    <div class="project-image-container">
                        <img src="${project.image}" alt="${project.title}" class="project-image">
                        <span class="project-category">${project.category}</span>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                        <div class="project-links">
                            <button class="btn-link btn-demo" onclick="event.stopPropagation(); window.open('${project.demoLink}', '_blank')">
                                <span>Ver Demo</span>
                            </button>
                            <button class="btn-link btn-code" onclick="event.stopPropagation(); window.open('${project.codeLink}', '_blank')">
                                <span>Código</span>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
}

// Modal
function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="modal-image">
                <h2 style="margin-bottom: 15px;">${project.title}</h2>
                <p style="color: #a78bfa; margin-bottom: 20px; font-weight: 600;">${project.category}</p>
                <p style="line-height: 1.8; margin-bottom: 20px; color: #b0b0b0;">${project.fullDescription}</p>
                <div class="project-tags" style="margin-bottom: 25px;">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <button class="btn-link btn-demo" onclick="window.open('${project.demoLink}', '_blank')">
                        <span>Ver Demo</span>
                    </button>
                    <button class="btn-link btn-code" onclick="window.open('${project.codeLink}', '_blank')">
                        <span>Ver Código</span>
                    </button>
                </div>
            `;

    modal.classList.add('active');
}

// Inicializar
renderProjects();

function closeModal() {
    document.getElementById('projectModal').classList.remove('active');
}

// Fechar modal ao clicar fora
document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') {
        closeModal();
    }
});

emailjs.init("09lwT_-y4ONwn-x4l");

document.getElementById("formContato").addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm(
        "service_oowdhc2",
        "template_ho33bnl",
        this
    ).then(() => {
        document.getElementById("status").innerText = "Mensagem enviada!";
    }, (error) => {
        document.getElementById("status").innerText = "Erro: " + JSON.stringify(error);
    });
});
