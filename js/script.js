const course = document.querySelector('.course');
const container = document.querySelector('.container');
course.addEventListener('mouseover', () => {
  container.style.display = 'block';
});
course.addEventListener('mouseout', () => {
  container.style.display = 'none';
});