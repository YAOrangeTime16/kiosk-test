const pen = Array.from(document.getElementsByClassName('icon-pen'));

const tabletControl = (()=>{
  let personNumber = [];
  let telephoneNumber = [];
  const firstContainer = document.getElementById('first-digits');
  const secondContainer = document.getElementById('last-digits');
  const telephoneContainer = document.getElementById('telephone');
  const check = document.getElementById('check');

  const getValue=event=>{
    let selectedNumber = (event.target.tagName === 'P' && event.target.className !== 'check' && event.target.className !== 'delete') && event.target.textContent;
    let activeElement = Array.from(document.getElementsByClassName('active'));
    console.log(activeElement[0].className)
    if(selectedNumber){

      if(activeElement[0].className === 'form-personalnumber active'){
        (personNumber.length < 10) ? personNumber.push(selectedNumber) : console.log('reached max');
        setPnumber(personNumber);
      } else if(activeElement[0].className === 'form-mobile active'){
        (telephoneNumber.length < 10) ? telephoneNumber.push(selectedNumber) : console.log('reached max');
        setTnumber(telephoneNumber);      
      } 

    } else if(event.target.id ==='check'){
      checkoutActiveClass();
      console.log('clicked ok');

    } else if(event.target.id === 'delete'){

      if(activeElement[0].className === 'form-personalnumber active'){
        personNumber.pop();
        setPnumber(personNumber);
      } else if(activeElement[0].className === 'form-mobile active'){
        telephoneNumber.pop();
        setTnumber(telephoneNumber);
      } ;
      
    }
  }

  const checkoutActiveClass=()=>{
    let personalInput = document.getElementsByClassName('form-personalnumber');
    let telInput = document.getElementsByClassName('form-mobile');
    telInput[0].className = "form-mobile disable";
    personalInput[0].className = "form-personalnumber disable";
  }

  const activateClass=(val, i)=>{
    const tablet = document.getElementById('tablet-wrapper');
    let personalInput = document.getElementsByClassName('form-personalnumber');
    let telInput = document.getElementsByClassName('form-mobile');
    if(val === 'personalNumber'){
      personalInput[0].className = "form-personalnumber active";
      telInput[0].className = "form-mobile disable";
    } else if(val === 'telNumber'){
      telInput[0].className = "form-mobile active";
      personalInput[0].className = "form-personalnumber disable";
    }
    tablet.addEventListener('click', getValue, false);
  }

  const getPlaceToInput=(val, i)=>{
    console.log(val + ' ' +i)
  }

  const setPnumber=array=>{
    firstContainer.innerHTML = array.slice(0,6).join('');
    secondContainer.innerHTML = array.slice(6).join('');
  }

  const setTnumber=array=>{
    telephoneContainer.innerHTML = array.join('');
  }

  return {
    setActive: activateClass
  }

})();



pen.map((item, index)=>item.addEventListener('click', ()=>tabletControl.setActive(item.getAttribute('value'), index), false));
