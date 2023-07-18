const newFormHandler = async (event) => {
    event.preventDefault();

    const editButton = document.getElementById('update-button');
    const name = document.querySelector('#name').value.trim();
    const description = document.querySelector('#category-desc').value.trim();
    const categorySelect = document.querySelector('#category');

    if (name && paymentSchedule && description && amount) {
      const response = await fetch(`/expenses`, {
        method: 'POST',
        body: JSON.stringify({ name, paymentSchedule, description, amount }),
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
  
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);
  