const filterSelect = document.getElementById('filter');
filterSelect.addEventListener('change', filterExams); 
function filterExams() {
  const filterValue = filterSelect.value; 
  const exams = document.querySelectorAll('.exam');
  exams.forEach(exam => {
    const status = exam.getAttribute('data-status'); 
    if(filterValue === 'all' || filterValue === status) {
      exam.style.display = 'block'; 
    } else {
      exam.style.display = 'none';
    }
  });
}

let buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
  button.addEventListener('click', startExam);
  function startExam() {
    window.location.href="exercise1.html";
  }
});