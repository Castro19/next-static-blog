import PostCard from "@/components/PostCard";
import getPostMetadata from "@/utils/getPostMetaData";
import FilterMenu from "../components/filterMenu";
export default function Home() {
  const postMetaData = getPostMetadata("posts");

  return (
    <main className="bg-gray-100 min-h-screen">
      <FilterMenu />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {postMetaData.map((post, postIndex) => (
            <div
              key={postIndex}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg min-h-full"
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
