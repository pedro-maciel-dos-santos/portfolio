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
        title: "Website Completo",
        category: "Website",
        description: "Website completo e responsivo com foco em design e navegação fluida.",
        fullDescription: "Website totalmente desenvolvido do zero, com estrutura responsiva, layout moderno e foco na experiência do usuário. Inclui seções de serviços, navegação fluida, visual limpo e técnicas de responsividade para diferentes dispositivos. Demonstra domínio em front-end e boas práticas de desenvolvimento web.",
        image: "assets/img/site-dv.png",
        tags: ["HTML5", "CSS3", "JavaScript", "Desenvolvimento Web", "UI/UX", "Layout Profissional", "Responsividade"],
        demoLink: "./demo/demo02.html",
        codeLink: "./codes/code02.html"
    },
    {
        id: 3,
        title: "Presente Romântico",
        category: "Code Gift",
        description: "Aplicação romântica e interativa criada como presente personalizado.",
        fullDescription: "Aplicação especial criada como um presente interativo e romântico, com efeitos visuais, música, animações e interface personalizada. Um projeto criativo que combina tecnologia com emoção, demonstrando domínio em JavaScript e experiências imersivas.",
        image: "assets/img/gift-for-gf.png",
        tags: ["HTML5", "CSS3", "Aplicação Criativa", "Projeto Pessoal", "Romântico", "Animações", "JavaScript"],
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
