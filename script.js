// Akan names arrays
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('akanForm');
    const resultContainer = document.getElementById('result');
    
    // Calculate day of week USING INSTRUCTOR'S FORMULA
    function calculateDayOfWeek(day, month, year) {
        // INSTRUCTOR'S EXACT FORMULA:
        // d = ((CC/4 - 2×CC - 1) + (5×YY/4) + (26×(MM + 1)/10) + DD) mod 7
        
        // Extract CC and YY
        let CC = Math.floor(year / 100);
        let YY = year % 100;
        
        // Calculate parts
        let part1 = Math.floor(CC / 4) - (2 * CC) - 1;
        let part2 = Math.floor((5 * YY) / 4);
        let part3 = Math.floor((26 * (month + 1)) / 10);
        
        // Combine and apply modulus
        let d = part1 + part2 + part3 + day;
        d = d % 7;
        
        // Ensure positive
        if (d < 0) d += 7;
        
        return d;  // 0=Sunday, 1=Monday, etc.
    }
    
    // Input validation
    function validateInput(day, month, year) {
        if (day < 1 || day > 31) return "Day must be between 1 and 31";
        if (month < 1 || month > 12) return "Month must be between 1 and 12";
        if (year < 1900 || year > 2100) return "Year must be between 1900 and 2100";
        
        const date = new Date(year, month - 1, day);
        if (date.getDate() !== day || date.getMonth() !== month - 1) {
            return "Invalid date";
        }
        
        return null;
    }
    
    // Form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const day = parseInt(document.getElementById('day').value);
        const month = parseInt(document.getElementById('month').value);
        const year = parseInt(document.getElementById('year').value);
        const gender = document.querySelector('input[name="gender"]:checked')?.value;
        
        if (!gender) {
            alert("Please select your gender.");
            return;
        }
        
        const error = validateInput(day, month, year);
        if (error) {
            alert(error);
            return;
        }
        
        const dayIndex = calculateDayOfWeek(day, month, year);
        const dayName = daysOfWeek[dayIndex];
        const akanName = gender === 'male' ? maleNames[dayIndex] : femaleNames[dayIndex];
        
        displayResult(akanName, dayName, gender);
    });
    
    // Display result
    function displayResult(akanName, dayName, gender) {
        resultContainer.innerHTML = `
            <h2>Your Akan Name is: <span class="highlight">${akanName}</span></h2>
            <p>You were born on a <strong>${dayName}</strong></p>
            <p><strong>${gender.charAt(0).toUpperCase() + gender.slice(1)}</strong> Akan name for ${dayName} is <strong>${akanName}</strong></p>
        `;
        resultContainer.classList.add('show');
        resultContainer.scrollIntoView({ behavior: 'smooth' });
    }
});