// Elementos HTML
const fill = document.querySelector('.fill');
let fillHeight = 0; // Inicia com altura 0%

// Função para animar o termômetro ao longo de 15 segundos
function animateThermometer() {
    const interval = setInterval(() => {
        fillHeight += 1; // Incrementa 1% por vez
        fill.style.height = `${fillHeight}%`; // Atualiza a altura

        // Verifica se o termômetro chegou a 100%
        if (fillHeight >= 100) {
            clearInterval(interval); // Interrompe o timer
            fill.style.backgroundColor = 'blue'; // Muda para azul
            startSnow(); // Inicia o efeito de neve
        }
    }, 70); // Executa a cada 150ms (100% em 15s)
}

// Função para iniciar o efeito de neve
function startSnow() {
    document.body.classList.add('snowing');

    for (let i = 0; i < 150; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        const sizeClass = ['small', 'medium', 'large'][Math.floor(Math.random() * 3)];
        snowflake.classList.add(sizeClass);

        // Configuração aleatória dos flocos de neve
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDelay = `${Math.random() * 2}s`;
        snowflake.style.animationDuration = `${10 + Math.random() * 5}s`;
        snowflake.style.opacity = Math.random() * 0.5 + 0.5;

        document.body.appendChild(snowflake);
    }
}

// Após o carregamento da página para iniciar a animação do termômetro
window.addEventListener('load', () => {
    setTimeout(() => {
        animateThermometer(); // Inicia a animação do termômetro
    }); 
});

// Função para tornar a logomarca visível e movê-la para o topo
function showLogo() {
    document.body.classList.add('logo-visible');
}

// Inicia a transição após 0.5 segundos
setTimeout(showLogo, 500);


// Carousel 

var myCarousel = document.querySelector('#carouselExampleIndicators');
var carousel = new bootstrap.Carousel(myCarousel);
