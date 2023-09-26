import {createBrowserRouter, RouteObject, RouterProvider} from "react-router-dom";
import {Layout} from "../shared/ui/Layout";
import {PostDetailsPage, Posts} from "../pages";

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

