const kioskModule = (()=>{
  let personalNumber = [];
  const firstContainer = document.getElementById('first-digits');
  const secondContainer = document.getElementById('last-digits');

  const getValue=(event)=>{
    let selectedNumber = (event.target.tagName === 'P' && event.target.className !== 'check' && event.target.className !== 'delete') && event.target.textContent;
    if(selectedNumber){
      if(personalNumber.length < 10){
        personalNumber.push(selectedNumber);
        console.log(personalNumber);
        setValue(personalNumber);
      } else {
        console.log('reached max');
      }
    } else if(event.target.className ==='check'){
      console.log('clicked ok')
    } else if(event.target.className === 'delete'){
      personalNumber.pop();
      setValue(personalNumber);
      console.log('delete');
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
