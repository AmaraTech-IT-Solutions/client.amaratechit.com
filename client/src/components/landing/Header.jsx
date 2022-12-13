import React from 'react'

const Header = () => {
  return <header className="absolute left-0 top-0 z-50 bg-white/90 w-full backdrop-blur p-5">

        <div className="mx-auto h-[90px] max-w-7xl px-8 md:px-6">
            <div className="relative flex h-ful items-center justify-between border-slate-500/10">
                {/* logo */}

                <div className="w-[15rem] max-w-full">
                        <a href="/" className="w-full items-center justify-between">
                            <img src="https://media.amaratechit.com/wp-content/uploads/2022/10/Logo-1.png" alt="logo" className="w-full"/>
                        </a>
                </div>
                {/* END logo */}

                {/* menu */}

<div className="flex w-full items-center justify-between">
<nav className="absolute right-0 top-[90px] w-full max-w-[350px] rounded-lg border border-blue-200 bg-white py-5 px-6 shadow-lg shadow-blue-400/5 transition-all lg:static lg:block lg:max-w-full lg:border-none lg:shadow-none lg:bg-transparent lg:px-0 lg:py-0">
    <ul className="flex flex-col justify-center gap-8 lg:flex-row">
        <li><a href="/it" className="text-lg font-medium text-slate-700 duration-200 hover:text-blue-600 lg:text-base">I T Consulting</a></li>
        <li><a href="/technology" className="text-lg font-medium text-slate-700 duration-200 hover:text-blue-600 lg:text-base">Technology</a></li>
        <li><a href="/proc" className="text-lg font-medium text-slate-700 duration-200 hover:text-blue-600 lg:text-base">Procurement</a></li>
        <li><a href="/about" className="text-lg font-medium text-slate-700 duration-200 hover:text-blue-600 lg:text-base">About Us</a></li>
    </ul>
</nav>
</div>
    {/* END menu */}

    {/* menu btn */}
            <div class="flex">
                <a href="/register" class="mr-10 hidden rounded-md bg-blue-500 px-8 py-2.5 font-semibold text-white shadow-md shadow-blue-500/20 duration-200 hover:bg-blue-600 sm:block lg:mr-0">Register</a>

                <button  id="navbarToggler" className="block lg:hidden">
                    <ion-icon name="menu-outline" class="text-4xl text-blue-500"></ion-icon>
                </button>
            </div>
            </div>
        </div>
  </header>
}

export default Header