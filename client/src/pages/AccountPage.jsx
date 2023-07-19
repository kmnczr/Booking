import { useContext, useState } from "react"
import { UserContext } from "../UserContext.jsx"
import { Link, Navigate, useParams } from "react-router-dom"
import axios from "axios"
import PlacesPage from "./PlacesPage.jsx"

export default function AccountPage(){

    const [redirect, setRedirect] = useState(null)
    const {ready,user,setUser} = useContext(UserContext)

    let {subpage} = useParams()
    if(subpage === undefined){
        subpage = 'profile'
    }

    async function logout(){
        await axios.post('/api/logout')
        setRedirect('/')
        setUser(null)
    }

    if(!ready){
        return 'Loading...'
    }

    if(ready && !user && !redirect){
        return <Navigate to={'/login'}></Navigate>
    }
    
    function linkClasses(type=null){
        let classes = 'p-2 px-6'
        if(type === subpage) {
            classes += ' text-white py-2 px-6 bg-primary rounded-full'
        }
        return classes
    }

    if(redirect){
        return <Navigate to={redirect}></Navigate>
    }

    return(
        <div>
            <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
                <Link className={linkClasses('profile')} to={'/account'}>My profile</Link>
                <Link className={linkClasses('bookings')} to={'/account/bookings'}>My bookings</Link>
                <Link className={linkClasses('places')} to={'/account/places'}> My accommodations</Link>
            </nav>
            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Loggen in as {user.name} ({user.email}) <br/>
                    <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
                </div>
            )}
            {subpage === 'places' && (
                <PlacesPage />
            )}
        </div>
    )
}