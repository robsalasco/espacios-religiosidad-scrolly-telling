
export function setColors(themes, theme) {
  for (let color in themes[theme]) {
    document.documentElement.style.setProperty('--' + color, themes[theme][color]);
  }
}

export function getMotion() {
  let mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)"); // Check if browser prefers reduced motion
	return !mediaQuery || mediaQuery.matches ? false : true; // return true for motion, false for no motion
}