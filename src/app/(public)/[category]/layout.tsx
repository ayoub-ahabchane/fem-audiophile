import { getAllCategories } from "@/lib/swell/categories";
import React from "react";

export const dynamicParams = false;
export const generateStaticParams = async () => {
  const categories = await getAllCategories(["name", "slug", "id"]);
  const categoryParams = categories.map(({ slug }: { slug: string }) => ({
    category: slug,
  }));

  return categoryParams;
};

const layout = ({ children }: { children: React.ReactElement }) => {
  return <>{children}</>;
};

export default layout;
