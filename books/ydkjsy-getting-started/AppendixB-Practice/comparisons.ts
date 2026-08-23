const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
  const [hoursRaw, minutesRaw] = startTime.split(":");

  const [hours, minutes] = [Number(hoursRaw), Number(minutesRaw)];

  if (hours < 7) {
    console.log(false);
    return false;
  }

  if (hours === 7 && Number(minutes) < 30) {
    console.log(false);
    return false;
  }

  if (hours > 17) {
    console.log(false);
    return false;
  }

  if (hours === 17 && minutes > 45) {
    console.log(false);
    return false;
  }

  let additionalHours = 0;
  let additionalMinutes = 0;
  additionalHours += Math.floor(durationMinutes / 60);
  additionalMinutes += durationMinutes % 60;

  if (hours + additionalHours > 17) {
    console.log(false);
    return false;
  }

  if (hours + additionalHours === 17 && minutes + additionalMinutes > 45) {
    console.log(false);
    return false;
  }

  console.log(true);
  return true;
}

scheduleMeeting("7:00", 15); // false
scheduleMeeting("7:15", 30); // false
scheduleMeeting("7:30", 30); // true
scheduleMeeting("11:30", 60); // true
scheduleMeeting("17:00", 45); // true
scheduleMeeting("17:30", 30); // false
scheduleMeeting("18:00", 15); // false
