const TypeSet = () => {
  type Variant = {
    name: string;
    title: string;
    size: number;
    sampleText: string;
    casing: "uppercase" | "capitalize" | "none";
    weight: number;
  };

  const variants: Variant[] = [
    {
      name: "!text-subtitle",
      title: "subtitle",
      size: 13,
      sampleText: "Fusce ut est sed dolor gravida convallis",
      casing: "uppercase",
      weight: 700,
    },
    {
      name: "!text-overline",
      title: "overline",
      size: 14,
      sampleText: "Lorem Ipsum",
      casing: "uppercase",
      weight: 400,
    },
    {
      name: "!text-body",
      title: "body",
      size: 15,
      sampleText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      casing: "none",
      weight: 500,
    },
    {
      name: "!text-h6",
      title: "h6",
      size: 18,
      sampleText: "natoque penatibus et",
      casing: "uppercase",
      weight: 700,
    },
    {
      name: "!text-h5",
      title: "h5",
      size: 24,
      sampleText: "nascetur ridiculus mus",
      casing: "uppercase",
      weight: 700,
    },
    {
      name: "!text-h4",
      title: "h4",
      size: 28,
      sampleText: "interdum consectetuer",
      casing: "uppercase",
      weight: 700,
    },
    {
      name: "!text-h3",
      title: "h3",
      size: 32,
      sampleText: "Nunc sem lacus accum",
      casing: "uppercase",
      weight: 700,
    },
    {
      name: "!text-h2",
      title: "h2",
      size: 40,
      sampleText: "Donec nec justo eget felis facilisis",
      casing: "uppercase",
      weight: 700,
    },
    {
      name: "!text-h1",
      title: "h1",
      size: 56,
      sampleText: "Morbi interdum mollis sapien",
      casing: "uppercase",
      weight: 700,
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      {variants.map(({ name, title, size, sampleText, casing }) => {
        const textClass = `${casing !== "none" && casing} ${name}`;

        return (
          <div
            key={name}
            className="flex items-center gap-5 rounded-md border bg-neutral-50 px-4 py-3"
          >
            <div className="flex w-14 shrink-0 flex-col items-center justify-center gap-1 !text-xs text-neutral-400">
              <span className="!text-xs font-bold">{title}</span>
            </div>
            <p
              className={`text-ellipsis ${textClass} overflow-hidden whitespace-nowrap`}
            >
              {sampleText}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default TypeSet;
