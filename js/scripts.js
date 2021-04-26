/*!
* Project InCIde - inCIde website v1.0.0 (https://incide.mus.auth.gr/)
* Copyright 2013-2021 vbarlag
* Licensed under MIT (https://github.com/vbarlag/incide-website/blob/main/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
(function() {

	const hamb = document.getElementById('hamb');
	const closeSidenav = document.getElementById('closeSidenav');

	function openNav() {
	  document.getElementById('mySidenav').style.width = "280px";
	}

	function closeNav() {
	  document.getElementById('mySidenav').style.width = "0";
	}

	hamb.onclick = openNav;
	closeSidenav.onclick = closeNav;

})();