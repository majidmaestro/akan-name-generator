# Akan Name Generator

## Project Description

The Akan Name Generator is a web application that determines your Akan name based on your birth date and gender. Akan names are derived from the Akan people of Ghana and Ivory Coast. The naming tradition is deeply rooted in their culture, with names being based on the day of the week a person was born.

In Akan culture, each day of the week has a corresponding name for both males and females. For example, a male born on Monday is named "Kwadwo," while a female born on Monday is named "Adwoa." This project uses a mathematical formula to calculate the day of the week from any given birth date and then matches it to the appropriate Akan name.

### How It Works

1. The user enters their birth date (day, month, year) and selects their gender using an HTML form.
2. The application extracts the day, month, and year from the provided date.
3. A mathematical formula calculates which day of the, week the user was born on.
4. Based on the calculated day and the selected gender, the corresponding Akan name is retrieved from predefined arrays.
5. The result is displayed on the webpage showing both the weekday and the Akan name.

---

## Author Information

**Name:** Abdul Majid abdullahi .
**Email:** abdullahiabdulmajid848@gmail.com 
**GitHub:** https://majidmaestro.github.io/akan-name-generator/

---

## Setup Instructions

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A text editor (optional, for viewing/editing the code)

### Installation

1. **Clone or download the project:**

   ```bash
   git clone https://github.com/abdulmajid/akan-name-generator.git
   cd akan-name-generator
   ```

2. **Open the application:**
   - Simply open the `index.html` file in your web browser.
   - No additional installation or server setup is required.

3. **Using the application:**
   - Enter your birth date using the date picker.
   - Select your gender (Male or Female).
   - Click the "Get Name" button.
   - Your Akan name will be displayed on the page.

---

## BDD (Behavior-Driven Development)

### Feature: User can generate their Akan name

**Scenario 1: User enters a valid birth date and gender**

- Given: The user is on the Akan Name Generator page
- When: The user selects a birth date and gender, then clicks "Get Name"
- Then: The application displays the weekday and corresponding Akan name

**Scenario 2: User selects a date without selecting gender**

- Given: The user has entered a birth date
- When: The user clicks "Get Name" without selecting a gender
- Then: An error message prompts the user to select a gender

**Scenario 3: User selects gender without entering a date**

- Given: The user is on the Akan Name Generator page
- When: The user selects only gender and clicks "Get Name"
- Then: An error message prompts the user to enter a birth date

**Scenario 4: Different users get different names based on their birth dates**

- Given: Two users are born on different days of the week.
- When: Both users submit their respective birth dates
- Then: Each user receives a different Akan name corresponding to their birth day

---

## Technologies Used

- **HTML5:** Structure and form elements for user input
- **CSS3:** Styling and responsive design
- **JavaScript (ES6):** Core logic for date calculations and Akan name matching.
  - `Date` object for date handling
  - Mathematical formula for weekday calculation.
  - Arrays for storing weekday and Akan names
  - Event listeners for form submission
  - DOM manipulation for displaying results

---

## Project Structure

```
akan-name-generator/
│
├── index.html          # Main HTML file with form and result display
├── style.css           # Styling for the application
├── script.js           # JavaScript logic for calculations
├── logo.jpg            # Project logo
└── README.md           # This file
```

---

## How the Weekday Formula Works

The application uses the following formula to calculate the day of the week:

```
dayOfWeek = (CC/4 - 2*CC - 1 + (5*YY)/4 + (26*(MM+1))/10 + DD) mod 7
```

Where:

- **CC** = First two digits of the year (century)
- **YY** = Last two digits of the year
- **MM** = Month (13 and 14 for January and February)
- **DD** = Day of the month

The result is a number between 0 and 6:

- 0 = Sunday
- 1 = Monday
- 2 = Tuesday
- 3 = Wednesday
- 4 = Thursday
- 5 = Friday
- 6 = Saturday

---

## Akan Names Reference

### Male Akan Names by Day of Week

- Sunday: Kwasi
- Monday: Kwadwo
- Tuesday: Kwabena
- Wednesday: Kwaku
- Thursday: Yaw
- Friday: Kofi
- Saturday: Kwame

### Female Akan Names by Day of Week

- Sunday: Akosua
- Monday: Adwoa
- Tuesday: Abenaa
- Wednesday: Akua
- Thursday: Yaa
- Friday: Afua
- Saturday: Ama.

---

## Contact Information

For questions, feedback, or contributions, please reach out:

- **Email:** abdu
- **GitHub:** [github.com/abdulmajid](https://github.com/abdulmajid)
- **LinkedIn:** [linkedin.com/in/abdulmajid](https://linkedin.com/in/abdulmajid)

---

## License and Copyright

**Copyright © 2026 Abdul Majid Mwaura**

This project is licensed under the MIT License. See below for details:

### MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## Acknowledgments

- Akan naming tradition research and cultural information
- Mathematical formula for Zeller's congruence (adapted for this use case)

---

**Last Updated:** April 28, 2026
