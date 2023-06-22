interface PropTypes {
  /**Category name */
  title: string;
}

const CategoryHeader = ({ title }: PropTypes) => {
  return (
    <div className="bg-adp-copy-black py-8 text-center text-h4 uppercase text-adp-copy-white md:py-24 md:text-h2">
      {title}
    </div>
  );
};

export default CategoryHeader;
