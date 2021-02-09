const Post = ({ post }) => {
  return (
    <div>
      <span>{post.id}</span>
      {" : "}
      <span href={`/posts/${post.id}`}>
        <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
          {post.title}
        </span>
      </span>
    </div>
  );
};
export default Post;
