const toggleBox = document.querySelector('.toggle-box-container');

toggleBox.addEventListener('click', () => {
    const sidebarMain = document.querySelector('.sidebar-main-container');
    const sidebarSpan = document.querySelector('.sidebar-ul');
    const sidebarli = document.querySelectorAll('.sidebar-li');
    const spans = sidebarSpan.getElementsByTagName("span");

    document.querySelector('.right-content-section').classList.toggle('right-content-section-flex')
    sidebarMain.classList.toggle("hide-sidebar");
    toggleBox.classList.toggle("toggle-box-container-show");

    for (let i = 0; i < spans.length; i++) {
        spans[i].classList.toggle("dislpay-none");

    }
    for (let i = 0; i < sidebarli.length; i++) {
        sidebarli[i].classList.toggle("sidebar-icon-center");
    }

})

/* addLocationProduct Start */

function addLocationProducttoggleDropdown() {
    var dropdownToggle = document.querySelector('.addLocationProduct-toggle');
    dropdownToggle.classList.toggle('open');
  }
  
  var dropdownOptions = document.querySelectorAll('.addLocationProduct-option');
  
  dropdownOptions.forEach(function (option) {
    option.addEventListener('click', function () {
      var selectedOptionText = option.textContent;
      var dropdownToggle = document.querySelector('.addLocationProduct-toggle');
      dropdownToggle.textContent = selectedOptionText;
      dropdownToggle.classList.remove('open');
      dropdownToggle.insertAdjacentHTML('beforeend', '<span class="addLocationProduct-arrow"></span>');
    });
  });
  /* addLocationProduct End */