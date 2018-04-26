
// Highlights the sentence according to the video time.
const video = document.querySelector('video');
const span = document.querySelectorAll('span');

// Event listener added for the time updates
video.addEventListener('timeupdate', () => {
  // Loop to go through the span elements
  for( let i = 0; i < span.length; i += 1 ) {
    let dataStart = span[i].getAttribute('data-start');
    let dataEnd = span[i].getAttribute('data-end');
    let currentTime = video.currentTime;
    // If statement to Highlight the text depending on the video current time
    if ( currentTime > dataStart && currentTime < dataEnd) {
      span[i].style.color = '#e89043';
    } else {
      span[i].style.color = '#000';
    }
  }
});

// video skips to the proper place in the video when the transcript clicked.
for(let i = 0; i < span.length; i += 1 ) {
  span[i].addEventListener('click', (event) => {
      video.currentTime = event.target.getAttribute('data-start');
      video.play();
  });
}