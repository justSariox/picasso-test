import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'

import { PostDetailsPage, Posts } from '@/pages'
import { Layout } from '@/shared/ui/Layout'

const routes: RouteObject[] = [
  { path: '/', element: <Posts /> },
  { path: '/post/:id', element: <PostDetailsPage /> },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [...routes],
  },
])

export const Router = () => <RouterProvider router={router} />
