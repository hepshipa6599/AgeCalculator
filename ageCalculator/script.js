function calculateAge() {
  const birthdateInput = document.getElementById('birthdate');
  const birthdate = new Date(birthdateInput.value);
  const today = new Date();

  if (isNaN(birthdate)) {
    alert('Please enter a valid birthdate.');
    return;
  }

  const ageInMilliseconds = today - birthdate;
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

  const resultElement = document.getElementById('result');
  resultElement.textContent = `Your age is approximately ${ageInYears.toFixed(
    2
  )} years.`;
}
