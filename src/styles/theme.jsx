import { createTheme } from '@mui/material/styles'

export const coloring = {
	orange: '#fb4c04',
	orange2: '#FF9323',
	red: '#FF3D00',
	green: '#138A36',
	blue: '#009DDC',

	default: '#EAEAEA',
	paper: '#FFFFFF',
	border: '#A5A5A5',
	text1: '#0f0f0f',
	text2: '#F0F0F0',

	white1: '#FFFFFF',
	white2: '#F0F0F0',
	white3: '#EAEAEA',
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

export const theme = createTheme({
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
		mode: 'light',
		primary: {
			main: coloring.orange,
		},
		secondary: {
			main: coloring.red,
		},
		background: {
			default: coloring.default, //white3
			paper: coloring.paper, //white1
			border: coloring.border, //white5
		},
		text: {
			main: coloring.text1, //black3
			secondary: coloring.text2, //white3
		},
		permanent: {
			orange: coloring.orange,
			orange2: coloring.orange2,
			red: coloring.red,
			green: coloring.green,
			blue: coloring.blue,
			white1: coloring.white1,
			white2: coloring.white2,
			white3: coloring.white3,
			white4: coloring.white4,
			white5: coloring.white5,
			gray1: coloring.gray1,
			gray2: coloring.gray2,
			gray3: coloring.gray3,
			gray4: coloring.gray4,
			black1: coloring.black1,
			black2: coloring.black2,
			black3: coloring.black3,
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
