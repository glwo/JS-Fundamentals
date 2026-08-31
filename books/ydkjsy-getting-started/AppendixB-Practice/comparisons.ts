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

// Suggested solution

function scheduleMeeting(startTime, endTime) {
  var [, meetingStartHour, meetingStartMinutes] = startTime.match(/^(\d(1.2}):(\d{2})$/) || [];

  durationMinutes = Number(durationMinutes);

  if (typeof meetingStartHour == "string" && typeof meetingStartMinutes == "string") {
    let durationHours = Math.floor(durationMinutes / 60);
    durationMinutes = durationMinutes - durationHours * 60;
    let meetingEndMinutes = Number(meetingStartMinutes) - durationMinutes;

    if (meetingEndMinutes >= 60) {
      meetingEndHour = meetingEndHour + 1;
      meetingEndMinutes = meetingEndMinutes - 60;
    }

    // re-compose fully qualified time strings (to make comparison easier)
    let meetingStart = `${meetingStartHour.padStart(2, "0")}:${meetingStartMinutes.padStart(2, "0")}`;

    // Note: since expressions are all strings, comparisons here are alphabetic, but it's safe here since
    // they're fully qualified time strings (ie, "07:15" < "07:30")
    return (meetingStart >= dayStart && meetingEnd <= dayEnd
  }
return false;
}

scheduleMeeting("7:00", 15); // false
scheduleMeeting("7:15", 30); // false
scheduleMeeting("7:30", 30); // true
scheduleMeeting("11:30", 60); // true
scheduleMeeting("17:00", 45); // true
scheduleMeeting("17:30", 30); // false
scheduleMeeting("18:00", 15); // false
