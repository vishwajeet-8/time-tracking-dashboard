const timeTrack = document.querySelector(".time-tracking-content");
const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");

function handleDailyClick() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      return (timeTrack.innerHTML = `
      <div class="items">
      <div class="item-head item-1">
        <img src="./images/icon-work.svg" alt="" />
      </div>
      <div class="item-body">
        <div class="week-hrs">
          <p class="week">${data[0].title}</p>
          <p class="hrs">${data[0].timeframes.daily.current}hrs</p>
        </div>
        <div class="last-week">
          <p class="dot">...</p>
          <p class="last-week-hrs">Last-Week-${data[0].timeframes.daily.previous}hrs</p>
        </div>
      </div>
    </div>

    <div class="items">
      <div class="item-head item-2">
        <img src="./images/icon-play.svg" alt="" />
      </div>
      <div class="item-body">
        <div class="week-hrs">
          <p class="week">${data[1].title}</p>
          <p class="hrs">${data[1].timeframes.daily.current}hrs</p>
        </div>
        <div class="last-week">
          <p class="dot">...</p>
          <p class="last-week-hrs">Last-Week-${data[1].timeframes.daily.previous}hrs</p>
        </div>
      </div>
    </div>

    <div class="items">
      <div class="item-head item-3">
        <img src="./images/icon-study.svg" alt="" />
      </div>
      <div class="item-body">
        <div class="week-hrs">
          <p class="week">${data[2].title}</p>
          <p class="hrs">${data[2].timeframes.daily.current}hrs</p>
        </div>
        <div class="last-week">
          <p class="dot">...</p>
          <p class="last-week-hrs">Last-Week-${data[2].timeframes.daily.previous}hrs</p>
        </div>
      </div>
    </div>

    <div class="items">
      <div class="item-head item-4">
        <img src="./images/icon-exercise.svg" alt="" />
      </div>
      <div class="item-body">
        <div class="week-hrs">
          <p class="week">${data[3].title}</p>
          <p class="hrs">${data[3].timeframes.daily.current}hrs</p>
        </div>
        <div class="last-week">
          <p class="dot">...</p>
          <p class="last-week-hrs">Last-Week-${data[3].timeframes.daily.previous}hrs</p>
        </div>
      </div>
    </div>

    <div class="items">
      <div class="item-head item-5">
        <img src="./images/icon-social.svg" alt="" />
      </div>
      <div class="item-body">
        <div class="week-hrs">
          <p class="week">${data[4].title}</p>
          <p class="hrs">${data[4].timeframes.daily.current}hrs</p>
        </div>
        <div class="last-week">
          <p class="dot">...</p>
          <p class="last-week-hrs">Last-Week-${data[4].timeframes.daily.previous}hrs</p>
        </div>
      </div>
    </div>

    <div class="items">
      <div class="item-head item-6">
        <img src="./images/icon-self-care.svg" alt="" />
      </div>
      <div class="item-body">
      <div class="week-hrs">
        <p class="week">${data[5].title}</p>
        <p class="hrs">${data[5].timeframes.daily.current}hrs</p>
      </div>
      <div class="last-week">
        <p class="dot">...</p>
        <p class="last-week-hrs">Last-Week-${data[5].timeframes.daily.previous}hrs</p>
      </div>
    </div>
    </div>
    `);
    });
  weekly.style.color = "hsl(236, 100%, 87%)";
  monthly.style.color = "hsl(236, 100%, 87%)";
}

function handleWeeklyClick() {
  weekly.style.color = "white";
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      return (timeTrack.innerHTML = `
        <div class="items">
        <div class="item-head item-1">
          <img src="./images/icon-work.svg" alt="" />
        </div>
        <div class="item-body">
          <div class="week-hrs">
            <p class="week">${data[0].title}</p>
            <p class="hrs">${data[0].timeframes.weekly.current}hrs</p>
          </div>
          <div class="last-week">
            <p class="dot">...</p>
            <p class="last-week-hrs">Last-Week-${data[0].timeframes.weekly.previous}hrs</p>
          </div>
        </div>
      </div>
  
      <div class="items">
        <div class="item-head item-2">
          <img src="./images/icon-play.svg" alt="" />
        </div>
        <div class="item-body">
          <div class="week-hrs">
            <p class="week">${data[1].title}</p>
            <p class="hrs">${data[1].timeframes.weekly.current}hrs</p>
          </div>
          <div class="last-week">
            <p class="dot">...</p>
            <p class="last-week-hrs">Last-Week-${data[1].timeframes.weekly.previous}hrs</p>
          </div>
        </div>
      </div>
  
      <div class="items">
        <div class="item-head item-3">
          <img src="./images/icon-study.svg" alt="" />
        </div>
        <div class="item-body">
          <div class="week-hrs">
            <p class="week">${data[2].title}</p>
            <p class="hrs">${data[2].timeframes.weekly.current}hrs</p>
          </div>
          <div class="last-week">
            <p class="dot">...</p>
            <p class="last-week-hrs">Last-Week-${data[2].timeframes.weekly.previous}hrs</p>
          </div>
        </div>
      </div>
  
      <div class="items">
        <div class="item-head item-4">
          <img src="./images/icon-exercise.svg" alt="" />
        </div>
        <div class="item-body">
          <div class="week-hrs">
            <p class="week">${data[3].title}</p>
            <p class="hrs">${data[3].timeframes.weekly.current}hrs</p>
          </div>
          <div class="last-week">
            <p class="dot">...</p>
            <p class="last-week-hrs">Last-Week-${data[3].timeframes.weekly.previous}hrs</p>
          </div>
        </div>
      </div>
  
      <div class="items">
        <div class="item-head item-5">
          <img src="./images/icon-social.svg" alt="" />
        </div>
        <div class="item-body">
          <div class="week-hrs">
            <p class="week">${data[4].title}</p>
            <p class="hrs">${data[4].timeframes.weekly.current}hrs</p>
          </div>
          <div class="last-week">
            <p class="dot">...</p>
            <p class="last-week-hrs">Last-Week-${data[4].timeframes.weekly.previous}hrs</p>
          </div>
        </div>
      </div>
  
      <div class="items">
        <div class="item-head item-6">
          <img src="./images/icon-self-care.svg" alt="" />
        </div>
        <div class="item-body">
        <div class="week-hrs">
          <p class="week">${data[5].title}</p>
          <p class="hrs">${data[5].timeframes.weekly.current}hrs</p>
        </div>
        <div class="last-week">
          <p class="dot">...</p>
          <p class="last-week-hrs">Last-Week-${data[5].timeframes.weekly.previous}hrs</p>
        </div>
      </div>
      </div>
    `);
    });
  daily.style.color = "hsl(236, 100%, 87%)";
  monthly.style.color = "hsl(236, 100%, 87%)";
}

function handleMonthlyClick() {
  monthly.style.color = "white";
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      return (timeTrack.innerHTML = `
        <div class="items">
        <div class="item-head item-1">
          <img src="./images/icon-work.svg" alt="" />
        </div>
        <div class="item-body">
          <div class="week-hrs">
            <p class="week">${data[0].title}</p>
            <p class="hrs">${data[0].timeframes.monthly.current}hrs</p>
          </div>
          <div class="last-week">
            <p class="dot">...</p>
            <p class="last-week-hrs">Last-Week-${data[0].timeframes.monthly.previous}hrs</p>
          </div>
        </div>
      </div>
  
      <div class="items">
        <div class="item-head item-2">
          <img src="./images/icon-play.svg" alt="" />
        </div>
        <div class="item-body">
          <div class="week-hrs">
            <p class="week">${data[1].title}</p>
            <p class="hrs">${data[1].timeframes.monthly.current}hrs</p>
          </div>
          <div class="last-week">
            <p class="dot">...</p>
            <p class="last-week-hrs">Last-Week-${data[1].timeframes.monthly.previous}hrs</p>
          </div>
        </div>
      </div>
  
      <div class="items">
        <div class="item-head item-3">
          <img src="./images/icon-study.svg" alt="" />
        </div>
        <div class="item-body">
          <div class="week-hrs">
            <p class="week">${data[2].title}</p>
            <p class="hrs">${data[2].timeframes.monthly.current}hrs</p>
          </div>
          <div class="last-week">
            <p class="dot">...</p>
            <p class="last-week-hrs">Last-Week-${data[2].timeframes.monthly.previous}hrs</p>
          </div>
        </div>
      </div>
  
      <div class="items">
        <div class="item-head item-4">
          <img src="./images/icon-exercise.svg" alt="" />
        </div>
        <div class="item-body">
          <div class="week-hrs">
            <p class="week">${data[3].title}</p>
            <p class="hrs">${data[3].timeframes.monthly.current}hrs</p>
          </div>
          <div class="last-week">
            <p class="dot">...</p>
            <p class="last-week-hrs">Last-Week-${data[3].timeframes.monthly.previous}hrs</p>
          </div>
        </div>
      </div>
  
      <div class="items">
        <div class="item-head item-5">
          <img src="./images/icon-social.svg" alt="" />
        </div>
        <div class="item-body">
          <div class="week-hrs">
            <p class="week">${data[4].title}</p>
            <p class="hrs">${data[4].timeframes.monthly.current}hrs</p>
          </div>
          <div class="last-week">
            <p class="dot">...</p>
            <p class="last-week-hrs">Last-Week-${data[4].timeframes.monthly.previous}hrs</p>
          </div>
        </div>
      </div>
  
      <div class="items">
        <div class="item-head item-6">
          <img src="./images/icon-self-care.svg" alt="" />
        </div>
        <div class="item-body">
        <div class="week-hrs">
          <p class="week">${data[5].title}</p>
          <p class="hrs">${data[5].timeframes.monthly.current}hrs</p>
        </div>
        <div class="last-week">
          <p class="dot">...</p>
          <p class="last-week-hrs">Last-Week-${data[5].timeframes.monthly.previous}hrs</p>
        </div>
      </div>
      </div>
        `);
    });
  weekly.style.color = "hsl(236, 100%, 87%)";
  daily.style.color = "hsl(236, 100%, 87%)";
}
