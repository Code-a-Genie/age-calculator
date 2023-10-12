const calculateBtn = document.querySelector('.submit')
calculateBtn.addEventListener('click', calculateAge);

const monthInput = document.getElementById('month-input');
const dayInput = document.getElementById('day-input');
const yearInput = document.getElementById('year-input');
const requiredErrors = document.querySelectorAll('.required-error');
const validDayError = document.querySelector('.valid-day-error');
  const validMonthError = document.querySelector('.valid-month-error');
  const validYearError = document.querySelector('.valid-year-error');
  const yearsResult = document.getElementById('years');
  const monthsResult = document.getElementById('months');
  const daysResult = document.getElementById('days');
  





// day validation
function validateDay(day){
    let month = monthInput.value;
    if (day === null || day === undefined || day === '') {
        for (const error of requiredErrors) {
            error.style.display = "block";
        }
        return false;
    }

    if(day < 1 || day > 31){
       validDayError.style.display = "block"
       return false;
    }
    if((month === 4 || month === 6 || month === 9 || month === 11) && day >30){
        validDayError.textContent = "Enter a valid day"  

    }
    if(monthInput === 2 && dayInput > 28){
        validDayError.textContent = "Enter a valid day" 
        return false;
    }
    return true;
}

// month validation
function validateMonth(month) {
    if (month === null || month === undefined || month === '') {
        for (const error of requiredErrors) {
            error.style.display = "block";
        }
        return false;
       
    }
    
    else if(month < 1 || month > 12){
        validMonthError.style.display = "block"
        return false;
    }
    return true;
}

//year validation

function validateYear(year){
    let currentDate = new Date()
    const currentYear = currentDate.getFullYear();
    if (year === null || year === undefined || year === '') {
        for (const error of requiredErrors) {
            error.style.display = "block";
        }
        return false;

    } 
    else if(year > currentYear){
        validYearError.style.display = "block"
        return false; 
    }
    return true;
}

function calculateAge(e){
    e.preventDefault();

   
    const month = parseInt(monthInput.value);
    let day = parseInt(dayInput.value);
    let year = parseInt(yearInput.value);

    validateDay(day)
    validateMonth(month)
    validateYear(year)

    if (!validateDay(day, month) || !validateMonth(month) || !validateYear(year)) {
        // Validation failed, do not proceed with calculations
        return;
    }


    


        const birthday = new Date (year, month -1, day)
        const currentDate = new Date()

        let ageDifference = currentDate-birthday

        let yearAge = Math.floor(ageDifference / 31556952000); // milliseconds per year
        ageDifference -= yearAge * 31556952000;

       const monthAge = Math.floor(ageDifference / 2629746000); // milliseconds per month
       ageDifference -= monthAge * 2629746000;

       const dayAge = Math.floor(ageDifference / 86400000); // milliseconds per day

       yearsResult.textContent = yearAge;

      monthsResult.textContent = monthAge;

      daysResult.textContent = dayAge;
    

}