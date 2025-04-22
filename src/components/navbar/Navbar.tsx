import { Link } from "react-router-dom"
function Navbar() {
    return (
    <>
            <div className="flex justify-center bg-[#3C6B62] text-white font-serif p-5">
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">Ladydriver</Link>

                <div className='flex gap-4'>
                    <Link to='/sobre' className='hover:underline'>Sobre Nós</Link>
                    <Link to='/empresa' className='hover:underline'>Nosso produto</Link>
                </div>
                </div>
            </div>
    </>
    )
 }

 export default Navbar