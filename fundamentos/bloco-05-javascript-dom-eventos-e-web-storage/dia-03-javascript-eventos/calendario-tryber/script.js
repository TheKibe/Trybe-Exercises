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

  function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const idDays = document.querySelector('#days')

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

  function createHolidays(feriados) {
      const button = document.createElement('button');
      button.id = 'btn-holiday';
      button.innerHTML = feriados;
      document.querySelector('.buttons-container').appendChild(button);    
  };

  createHolidays('Feriados');

  //Exercício 3:     Falta lógica inversa.

  const holidayButton = document.querySelector('#btn-holiday');
  const holidayDays = document.querySelectorAll('.holiday');
  
  holidayButton.addEventListener('click', function() {
    for (i = 0; i < holidayDays.length; i += 1) {
        const count = holidayDays[i];
        count.style.backgroundColor = 'rgb(242, 234, 119)';
        if (count.attributes === true) {
            count.removeAttribute('style');
        }
    }
  });

  //Exercício 4:

  