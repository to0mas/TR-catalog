function showSidebar(){

    const sidebar = document.querySelector('.sidebar');

    sidebar.style.display = 'flex'
}

function hideSidebar(){

    const sidebar = document.querySelector('.sidebar');

    sidebar.style.display = 'none'
}



const toggleDark = document.getElementById('Dark');
const body = document.body;

toggleDark.addEventListener('click', () => {
 
  body.classList.toggle('dark-theme');


  if (body.classList.contains('dark-theme')) {
    toggleDark.classList.remove('bi-moon');
    toggleDark.classList.add('bi-sun');
  } else {
    toggleDark.classList.remove('bi-sun');
    toggleDark.classList.add('bi-moon');
  }
});


function search() {
  let filter = document.querySelector('.input').value.toUpperCase();

  let items = document.querySelectorAll('.country-place');

  for (let i = 0; i < items.length; i++) {
    let title = items[i].getElementsByTagName("h2")[0];

    let value = title.textContent || title.innerText;

    if (value.toUpperCase().indexOf(filter) > -1) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
}
