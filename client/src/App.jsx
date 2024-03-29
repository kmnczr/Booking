import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './components/Layout'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import { UserContextProvider } from './UserContext'
import PlacesPage from './pages/PlacesPage'
import PLacesFormPage from './pages/PlacesFormPage'
import PlacePage from './pages/PlacePage'
import BookingsPage from './pages/BookingsPage';
import BookingPage from './pages/BookingPage';

//import axios from 'axios'

//axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/account" element={<ProfilePage/>}/>
          <Route path="/account/places" element={<PlacesPage/>}/>
          <Route path="/account/places/new" element={<PLacesFormPage/>}/>
          <Route path="/account/places/:id" element={<PLacesFormPage/>}/>
          <Route path="/place/:id" element={<PlacePage/>}/>
          <Route path="/account/bookings" element={<BookingsPage />} />
          <Route path="/account/bookings/:id" element={<BookingPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
    
  )
}

export default App
