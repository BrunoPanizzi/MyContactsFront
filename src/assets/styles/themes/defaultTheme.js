const baseTheme = {
  text: {
    mainFont: 'Outfit',
    fancyFont: 'Outfit',
  },
  border: {
    borderRadius: '8px',
    bigBorderRadius: '16px',
  },
}

const light = {
  colors: {
    background: '#f8f8f8',
    veryLight: '#fff',
    primary: {
      50: '#deffee',
      100: '#b4fbd4',
      200: '#86f6ba',
      300: '#58f3a0',
      400: '#2ef086',
      500: '#17d66d',
      main: '#0ca754',
      700: '#04773b',
      800: '#004722',
      900: '#001a07',
    },
    danger: {
      main: '#FC5050',
    },
  },
  text: {
    light: '#696969',
    main: '#141414',
    ...baseTheme.text,
  },
  ...baseTheme.border,
}

const dark = {
  colors: {
    background: '#111',
    veryLight: '#1d1d1d',
    primary: {
      50: '#defff6',
      100: '#b4fbe1',
      200: '#86f6ca',
      300: '#58f3b0',
      400: '#2ef094',
      500: '#17d673',
      main: '#0ca754',
      700: '#037743',
      800: '#00472c',
      900: '#001a0c',
    },
    danger: {
      main: '#FC5050',
    },
  },
  text: {
    light: '#8f8f8f',
    main: '#efefef',
    ...baseTheme.text,
  },
  ...baseTheme.border,
}

export const defaultTheme = { light, dark }

/*
{
  50: '#deffee',
  100: '#b4fbd4',
  200: '#86f6ba',
  300: '#58f3a0',
  400: '#2ef086',
  500: '#17d66d',
  main: '#0ca754',
  700: '#04773b',
  800: '#004722',
  900: '#001a07',
}
*/
