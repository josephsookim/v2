const wrapper = document.querySelector('.mac-wrapper');
setInterval(() => {
  console.log('restart')
  wrapper.classList.remove('start');
  setTimeout(() => {
      wrapper.classList.add('start');
  }, 50)
}, 20000);