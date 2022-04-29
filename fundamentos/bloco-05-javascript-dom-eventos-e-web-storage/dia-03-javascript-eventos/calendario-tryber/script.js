function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
    
  //Exercício 1:

  const idDays = document.querySelector('#days');

  function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    for (i = 0; i < dezDaysList.length; i += 1) {
        const dezDays = dezDaysList[i];
        const liDays = document.createElement('li');
        liDays.innerHTML = dezDays;
        liDays.className = 'day';

        if (dezDays === 24 || dezDays === 25 || dezDays === 31) {
            liDays.classList.add('holiday');
        };
        if (dezDays === 4 || dezDays === 11 || dezDays === 18 || dezDays === 25) {
            liDays.classList.add('friday');
        };

        idDays.appendChild(liDays);
    };
  };

  createDaysOfTheMonth();

  //Exercício 2:

  const buttonsC = document.querySelector('.buttons-container');

  function createHolidays(feriados) {
      const button = document.createElement('button');
      button.id = 'btn-holiday';
      button.innerHTML = feriados;
      buttonsC.appendChild(button);    
  };

  createHolidays('Feriados');

  //Exercício 3:

  const holidayButton = document.querySelector('#btn-holiday');
  const holidayDays = document.querySelectorAll('.holiday');
  
  holidayButton.addEventListener('click', function() {
    for (i = 0; i < holidayDays.length; i += 1) {
        const count = holidayDays[i];
        if (count.style.backgroundColor === 'rgb(242, 234, 119)') {
          count.style.backgroundColor = 'rgb(238,238,238)';
        } else {
          count.style.backgroundColor = 'rgb(242, 234, 119)'
        }       
    }
  });

  //Exercício 4:

  function createFridayButton(friday) {
    const button = document.createElement('button');
    button.id = 'btn-friday';
    button.innerHTML = friday;
    buttonsC.appendChild(button);
  }

  createFridayButton('Sexta-feira');

  //Exercício 5:

  const fridayButton = document.querySelector('#btn-friday');
  const fridayDays = document.querySelectorAll('.friday');

  fridayButton.addEventListener('click', function() {
    for (i = 0; i <fridayDays.length; i += 1) {
      const count = fridayDays[i];
      const days = [4, 11, 18, 25];
      
      if (count.innerHTML === 'Sexta-feira') {
        count.innerHTML = days[i];
      } else {
        count.innerHTML = 'Sexta-feira';
      }
    }
  });

  //Exercício 6:

  idDays.addEventListener('mouseover', function(over) {
    over.target.style.fontSize = '40px';
  });

  idDays.addEventListener('mouseout', function(out) {
    out.target.style.fontSize = '20px';
  });

  //Exercício 7:

  const myTasks = document.querySelector('.my-tasks');
  
  function addTask(task) {
    const createSpan = document.createElement('span');
    createSpan.innerHTML = task;
    myTasks.appendChild(createSpan);
  };

  addTask('Projeto Arte com Pixels')

  //Exercício 8:

  function legendColor(color) {
    const div = document.createElement('div');
    div.className = 'task';
    div.style.backgroundColor = color;
    myTasks.appendChild(div);
  }

  legendColor('green');

  //Exercício 9:

const taskDiv = document.querySelector('.task');

function addSelected(event) {
  if (event.target.classList[1] !== 'selected') {
    event.target.classList.add('selected');
  } else {
    event.target.classList.remove('selected');
  }
  console.log(event.target.classList);
}

taskDiv.addEventListener('click', addSelected);

//Exercício 10:

const day = document.querySelector('.day');

function markDay(event) {
  const getColor = document.querySelector('.selected').style.backgroundColor;
  console.log(event.target);
  if (event.target.style.color !== getColor) {
    event.target.style.color = 'green';
  } else {
    event.target.style.color = 'rgb(119,119,119)';
  }
}

idDays.addEventListener('click', markDay);

//Bônus:

const button = document.querySelector('#btn-add');

function compromissos() {
  const text = document.querySelector('#task-input');
  const ul = document.querySelector('.task-list');
  const li = document.createElement('li');
  console.log(text.value.length);
  li.innerHTML = text.value;
  if (text.value === '') {
    alert('ERRO, nenhum compromisso foi escrito.');
  } else {
    ul.appendChild(li);
    text.value = '';
  }
};

button.addEventListener('click', compromissos);

const input = document.querySelector('#task-input');

input.addEventListener('keyup', function(event) {
  const text = document.querySelector('#task-input');
  const ul = document.querySelector('.task-list');
  const li = document.createElement('li');
  li.innerHTML = text.value;
  if (event.key === 'Enter' && text.value.length > 0) {
    ul.appendChild(li);
    text.value = '';
    console.log(text.value.length);
  }
});
