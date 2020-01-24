// Mobile S - 320px
// Mobile M - 375px
// Mobile L - 425px
// Tablet - 768px
// Laptop - 1024px
// Laptop L - 1440px
// 4K - 2560px

/*
@media ${device.laptop} {
    flex-direction: row;
  }
*/
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  mobileXL: '542px',
  mobileXXL: '593px',
  tablet: '783px',
  tabletM: '647px',
  tabletL: '990px',
  laptop: '1024px',
  laptopM: '1071px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = Object.keys(size).reduce((acc, key) => {
  acc[key] = style => `
    @media (max-width: ${size[key]}) {
      ${style};
    }
  `
  return acc
}, {})
