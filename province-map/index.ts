import { join } from 'path';

// const inputPath = join(import.meta.dir, './input/datav-province.json');
// const outputPath = join(import.meta.dir, './output/processed-province.json');

// const data = await Bun.file(inputPath).json();

// const processed = data.features.map(f => ({name: f.properties.name, adcode: f.properties.adcode}) )


const inputPath = join(import.meta.dir, './input/datav-city.json');
const outputPath = join(import.meta.dir, './output/processed-city.json');

const data = await Bun.file(inputPath).json();

const processed = data.features.map(f => {
  const properties = f.properties;
  return {
    name: properties.name,
    adcode: properties.adcode,
    parent: properties?.parent?.adcode ?? '',

  };
})

await Bun.write(outputPath, JSON.stringify(processed, null, 2));