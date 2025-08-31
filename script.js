function calculateAge() {
    const birthdateInput = document.getElementById("birthdate");
    const resultElement = document.getElementById("result");

    const birthdate = new Date(birthdateInput.value);
    const today = new Date();

    if (isNaN(birthdate)) {
        resultElement.textContent = "Please enter a valid birthdate.";
        return;
    }

    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();

    
    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

   
    if (months < 0) {
        years--;
        months += 12;
    }

    resultElement.textContent = `Your age is ${years} years, ${months} months, and ${days} days.`;


}
  document.getElementById("birthdate").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();  // Default form submit band karne ke liye
                calculateAge();
            }
        });

  