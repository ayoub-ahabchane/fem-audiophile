import swelljs from "swell-js";

const options = {
  useCamelCase: true,
};

swelljs.init(
  process.env.NEXT_PUBLIC_SWELL_STORE_ID!,
  process.env.NEXT_PUBLIC_SWELL_KEY!,
  options
);

export { swelljs };
