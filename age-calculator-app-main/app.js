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

// day validation
function validateDay(day){
    let month = monthInput.value;
    if (day === null || day === undefined || day === '') {
        for (const error of requiredErrors) {
            error.style.display = "block";
        }
        return false;
    }

    else if(day < 1 || day > 31){
       validDayError.style.display = "block"
       return false;
    }
    else if((month === 4 || month === 6 || month === 9 || month === 11) && day >30){
        validDayError.style.display = "block"  
        return false;
    }
    else if(monthInput===2 && dayInput > 28){
        validDayError.style.display = "block" 
        return false;
    }
    return true;
}

//year validation

function validateYear(year){
    let currentDate = new Date()
    let currentYear = currentDate.getFullYear();
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

   
    let month = monthInput.value;
    let day = dayInput.value;
    let year = yearInput.value;

    validateDay(day)
    validateMonth(month)
    validateYear(year)

    if (!validateDay(day) || !validateMonth(month) || !validateYear(year)) {
        // Validation failed, do not proceed with calculations
        return;
    }


    let currentDate = new Date()
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate()

    let yearAge = currentYear - year

    let monthAge = currentMonth - month;

    let dayAge = currentDay - day;

    yearsResult.textContent = yearAge;

    monthsResult.textContent = monthAge;

    daysResult.textContent = dayAge;


    

}