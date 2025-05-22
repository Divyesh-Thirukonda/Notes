// ***********************  CALENDAR WIDGET  *********************** //
function formatTimestamp(timestamp, endstamp) {
    const dateObj = new Date(timestamp);
  
    const hoursStart = dateObj.getHours();
    const minutesStart = dateObj.getMinutes();
  
    // Convert hours to 12-hour format and determine AM/PM
    const formattedHoursStart = hoursStart % 12 || 12;
    const periodStart = hoursStart < 12 ? 'AM' : 'PM';
  
    // Add leading zero for minutes
    const formattedMinutesStart = minutesStart < 10 ? '0' + minutesStart : minutesStart;
  
    // Calculate end time
    var myStampEnd = new Date(endstamp);
    var myDateStart = new Date(timestamp);
    const differenceInMinutes = Math.floor(Math.abs(myStampEnd - myDateStart) / (1000 * 60));
  
    const dateObjEnd = new Date(dateObj.getTime() + differenceInMinutes * 60 * 1000);
    const hoursEnd = dateObjEnd.getHours();
    const minutesEnd = dateObjEnd.getMinutes();
  
    // Convert hours to 12-hour format and determine AM/PM
    const formattedHoursEnd = hoursEnd % 12 || 12;
    const periodEnd = hoursEnd < 12 ? 'AM' : 'PM';
  
    // Add leading zero for minutes
    const formattedMinutesEnd = minutesEnd < 10 ? '0' + minutesEnd : minutesEnd;
  
    // Construct the formatted time string
    const formattedTime = `${formattedHoursStart}:${formattedMinutesStart} ${periodStart} - ${formattedHoursEnd}:${formattedMinutesEnd} ${periodEnd}`;
  
    return formattedTime;
  }
  function getDayAbbreviation(dayIndex) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeek[dayIndex];
  }
  
  var eventDayOfWeekAbbrv = "";
  
  var script = document.createElement('script');
  script.src = 'https://script.googleusercontent.com/macros/echo?user_content_key=vZ-y2tj9cqpRucX0Z0EQCR2QDhiBytjAXJhqwgLrO0U68yZyTeMvASUm7uToSUo5OR07rvityMppvq5JSkRj8wx06AV9OlsIm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnN-m9i9IrPvUvHcQEm5QVkspIbs4W1RlL6BVtYbiWQL2XSC7W709wbCJFFZWN-UJtw91CeNAzs__MlZcHFAoI340AC4A1dKiFQ&lib=MNAePv3as6RmFFvUuXPX_fQ5P-Idvl_o1';
  
  const urlCAL = script.src;
  fetch(urlCAL)
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData);
      const calendarContainer = document.querySelector('.calendar');
      var myCalCounter = 0;
      for (var eventID in jsonData) {
        if (myCalCounter==0) {
          retNextTaskArduino = jsonData[eventID].title;
        }
        myCalCounter++;
        var eventDetails = jsonData[eventID];
        eventDayOfWeekRaw = new Date(eventDetails.startTime);
  
        if (eventDayOfWeekAbbrv != getDayAbbreviation(eventDayOfWeekRaw.getDay())) {
          var dayOfWeekElem = document.createElement("div");
          dayOfWeekElem.className = "dayOfWeekName";
          dayOfWeekElem.textContent = getDayAbbreviation(eventDayOfWeekRaw.getDay());
          calendarContainer.appendChild(dayOfWeekElem);
        }
        eventDayOfWeekAbbrv = getDayAbbreviation(eventDayOfWeekRaw.getDay());
  
        var timeSlotDiv = document.createElement("div");
        timeSlotDiv.className = "time-slot";
        timeSlotDiv.textContent = formatTimestamp(eventDetails.startTime, eventDetails.endTime);
        var activityDiv = document.createElement("div");
        activityDiv.className = "activity"
        var verticalCapsuleDiv = document.createElement("div");
        verticalCapsuleDiv.className = "vertical-capsule";
  
  
        if (eventDetails.color === "") {
          // Empty string, assume color 1
          var colorClass = "color-1";
          verticalCapsuleDiv.classList.add(colorClass);
        } else {
          // Non-empty string, use color based on the color number
          var colorClass = "color-" + eventDetails.color;
          verticalCapsuleDiv.classList.add(colorClass);
        }
  
        if (eventDetails.location != "") {
          timeSlotDiv.textContent += " @ " + eventDetails.location;
        }
  
        calendarContainer.appendChild(timeSlotDiv);
        activityDiv.appendChild(verticalCapsuleDiv);
        activityDiv.appendChild(document.createTextNode(eventDetails.title));
        calendarContainer.appendChild(activityDiv);
      }
    })
    .catch(error => console.error(`Failed to fetch data: ${error.message}`));
  