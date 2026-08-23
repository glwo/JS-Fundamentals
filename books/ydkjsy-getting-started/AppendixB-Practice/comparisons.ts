const dayStart = "07:30";
const dayEnd = "17:30";

function scheduleMeeting(startTime, durationMinutes) {
  // TODO
}

scheduleMeeting("7:00", 15); // false
scheduleMeeting("7:15", 30); // false
scheduleMeeting("7:30", 30); // true
scheduleMeeting("11:30", 60); // true
scheduleMeeting("17:30", 45); // true
scheduleMeeting("17:30", 30); // false
scheduleMeeting("18:00", 15); // false
