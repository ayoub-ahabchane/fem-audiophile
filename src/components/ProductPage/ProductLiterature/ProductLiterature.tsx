interface PropTypes {
  literature: string;
  boxContents: Array<{ quantity: number; name: string }>;
}

const ProductLiterature = ({ literature, boxContents }: PropTypes) => {
  const featuresMarkup = { __html: `<p>${literature}</p>` };

  return (
    <div className="grid grid-flow-row gap-y-[5.5rem] lg:grid-flow-col lg:grid-cols-8 lg:gap-x-28">
      <article className="flex flex-col gap-6 lg:col-span-5">
        <h2 className="text-h5 uppercase md:mb-8 md:text-h3">Features</h2>
        <div
          className="text-adp-copy-black/50"
          dangerouslySetInnerHTML={featuresMarkup}
        />
      </article>
      <article className="md:grid md:grid-cols-2 lg:col-span-3 lg:flex lg:flex-col lg:gap-6">
        <h2 className="mb-6 text-h5 uppercase md:mb-8 md:text-h3">
          In the box
        </h2>
        <ul className="flex flex-col gap-2">
          {boxContents.map(({ quantity, name }) => (
            <li key={name} className="flex gap-6">
              <span className="font-bold text-adp-tangerine-400">
                {quantity}x
              </span>
              <span className="capitalize opacity-50">{name}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default ProductLiterature;
