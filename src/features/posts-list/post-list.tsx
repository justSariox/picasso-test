import {IPost} from "../../entities/post/model/types.ts";
import {FC} from "react";
import {PostItem} from "../../entities/post/ui";

type PostListProps = {
    posts: IPost[]
};

export const PostsList: FC<PostListProps> = ({ posts }) => {
    return (
        <>
            {posts?.map((post: IPost) => (
                <PostItem key={post.id} {...post} />
            ))}
        </>
    );
};