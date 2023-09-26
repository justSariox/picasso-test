import {createBrowserRouter, RouteObject, RouterProvider} from "react-router-dom";
import {Posts} from "../pages/posts.tsx"
import {PostDetailsPage} from "../pages/post-details-page.tsx";
import {Layout} from "../shared/ui/Layout/Layout.tsx";

const routes: RouteObject[] = [
    {path: '/', element: <Posts/>},
    {path: '/post/:id', element: <PostDetailsPage/>}
];


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            ...routes
        ]
    },
])

export const Router = () => <RouterProvider router={router}/>

