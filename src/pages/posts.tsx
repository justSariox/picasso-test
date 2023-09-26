import {useEffect, useState} from "react";

import {Box, Typography} from "@mui/material";
import {useGetPostsQuery} from "../entities/post/api";
import {PostsList} from "../features/posts-list";

export const Posts = () => {
    const [page, setPage] = useState<number>(1)
    const { data: posts, isLoading, isFetching, isError } = useGetPostsQuery(
        {
            _page: page,
            _limit: 5,
        },
    );

    const handleScroll = () => {
        const { scrollTop, offsetHeight } = document.documentElement!;
        const isBottom = window.innerHeight + scrollTop === offsetHeight
        if (isBottom && !isFetching && !isLoading) {
            setPage(prevState => prevState + 1);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isFetching]);

    return (
        <Box margin={2}>

            {isError && <h2>Error</h2>}
            {isLoading && <h2>Loading</h2>}
            <Typography variant={'h3'}>All Posts Page</Typography>
            <PostsList posts={posts!}/>
        </Box>
)
};

