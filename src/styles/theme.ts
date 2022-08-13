const size = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1200px',
  // desktop: "1400px",
};

const theme = {
  mainColor: '#0a4297',
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  // desktop: `(min-width: ${size.desktop})`,
};

export default theme;
