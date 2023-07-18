const expenseForm = document.querySelector('.expenses form');
const budgetSectionList = document.querySelector('.budget ul');
const commentForm = document.querySelector('.comments form');
const categorySelect = document.querySelector('#category');
const categoryOptionsContainer = document.querySelector('#categoryOptions');

// Fetch categories and populate the select element
const fetchCategories = async () => {
  try {
    const response = await fetch('/api/categories');
    if (response.ok) {
      const categories = await response.json();
      categories.forEach((category) => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
      });
    } else {
      throw new Error('Failed to fetch categories');
    }
  } catch (error) {
    console.error(error);
    alert('Failed to fetch categories');
  }
};

// Call the fetchCategories function to populate the select element
fetchCategories();

// Expense form handler
expenseForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const category = document.querySelector('#category').value.trim();
  const amount = document.querySelector('#amount').value.trim();
  const date = document.querySelector('#date').value.trim();
  const description = document.querySelector('#description').value.trim();

  if (category && amount && date && description) {
    const response = await fetch('/expenses', {
      method: 'POST',
      body: JSON.stringify({ category, amount, date, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
        // Success handling if needed
      } else {
        alert('Failed to submit expense');
      }
    }
  });

  // Budget section delete button handler
budgetSectionList.addEventListener('click', async (event) => {
    if (event.target.tagName === 'BUTTON' && event.target.textContent === 'Delete') {
      const li = event.target.closest('li');
      const category = li.querySelector('span:first-child').textContent;
  
      const response = await fetch(`/budgetSections/${category}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        li.remove();
      } else {
        alert('Failed to delete budget section');
      }
    }
  });

  // Comment form handler
commentForm.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name').value.trim();
    const comment = document.querySelector('#comment').value.trim();
  
    if (name && comment) {
      const response = await fetch('/comments', {
        method: 'POST',
        body: JSON.stringify({ name, comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Success handling if needed
      } else {
        alert('Failed to submit comment');
      }
    }
  });


