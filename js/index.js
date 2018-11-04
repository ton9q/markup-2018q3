/* NAVIGATION HEADER*/
menuTop.addEventListener('click', () => {
  const x = document.getElementById('myTopnav')

  if(x.className === 'top-nav') {
    x.className += " responsive";
  } else {
    x.className = 'top-nav'
  }
});


/* SLIDER */
const commentsContent = [
  {
    comment: '“Suspendisse tempor turpis odio, sit amet cursus leo consequat non. Maecenas lacinia faucibus enimqui interdum dolor pulvinar vitae.”',
    person: 'Johny Doe',
  },
  {
    comment: '“Suspendisse tempor turpis odio, sit amet cursus leo consequat non.”',
    person: 'John Doe',
  },
  {
    comment: '“Suspendisse tempor turpis odio.”',
    person: 'Johnathan Doe',
  },
];

const dots = [...document.getElementById('dots').children];
dots.forEach((item, id) => {
    item.addEventListener('click', () => {
        const comment = document.getElementById('comment');
        const person = document.getElementById('person_name');

        comment.innerHTML = commentsContent[id].comment;
        person.innerHTML = commentsContent[id].person;

        dots.forEach((dot, index) => {
            if (index === id) {
                dot.style.backgroundColor = 'white';
            } else {
                dot.style.backgroundColor = 'transparent';
            }
        });
    });
});