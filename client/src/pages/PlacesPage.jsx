import {Link} from "react-router-dom"
import AccountNav from "../AccountNav";

export default function PlacesPage(){
    
    return (
        <div>
            <AccountNav/>
                <div className='text-center'>
                    list of all added places
                    <br/>
                <Link className='inline-flex gap-2 bg-primary text-white py-2 px-6 rounded-full' to={'/account/places/new'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                        Add new accommodation
                </Link>
            </div>
        </div>
    )
}