import { FC } from 'react';
import Post from '@/components/types/Post';
// import TimeSince from "../utils/TimeSince";

interface PostCardProps {
    post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
    return (
        <div className="w-full rounded-md bg-gradient-to-r from-purple-500 to-red-500 py-4 px-8">
            <h2 className="text-white text-3xl drop-shadow-md">{post.title}</h2>

            <p className="text-white opacity-75 font-light">{post?.date}</p>
            <p className="text-white opacity-75 font-light">
                {post.description}
            </p>
        </div>
    );
};

export default PostCard;
