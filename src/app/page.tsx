import CategoryCards from "@/components/CategoryCards/CategoryCards";
import FeaturedMain from "@/components/Featured/FeaturedPrimary/FeaturedMain";
import FeaturedSecondary from "@/components/Featured/FeaturedSecondary/FeaturedSecondary";
import FeaturedStacked from "@/components/Featured/FeaturedStacked/FeaturedStacked";
import Hero from "@/components/Hero/Hero";
import Promo from "@/components/Promo/Promo";

export default async function Home() {
  // RENDER
  return (
    <main className="pt-[5.934375rem]">
      {/* @ts-expect-error Server Component */}
      <Hero productSlug="xx99-mark-ii-headphones" />
      <div className="wrapper flex flex-col gap-24 px-6 py-24">
        {/* @ts-expect-error Server Component */}
        <CategoryCards />
        <section className="flex flex-col gap-6 md:gap-8 lg:gap-12">
          {/* @ts-expect-error Server Component */}
          <FeaturedMain productSlug="zx9-speaker" />
          {/* @ts-expect-error Server Component */}
          <FeaturedSecondary productSlug="zx7-speaker" />
          {/* @ts-expect-error Server Component */}
          <FeaturedStacked productSlug="yx1-wireless-earphones" />
        </section>
        <Promo />
      </div>
    </main>
  );
}
