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

  const idDays = document.querySelector('#days')

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
    const lineBreak = document.createElement('br');
    createSpan.innerHTML = task;
    myTasks.appendChild(createSpan);
    myTasks.appendChild(lineBreak);
  };

  addTask('Cozinhar');
  addTask('Estudar DOM');
  addTask('Projeto Arte com Pixels')

  //Exercício 8:

  