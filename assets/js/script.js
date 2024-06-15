const burgerBtnElem = document.getElementById('burgerBtn'); 
const mobileMenu = document.getElementById('mobileMenu'); 

const headerDesktopElem = document.getElementById('headerDesktop')


burgerBtnElem.onclick = () => {
    mobileMenu.classList.toggle('show-menu'); 
}

window.onscroll = () => {
    if(scrollY > 80) {
        headerDesktopElem.classList.add('header-bg')
    }else {
        headerDesktopElem.classList.remove('header-bg')
    }
}

// Обрабатываем клик на каждый пункт меню
// menuItem.forEach(item => {
//     item.addEventListener('click', event => {
//       event.preventDefault(); // Отменяем действие по умолчанию (переход по ссылке)
  
//       const targetId = item.getAttribute('href');
//       const targetSection = document.querySelector(targetId);
  
//       // Выполняем плавную прокрутку к началу секции
//       scrollToSection(targetSection);
//     });
//   });
  
//   function scrollToSection(element) {
//     const headerHeight = document.querySelector('.header').offsetHeight;
//     const elementPosition = element.getBoundingClientRect().top;
//     const offsetPosition = elementPosition - headerHeight;
  
//     // Выполняем прокрутку к началу секции с учетом высоты шапки
//     window.scrollBy({
//       top: offsetPosition,
//       behavior: 'smooth'
//     });
//   }

// $(document).ready(function(){
// 	$("#menuItem").on("click","a", function (event) {
// 		event.preventDefault();
// 		var id  = $(this).attr('href'),
// 			top = $(id).offset().top;
// 		$('body,html').animate({scrollTop: top}, 1500);
// 	});
// });