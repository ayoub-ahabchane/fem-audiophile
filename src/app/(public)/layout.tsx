import CategoryCards from "@/components/CategoryCards/CategoryCards";
import Promo from "@/components/Promo/Promo";
import React from "react";

const layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <main className="belowBar pb-[7.5rem] lg:pb-40">
      {children}
      <div className="wrapper flex flex-col gap-[7.5rem] lg:gap-40">
        {/* @ts-expect-error Server Component */}
        <CategoryCards />
        {/* @ts-expect-error Server Component */}
        <Promo />
      </div>
    </main>
  );
};

export default layout;
