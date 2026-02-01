# Akan Name Generator
## project description
A web application that calculates your day of birth and assigns you a traditional Ghanaian Akan name based on your gender.


## Live Demo
🌐 **[View Live Site](https://olivermoosberger.github.io/akan-name-generator/)**

## Author Information
**Oliver Moosberger**  
- Student ID: oliver moosberger  
- Course: software development  
- Email: oliver.moosberger@student.moringaschool.com

## Setup Instructions
### Local Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/olivermoosberger/akan-name-generator.git

## Features
- 📅 **Date Validation**: Checks if entered date is valid
- 🔢 **Day Calculation**: Calculates day of week from birth date
- 🏷️ **Akan Name Assignment**: Provides appropriate Akan name based on gender
- 📱 **Responsive Design**: Works on all device sizes
- ⚡ **Instant Results**: Real-time calculation and display

## How to Use
1. Enter your birth date:
   - Day (1-31)
   - Month (1-12)
   - Year (e.g., 1990)
2. Select your gender (Male or Female)
3. Click "Get Akan Name"
4. View your Akan name and day of birth
## BDD (Behavior-Driven Development)
### Scenario 1: Date Validation
**Given** user enters invalid date  
**When** they submit form  
**Then** show appropriate error message

### Scenario 2: Name Calculation  
**Given** valid date and gender  
**When** form submitted  
**Then** display correct Akan name
## Akan Names Reference Table
| Day of Week | Male Name | Female Name |
|-------------|-----------|-------------|
| Sunday      | Kwasi     | Akosua      |
| Monday      | Kwadwo    | Adwoa       |
| Tuesday     | Kwabena   | Abenaa      |
| Wednesday   | Kwaku     | Akua        |
| Thursday    | Yaw       | Yaa         |
| Friday      | Kofi      | Afua        |
| Saturday    | Kwame     | Ama         |

## Technical Implementation
### Formulas Used
The day of week is calculated using the formula:
