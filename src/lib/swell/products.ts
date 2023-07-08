import { swellnode } from "./init/node";

export const getProductsPage = async (pageNumber = 1) => {
  const results = await swellnode.get("/products", {
    where: { active: true },
    limit: 25,
    page: pageNumber,
  });

  return results;
};

export const getAllProducts = async () => {
  let results: any[] = [];
  const firstPage = await getProductsPage();
  const firstPageResults = firstPage.results;

  results.push(...firstPageResults);
  const numOfPages = firstPage.page_count;

  if (numOfPages > 1) {
    for (let p = 1; p <= numOfPages; p++) {
      const nextPage = await getProductsPage(p);
      const nextPageResults = nextPage.results;
      results.push(...nextPageResults);
    }
  }

  return results;
};

export const getProduct = async (slug: string) => {
  const response = await swellnode.get(`/products/`, {
    where: {
      active: true,
      slug,
    },
  });

  return response.results[0];
};
