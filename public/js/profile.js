const amount = document.querySelector('#expense-amount')
const description = document.querySelector('#expense-description')
const paymentSchedule = document.querySelector('#expense-paymentSchedule');
const expenseForm =  document.querySelector('.new-expense-form');

const newFormHandler = async (event) => {
    event.preventDefault();

    if (paymentSchedule && description && amount) {
      const response = await fetch(`/api/expenses`, {
        method: 'POST',
        body: JSON.stringify({paymentSchedule: paymentSchedule.value, amount: amount.value }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
        return response;
      } else {
        alert('Failed to submit expense');
      }
    }

  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete expense');
      }
    }
  };

  const updateButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'PUT',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete expense');
      }
    }
  };
 
expenseForm.addEventListener('submit', newFormHandler);
  
  // document
  //   .querySelector('.expense-list')
  //   .addEventListener('click', delButtonHandler);
  

    