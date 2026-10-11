fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
      const sidebarToggle = document.body.querySelector('#sidebarToggle');
      if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
          event.preventDefault();
          document.body.classList.toggle('sb-sidenav-toggled');
        });
      }
    }
);

fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
      const sidebarToggle = document.body.querySelector('#sidebarToggle');
      if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
          event.preventDefault();
          document.body.classList.toggle('sb-sidenav-toggled');
        });
      }
    }
);

document.addEventListener("DOMContentLoaded", function() {
    
    const navbarCode = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div class="container">
                <a class="navbar-brand fw-bold d-flex align-items-center" href="index.html">
                <class="d-inline-block align-text-top me-2 rounded-circle">Go2upSkills</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link" href="Home.html" >Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="Course.html" >Course</a></li>
                        
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Register
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="Register.html" >Register</a></li>
                                <li><a class="dropdown-item" href="Login.html" >Login</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#" >ดูหลักสูตรทั้งหมด</a></li>
                            </ul>
                        </li>
                        
                        
                    </ul>
                </div>
            </div>
        </nav>
    `;

    const navContainer = document.getElementById('navbar-container');
    if (navContainer) {
        navContainer.innerHTML = navbarCode;
    }

    const footerCode = `
        <footer class="bg-dark text-white text-center py-4 mt-5 highlight-box tooltip-top" data-description="Footer: ดึงโค้ดมาจาก script.js อัตโนมัติในทุกหน้า">
            <div class="container">
                <p class="mb-0">&copy; 2026 IT Camp. ออกแบบและพัฒนาด้วย Bootstrap 5 <br>ออกแบบโดยนักศึกษา นางสาวณัฐนรี ภควัตศิตานนท์ รหัสนักศึกษา 69702277</p>
            </div>
        </footer>
    `;

    const footContainer = document.getElementById('footer-container');
    if (footContainer) {
        footContainer.innerHTML = footerCode;
    }

});

function navigateTo(event, urlTarget) {
    event.preventDefault(); 
    alert("ระบบ JavaScript รับทราบคำสั่ง! กำลังพาคุณไปที่หน้า: " + urlTarget);
    window.location.href = urlTarget; 
}