function calculatePayablePrice(unitPrice, quantity) {
  return unitPrice * quantity;
}

document.addEventListener('DOMContentLoaded', () => {
  const unitPrice = 100;
  const quantityInput = document.getElementById('quantity');
  const payablePrice = document.getElementById('payablePrice');
  let quantityError = document.getElementById('quantityError');

  if (!quantityError) {
    quantityError = document.createElement('span');
    quantityError.id = 'quantityError';
    quantityError.style.color = 'red';
    quantityError.style.marginLeft = '8px';
    quantityInput.insertAdjacentElement('afterend', quantityError);
  }

  const updatePayablePrice = () => {
    const quantity = Number(quantityInput.value);

    if (!quantity || Number.isNaN(quantity)) {
      quantityError.textContent = 'Quantity must be greater than 0';
      payablePrice.textContent = '';
      return;
    }

    if (quantity < 0) {
      quantityError.textContent = 'Quantity cannot be negative';
      payablePrice.textContent = '';
      return;
    }

    quantityError.textContent = '';
    payablePrice.textContent = calculatePayablePrice(unitPrice, quantity);
  };

  quantityInput.addEventListener('input', updatePayablePrice);
  updatePayablePrice();
});

