window.onload = function() {
	function setNavbarBackgroundOnScroll(e) {
		let scrollPos =
			document.body.scrollTop || document.documentElement.scrollTop;

		let navbar = document.querySelector('.navbar');

		if (scrollPos > 15) {
			navbar.classList.add('navbar-bg');
		} else {
			navbar.classList.remove('navbar-bg');
		}
	}
	setNavbarBackgroundOnScroll();

	window.addEventListener('scroll', setNavbarBackgroundOnScroll);

	let sidebar = document.querySelector('.sidebar');

	let openSidebarBtn = document.querySelector('#open-sidebar-btn');
	openSidebarBtn.addEventListener('click', function() {
		sidebar.classList.add('show-sidebar');
	});

	let closeSidebarBtn = document.querySelector('#close-sidebar-btn');
	closeSidebarBtn.addEventListener('click', function() {
		sidebar.classList.remove('show-sidebar');
	});

	let sbLinks = document.querySelectorAll('.sidebar .sidebar-links a');

	sbLinks.forEach(function(link) {
		link.addEventListener('click', function() {
			sidebar.classList.remove('show-sidebar');
		});
	});
};
