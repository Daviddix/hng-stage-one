const dayOfTheWeekElement = document.querySelector("[data-testid='currentDayOfTheWeek']")

const UTCTimeElement = document.querySelector("[data-testid='currentUTCTime']")

const daysOfTheWeekArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const newToday = new Date

const dayOfTheWeek = daysOfTheWeekArray[newToday.getDay()]


function updateUTCTime(){
    const today = new Date

    const UTCTime = today.toUTCString()
    UTCTimeElement.innerHTML = UTCTime
}


dayOfTheWeekElement.innerHTML = dayOfTheWeek


setInterval(() => {
    updateUTCTime()    
}, 1000);