
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/appLayout'
import LandingPage from './pages/landingPage'
import OnboardingPage from './pages/onBoarding'
import JobListing from './pages/jobListing'
import JobPage from './pages/job'
import MyJOb from './pages/myJob'
import SavedJob from './pages/savedJob'
import PostJob from './pages/postJob'
import { ThemeProvider } from './components/theme-provider'
import ProtectedRoute from './components/protected.route'

function App() {


  const router = createBrowserRouter([
    {
      element:<AppLayout />,
      children:
      [ {
        
          path:"/",
          element: <LandingPage />
        
      },
       {
        
        

          path:"/onboarding",
          element: 
          <ProtectedRoute>
          <OnboardingPage />
          </ProtectedRoute>
        
      },

       {
        
          path:"/jobs",
          element:
          <ProtectedRoute>
             <JobListing />
          </ProtectedRoute>
        
      },
       {
        
          path:"/job/:id",
          element:
          <ProtectedRoute>

            <JobPage />
          </ProtectedRoute>
        
      },
       {
        
          path:"/myjobs",
          element: 
          <ProtectedRoute>
            <MyJOb />
          
          </ProtectedRoute>

        
      },
       {
        
          path:"/savedjobs",
          element: 
          
          <ProtectedRoute>
            
            <SavedJob />
          </ProtectedRoute>
        
      },
       {
        
          path:"/postjobs",
          element:
          <ProtectedRoute>

            <PostJob />
          </ProtectedRoute>
          
        
      },
    ]
    }
  ])

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
       <RouterProvider router={router} />
    </ThemeProvider>
     
    </>
  )
}

export default App
