import { createTheme } from '@mui/material/styles'

export const darkColoring = {
	orange: '#FF8303',
	orange2: '#FF9323',
	red: '#FF3D00',
	green: '#138A36',
	blue: '#009DDC',

	default: '#1B1A17',
	paper: '#0f0f0f',
	border: '#0f0f0f',
	text1: '#EAEAE0',
	text2: '#0f0f0f',

	white1: '#F7F7F7',
	white2: '#F0F0F0',
	white3: '#EAEAE0',
	white4: '#C2C2C2',
	white5: '#A5A5A5',
	gray1: '#8D8D8D',
	gray2: '#5C5C5C',
	gray3: '#343330',
	gray4: '#2D2D2D',
	black1: '#1B1A17',
	black2: '#121212',
	black3: '#0f0f0f',
}

export const darkTheme = createTheme({
	breakpoints: {
		values: { xs: 0, s: 350, sm: 640, m: 800, md: 1024, lg: 1280 },
	},
	typography: {
		fontFamily: "'Roboto', sans-serif ",
		fontWeight: '400',

		fontSize: 20,
		button: {
			color: 'white',
		},
	},
	palette: {
		type: 'dark',
		primary: {
			main: darkColoring.orange,
		},
		secondary: {
			main: darkColoring.red,
		},
		background: {
			default: darkColoring.default, //white3
			paper: darkColoring.paper, //white1
			border: darkColoring.border, //white5
		},
		text: {
			main: darkColoring.text1, //black3
			secondary: darkColoring.text2, //white3
		},
		permanent: {
			orange: darkColoring.orange,
			orange2: darkColoring.orange2,
			red: darkColoring.red,
			green: darkColoring.green,
			blue: darkColoring.blue,
			white1: darkColoring.white1,
			white2: darkColoring.white2,
			white3: darkColoring.white3,
			white4: darkColoring.white4,
			white5: darkColoring.white5,
			gray1: darkColoring.gray1,
			gray2: darkColoring.gray2,
			gray3: darkColoring.gray3,
			gray4: darkColoring.gray4,
			black1: darkColoring.black1,
			black2: darkColoring.black2,
			black3: darkColoring.black3,
		},
	},
	components: {
		MuiInputBase: {
			input: {
				padding: '2px 12px !important',
			},
			inputAdornedStart: {
				paddingLeft: '0 !important',
			},
		},
	},
	props: {
		MuiButtonBase: {
			disableRipple: true,
		},
	},
})
