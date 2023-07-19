const newFormHandler = async (event) => {
    event.preventDefault();

    const amount = document.querySelector('#expense-amount').value.trim();
    const description = document.querySelector('#expense-description').value.trim();
    const categorySelect = document.querySelector('#expense-category');
    const paymentSchedule = document.querySelector('#expense-paymentSchedule');

    if (categorySelect && paymentSchedule && description && amount) {
      const response = await fetch(`/expenses`, {
        method: 'POST',
        body: JSON.stringify({ categorySelect, paymentSchedule, description, amount }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
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
  document
    .querySelector('.new-expense-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.expense-list')
    .addEventListener('click', delButtonHandler);

  document.querySelector('.new-expense-form').setAttribute('data-questions', JSON.stringify(questions));
  