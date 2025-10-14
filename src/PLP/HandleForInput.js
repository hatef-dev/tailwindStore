const slider = document.querySelector('.slider');
const handle1 = document.getElementById('handle1');
const handle2 = document.getElementById('handle2');
const fill = document.getElementById('range-fill');
const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');

const min = 0;
const max = 1000;

// آپدیت موقعیت دسته‌ها و fill
function updatePositions() {
  const sliderWidth = slider.offsetWidth;

  const pos1 = ((+value1.textContent - min) / (max - min)) * sliderWidth;
  const pos2 = ((+value2.textContent - min) / (max - min)) * sliderWidth;

  handle1.style.left = `${pos1}px`;
  handle2.style.left = `${pos2}px`;

  fill.style.left = `${pos1}px`;
  fill.style.width = `${pos2 + 5 - pos1}px`;
}


function makeDraggable(handle, valueElement, otherValueElement) {
  // Mouse events for desktop
  handle.onmousedown = function(e) {
    e.preventDefault();
    const sliderRect = slider.getBoundingClientRect();

    function onMouseMove(e) {
      let newX = e.clientX - sliderRect.left;
      newX = Math.max(0, Math.min(newX, sliderRect.width));
      let percent = (newX / sliderRect.width) * (max - min) + min;

      
      if (handle === handle1 && percent > +otherValueElement.textContent) {
        percent = +otherValueElement.textContent;
      }
      if (handle === handle2 && percent < +otherValueElement.textContent) {
        percent = +otherValueElement.textContent;
      }

      valueElement.textContent = Math.round(percent);
      updatePositions();
    }

    function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  // Touch events for mobile
  handle.addEventListener('touchstart', function(e) {
    e.preventDefault();
    const sliderRect = slider.getBoundingClientRect();
    const touch = e.touches[0];

    function onTouchMove(e) {
      e.preventDefault();
      const touch = e.touches[0];
      let newX = touch.clientX - sliderRect.left;
      newX = Math.max(0, Math.min(newX, sliderRect.width));
      let percent = (newX / sliderRect.width) * (max - min) + min;

      if (handle === handle1 && percent > +otherValueElement.textContent) {
        percent = +otherValueElement.textContent;
      }
      if (handle === handle2 && percent < +otherValueElement.textContent) {
        percent = +otherValueElement.textContent;
      }

      valueElement.textContent = Math.round(percent);
      updatePositions();
    }

    function onTouchEnd() {
      document.removeEventListener('touchmove', onTouchMove, { passive: false });
      document.removeEventListener('touchend', onTouchEnd);
    }

    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('touchend', onTouchEnd);
  }, { passive: false });
}

makeDraggable(handle1, value1, value2);
makeDraggable(handle2, value2, value1);

updatePositions();