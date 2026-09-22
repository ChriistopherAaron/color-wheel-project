const colorWheel = document.querySelector('.color-wheel');
const pageBody = document.querySelector('body');

let isLocked = false; // Tracks if a color has been selected/locked

function calculateDegrees(event) {
  const x = event.offsetX - 150;
  const y = event.offsetY - 150;
  let degrees = Math.atan2(y, x) * (180 / Math.PI) + 90;
  if (degrees < 0) degrees += 360;
  return degrees;
}

// Hover preview only works if NOT locked
colorWheel.addEventListener('mousemove', (event) => {
  if (!isLocked) {
    const degrees = calculateDegrees(event);
    pageBody.style.backgroundColor = `hsl(${degrees}, 100%, 50%)`;
  }
});

// Click toggles lock/unlock state
colorWheel.addEventListener('click', (event) => {
  isLocked = !isLocked; // Freeze or unfreeze the hover preview
  
  if (isLocked) {
    const degrees = calculateDegrees(event);
    pageBody.style.backgroundColor = `hsl(${degrees}, 100%, 50%)`;
  }
});