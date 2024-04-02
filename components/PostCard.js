import Link from "next/link"; // Ensure Link is imported from Next.js for client-side navigation

const PostCard = ({ post }) => {
  // Destructure all necessary fields from the post object
  const { slug, title, bio, priority1, priority2, priority3 } = post;

  return (
    <div className="flex flex-col h-full">
      {" "}
      {/* Adjusted for full height and flex column */}
      <div className="border border-gray-200 rounded-xl shadow-lg overflow-hidden flex flex-col flex-grow">
        {" "}
        {/* Flex-grow ensures content uses available space */}
        <div className="p-4 flex-grow">
          {" "}
          {/* Flex-grow to ensure this div also expands */}
          <Link href={`/post/${slug}`} className="hover:underline">
            {" "}
            {/* Encapsulate the title in an anchor tag for accessibility */}
            <h1 className="text-2xl font-bold">{title}</h1>
          </Link>
          <p className="mt-2">{bio}</p>
          <div className="mt-4">
            <p className="text-gray-600">Priority 1: {priority1}</p>
            <p className="text-gray-600">Priority 2: {priority2}</p>
            <p className="text-gray-600">Priority 3: {priority3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
