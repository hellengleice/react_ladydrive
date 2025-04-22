import { GithubLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-[#3C6B62] text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold font-serif'>
                            Ladydriver | Copyright: {data}
                        </p>
                    <p className='text-lg font-serif'>Para mais projetos acesse! </p>
                    <div className='flex gap-2'>
	            <a href="https://github.com/Abilafora/projeto_integrador_rh_queens_-front.git" target="_blank">
                    <GithubLogo size={32} weight='bold' />
                    </a>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default Footer