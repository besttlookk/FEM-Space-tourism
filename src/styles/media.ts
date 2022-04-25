const customMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`;

const media = {
  mobile: customMediaQuery(375),
  tablet: customMediaQuery(768),
  laptop: customMediaQuery(1280),
};

export default media;
