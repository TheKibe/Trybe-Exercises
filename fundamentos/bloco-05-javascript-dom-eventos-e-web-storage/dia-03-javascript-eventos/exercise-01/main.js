const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// Resposta: Porque ela uma classe "tech" com a propriedade trasnform, que pode alterar a posição do elemento.

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

    function addTechClass(event) {
      const tech = document.querySelector('.tech');
      tech.classList.remove('tech')
      event.target.className = 'tech'
      input.value = '';
    } 
    
    firstLi.addEventListener('click', addTechClass);
    secondLi.addEventListener('click', addTechClass);
    thirdLi.addEventListener('click', addTechClass);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

    function changeText() {
      const tech = document.querySelector('.tech');
      tech.innerHTML = input.value;
    }

    input.addEventListener('keyup', changeText);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

    function linkGit() {
      window.location.replace('https://github.com/TheKibe')
    }

    myWebpage.addEventListener('dblclick', linkGit);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

    function changeColor() {
      myWebpage.style.color = 'rgb(130, 50, 255)';
    }
    function restoreColor() {
      myWebpage.style.color = 'white';
    }

    myWebpage.addEventListener('mouseenter', changeColor);
    myWebpage.addEventListener('mouseleave', restoreColor);

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  console.log(event.target);
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.