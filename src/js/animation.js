
document.querySelector('.yaht-rental-link').onmousemove = e => {
  const x = e.pageX - e.target.offsetLeft;
  const y = e.pageY - e.target.offsetTop;

  e.target.style.setProperty('--x', `${x}px`);
  e.target.style.setProperty('--y', `${y}px`);
};

// document.querySelector('.hero-btn').onmousemove = e => {
//   const x = e.pageX - e.target.offsetLeft;
//   const y = e.pageY - e.target.offsetTop;

//   e.target.style.setProperty('--x', `${x}px`);
//   e.target.style.setProperty('--y', `${y}px`);
// };
