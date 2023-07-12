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

export const getProduct = async (slug: string, fields?: string[]) => {
  const response = await swellnode.get(`/products/`, {
    where: {
      active: true,
      slug: { $eq: slug },
    },
    fields: fields,
  });

  return response.results[0];
};

export const getProductsByCategoryPage = async (
  categoryId: string,
  pageNumber = 1,
  fields?: string[]
) => {
  const response = await swellnode.get("/products/", {
    categories: categoryId,
    fields,
  });

  return response;
};

export const getAllProductsByCategory = async (
  categoryId: string,
  fields?: string[]
) => {
  let results: any[] = [];
  const firstPage = await getProductsByCategoryPage(categoryId, 1, fields);
  const firstPageResults = firstPage.results;
  results.push(...firstPageResults);
  const numOfPages = firstPage.page_count;

  if (numOfPages > 1) {
    for (let p = 1; p <= numOfPages; p++) {
      const nextPage = await getProductsByCategoryPage(categoryId, p, fields);
      const nextPageResults = nextPage.results;
      results.push(...nextPageResults);
    }
  }

  return results;
};
