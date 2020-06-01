export const listTransformer = (list) => {
  return list.map((item, index) => {
    return {
      id: `planet-${index}`,
      name: item.name.toLowerCase(),
      climate: item.climate,
      terrain: item.terrain,
      apiUrl: item.url,
    };
  });
};
