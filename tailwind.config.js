/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html", "./js/function.js"],
  theme  : {
	extend: {
	  colors    : {
		primary: {
		  SoftRed : "hsl(7, 99%, 70%)",
		  yellow  : "hsl(51, 100%, 49%)",
		  darkCyan: {
			desaturated: "hsl(167, 40%, 24%)", // for graphic design text
			moderate   : "hsl(168, 34%, 41%)", // for footer
		  },
		  darkBlue: "hsl(198, 62%, 26%)", // for photography text
		},
		natural: {
		  darkBlue   : {
			desaturated: "hsl(212, 27%, 19%)",
			grayish    : "hsl(213, 9%, 39%)",
		  },
		  grayishBlue: "hsl(210, 4%, 67%)",
		},
	  },
	  fontFamily: {
		barlow  : ["Barlow", "sans-serif"],
		fraunces: ["Fraunces", "serif"],
	  },
	},
  },
  plugins: [],
};

