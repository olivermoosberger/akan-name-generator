// Akan names arrays
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('akanForm');
    const resultContainer = document.getElementById('result');
    
        //  Calculate day of week  FORMULA
    function calculateDayOfWeek(day, month, year) {
        // INSTRUCTOR'S EXACT FORMULA:
        // d = ((CC/4 - 2×CC - 1) + (5×YY/4) + (26×(MM + 1)/10) + DD) mod 7
        
        // Step 1: Extract CC (century) and YY (year in century)
        let CC = Math.floor(year / 100);  // First two digits (19 for 1997)
        let YY = year % 100;              // Last two digits (97 for 1997)
        
        // Step 2: Calculate each part with integer division (Math.floor)
        let part1 = Math.floor(CC / 4) - (2 * CC) - 1;
        let part2 = Math.floor((5 * YY) / 4);
        let part3 = Math.floor((26 * (month + 1)) / 10);
        
        // Step 3: Combine parts and add the day
        let d = part1 + part2 + part3 + day;
        
        // Step 4: Apply modulus 7
        d = d % 7;
        
        // Step 5: Ensure result is positive (0-6)
        if (d < 0) {
            d += 7;
        }
        
        // d = 0 → Sunday, 1 → Monday, 2 → Tuesday, ..., 6 → Saturday
        return d;
    }
    
    // Test the formula (remove for final submission)
    function testFormula() {
        console.log("Testing formula with May 26, 1997:");
        let result = calculateDayOfWeek(26, 5, 1997);
        console.log("Day index:", result, "Day:", daysOfWeek[result]);
        console.log("Should be: 1 (Monday)");
        
        console.log("\nTesting other dates:");
        console.log("June 15, 1990:", calculateDayOfWeek(15, 6, 1990), "(should be 5 - Friday)");
        console.log("January 1, 2000:", calculateDayOfWeek(1, 1, 2000), "(should be 6 - Saturday)");
    }
    
    // Input validation
    function validateInput(day, month, year) {
        if (day < 1 || day > 31) {
            return "Day must be between 1 and 31";
        }
        
        if (month < 1 || month > 12) {
            return "Month must be between 1 and 12";
        }
        
        if (year < 1900 || year > 2100) {
            return "Year must be between 1900 and 2100";
        }
        
        // Check if date is valid
        const date = new Date(year, month - 1, day);
        if (date.getDate() !== day || date.getMonth() !== month - 1) {
            return "Invalid date";
        }
        
        return null; // No error
    }
    
    // Form submission handler
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload
        
        // Get user input
        const day = parseInt(document.getElementById('day').value);
        const month = parseInt(document.getElementById('month').value);
        const year = parseInt(document.getElementById('year').value);
        const gender = document.querySelector('input[name="gender"]:checked')?.value;
        
        // Validate inputs
        if (!gender) {
            alert("Please select your gender.");
            return;
        }
        
        const error = validateInput(day, month, year);
        if (error) {
            alert(error);
            return;
        }
        
        // CALCULATE using FORMULA
        const dayIndex = calculateDayOfWeek(day, month, year);
        const dayName = daysOfWeek[dayIndex];
        
        // Get Akan name based on gender
        let akanName;
        if (gender === 'male') {
            akanName = maleNames[dayIndex];
        } else {
            akanName = femaleNames[dayIndex];
        }
        
        // Display the result
        displayResult(akanName, dayName, gender);
    });
    
    // Display result function
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
    
    // Run test (remove this line for final submission)
    testFormula();
});