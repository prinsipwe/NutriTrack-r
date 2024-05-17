  // Retrieve user details from localStorage
  const userName = localStorage.getItem('user-Name');
  const age = localStorage.getItem('edad');
  const bmi = localStorage.getItem('stat');

  document.getElementById('user-Name').textContent = userName;
  document.getElementById('edad').textContent = age;
  document.getElementById('stat').textContent = bmi;

  // Retrieve and display selected meals
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const meals = ["breakfast", "lunch", "dinner"];

  days.forEach(day => {
      meals.forEach(meal => {
          const selectedFood = localStorage.getItem(`${day}-${meal}-food`);
          const selectedFoodImage = localStorage.getItem(`${day}-${meal}-image`);
          if (selectedFood && selectedFoodImage) {
              document.getElementById(`${day.toLowerCase()}-${meal}`).innerHTML =
                  `<img src="${selectedFoodImage}" alt="${selectedFood}" width="100" height="80"><br>${selectedFood}`;
          }
      });
  });

  // Add event listener to all "Select Meals" buttons
  const selectMealButtons = document.querySelectorAll('.select-meals');
  selectMealButtons.forEach(button => {
      button.addEventListener('click', function () {
          const day = button.getAttribute('data-day');
          localStorage.setItem('selectedDay', day);
          window.location.href = 'breakfast.html';
      });
  });

  document.getElementById('suggestionForm').addEventListener('submit', function (event) {
      event.preventDefault();

      // Get the suggestion text
      const suggestionText = document.getElementById('suggestion').value;

      // Create a new list item
      const newSuggestion = document.createElement('li');
      newSuggestion.textContent = suggestionText;

      // Add the new suggestion to the list
      document.getElementById('suggestions').appendChild(newSuggestion);

      // Clear the textarea
      document.getElementById('suggestion').value = '';
  });