'use strict';

var itemQuantity = document.getElementsByClassName('item-quantity');
var itemPrice = document.getElementsByClassName('item-price');
var minus = document.getElementsByClassName('icon-minus');
var plus = document.getElementsByClassName('icon-plus');
var quantity = document.getElementsByClassName('quantity');
var priceToSum = document.getElementsByClassName('price');
var priceTotal = document.getElementById('total');
var taxPrice = document.getElementById('moms');
var deliver = document.getElementById('deliver');
var store = document.getElementById('store');

console.log(deliver.parentElement.nextElementSibling);

var itemPriceCalc = function () {
  var newQuantity = void 0;
  var newItemPrice = void 0;

  var getItemPrice = function getItemPrice(index) {
    var price = index === 0 ? 599 : 139;
    parseInt(price);
    return price;
  };

  var getTotalPrice = function getTotalPrice() {
    var priceArray = Array.from(priceToSum);
    var numberArray = priceArray.map(function (item) {
      return parseInt(item.textContent);
    });
    var sum = numberArray.reduce(function (total, num) {
      return total + num;
    });
    var extraCost = deliver.checked ? 79 : 0;
    var totalPrice = deliver.checked ? sum + extraCost : sum;
    return totalPrice;
  };

  var getTax = function getTax() {
    var total = parseInt(priceTotal.textContent);
    var tax = parseInt(total * 0.25);
    return tax;
  };

  var changeItemPrice = function changeItemPrice(index, q, action) {
    var currentItemPrice = parseInt(itemPrice[index].textContent);
    var priceOfItem = getItemPrice(index);
    newItemPrice = action ? currentItemPrice + priceOfItem : currentItemPrice - priceOfItem;
    itemPrice[index].innerHTML = newItemPrice;
    priceTotal.innerHTML = getTotalPrice();
    taxPrice.innerHTML = getTax();
  };

  var subtract = function subtract(index) {
    var currentQuantity = parseInt(quantity[index].textContent);
    if (currentQuantity > 0) {
      newQuantity = currentQuantity - 1;
      quantity[index].innerHTML = newQuantity;
      changeItemPrice(index, newQuantity, 0);
    } else if (itemQuantity === 0) {
      return;
    }
  };

  var add = function add(index) {
    var currentQuantity = parseInt(quantity[index].textContent);
    newQuantity = currentQuantity + 1;
    quantity[index].innerHTML = newQuantity;
    changeItemPrice(index, newQuantity, 1);
  };

  var changeDeliverStatus = function changeDeliverStatus() {
    priceTotal.innerHTML = getTotalPrice();
  };

  return {
    sub: subtract,
    add: add,
    delivery: changeDeliverStatus,
    total: getTotalPrice,
    tax: getTax
  };
}();

minus[0].addEventListener('click', function () {
  return itemPriceCalc.sub(0);
}, false);
plus[0].addEventListener('click', function () {
  return itemPriceCalc.add(0);
}, false);

minus[1].addEventListener('click', function () {
  return itemPriceCalc.sub(1);
}, false);
plus[1].addEventListener('click', function () {
  return itemPriceCalc.add(1);
}, false);

deliver.addEventListener('click', itemPriceCalc.delivery, false);
store.addEventListener('click', itemPriceCalc.delivery, false);

priceTotal.innerHTML = itemPriceCalc.total();
taxPrice.innerHTML = itemPriceCalc.tax();
'use strict';

var tabletControl = function () {
  var personalNumber = [];
  var firstContainer = document.getElementById('first-digits');
  var secondContainer = document.getElementById('last-digits');

  var getValue = function getValue(event) {
    var selectedNumber = event.target.tagName === 'P' && event.target.className !== 'check' && event.target.className !== 'delete' && event.target.textContent;
    if (selectedNumber) {
      if (personalNumber.length < 10) {
        personalNumber.push(selectedNumber);
        setValue(personalNumber);
      } else {
        console.log('reached max');
      }
    } else if (event.target.id === 'check') {
      console.log('clicked ok');
    } else if (event.target.id === 'delete') {
      personalNumber.pop();
      setValue(personalNumber);
    }
  };

  var setValue = function setValue(array) {
    firstContainer.innerHTML = array.slice(0, 6).join('');
    secondContainer.innerHTML = array.slice(6).join('');
  };

  return {
    getValue: getValue
  };
}();

var tablet = document.getElementById('tablet-wrapper');
tablet.addEventListener('click', tabletControl.getValue, false);
'use strict';

var itemQuantity = document.getElementsByClassName('item-quantity');
var itemPrice = document.getElementsByClassName('item-price');
var minus = document.getElementsByClassName('icon-minus');
var plus = document.getElementsByClassName('icon-plus');
var quantity = document.getElementsByClassName('quantity');
var priceToSum = document.getElementsByClassName('price');
var priceTotal = document.getElementById('total');
var taxPrice = document.getElementById('moms');
var deliver = document.getElementById('deliver');
var store = document.getElementById('store');

var itemPriceCalc = function () {
  var newQuantity = void 0;
  var newItemPrice = void 0;

  var getItemPrice = function getItemPrice(index) {
    var price = index === 0 ? 599 : 139;
    parseInt(price);
    return price;
  };

  var getTotalPrice = function getTotalPrice() {
    var priceArray = Array.from(priceToSum);
    var numberArray = priceArray.map(function (item) {
      return parseInt(item.textContent);
    });
    var sum = numberArray.reduce(function (total, num) {
      return total + num;
    });
    var extraCost = deliver.checked ? 79 : 0;
    var totalPrice = deliver.checked ? sum + extraCost : sum;
    return totalPrice;
  };

  var getTax = function getTax() {
    var total = parseInt(priceTotal.textContent);
    var tax = parseInt(total * 0.25);
    return tax;
  };

  var changeItemPrice = function changeItemPrice(index, q, action) {
    var currentItemPrice = parseInt(itemPrice[index].textContent);
    var priceOfItem = getItemPrice(index);
    newItemPrice = action ? currentItemPrice + priceOfItem : currentItemPrice - priceOfItem;
    itemPrice[index].innerHTML = newItemPrice;
    priceTotal.innerHTML = getTotalPrice();
    taxPrice.innerHTML = getTax();
  };

  var subtract = function subtract(index) {
    var currentQuantity = parseInt(quantity[index].textContent);
    if (currentQuantity > 0) {
      newQuantity = currentQuantity - 1;
      quantity[index].innerHTML = newQuantity;
      changeItemPrice(index, newQuantity, 0);
    } else if (itemQuantity === 0) {
      return;
    }
  };

  var add = function add(index) {
    var currentQuantity = parseInt(quantity[index].textContent);
    newQuantity = currentQuantity + 1;
    quantity[index].innerHTML = newQuantity;
    changeItemPrice(index, newQuantity, 1);
  };

  var changeDeliverStatus = function changeDeliverStatus() {
    priceTotal.innerHTML = getTotalPrice();
  };

  return {
    sub: subtract,
    add: add,
    delivery: changeDeliverStatus,
    total: getTotalPrice,
    tax: getTax
  };
}();

minus[0].addEventListener('click', function () {
  return itemPriceCalc.sub(0);
}, false);
plus[0].addEventListener('click', function () {
  return itemPriceCalc.add(0);
}, false);

minus[1].addEventListener('click', function () {
  return itemPriceCalc.sub(1);
}, false);
plus[1].addEventListener('click', function () {
  return itemPriceCalc.add(1);
}, false);

deliver.addEventListener('click', itemPriceCalc.delivery, false);
store.addEventListener('click', itemPriceCalc.delivery, false);

priceTotal.innerHTML = itemPriceCalc.total();
taxPrice.innerHTML = itemPriceCalc.tax();
'use strict';

var tabletControl = function () {
  var personalNumber = [];
  var firstContainer = document.getElementById('first-digits');
  var secondContainer = document.getElementById('last-digits');

  var getValue = function getValue(event) {
    var selectedNumber = event.target.tagName === 'P' && event.target.className !== 'check' && event.target.className !== 'delete' && event.target.textContent;
    if (selectedNumber) {
      if (personalNumber.length < 10) {
        personalNumber.push(selectedNumber);
        setValue(personalNumber);
      } else {
        console.log('reached max');
      }
    } else if (event.target.id === 'check') {
      console.log('clicked ok');
    } else if (event.target.id === 'delete') {
      personalNumber.pop();
      setValue(personalNumber);
    }
  };

  var setValue = function setValue(array) {
    firstContainer.innerHTML = array.slice(0, 6).join('');
    secondContainer.innerHTML = array.slice(6).join('');
  };

  return {
    getValue: getValue
  };
}();

var tablet = document.getElementById('tablet-wrapper');
tablet.addEventListener('click', tabletControl.getValue, false);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1QcmljZS5qcyIsInRhYmxldENvbnRyb2wuanMiXSwibmFtZXMiOlsiaXRlbVF1YW50aXR5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaXRlbVByaWNlIiwibWludXMiLCJwbHVzIiwicXVhbnRpdHkiLCJwcmljZVRvU3VtIiwicHJpY2VUb3RhbCIsImdldEVsZW1lbnRCeUlkIiwidGF4UHJpY2UiLCJkZWxpdmVyIiwic3RvcmUiLCJpdGVtUHJpY2VDYWxjIiwibmV3UXVhbnRpdHkiLCJuZXdJdGVtUHJpY2UiLCJnZXRJdGVtUHJpY2UiLCJwcmljZSIsImluZGV4IiwicGFyc2VJbnQiLCJnZXRUb3RhbFByaWNlIiwicHJpY2VBcnJheSIsIkFycmF5IiwiZnJvbSIsIm51bWJlckFycmF5IiwibWFwIiwiaXRlbSIsInRleHRDb250ZW50Iiwic3VtIiwicmVkdWNlIiwidG90YWwiLCJudW0iLCJleHRyYUNvc3QiLCJjaGVja2VkIiwidG90YWxQcmljZSIsImdldFRheCIsInRheCIsImNoYW5nZUl0ZW1QcmljZSIsInEiLCJhY3Rpb24iLCJjdXJyZW50SXRlbVByaWNlIiwicHJpY2VPZkl0ZW0iLCJpbm5lckhUTUwiLCJzdWJ0cmFjdCIsImN1cnJlbnRRdWFudGl0eSIsImFkZCIsImNoYW5nZURlbGl2ZXJTdGF0dXMiLCJzdWIiLCJkZWxpdmVyeSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YWJsZXRDb250cm9sIiwicGVyc29uYWxOdW1iZXIiLCJmaXJzdENvbnRhaW5lciIsInNlY29uZENvbnRhaW5lciIsImdldFZhbHVlIiwiZXZlbnQiLCJzZWxlY3RlZE51bWJlciIsInRhcmdldCIsInRhZ05hbWUiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJwdXNoIiwic2V0VmFsdWUiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJwb3AiLCJhcnJheSIsInNsaWNlIiwiam9pbiIsInRhYmxldCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLGVBQWUs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LElBQUdULE1BQU1FLE1BQU4sQ0FBYVEsRUFBYixLQUFtQixPQUF0QixFQUE4QjtBQUNuQ0YsY0FBUUMsR0FBUixDQUFZLFlBQVo7QUFDRCxLQUZNLE1BRUEsSUFBR1QsTUFBTUUsTUFBTixDQUFhUSxFQUFiLEtBQW9CLFFBQXZCLEVBQWdDO0FBQ3JDZCxxQkFBZWUsR0FBZjtBQUNBSixlQUFTWCxjQUFUO0FBQ0Q7QUFDRixHQWZEOztBQWlCQSxNQUFNVyxXQUFTLFNBQVRBLFFBQVMsQ0FBQ0ssS0FBRCxFQUFTO0FBQ3RCZixtQkFBZVYsU0FBZixHQUEyQnlCLE1BQU1DLEtBQU4sQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFpQkMsSUFBakIsQ0FBc0IsRUFBdEIsQ0FBM0I7QUFDQWhCLG9CQUFnQlgsU0FBaEIsR0FBNEJ5QixNQUFNQyxLQUFOLENBQVksQ0FBWixFQUFlQyxJQUFmLENBQW9CLEVBQXBCLENBQTVCO0FBQ0QsR0FIRDs7QUFLQSxTQUFPO0FBQ0xmLGNBQVVBO0FBREwsR0FBUDtBQUlELENBL0JxQixFQUF0Qjs7QUFpQ0EsSUFBTWdCLFNBQVNyRSxTQUFTUSxjQUFULENBQXdCLGdCQUF4QixDQUFmO0FBQ0E2RCxPQUFPckIsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNDLGNBQWNJLFFBQS9DLEVBQXlELEtBQXpEIiwiZmlsZSI6ImNvbmNhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGl0ZW1RdWFudGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2l0ZW0tcXVhbnRpdHknKTtcbmNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2l0ZW0tcHJpY2UnKTtcbmNvbnN0IG1pbnVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaWNvbi1taW51cycpO1xuY29uc3QgcGx1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ljb24tcGx1cycpO1xuY29uc3QgcXVhbnRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdxdWFudGl0eScpO1xuY29uc3QgcHJpY2VUb1N1bSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ByaWNlJyk7XG5jb25zdCBwcmljZVRvdGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsJyk7XG5jb25zdCB0YXhQcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb21zJyk7XG5jb25zdCBkZWxpdmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGl2ZXInKTtcbmNvbnN0IHN0b3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0b3JlJyk7XG5cbmNvbnN0IGl0ZW1QcmljZUNhbGMgPSAoKCk9PntcbiAgbGV0IG5ld1F1YW50aXR5O1xuICBsZXQgbmV3SXRlbVByaWNlO1xuXG4gIGNvbnN0IGdldEl0ZW1QcmljZSA9IGluZGV4ID0+e1xuICAgIGNvbnN0IHByaWNlID0gKCBpbmRleCA9PT0gMCApID8gNTk5IDogMTM5O1xuICAgIHBhcnNlSW50KHByaWNlKTtcbiAgICByZXR1cm4gcHJpY2U7XG4gIH1cblxuICBjb25zdCBnZXRUb3RhbFByaWNlID0gKCk9PntcbiAgICBjb25zdCBwcmljZUFycmF5ID0gQXJyYXkuZnJvbShwcmljZVRvU3VtKTtcbiAgICBjb25zdCBudW1iZXJBcnJheSA9IHByaWNlQXJyYXkubWFwKGl0ZW09PnBhcnNlSW50KGl0ZW0udGV4dENvbnRlbnQpKVxuICAgIGxldCBzdW0gPSBudW1iZXJBcnJheS5yZWR1Y2UoKHRvdGFsLCBudW0pPT4gdG90YWwrbnVtKTtcbiAgICBjb25zdCBleHRyYUNvc3QgPSBkZWxpdmVyLmNoZWNrZWQgPyA3OSA6IDA7XG4gICAgbGV0IHRvdGFsUHJpY2UgPSBkZWxpdmVyLmNoZWNrZWQgPyBzdW0gKyBleHRyYUNvc3QgOiBzdW07XG4gICAgcmV0dXJuIHRvdGFsUHJpY2U7XG4gIH1cblxuICBjb25zdCBnZXRUYXggPSAoKSA9PiB7XG4gICAgY29uc3QgdG90YWwgPSBwYXJzZUludChwcmljZVRvdGFsLnRleHRDb250ZW50KTtcbiAgICBjb25zdCB0YXggPSBwYXJzZUludCh0b3RhbCAqIDAuMjUpO1xuICAgIHJldHVybiB0YXg7XG4gIH1cblxuICBjb25zdCBjaGFuZ2VJdGVtUHJpY2UgPSAoaW5kZXgsIHEsIGFjdGlvbikgPT57XG4gICAgbGV0IGN1cnJlbnRJdGVtUHJpY2UgPSBwYXJzZUludChpdGVtUHJpY2VbaW5kZXhdLnRleHRDb250ZW50KTtcbiAgICBsZXQgcHJpY2VPZkl0ZW0gPSBnZXRJdGVtUHJpY2UoaW5kZXgpO1xuICAgIG5ld0l0ZW1QcmljZSA9IGFjdGlvbiA/IGN1cnJlbnRJdGVtUHJpY2UgKyBwcmljZU9mSXRlbSA6IGN1cnJlbnRJdGVtUHJpY2UgLSBwcmljZU9mSXRlbTtcbiAgICBpdGVtUHJpY2VbaW5kZXhdLmlubmVySFRNTCA9IG5ld0l0ZW1QcmljZTtcbiAgICBwcmljZVRvdGFsLmlubmVySFRNTCA9IGdldFRvdGFsUHJpY2UoKTtcbiAgICB0YXhQcmljZS5pbm5lckhUTUwgPSBnZXRUYXgoKTtcbiAgfVxuXG4gIGNvbnN0IHN1YnRyYWN0ID0gaW5kZXggPT4ge1xuICAgIGxldCBjdXJyZW50UXVhbnRpdHkgPSBwYXJzZUludChxdWFudGl0eVtpbmRleF0udGV4dENvbnRlbnQpO1xuICAgIGlmKGN1cnJlbnRRdWFudGl0eSA+IDApe1xuICAgICAgbmV3UXVhbnRpdHkgPSBjdXJyZW50UXVhbnRpdHktMTtcbiAgICAgIHF1YW50aXR5W2luZGV4XS5pbm5lckhUTUwgPSBuZXdRdWFudGl0eTtcbiAgICAgIGNoYW5nZUl0ZW1QcmljZShpbmRleCwgbmV3UXVhbnRpdHksIDApO1xuICAgIH0gZWxzZSBpZiAoaXRlbVF1YW50aXR5ID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYWRkID0gaW5kZXggPT57XG4gICAgbGV0IGN1cnJlbnRRdWFudGl0eSA9IHBhcnNlSW50KHF1YW50aXR5W2luZGV4XS50ZXh0Q29udGVudCk7XG4gICAgbmV3UXVhbnRpdHkgPSBjdXJyZW50UXVhbnRpdHkrMTtcbiAgICBxdWFudGl0eVtpbmRleF0uaW5uZXJIVE1MID0gbmV3UXVhbnRpdHk7XG4gICAgY2hhbmdlSXRlbVByaWNlKGluZGV4LCBuZXdRdWFudGl0eSwgMSk7XG4gIH1cblxuICBjb25zdCBjaGFuZ2VEZWxpdmVyU3RhdHVzID0gKCk9PntcbiAgICBwcmljZVRvdGFsLmlubmVySFRNTCA9IGdldFRvdGFsUHJpY2UoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3ViOiBzdWJ0cmFjdCxcbiAgICBhZGQ6IGFkZCxcbiAgICBkZWxpdmVyeTogY2hhbmdlRGVsaXZlclN0YXR1cyxcbiAgICB0b3RhbDogZ2V0VG90YWxQcmljZSxcbiAgICB0YXg6IGdldFRheFxuICB9XG4gICAgXG59KSgpO1xuXG5taW51c1swXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT5pdGVtUHJpY2VDYWxjLnN1YigwKSwgZmFsc2UpO1xucGx1c1swXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT5pdGVtUHJpY2VDYWxjLmFkZCgwKSwgZmFsc2UpO1xuXG5taW51c1sxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT5pdGVtUHJpY2VDYWxjLnN1YigxKSwgZmFsc2UpO1xucGx1c1sxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT5pdGVtUHJpY2VDYWxjLmFkZCgxKSwgZmFsc2UpO1xuXG5kZWxpdmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaXRlbVByaWNlQ2FsYy5kZWxpdmVyeSwgZmFsc2UpO1xuc3RvcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpdGVtUHJpY2VDYWxjLmRlbGl2ZXJ5LCBmYWxzZSk7XG5cbnByaWNlVG90YWwuaW5uZXJIVE1MID0gaXRlbVByaWNlQ2FsYy50b3RhbCgpO1xudGF4UHJpY2UuaW5uZXJIVE1MID0gaXRlbVByaWNlQ2FsYy50YXgoKTsiLCJjb25zdCB0YWJsZXRDb250cm9sID0gKCgpPT57XG4gIGxldCBwZXJzb25hbE51bWJlciA9IFtdO1xuICBjb25zdCBmaXJzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaXJzdC1kaWdpdHMnKTtcbiAgY29uc3Qgc2Vjb25kQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhc3QtZGlnaXRzJyk7XG5cbiAgY29uc3QgZ2V0VmFsdWU9KGV2ZW50KT0+e1xuICAgIGxldCBzZWxlY3RlZE51bWJlciA9IChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ1AnICYmIGV2ZW50LnRhcmdldC5jbGFzc05hbWUgIT09ICdjaGVjaycgJiYgZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSAhPT0gJ2RlbGV0ZScpICYmIGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcbiAgICBpZihzZWxlY3RlZE51bWJlcil7XG4gICAgICBpZihwZXJzb25hbE51bWJlci5sZW5ndGggPCAxMCl7XG4gICAgICAgIHBlcnNvbmFsTnVtYmVyLnB1c2goc2VsZWN0ZWROdW1iZXIpO1xuICAgICAgICBzZXRWYWx1ZShwZXJzb25hbE51bWJlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygncmVhY2hlZCBtYXgnKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYoZXZlbnQudGFyZ2V0LmlkID09PSdjaGVjaycpe1xuICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQgb2snKVxuICAgIH0gZWxzZSBpZihldmVudC50YXJnZXQuaWQgPT09ICdkZWxldGUnKXtcbiAgICAgIHBlcnNvbmFsTnVtYmVyLnBvcCgpO1xuICAgICAgc2V0VmFsdWUocGVyc29uYWxOdW1iZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNldFZhbHVlPShhcnJheSk9PntcbiAgICBmaXJzdENvbnRhaW5lci5pbm5lckhUTUwgPSBhcnJheS5zbGljZSgwLDYpLmpvaW4oJycpO1xuICAgIHNlY29uZENvbnRhaW5lci5pbm5lckhUTUwgPSBhcnJheS5zbGljZSg2KS5qb2luKCcnKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0VmFsdWU6IGdldFZhbHVlXG4gIH1cblxufSkoKTtcblxuY29uc3QgdGFibGV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxldC13cmFwcGVyJyk7XG50YWJsZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YWJsZXRDb250cm9sLmdldFZhbHVlLCBmYWxzZSk7XG4iXX0=
