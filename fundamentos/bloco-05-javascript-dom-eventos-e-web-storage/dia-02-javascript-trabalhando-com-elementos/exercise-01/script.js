
//Parte I - Buscando elementos

const ondeVc = document.querySelector('#elementoOndeVoceEsta');

console.log(ondeVc.parentNode);
ondeVc.parentNode.style.color = 'red';

document.querySelector('#primeiroFilhoDoFilho').innerHTML = 'Tatara Filho';

const dad = document.querySelector('#pai');

console.log(dad.firstElementChild);

console.log(ondeVc.previousElementSibling);

console.log(ondeVc.nextSibling);

console.log(ondeVc.nextElementSibling);

console.log(document.querySelector('#pai').lastElementChild.previousElementSibling);

//Parte II - Criando elementos

//1. Crie um irmão para elementoOndeVoceEsta .

const brother = document.createElement('section');

brother.id = 'Irmão do OndeVcEsta'

dad.appendChild(brother);

//2. Crie um filho para elementoOndeVoceEsta .

const child = document.createElement('section');

child.id = 'Filho';

ondeVc.appendChild(child);

//3. Crie um filho para primeiroFilhoDoFilho .

const filhoDoFilho = ondeVc.firstElementChild;

const filhoCriado = filhoDoFilho.appendChild(child);

//4. A partir desse filho criado, acesse terceiroFilho .

const acessThirdChild = filhoCriado.parentNode.parentNode.nextElementSibling;

console.log(acessThirdChild);

//Parte III - Removendo elementos

//Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

const paiDoPai = document.querySelector('#paiDoPai');

const paiDoPaiList = paiDoPai.children;

for(i = 0; i < paiDoPaiList.length; i += 1) { //NAO ESTA FUNCIONANDO DIREITO, SÓ AS SECTIONS ESTÃO SENDO REMOVIDAS.
    const count = paiDoPaiList[i];

    if (count.id !== 'pai') {
         paiDoPai.removeChild(count);
    }
 }

console.log(paiDoPaiList);

