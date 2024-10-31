
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ReactNode } from 'react';
import AuthLayout from './layout/AuthLayout';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import DetailProduct from './pages/DetailProduct';

const ProtectedRoute = ({ children }: {
  children: ReactNode
}) => {
  const token = localStorage.getItem('token')
  return !token ? <Navigate to="/auth" /> : children;
};
const ProtectedAdminRoute = ({ children }: {
  children: ReactNode
}) => {
  const adminToken = localStorage.getItem('adminToken')
  return !adminToken ? (
    <Navigate to="/" />
  ) : children;
};

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="detailproduct/:id" element={<DetailProduct />} />
            {/* <Route path="profile" element={<ProtectedRoute><Profile />
            </ProtectedRoute>} />
            <Route path="pay" element={<ProtectedRoute><PayPremium />
            </ProtectedRoute>} />
            <Route path="detailTV/:id" element={<ProtectedRoute><DetailTVSeries />
            </ProtectedRoute>} />
            <Route path="detailMovie/:id" element={<ProtectedRoute><DetailMovie />
            </ProtectedRoute>} />
            <Route path="tvshows" element={<ProtectedRoute><TVSeries />
            </ProtectedRoute>} />
            <Route path="movie" element={<ProtectedRoute><Movie />
            </ProtectedRoute>} /> */}
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
