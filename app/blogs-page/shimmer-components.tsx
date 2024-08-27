export const ShimmeBlogCard = () => {
  return (
    <div className="animate-pulse w-full">
      <div className="flex gap-5 items-center">
        <div className="bg-gray-300 rounded-full w-16 h-16"></div>{" "}
        {/* Made larger */}
        <div className="flex flex-col gap-2 w-full">
          <div className="bg-gray-300 h-6 w-1/2 rounded"></div>{" "}
          {/* Made wider */}
          <div className="bg-gray-300 h-4 w-1/3 rounded"></div>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between mt-6">
        <div className="flex flex-col gap-4 w-full lg:w-2/3">
          <div className="bg-gray-300 h-8 w-3/4 rounded"></div>{" "}
          {/* Made taller and wider */}
          <div className="bg-gray-300 h-4 w-full rounded"></div>{" "}
          {/* Full width */}
        </div>
        <div className="bg-gray-300 w-full h-64 rounded-2xl lg:w-96 lg:h-64 mt-4 lg:mt-0"></div>{" "}
        {/* Increased height */}
      </div>

      <div className="flex gap-3 mt-6">
        <div className="bg-gray-300 h-10 w-20 rounded-full"></div>{" "}
        {/* Made larger */}
        <div className="bg-gray-300 h-10 w-20 rounded-full"></div>
        <div className="bg-gray-300 h-10 w-20 rounded-full"></div>
      </div>
    </div>
  );
};

export const ShimmerBlogDetail = () => {
  return (
    <div className="animate-pulse flex flex-col items-center px-16 py-10 gap-10 lg:px-44 md:px-32 min-h-[100vh] w-full">
      <div className="flex flex-col gap-3 items-center w-full">
        <div className="bg-gray-300 h-10 w-3/4 rounded"></div> {/* Title */}
        <div className="bg-gray-300 h-6 w-1/2 rounded"></div>{" "}
        {/* Tags and Read Time */}
      </div>
      <div className="bg-gray-300 w-full h-80 rounded-md shadow"></div>{" "}
      {/* Main Image */}
      <div className="flex flex-col items-center gap-5 w-full">
        <div className="bg-gray-300 rounded-full h-12 w-12"></div>{" "}
        {/* Author Image */}
        <div className="space-y-2 text-center w-full">
          <div className="bg-gray-300 h-6 w-1/3 mx-auto rounded"></div>{" "}
          {/* Author Name */}
          <div className="bg-gray-300 h-6 w-1/4 mx-auto rounded"></div>{" "}
          {/* Author Handle */}
        </div>
      </div>
      <div className="bg-gray-300 h-40 w-full rounded"></div>{" "}
      {/* Blog Content */}
      <div className="flex flex-col gap-4 w-full md:self-start">
        <div className="bg-gray-300 h-8 w-1/4 rounded"></div>{" "}
        {/* Related Blogs Header */}
        <div className="flex gap-9 flex-wrap w-full">
          <div className="bg-gray-300 h-40 w-1/3 rounded-md"></div>{" "}
          {/* Related Blog 1 */}
          <div className="bg-gray-300 h-40 w-1/3 rounded-md"></div>{" "}
          {/* Related Blog 2 */}
          <div className="bg-gray-300 h-40 w-1/3 rounded-md"></div>{" "}
          {/* Related Blog 3 */}
        </div>
      </div>
    </div>
  );
};
