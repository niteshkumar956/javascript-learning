const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach( function(button) {
  console.log(button);
  button.addEventListener('click', function (event){
    console.log(event);
    console.log(event.target);
    const e = event.target.id
    if(e === 'grey'){
      body.style.backgroundColor = e;
    }
    if(event.target.id === 'blue'){
      body.style.backgroundColor =e;
    }
    if(event.target.id === 'yellow'){
      body.style.backgroundColor = e;
    }
    if(event.target.id === 'white'){
      body.style.backgroundColor = e;
    }
  });

});