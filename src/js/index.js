const kioskModule = (()=>{
  let personalNumber = [];
  const firstContainer = document.getElementById('first-digits');
  const secondContainer = document.getElementById('last-digits');

  const getValue=(event)=>{
    let selectedNumber = (event.target.tagName === 'P') && event.target.textContent;
    if(selectedNumber){
      if(selectedNumber === 'x'){
        personalNumber.pop();
        setValue(personalNumber);
        console.log('delete');
      } else if(selectedNumber === 'ok'){
        console.log('clicked ok')
      } else if(personalNumber.length < 10){
        personalNumber.push(selectedNumber);
        console.log(personalNumber);
        setValue(personalNumber);
      } else {
        console.log('reached max');
      }
    }
  }

  const setValue=(array)=>{
    firstContainer.innerHTML = array.slice(0,6).join('');
    secondContainer.innerHTML = array.slice(6).join('');
  }

  return {
    getValue: getValue
  }

})();

const tablet = document.getElementById('tablet-wrapper');
tablet.addEventListener('click', kioskModule.getValue, false);
