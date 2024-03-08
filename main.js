const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const btn = document.querySelector('.count')
const p1 = document.querySelector('.error')
const p2 = document.querySelector('.cost-info')
const span = document.querySelector('.cost')

const check = () => {
    if(price.value =='' || people.value =='' || tip.value == 0){
        p1.textContent = 'Należy wypełnić wszystkie pola'
        p2.style.display = 'none'
    }else{
        p1.textContent = ''
      count();
    }
};
 const count = () => {
    const newPrice = parseFloat(price.value);
    const newPeople = parseInt(people.value);
    const newTip = parseFloat(tip.value);
    const sum = (newPrice + newPrice * newTip) / newPeople

    p2.style.display = 'block'
    span.textContent = sum.toFixed(2)
    
 }    

btn.addEventListener('click',check)
