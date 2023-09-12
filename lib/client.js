import {createClient}  from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId:'877lt18n',
  dataset:'production',
  apiVersion:'2023-09-02',
  useCdn:true,
  token: 'skQeIR43eauc7tUtxhdc64zJ8ATyVj9AZE7FfS2EdOyswNSgVBJJXGSH0yZw0McygZIYv11FRTFHQvSU2iwOiCoLa34w6iXuldCQXRyU6hNyh2L0x2DmjZHZnrXvR6GEGU3XIhz0h18lfaYEhz3KON4mXbPIiPjUkc9uMia1tWeIELp9aRXp'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;