
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
        function atomiRdn(e, t) {
          try {
            return Math.floor(Math.random() * (t - e + 1) + e)
          } catch (error) {
            console.log(error);
          }
        }

        try {
          function scheduleRandomUpdate(element) {
            const min = parseInt(element.dataset.min) || 400;
            const max = parseInt(element.dataset.max) || 700;
            
            const randomDelay = Math.random() * 3000;
            
            setTimeout(() => {
              try {
                let current = parseInt(element.innerText);
                
                // Initialize if not a valid number
                if (isNaN(current)) {
                  current = atomiRdn(min, max);
                }
                
                // Apply increment (-1 to +2) and clamp within bounds
                const increment = atomiRdn(-5, 7);
                const newValue = Math.max(min, Math.min(max, current + increment));
                
                element.innerText = newValue.toString();
                
                // Schedule the next update with a new random delay
                scheduleRandomUpdate(element);
              } catch (error) {
                console.log('Random update error:', error);
              }
            }, randomDelay);
          }

          // Initialize random updates for each element
          document.querySelectorAll('.atomicat-random').forEach(el => {
            scheduleRandomUpdate(el);
          });
        } catch (error) {
          console.log(error);
        }
      })();
    
      (function() {
        function atomiEleRandomDrops() {
          try {
            const randomDrops = document.querySelectorAll('.atomicat-randomdrop-text');

            randomDrops.forEach(element => {
              const start = parseInt(element.dataset.start, 10);
              const end = parseInt(element.dataset.end, 10);
              let current = start;

              const interval = setInterval(() => {
                const findDelayParent = element.closest('.atomicat-delay') || element.closest('.atomicat-hidden');
                if (findDelayParent) return;
                if (current > end) {
                  const step = Math.floor(Math.random() * 2) + 1; // Randomly 1 or 2
                  current = Math.max(current - step, end);
                  element.textContent = current;
                } else {
                  clearInterval(interval);
                }
              }, Math.random() * (5000 - 3000) + 3000); // Randomly between 3 and 5 seconds
            });
          } catch (error) {
            console.log(error);
          }
        }
        try {
          const hasRandomDropsText = document.querySelectorAll('.atomicat-randomdrop-text')
          console.log(hasRandomDropsText)
          if(hasRandomDropsText?.length){
            atomiEleRandomDrops()
          }
        } catch (error) {
          console.log(error);
        }
      })();
    (function() {
          try {
              const clickeventList = [{"compKey":"1dd21ee","misc":{"type":"button"}},{"compKey":"e6d32e8","misc":{"type":"button"}},{"compKey":"b4b8dc4","misc":{"type":"button"}},{"compKey":"5201bf6","misc":{"type":"text"}},{"compKey":"ec1b492","misc":{"type":"text"}}];
    
    
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
              var compKey = "39ddc7c";
              const twr = false;
              var SECONDS_TO_DISPLAY = 2328;
              var attempts = 0;
              var elsDisplayed = false;
              var alreadyDisplayedKey = 'alreadyElsDisplayed2328';
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
        