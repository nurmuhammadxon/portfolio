import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
// layouts
import MainLayout from './layouts/MainLayout'
// pages
import HomePage from './pages/HomePage'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'about',
          element: <AboutMe />
        },
        {
          path: 'projects',
          element: <Projects />
        },
        {
          path: 'blog',
          element: <Blog />
        },
        {
          path: 'contact',
          element: <Contact />
        },
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App