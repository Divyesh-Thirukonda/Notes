const quotes = [
  "I don't know why these gopis tie me",
  "Never lie to yourself",
  "I don't need no sanskrit, just give me my transcript",
  "No one chooses to make a mistake",
  "Just because you decide something one day doesn't mean you have to stick with it forever. Consider why you made that decision. If the circumstances haven't changed, then choose loyalty because other decisions depend on it.",
  "When something huge changes your entire life, remember that you are still you. The change is now part of your identity forever.",
  "You not that guy 'cause I'm him",
  "Your girl not at home, she at the night show",
  "Oh I believed in myself, can you see what I'm doing",
  "Man man mandela dela",
  "Why did we fall that evening?",
  "For this life I cannot change",
  "Icy love, icy like a hockey puck",
  "XO",
  "I've given up too much to stop now",
  "Ever since I was a kid, I been legit",
  "If I was you I would cut up my wrist (dumb bih-)",
  "XO tatted all over her body",
  "My social meter ran out so you know i'm finna dip",
  "I'm geekin way too hard yea I'm finna glitch",
  "We all have potential im just caching in my chips",
  "I aint even gon get mad, I'm young black and rich",
  "I don't know why these hoes can't stand me",
  "I did it for love",
  "Better late than never",
  "Look in my eyes, tell me a tale. Do you see the road, the map to my soul?",
  "I know you know you think you different",
  "When the night calls",
  "The career's more at stake when you in your prime",
  "I been flyin' out of town for some peace of mind",
  "I been focused on the future, never on right now",
  "I'm tryna put you in the worst mood",
  "I'm an educated fool with money on my mind",
  "Everybody's running, but half of them aint looking",
  "Tell me why are we so blind to see, that the ones we hurt are you and me?",
  "Side bih outta your league too",
  "Everybody hoping they could be the one. I was born to run, I was born for this",
  "I don't want a valentine i do want valentino",
  "She just can't seem to keep her knee closed",
  "Do it for life",
  "So who's really the villain?",
  "When you're gonna stop breaking my heart",
  "She calls my phone up but I told her, \"I'm a loner\"",
  "We hit the highway, 3-5, with my whole foot on the dash",
  "But on my radar, I've got some nerve to play hard",
  "I waited for my chance, but playboys, we don't dance",
  "Speedin' car, goin' ninety in the rain",
  "Then I'm reminded, love don't come 'til you find it",
  "Everybody wants to rule the world",
  "I like that you're lonely, lonely like me, I could be lonely with you",
  "Life is not a love song that we like",
  "If I want her I'ma steal her",
  "Man, I f-ckin love this life",
  "Everything I say is the truth",
  "Addicted, don't know what the f-ck I'm on",
  "So if you don't know by now then you should probably get familiar",
  "I know that you heard me",
  "But you don't want the same thing",
  "Hmm, well, two can play that game",
  "So I'm chillin' with my girlfriend",
  "But she not my real girlfriend",
  "I was wrong, but would you have listened to you?",
  "I'm paranoid that these girls want somethin' from me",
  "I'm gonna do what I've got to do",
  "I like me better when I'm with you",
  "Wonder if you look both ways when you cross my mind",
  "If she catch me cheatin', I will never tell her, 'Sorry'",
  "That's just not my problem",
  "I tryna find the words to describe this girl without being disrespectful",
  "We don't talk anymore. What was all of it for?",
  "I just heard you found the one you've been looking for. I wish I would have known that wasn't me.",
  "Even after all this time, I still wonder why I can't move on, just the way you did so easily",
  "I know that dress is karma, perfume regret",
  "You're just making sure I'm never gettin' over you",
  "Can't we just talk? Talk about where we're going?",
  "We're just reckless kids trying to find an island in the flood",
  "Somewhere far along this road he lost his soul to a woman so heartless",
  "And it's all because of you",
  "You say we're just friends but I swear when nobody's around",
  "Bihhes love the 'Gram",
  "No more countin' dollars, we'll be countin' stars",
  "I've been losin' sleep dreamin' about the things that we could be",
  "Everything that kills me makes me feel alive",
  "Make that money, watch it burn",
  "It could be one of those nights, where we don't turn off the lights",
  "Eh, eheu, eheu",
  "If you close your eyes does it almost feel like nothing changed at all?",
  "How am I gonna be an optimist about this?",
  "I think your love would be too much",
  "Someone took a big L, don't know how that felt",
  "The water's getting colder, let me in your ocean, swim",
  "Now I gotta wait for the green light. I don't wanna wait for no green light",
  "Luckily I float at insane heights",
  "We could make it if we tried; just the two of us",
  "I could say I never dare to think about in that way but, I would be lying",
  "I watch the moon, let it run my mood",
  "I always know the truth, but I just can't say it to you",
  "You showed me love when I wasn't feeling it",
  "The house don't fall when the bones are good",
  "Oh darling of mine, where have you been?",
  "You're the reason I believe in fate",
  "Love isn't random we are chosen",
  "Secrets I have held in my heart, are harder to hide than I thought",
  "Me gusta marihuana, me gustas tu",
  "Oh take me back, to the night we met",
  "When you look at me like that, my darling, what did you expect?",
  "Oh, Ophelia, Heaven help the fool who falls in love",
  "I wish I could pretend I didn't need ya",
  "You say we're just friends, but friends don't know the way you taste",
  "How perfect could this be",
  "I miss you more than life",
  "We said we won't and we said we don't but we did. Is it too late to undo?",
  "But no matter what we call it, when we call it off it's gon hurt the same",
  "We watched a movie. Please don't ask what it's about, you're gonna lose me",
  "We're saying that we're homies but we know that's not true",
  "Tell you i'm yours for life, and tell your friend she's next in line.",
  "You touched me and it's almost like we knew, that we will be history between us two",
  "But there's no way it's not going there, with the way that we're looking at each other",
  "I wanna ruin our friendship. We should be lovers instead.",
  "I thought that I was over you, but here I am again.",
  "I tried to make the most of everyday but now the years just seem misspent",
  "We could have been together, all you had to say was when.",
  "And though I wanted so much more I guess you'll always be my friend.",
  "What might have been",
  "I don't wanna be another one",
  "Paying for the things I never done",
  "Doubled that shit then I tripled again",
  "This that life we did not choose",
  "Been on this since we was kids",
  "Won't cross my heart, don't wanna die",
  "Hope we make it outta here",
  "You say you love me, don't you lie",
  "Flawless",
  "Smoke some drink some pop one",
  "Worked so hard forgot how to vacation",
  "The ship is safe at shore, but that's not what it's for",
  "Set your ego aside (sometimes... I am better than you after all)",
  "Don't file earlier than you have to",
  "NEVER make a decision under intense emotions, because man decides with that emotion instead of logic.",
  "DO one thing at a time",
  "Set your own goals, win your own game.",
  "People hear what they want to hear",
  "Ego will have you crying over a close door that had nothing behind it",
  "Sometimes we don't want to heal because the pain is the last link to what we've lost",
  "When you expect nothing, you gain everything",
  "Let yesterday be yesterday. Prepare for tomorrow, live for today.",
  "Take yourself seriously",
  "Trust yourself",
  "1 winner, 42 losers. I eat losers for breakfast.",
  "You get what you paid for. You want more? Do more.",
  "If you use old bricks, you'll build the same house.",
  "A leetcode a day keeps the unemployment away",
  "True victory is conquering oneself",
  "The mind is both your greatest friend and enemy",
  "Perform your duties selflessly, without attachment to outcomes",
  "True victory is conquering oneself",
  "The mind is both your greatest friend and enemy",
  "Perform your duties selflessly, without attachment to outcomes",
  "In the face of adversity, remember righteousness",
  "Wisdom is the greatest treasure",
  "Control your desires, and you control your destiny",
  "Never abandon your dharma, no matter the cost",
  "The path of virtue is always the hardest but most rewarding",
  "A warrior's true strength is in his ability to forgive",
  "Pride leads to downfall, humility leads to strength",
  "Inaction in times of duty is a greater sin than failure",
  "Life is uncertain; focus on what you can control",
  "Even the mightiest are bound by fate",
  "Success follows those who never compromise on their values",
  "The greatest battle is within the self",
  "True friendship is rooted in trust and sacrifice",
  "Every challenge is an opportunity for self-discovery",
  "Time is a force that no one can escape",
  "No one is ever truly defeated unless they give up",
  "The fruit of knowledge ripens in the soil of experience",
  "The soul is eternal; it never dies.",
  "One's true nature is revealed in times of crisis.",
  "The mind can be controlled through discipline.",
  "True strength lies in the ability to stay calm in chaos.",
  "A man is known by his actions, not his words.",
  "Forgiveness is the key to liberation.",
  "A person's character is shaped by their choices.",
  "A noble heart never seeks revenge.",
  "Wisdom is the light that guides us through darkness.",
  "Fear is born from ignorance; courage from knowledge.",
  "True peace comes from within, not from external circumstances.",
  "The right action at the right time is more powerful than all the strength in the world.",
  "Don't worry about what others think of you.",
  "Courage is not the absence of fear, but acting in spite of it.",
  "Attachment to the fruits of action leads to suffering.",
  "Victory is hollow if it's not achieved through righteousness.",
  "Knowledge is a weapon stronger than any sword.",
  "Every action has a consequence.",
  "Death is but a transition, not an end.",
  "One must always act with a pure heart.",
  "A righteous king is one who serves his people.",
  "The past cannot be changed; only the future matters.",
  "The greatest warriors are those who fight for justice.",
  "True friendship is never bound by circumstances.",
  "Material wealth is fleeting; true wealth is inner peace.",
  "Those who betray others will eventually betray themselves.",
  "Be mindful of your speech, for words can hurt deeply.",
  "It is better to fail in righteousness than to succeed in evil.",
  "The truth always comes to light, no matter how long it takes.",
  "Time is the ultimate force; all things change with it.",
  "Humility is the true mark of wisdom.",
  "Strive to be virtuous, not perfect.",
  "Life is a journey; the destination is less important than the lessons along the way.",
  "The measure of a person is not in their victories, but in how they handle defeat.",
  "Those who live by the sword often perish by it.",
  "Control your senses, and you control your destiny.",
  "The wise see unity in diversity.",
  "Be honest with yourself, for self-deception is the greatest folly.",
  "The weak are not those who fail, but those who never try.",
  "The strongest bonds are forged in adversity.",
  "Act with intention, but remain detached from outcomes.",
  "Injustice anywhere is a threat to justice everywhere.",
  "Kindness is a strength, not a weakness.",
  "Choose your battles wisely; not every hill is worth dying on.",
  "The seeds of today are the fruits of tomorrow.",
  "A pure heart is never alone.",
  "The universe rewards patience and persistence.",
  "A lie can only last so long; the truth endures forever.",
  "The future is unwritten; we create it with every decision.",
  "Inner peace is the highest form of wealth.",
  "The wise adapt to circumstances, like water flowing around obstacles.",
  "Even the smallest acts of kindness ripple out into the world.",
  "Do not underestimate the power of a single thought or action.",
  "Resilience is the key to surviving life's storms.",
  "True leadership is serving others, not commanding them.",
  "Faith and doubt are two sides of the same coin; embrace both.",
  "Honor is more valuable than gold.",
  "When in doubt, choose the path of kindness.",
  "Simplicity is the essence of beauty.",
  "The greatest joy comes from helping others.",
  "Integrity is doing the right thing, even when no one is watching.",
  "The soul's journey is eternal; learn from each step.",
  "Strength comes from unity, not division.",
  "Be the change you wish to see in the world.",
  "The only constant in life is change; embrace it.",
  "Learn from the past, but don't dwell in it.",
  "Every sunrise is a chance to begin again.",
  "The hardest battles are fought within oneself.",
  "Do not let the noise of others drown out your inner voice.",
  "Life's true purpose is to grow and evolve.",
  "The most valuable treasures are found within.",
  "Kindness is the language that everyone understands.",
  "True power is in controlling one's own mind.",
  "The only way to fail is to stop trying.",
  "Success is a journey, not a destination.",
  "Love is the strongest force in the universe.",
  "True freedom comes from letting go of fear.",
  "You are the creator of your own destiny.",
  "Be grateful for the lessons that challenges bring.",
  "The universe conspires to help those who follow their dreams.",
  "Happiness is not a goal; it is a byproduct of a life well-lived.",
  "Your thoughts shape your reality; choose them wisely.",
  "The greatest gift you can give someone is your time.",
  "A life of purpose is a life of fulfillment.",
  "Every soul you meet is a teacher.",
  "Do not fear failure; fear not trying.",
  "The journey is as important as the destination.",
  "Live in the moment, for it is all we truly have.",
  "Trust the timing of your life.",
  "Be true to yourself, for authenticity is your greatest strength.",
  "The world is a reflection of your inner state; change within to change without."
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}


document.getElementById("openVSCode").addEventListener("click", function () {
  // chrome.runtime.sendMessage({ action: "open_vscode" });
  // OK SO THAT DOESN'T WORK SO I HAD TO MAKE MY OWN PROTOCOL TO OPEN TS (ts = this)

  window.location.href = "divy-launcher://d";
});


// @echo off
// setlocal

// :: Remove "vscode-launcher://" from the input URL
// set url=%1
// set url=%url:vscode-launcher://=%

// :: If no specific file/folder is provided, open the default Notes folder
// if "%url%"=="" set url=C:\Users\Divyesh\Downloads\Notes

// :: Open VS Code with the specified file or folder
// start "" "C:\Users\Divyesh\AppData\Local\Programs\Microsoft VS Code\Code.exe" "%url%"

// endlocal



// @echo off
// set url=%1
// set url=%url:vscode-launcher://=%
// start "" "C:\Users\Divyesh\AppData\Local\Programs\Microsoft VS Code\Code.exe" "%url%"



// @echo off
// setlocal

// :: Remove "vscode-launcher://" from the input URL
// set url=%1
// set url=%url:vscode-launcher://=%

// :: If no specific file/folder is provided, open the default Notes folder
// if "%url%"=="" set url=C:\Users\Divyesh\Downloads\Notes

// :: Check if the path is a directory
// if exist "%url%\*" (
//     echo Opening folder: %url%
//     start "" "C:\Users\Divyesh\AppData\Local\Programs\Microsoft VS Code\Code.exe" "%url%"
// ) else (
//     echo Opening file: %url%
//     start "" "C:\Users\Divyesh\AppData\Local\Programs\Microsoft VS Code\Code.exe" --new-window "%url%"
// )

// endlocal

document.getElementById("openVSCode").addEventListener("click", function () {
  chrome.runtime.sendNativeMessage(
      "com.yourcompany.vscode_launcher", // Native application ID
      { action: "open_vscode" }, // Message to the native app
      function (response) {
          if (chrome.runtime.lastError) {
              console.error("Error:", chrome.runtime.lastError.message);
          } else {
              console.log("VS Code launch response:", response);
          }
      }
  );
});



// ***********************  CALENDAR WIDGET  *********************** //
let firstEventName = "";

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
    calendarContainer.innerHTML = '';

    var quote = document.createElement("div");
    quote.className = "time-slot";
    quote.textContent = getRandomQuote();
    quote.style.fontStyle = 'italic';
    calendarContainer.appendChild(quote);

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
      activityDiv.addEventListener('dblclick', () => {
          window.location.href = 'https://calendar.google.com/calendar/u/0/r/week';
      });
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

      if (firstEventName === "") {
        firstEventName = eventDetails.title;
      }
    }
  })
  .catch(error => console.error(`Failed to fetch data: ${error.message}`));





// ***********************  SPOTIFY WIDGET  *********************** //
const CLIID = "6122852fc6204d96aa75183f89110d90";
const CLISEC = "0734938f351c47da8fd804c367fbc06b";
const redirect_uri = 'chrome-extension://ikjipnaemppnjilpbjjoeppflicchhld/newertab.html';

// Redirect user to Spotify login if no tokens found
function redirectToSpotifyLogin() {
  console.log("Redirecting to Spotify login... redirectToSpotifyLogin()");

  const scope = 'user-read-private user-read-currently-playing';
  const authUrl = 'https://accounts.spotify.com/authorize?' +
    'response_type=code' +
    '&client_id=' + encodeURIComponent(CLIID) +
    '&scope=' + encodeURIComponent(scope) +
    '&redirect_uri=' + encodeURIComponent(redirect_uri);

  // window.location.href = authUrl;
  window.open(authUrl, '_blank');
}

// Exchange authorization code for tokens
async function getTokensFromCode(code) {
  console.log("Getting tokens from code... getTokensFromCode()");
  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(CLIID + ':' + CLISEC)
    },
    body: new URLSearchParams({
      code: code,
      redirect_uri: redirect_uri,
      grant_type: 'authorization_code'
    })
  });

  const data = await result.json();
  if (!data.error) {
    console.log("Tokens received successfully from getTokensFromCode().");
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('refresh_token', data.refresh_token);
  } else {
    console.log("Failed to get tokens from getTokensFromCode().");
  }
  return data;
}

// Use refresh token to get new access token
async function refreshAccessToken() {
  console.log("Refreshing access token... refreshAccessToken()");

  const refresh_token = localStorage.getItem('refresh_token');
  if (!refresh_token) {
    console.log("No refresh token found. Redirecting to Spotify login... refreshAccessToken()");
    redirectToSpotifyLogin();
    return;
  } else {
    console.log("Refresh token found. Continuing... refreshAccessToken()");
  }

  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(CLIID + ':' + CLISEC)
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
      client_id: CLIID
    }),
  });

  const data = await result.json();
  console.log(data);
  if (!data.error) {
    console.log("Access token refreshed successfully from refreshAccessToken().");
    localStorage.setItem('access_token', data.access_token);
    if (data.refresh_token) localStorage.setItem('refresh_token', data.refresh_token);
  } else {
    console.log("Failed to refresh access token from refreshAccessToken().");
    redirectToSpotifyLogin();
  }
  return data;
}

// Main function to check and ensure token is ready
async function ensureAuthenticated() {
  console.log("Ensuring authentication... ensureAuthenticated()");
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  if (code) {
    console.log("Authorization code found. Getting tokens from code... ensureAuthenticated()");
    await getTokensFromCode(code);
    window.history.replaceState({}, document.title, redirect_uri); // Clean up URL

    
    // Auto-close tab if it was a login-only tab
    setTimeout(() => {
      // location.reload();
      window.close();
    }, 500);
    return;

  }

  let token = localStorage.getItem('access_token');

  // Try API call with existing token
  if (token) {
    console.log("Access token found. Checking Spotify playback... ensureAuthenticated()");
    const response = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });

    // If unauthorized, try refreshing
    if (response.status === 401) {
      console.log("Access token expired or unauthorized. Refreshing... ensureAuthenticated()");
      const refreshResult = await refreshAccessToken();
      token = refreshResult.access_token;
    } else {
      console.log("Access token valid. Continuing... ensureAuthenticated()");
    }
  } else {
    console.log("No access token found. Redirecting to Spotify login... ensureAuthenticated()");
    await refreshAccessToken();
  }
}



ensureAuthenticated();




var retNextTaskArduino = "";

let port;
async function connect() {
  var retWeather = "";
  const currentTime = new Date();
  const retTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  const retDate = currentTime.toLocaleDateString(undefined, options);
  


  navigator.geolocation.getCurrentPosition(function (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // Call the OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5e5cbad51669771e81f86a942df275dd&units=imperial`)
      .then(response => response.json())
      .then(data => {
        // Extract relevant weather information
        const weatherKind = data.weather[0].main;
        const city = data.name;
        const tempHigh = data.main.temp_max;
        const tempLow = data.main.temp_min;
        const temp = data.main.temp;

        retWeather = `${temp}F in ${city}`;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  });


  try {
    port = await navigator.serial.requestPort({ baudRate: 9600 });
    console.log(retWeather);
    console.log(retTime);
    console.log(retDate);
    console.log(retNextTaskArduino);
    await port.open({ baudRate: 9600 });
    if (port) {
      const writer = port.writable.getWriter();
      console.log(writer);
      const data = new TextEncoder().encode(songTitle+"`"+songArtist+"/"+retTime+"@"+retDate+"^"+retWeather+"*"+retNextTaskArduino+" ");
      await writer.write(data);
      writer.releaseLock();
    }
  } catch (error) {
    console.error('Error connecting to serial port:', error);
  }
}

const connectButton = document.getElementById('connectButton');
connectButton.addEventListener('click', connect);


var songTitle = "";
var songArtist = "";
var songImgURL = "";

let lastTrackId = null;
let isShowingRandom = false;

// function to remove anything from " - " onwards. Ex. Link Up - Hurry -> Link Up
function removeAfterDash(str) {
  const dashIndex = str.indexOf('- ');
  return dashIndex !== -1 ? str.substring(0, dashIndex) : str;
}

async function checkSpotifyPlayback() {
  const token = localStorage.getItem('access_token');

  try {
    const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: { 'Authorization': 'Bearer ' + token }
    });

    if (res.status === 204 || res.status === 202 || res.status === 404) {
      // No active playback
      if (!lastTrackId && !isShowingRandom) {
        await displayRandomTrack(token);
        isShowingRandom = true;
      }
      return;
    }

    // animateSpotifyBounce();
    
    // setInterval(() => {
    //   spotifyScale = Math.random() * 5;
    // }, 200);


    const data = await res.json();
    if (!data || !data.item) return;

    const currentTrackId = data.item.id;

    // Only update if the song has changed or was random before
    if (currentTrackId !== lastTrackId || isShowingRandom) {
      lastTrackId = currentTrackId;
      isShowingRandom = false;

      updateSpotifyWidget(
        data.item.name,
        data.item.artists[0].name,
        data.item.album.images[0].url
      );
    }

  } catch (err) {
    console.error("Error checking playback:", err);
  }
}

// Start watching
checkSpotifyPlayback(); // Initial run
setInterval(checkSpotifyPlayback, 5000); // Re-check every 5 seconds



// 1: get first instance of title in the playlist folder (the one that is playing)
// 2: if it is not found, run python audio.py https://open.spotify.com/track/6PCUP3dWmTjcTtXY02oFdT

// 3: run audio2.py with whatever filename we have, skip to the timestamp (doubled because its slowed?), and listen to the output of that file (it will be a float between 1 and 5, which we will use to update the global variable)
// 4: console log to make sure it is working
// 5: update css to bounce resize it to the float value (1-5)



async function displayRandomTrack(token) {
  // 1. Get user's playlists
  const playlistsRes = await fetch("https://api.spotify.com/v1/me/playlists", {
    headers: { 'Authorization': 'Bearer ' + token }
  });

  const playlistsData = await playlistsRes.json();
  if (!playlistsData.items.length) return;

  const randomPlaylist = playlistsData.items[Math.floor(Math.random() * playlistsData.items.length)];

  // 2. Get tracks from that playlist
  const tracksRes = await fetch(`https://api.spotify.com/v1/playlists/${randomPlaylist.id}/tracks`, {
    headers: { 'Authorization': 'Bearer ' + token }
  });

  const tracksData = await tracksRes.json();
  const trackItems = tracksData.items.filter(item => item.track); // filter out nulls
  if (!trackItems.length) return;

  const randomTrack = trackItems[Math.floor(Math.random() * trackItems.length)].track;

  updateSpotifyWidget(
    randomTrack.name,
    randomTrack.artists[0].name,
    randomTrack.album.images[0].url
  );
}

function updateSpotifyWidget(title, artist, imgUrl) {
  document.querySelector('.spotifyTitle').textContent = removeAfterDash(title.replace(/\s*\(.*?\)\s*/g, "")).trim();
  document.querySelector('.spotifyArtist').textContent = artist;
  
  const spotifySquareElement = document.querySelector('.spotifySquare');
  spotifySquareElement.style.background = `url("${imgUrl}") center/cover no-repeat`;

  const spotifySource = document.querySelector('.sourceImage');
  spotifySource.src = imgUrl;
}

// ***********************  BOUNCE CARD  *********************** //
let spotifyScale = 2.5;

const spotifySquare = document.querySelector('.spotifySquare');

function animateSpotifyBounce() {
  if (!spotifySquare) return;

  const normalizedScale = Math.max(Math.min(spotifyScale / 2, 1), .5); // 2.5 → scale(1), 5 → scale(2), etc.
  const bounce = 0.05 * Math.sin(Date.now() / 100); // subtle bounce wave
  const finalScale = Math.max(0.2, normalizedScale + bounce); // ensure it's never too small

  spotifySquare.style.transform = `scale(${finalScale})`;
  requestAnimationFrame(animateSpotifyBounce);
}



// ***********************  GET TINT COLOR  *********************** //

var myTINT = "";

const img = document.querySelector('.sourceImage');
img.crossOrigin = 'Anonymous';
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// When the image is loaded, calculate the average RGB values
img.onload = function() {
  console.log("U");    
    // Draw the image on the canvas
    context.drawImage(img, 0, 0, img.width, img.height);

    // Get the image data
    var imageData = context.getImageData(0, 0, img.width, img.height).data;
    
    var yellow = 0;
    var purple = 0;
    var cyan = 0;
    var blue = 0;
    var red = 0;
    var green = 0;

    // Loop through each pixel and accumulate RGB values
    for (var i = 0; i < imageData.length; i += 4) {
      pixR = imageData[i];     // Red channel
      pixG = imageData[i + 1]; // Green channel
      pixB = imageData[i + 2]; // Blue channel

      majR = pixR > 170;
      majG = pixG > 170;
      majB = pixB > 170;

      if (majR && majG && !majB) {
        yellow++;
      } else if (majR && majB && !majG) {
        purple++;
      } else if (majB && majG && !majR) {
        cyan++;
      } else if (majB && !majG && !majR) {
        blue++;
      } else if (majR && !majB && !majG) {
        red++;
      } else if (majG && !majR && !majB) {
        green++;
      }
      
    }

    const colors = [
      { name: 'yellow', value: yellow },
      { name: 'purple', value: purple },
      { name: 'cyan', value: cyan },
      { name: 'blue', value: blue },
      { name: 'red', value: red },
      { name: 'green', value: green },
    ];
  
    // Find the object with the maximum value
    const maxColor = colors.reduce((max, color) => (color.value > max.value ? color : max), colors[0]);
    myTINT = maxColor.name;
    var targCol = "";
    if (myTINT == 'green') {
      targCol = "rgba(17, 200, 0, 0.15)";
    }
    if (myTINT == 'blue') {
      targCol = "rgba(13, 0, 200, 0.15)";
    }
    if (myTINT == 'cyan') {
      targCol = "rgba(0, 177, 200, 0.15)";
    }
    if (myTINT == 'purple') {
      targCol = "rgba(93, 0, 200, 0.15)";
    }
    if (myTINT == 'yellow') {
      targCol = "rgba(185, 127, 0, 0.15)";
    }
    if (myTINT == 'red') {
      targCol = "rgba(200, 0, 0, 0.15)";
    }

    if (document.querySelector('.sourceImage').src == "https://i.scdn.co/image/ab67616d0000b273600adbc750285ea1a8da249f") {
      targCol = "rgba(200, 0, 0, 0.15)";
    }
    

    var tintElem = document.querySelector('.tint');
    tintElem.style.background = targCol;
    document.querySelector('.spotifySquare').style.boxShadow = "0 8px 32px 0 " + targCol;

    console.log(maxColor.name);
};


    



/*



// ***********************  DAYS OF WORK  *********************** //

setTimeout(function() {
    // do something after 1000 milliseconds

class1 = (document.getElementById("note1").value);
class2 = (document.getElementById("note2").value);
class3 = (document.getElementById("note3").value);
class4 = (document.getElementById("note4").value);
class5 = (document.getElementById("note5").value);
class6 = (document.getElementById("note6").value);
class7 = (document.getElementById("note7").value);
classes = [class1, class2, class3, class4, class5, class6, class7];

function extractWorkDays(inputText) {
    const lines = inputText.split('\n');
    const workDays = new Set();
  
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      const matches = line.match(/\(([^)]+)\)/);
  
      if (matches && matches[1]) {
        const days = matches[1].split('/');
        days.forEach(day => {
          workDays.add(day.trim());
        });
      }
    }
  
    return Array.from(workDays);
  }
  function fixArray(arr) {
    const updatedWorkDays = [];
    workDaysList.forEach(days => {
      const splitDays = days.split(/(?=[MTWFS])/);
      splitDays.forEach(day => {
        if (day === 'Th') {
          updatedWorkDays.push('Th');
        } else {
          updatedWorkDays.push(day);
        }
      });
    });
    return updatedWorkDays;
  }

  const daysOfWeek = ["M", "T", "W", "Th", "F"];
  const colors = {
    blue: "rgb(204, 204, 204)",
    gray: "rgb(60, 60, 60)",
  };

  // Function to update the ball colors based on the days array
  function updateBallColors(daysArray, index) {
    ballContStr = "note" + index + "ball";
    ballThing = "ball" + index;
    const ballContainer = document.getElementById(ballContStr);
    const balls = ballContainer.getElementsByClassName(ballThing);

    for (let i = 0; i < daysOfWeek.length; i++) {
      const day = daysOfWeek[i];
      const ball = balls[i];

      if (daysArray.includes(day)) {
        ball.style.backgroundColor = colors.blue;
      } else {
        ball.style.backgroundColor = colors.gray;
      }
    }
  }

countee = 1;
for (i = 0; i < classes.length; i++) {
    clas = classes[i]
    workDaysList = extractWorkDays(clas);
    daysArray = fixArray(workDaysList);
    updateBallColors(daysArray, countee);
    countee++;
}

  
  
}, 200);

*/


const poses = [
  'translateX(-50%) rotateX(-30deg) rotateY(-15deg) scale(1.8)',
  'translateX(50%) translateY(40%) rotateX(20deg) rotateY(10deg) scale(1.85)',
  'translateX(-50%) translateY(-50%) rotateX(-20deg) rotateY(-15deg) scale(3.5)',
  'translateX(50%) translateY(-50%) rotateX(15deg) rotateY(-20deg) scale(1.95)',
  'translateX(5%) translateY(5%) rotateX(-10deg) rotateY(15deg) scale(1)'
];

const posesT = [
  'translateY(-10%)',
  'translateX(-10%)',
  'translateX(-20%)',
  'translateY(-25%)',
  'translateX(-10%)',
];

let currentPose = 0;

// Select elements
const secondChild = document.body.children[1];
const thirdChild = document.body.children[2];
let firstNode;

let timeout;

let e;

// Function to move elements away
function moveElements() {
  secondChild.style.transition = 'transform 5s ease-in-out';
  secondChild.style.transform = 'translateY(-100%)';
  thirdChild.style.transition = 'transform 5s ease-in-out';
  thirdChild.style.transform = 'translateY(-10%)';


  setTimeout(() => {
    // Start animation loop
    e = setInterval(animateThirdChild, 10000);

    // Initial movement
    animateThirdChild();

  }, 5000);

}

let a;

function animateThirdChild() {
  thirdChild.style.transform = poses[currentPose];
  currentPose = (currentPose + 1) % poses.length;

  a = setTimeout(() => {
    thirdChild.style.transform += posesT[currentPose];
  }, 5000);
}

// Function to reset elements
function resetElements() {
  secondChild.style.transition = 'transform .5s ease-in-out';
  thirdChild.style.transition = 'transform .5s ease-in-out';

  secondChild.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
  thirdChild.style.transform = 'translateX(0) translateY(0) rotateX(0) rotateY(0) scale(1)';

  currentPose = 0;
  clearInterval(e);
  clearTimeout(a);
}

// Handle mouse movement to reset animation
document.addEventListener('mousemove', () => {
  clearTimeout(timeout);
  resetElements();
  timeout = setTimeout(moveElements, 30000);
});

// Initial animation trigger
timeout = setTimeout(moveElements, 30000);
