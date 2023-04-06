const supportCard = document.querySelector('.main-support');
const thankyouCard = document.querySelector('.main-thankyou');

const submitButton = document.querySelector('.btn-submit');

const rates = document.querySelectorAll('.btn');

const rating = document.getElementById('rated');


submitButton.addEventListener('click', ()=>{
    thankyouCard.classList.remove('hidden');
    supportCard.style.display = "none"
});

rates.forEach((rate)=>{
    rate.addEventListener('click', ()=>{
        rating.innerHTML = rate.innerHTML

    });
});