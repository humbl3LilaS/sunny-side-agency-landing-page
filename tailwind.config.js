/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html", "./js/function.js"],
  theme  : {
	extend: {
	  colors            : {
		primary  : {
		  softBlue: "#3DBEFF",
		  SoftRed : "hsl(7, 99%, 70%)",
		  yellow  : "hsl(51, 100%, 49%)",
		  darkCyan: {
			desaturated: "hsl(167, 40%, 24%)", // for graphic design text
			moderate   : "hsl(168, 34%, 41%)", // for footer
		  },
		  darkBlue: "hsl(198, 62%, 26%)", // for photography text
		},
		natural  : {
		  darkBlue   : {
			desaturated: "hsl(212, 27%, 19%)",
			grayish    : "hsl(213, 9%, 39%)",
		  },
		  grayishBlue: "hsl(210, 4%, 67%)",
		},
		underline: {
		  transform: "#F8EDB2",
		  standOut : "#FCDBD2",
		},
	  },
	  fontFamily        : {
		barlow  : ["Barlow", "sans-serif"],
		fraunces: ["Fraunces", "serif"],
	  },
	  backgroundImage   : {
		"button-open"          : "url('/images/icon-hamburger.svg')",
		"button-arrow"         : "url('/images/icon-arrow-down.svg')",
		"m-header"             : "url('/images/mobile/image-header.jpg')",
		"m-transform"          : "url('/images/mobile/image-transform.jpg')",
		"m-standOut"           : "url('/images/mobile/image-stand-out.jpg')",
		"m-graphicDesign"      : "url('/images/mobile/image-graphic-design.jpg')",
		"m-photography"        : "url('/images/mobile/image-photography.jpg')",
		"m-gallery-cone"       : "url('/images/mobile/image-cone.jpg')",
		"m-gallery-milkbottles": "url('/images/mobile/image-milkbottles.jpg')",
		"m-gallery-sugarCubes" : "url('/images/mobile/image-sugar-cubes.jpg')",
		"m-gallery-orange"     : "url('/images/mobile/image-orange.jpg')",
		"d-header"             : "url('/images/desktop/image-header.jpg')",
		"d-transform"          : "url('/images/desktop/image-transform.jpg')",
		"d-standOut"           : "url('/images/desktop/image-stand-out.jpg')",
		"d-graphicDesign"      : "url('/images/desktop/image-graphic-design.jpg')",
		"d-photography"        : "url('/images/desktop/image-photography.jpg')",
		"d-gallery-cone"       : "url('/images/desktop/image-cone.jpg')",
		"d-gallery-milkbottles": "url('/images/desktop/image-milkbottles.jpg')",
		"d-gallery-sugarCubes" : "url('/images/desktop/image-sugar-cubes.jpg')",
		"d-gallery-orange"     : "url('/images/desktop/image-orange.jpg')",
	  },
	  padding           : {
		"mobile-block" : "2rem",
		"mobile-inline": "1rem",
	  },
	  width             : {
		"underline": "calc(100% + 10px)",
	  },
	  backgroundPosition: {
		"center-bottom": "center bottom",
		"center-top"   : "center top",
	  },
	  spacing           : {
		"underline": "-5px",
	  },
	  gridTemplateRows  : {
		"featureTablet" : "repeat(3,480px)",
		"featureDesktop": "repeat(3, 560px)",
	  },
	  height            : {
		presentation: "max(750px, 80vh)",
	  },
	},
  },
  plugins: [],
}
;

