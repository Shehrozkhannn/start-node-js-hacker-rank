//CONVERT 12 hour AM/PM format in to military (24 hours) time format.

function timeConversion (time) {
  period = time.slice(-2);
  let [hours, minutes , seconds] = time.slice(0,-2).split(":").map(Number);

  if(period === "AM" && hours === 12){
    hours = 0;
  } else if (period === "PM" && hours !== 12){
    hours += 12;
  }

  return `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
}

console.log(timeConversion('12:01:00AM'));