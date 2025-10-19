
      function atomiShowItems({items}) {
      try {
        items.forEach((item) => {
          const hiddenItem = [...document.querySelectorAll(`#${item}`), ...document.querySelectorAll(`.${item}`)];
          console.log("hiddenItem", hiddenItem)
          if (hiddenItem?.length > 0) {
            hiddenItem.forEach(item => item.classList.remove("atomicat-delay"));
          }
        })
      } catch (error) {
        console.log(error);
      }
      }
    
      function runDelayedFunctions(data) {
        try {
          document.querySelectorAll('.atomicat-delay').forEach(el => el.classList.remove('atomicat-delay'));
          if(data?.setDisplayed){
            localStorage.setItem(data?.setDisplayed, true);
          }
          
    var scrollElement = document.getElementById("potes");
    if (scrollElement) {
      scrollElement.scrollIntoView({ behavior: 'smooth' });
    }
        } catch (error) {
          console.log(error);
        }
      }
    
      (function() {
        function atomiEleCountdown() {
          try {
            document.querySelectorAll('.atomicat-countdown-text').forEach(el => {
              const dateTime = el.getAttribute("data-time");
              const compKey = el.getAttribute("id").split("-")[el.getAttribute("id").split("-")?.length-1];
              const intervalName = 'atomicat_countdown_text_interval_' + compKey;

              window[intervalName] = setInterval(function updateCountdownText() {
                let targetTime; 
                const findDelayParent = el.closest('.atomicat-delay') || el.closest('.atomicat-hidden');
                if (findDelayParent) return;
                const sessionStorageKey = 'atomicat_countdown_text_interval_' + compKey;
                let countdownStart = sessionStorage.getItem(sessionStorageKey);
                if (!countdownStart) {
                  countdownStart = new Date().getTime();
                  sessionStorage.setItem(sessionStorageKey, countdownStart);
                }
                const [dateTimeMins, dateTimeSecs] = dateTime.split(":").map(Number);
                targetTime = new Date(parseInt(countdownStart));
                targetTime.setMinutes(targetTime.getMinutes() + dateTimeMins);
                targetTime.setSeconds(targetTime.getSeconds() + dateTimeSecs);
    
                const now = new Date();
                const distance = targetTime - now;
    
                if (distance <= 0) {
                  clearInterval(window[intervalName]);
                  const countdownContainer = document.getElementById('atomicat-countdown-text-' + compKey);
                  countdownContainer.textContent = "00:00"
                  return;
                }
    
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
                const countdownContainer = document.getElementById('atomicat-countdown-text-' + compKey);
                if(countdownContainer) {
                  let timeHours = hours < 10 ? `0${hours}` : hours;
                  let timeMinutes = minutes < 10 ? `0${minutes}` : minutes;
                  let timeSeconds = seconds < 10 ? `0${seconds}` : seconds;
                  countdownContainer.textContent = timeMinutes+":"+timeSeconds
                }
              }, 1000);
            });
          } catch (error) {
            console.log(error);
          }
        }
        try {
          const hasCountdownText = document.querySelectorAll('.atomicat-countdown-text')
          console.log(hasCountdownText)
          if(hasCountdownText?.length){
            atomiEleCountdown()
          }
        } catch (error) {
          console.log(error);
        }
      })();
    (function() {
          try {
              const clickeventList = [{"compKey":"61bb3df","misc":{"type":"text"}},{"compKey":"5696ccf","misc":{"type":"text"}}];
    
    
              clickeventList.forEach((comp, index) => {
                  const compKey = comp?.compKey;
                  const eleType = comp?.misc?.type;
                  
                  
                  
                  
                  
                  
              });
    
          } catch (error) {
              return error;
          }
      })();
          (function() {
            try {
              var vturbvideoId = "68f3ea351691f667c02c471b";
              var compKey = "ae19743";
              const twr = false;
              var SECONDS_TO_DISPLAY = 1452;
              var attempts = 0;
              var elsDisplayed = false;
              var alreadyDisplayedKey = 'alreadyElsDisplayed1452';
              var alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey);

              var showHiddenElements = function () {
                elsDisplayed = true;
                runDelayedFunctions();
                localStorage.setItem(alreadyDisplayedKey, true);
              };
              function getVideoInstance() {
                if (smartplayer.instances.length > 1) {
                  return smartplayer.instances.find(
                    (instance) => (instance?.options?.id || instance?.analytics?.player?.options?.id) === vturbvideoId
                  );
                }
                return smartplayer.instances[0];
              };
              window.startWatchVideoProgress = function startWatchVideoProgress(reAttempts) {
                if (reAttempts) {
                  attempts = reAttempts;
                }
                
                console.log("vturbvideoId", vturbvideoId);
                if (typeof smartplayer === 'undefined' || !(smartplayer.instances && smartplayer.instances.length)) {
                  if (attempts >= 10) return;
                  attempts += 1;
                  return setTimeout(function () {
                    startWatchVideoProgress();
                  }, 1000);
                }
                console.log(smartplayer.instances);
                var videoInstance = getVideoInstance();
                videoInstance.on('timeupdate', () => {
                  if (elsDisplayed || videoInstance.smartAutoPlay) return;
                  console.log("currentTime => " +videoInstance.video.currentTime +" SECONDS_TO_DISPLAY => " +SECONDS_TO_DISPLAY);
                  if (videoInstance.video.currentTime < SECONDS_TO_DISPLAY) return;
                  showHiddenElements();
                });
              };
              if (alreadyElsDisplayed === 'true') {
                setTimeout(function () {
                  showHiddenElements();
                }, 100);
              } else {
                window.startWatchVideoProgress();
              }
            } catch (error) {
              console.log(error);
            }
            
          })();
        