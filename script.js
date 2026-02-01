// Akan names arrays
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('akanForm');
    const resultContainer = document.getElementById('result');
    
    // Calculate day of week
    function calculateDayOfWeek(day, month, year) {
        if (month < 3) {
            month += 12;
            year -= 1;
        }
        
        let CC = Math.floor(year / 100);
        let YY = year % 100;
        
        let h = (day + Math.floor((13 * (month + 1)) / 5) + YY + 
                Math.floor(YY / 4) + Math.floor(CC / 4) + (5 * CC)) % 7;
        
        return (h + 5) % 7;
    }
    
    // Input validation
    function validateInput(day, month, year) {
        if (day < 1 || day > 31) return "Day must be between 1 and 31";
        if (month < 1 || month > 12) return "Month must be between 1 and 12";
        if (year < 1900 || year > 2100) return "Year must be between 1900 and 2100";
        
        // Check valid date
        const date = new Date(year, month - 1, day);
        if (date.getDate() !== day || date.getMonth() !== month - 1) {
            return "Invalid date";
        }
        
        return null;
    }
    
    // Form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get user input
        const day = parseInt(document.getElementById('day').value);
        const month = parseInt(document.getElementById('month').value);
        const year = parseInt(document.getElementById('year').value);
        const gender = document.querySelector('input[name="gender"]:checked')?.value;
        
        // Validate
        if (!gender) {
            alert("Please select your gender.");
            return;
        }
        
        const error = validateInput(day, month, year);
        if (error) {
            alert(error);
            return;
        }
        
        // Calculate day
        const dayIndex = calculateDayOfWeek(day, month, year);
        const dayName = daysOfWeek[dayIndex];
        
        // Get Akan name
        let akanName = gender === 'male' ? maleNames[dayIndex] : femaleNames[dayIndex];
        
        // Display result
        displayResult(akanName, dayName, gender);
    });
    
    // Display result (CLEAN VERSION)
    function displayResult(akanName, dayName, gender) {
        resultContainer.innerHTML = `
            <h2>Your Akan Name is: <span class="highlight">${akanName}</span></h2>
            <p>You were born on a <strong>${dayName}</strong></p>
            <p><strong>${gender.charAt(0).toUpperCase() + gender.slice(1)}</strong> Akan name for ${dayName} is <strong>${akanName}</strong></p>
        `;
        resultContainer.classList.add('show');
        
        // Scroll to result smoothly
        resultContainer.scrollIntoView({ behavior: 'smooth' });
    }
});