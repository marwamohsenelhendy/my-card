const decrementBtn = document.querySelector('.decrement-btn');
const incrementBtn = document.querySelector('.increment-btn');
const numberBtn = document.querySelector('.number-btn');

let quantity = 1;

decrementBtn.addEventListener('click', function() {
  if (quantity > 1) {
    quantity--;
    numberBtn.textContent = quantity;
  }
});

incrementBtn.addEventListener('click', function() {
  if (quantity < 9) {
    quantity++;
    numberBtn.textContent = quantity;
  }
});