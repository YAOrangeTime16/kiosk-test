const itemQuantity = document.getElementsByClassName('item-quantity');
const itemPrice = document.getElementsByClassName('item-price');
const minus = document.getElementsByClassName('icon-minus');
const plus = document.getElementsByClassName('icon-plus');
const quantity = document.getElementsByClassName('quantity');
const priceToSum = document.getElementsByClassName('price');
const priceTotal = document.getElementById('total');
const taxPrice = document.getElementById('moms');
const deliver = document.getElementById('deliver');
const store = document.getElementById('store');

const itemPriceCalc = (()=>{
  let newQuantity;
  let newItemPrice;

  const getItemPrice = index =>{
    const price = ( index === 0 ) ? 599 : 139;
    parseInt(price);
    return price;
  }

  const getTotalPrice = ()=>{
    const priceArray = Array.from(priceToSum);
    const numberArray = priceArray.map(item=>parseInt(item.textContent))
    let sum = numberArray.reduce((total, num)=> total+num);
    const extraCost = deliver.checked ? 79 : 0;
    let totalPrice = deliver.checked ? sum + extraCost : sum;
    return totalPrice;
  }

  const getTax = () => {
    const total = parseInt(priceTotal.textContent);
    const tax = parseInt(total * 0.25);
    return tax;
  }

  const changeItemPrice = (index, q, action) =>{
    let currentItemPrice = parseInt(itemPrice[index].textContent);
    let priceOfItem = getItemPrice(index);
    newItemPrice = action ? currentItemPrice + priceOfItem : currentItemPrice - priceOfItem;
    itemPrice[index].innerHTML = newItemPrice;
    priceTotal.innerHTML = getTotalPrice();
    taxPrice.innerHTML = getTax();
  }

  const subtract = index => {
    let currentQuantity = parseInt(quantity[index].textContent);
    if(currentQuantity > 0){
      newQuantity = currentQuantity-1;
      quantity[index].innerHTML = newQuantity;
      changeItemPrice(index, newQuantity, 0);
    } else if (itemQuantity === 0) {
      return;
    }
  }

  const add = index =>{
    let currentQuantity = parseInt(quantity[index].textContent);
    newQuantity = currentQuantity+1;
    quantity[index].innerHTML = newQuantity;
    changeItemPrice(index, newQuantity, 1);
  }

  const changeDeliverStatus = ()=>{
    priceTotal.innerHTML = getTotalPrice();
  }

  return {
    sub: subtract,
    add: add,
    delivery: changeDeliverStatus,
    total: getTotalPrice,
    tax: getTax
  }
    
})();

minus[0].addEventListener('click', ()=>itemPriceCalc.sub(0), false);
plus[0].addEventListener('click', ()=>itemPriceCalc.add(0), false);

minus[1].addEventListener('click', ()=>itemPriceCalc.sub(1), false);
plus[1].addEventListener('click', ()=>itemPriceCalc.add(1), false);

deliver.addEventListener('click', itemPriceCalc.delivery, false);
store.addEventListener('click', itemPriceCalc.delivery, false);

priceTotal.innerHTML = itemPriceCalc.total();
taxPrice.innerHTML = itemPriceCalc.tax();