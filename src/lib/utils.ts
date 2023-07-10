import { getPlaiceholder } from "plaiceholder";
export const getBlurURL = async (url: string) => {
  const src = url;

  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const { base64 } = await getPlaiceholder(buffer);
  return base64;
};
