import { swellnode } from "./init/node";

export const getCategoriesPage = async (pageNumber = 1, fields?: string[]) => {
  const results = await swellnode.get("/categories", {
    limit: 25,
    page: pageNumber,
    fields,
  });

  return results;
};

export const getAllCategories = async (fields?: string[]) => {
  let results: any[] = [];
  const firstPage = await getCategoriesPage(undefined, fields);
  const firstPageResults = firstPage.results;

  results.push(...firstPageResults);
  const numOfPages = firstPage.page_count;

  if (numOfPages > 1) {
    for (let p = 1; p <= numOfPages; p++) {
      const nextPage = await getCategoriesPage(p, fields);
      const nextPageResults = nextPage.results;
      results.push(...nextPageResults);
    }
  }

  return results;
};

export const getCategoryBySlug = async (slug: string, fields?: string[]) => {
  const results = await swellnode.get(`/categories/`, {
    where: {
      slug: { $eq: slug },
    },

    fields,
  });
  return results.results[0];
};

export const getCategoryById = async (id: string, fields?: string[]) => {
  const results = await swellnode.get(`/categories/${id}`, {
    fields,
  });
  return results;
};
