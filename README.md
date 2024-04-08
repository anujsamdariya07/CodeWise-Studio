# CodeWise-Studio

Hello everyone, this is my first intermediate full stack project. I will be making an online compiler named "CodeWise Studio". 
As I go through making this project, I will be listing out all the tech stacks, dependencies, etc. that are required for this.

## Tech Stacks
1. React JS

## UIs Used
Designing UI is one of the hardest task for projects like these. Being not a specialist myself, I will be providing code for it down below. I have tried to keep it as minimalistic as possible. 

1. Header.jsx
``` javascript

<nav className="flex items-center justify-between bg-gray-800 p-4 -m-8">
    <div className="flex items-center flex-shrink-0 text-white mr-6 gap-8">
        <span className="font-semibold text-xl tracking-tight text-gray-100 ">
            <Link
            to='/'>
            CodeWise
            </Link>
        </span>
        <NavLink
          to="/about"
          className={({ isActive }) => `${isActive ? "text-blue-400" : "text-gray-300"} hover:text-white`}>
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => `${isActive ? "text-blue-400" : "text-gray-300"} hover:text-white`}>
          Contact Us
        </NavLink>
    </div>
    <div className="flex items-center flex-shrink-0 text-white mr-6 gap-8-8">
        <ul className="flex space-x-4">
            <li>
                <NavLink
                to="/login"
                className={({ isActive }) => `${isActive ? "text-blue-400" : "text-gray-300"} hover:text-white`}>
                    Login
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/signup"
                className={({ isActive }) => `${isActive ? "text-blue-400" : "text-gray-300"} hover:text-white`}>
                    SignUp
                </NavLink>
            </li>
            <li>
                {/* <NavLink
                to="/account"
                >
                    <img 
                    className='rounded-full h-7 w-7 bg-gray-800' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="Account" />
                </NavLink> */}
                <NavLink
                to="/account"
                className="opacity-100"
                >
                    <img
                    className="rounded-full h-7 w-7 bg-gray-800"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                    alt="Account"
                    />
                </NavLink>
            </li>
        </ul>
    </div>
</nav>

```

2. Footer.jsx
```javascript
<div>
      <footer className="flex items-center justify-between bg-gray-800 p-4 -m-8">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex justify-between space-x-4">
            <ul className='flex justify-between flex-row gap-56 underline text-xs'>
              <li className='flex justify-between underline flex-col gap-3'>
                <a
                  href="https://github.com/anujsamdariya07"
                  className="text-white hover:text-gray-300">
                  GitHub
                </a>
                <a
                  href="https://www.facebook.com/anuj.samdariya.9"
                  className="text-white hover:text-gray-300">
                  Facebook
                </a>
              </li>
              <li className='flex underline flex-col gap-3'>
                <a
                  href="https://twitter.com/anujsamdariya07"
                  className="text-white hover:text-gray-300">
                  X
                </a>
                <a
                  href="https://instagram.com/anujsamdariya07/"
                  className="text-white hover:text-gray-300">
                  Instagram
                </a>
              </li>
              <li className='flex underline flex-col gap-3'>
                <a
                  href="https://linkedin.com/your-linkedin"
                  className="text-white hover:text-gray-300">
                  LinkedIn
                </a>
                <div>
                  <p className="text-white underline">
                    Jabalpur, Madhya Pradesh
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
```

3. Home.jsx
```javascript
<>
<div className='text-white bg-gray h-screen flex flex-col justify-center items-center gap-5'>
    <div>
        <h1 className='italic  text-2xl'>
            "Elevate your coding experience with CodeWise - where creativity meets functionality."
        </h1>
    </div>
    <div className='flex flex-row gap-3'>
        <button
        className='hover:bg-gray-800 hover:border-white hover:border-s active:border-none focus-visible:border-none'
        >
            Get Started
        </button>
        <button
            className='hover:bg-gray-800 hover:border-white active:border-white focus-visible:border'>
            Learn More
        </button>
    </div>
</div>
<div className='text-white bg-gray h-64 flex flex-col py-12 items-center gap-5'
    >
    <div className='flex items-center'>
        <h1 className='italic  text-1xl w-96'> "Join a thriving developer community, share code snippets, and collaborate on open-source projects."</h1>
        <img width='200' height={170} src="https://media.licdn.com/dms/image/C4D08AQEthYNXSVIqIw/croft-frontend-shrinkToFit1024/0/1597380762478?e=2147483647&v=beta&t=Sz0v4y9IMm5gDjOoEz1AEJerlByJRr0HVuYz75oJgW4" alt="" />
    </div>
    </div>
    <div className='text-white bg-gray h-64 flex flex-col py-12 items-center gap-5'
    >
    <div className='flex items-center'>
        <h1 className='italic  text-1xl w-96'> "Access a wide range of programming languages and frameworks for seamless coding experience."</h1>
        <img width='200' height={170} src="https://media.licdn.com/dms/image/C4D08AQEthYNXSVIqIw/croft-frontend-shrinkToFit1024/0/1597380762478?e=2147483647&v=beta&t=Sz0v4y9IMm5gDjOoEz1AEJerlByJRr0HVuYz75oJgW4" alt="" />
    </div>
</div>
    <div className='text-white bg-gray h-64 flex flex-col py-12 items-center gap-5'
    >
    <div className='flex items-center'>
        <h1 className='italic  text-1xl w-96'> "Access educational resources, tutorials, and coding challenges to enhance your skills."</h1>
        <img width='200' height={170} src="https://media.licdn.com/dms/image/C4D08AQEthYNXSVIqIw/croft-frontend-shrinkToFit1024/0/1597380762478?e=2147483647&v=beta&t=Sz0v4y9IMm5gDjOoEz1AEJerlByJRr0HVuYz75oJgW4" alt="" />
    </div>
</div>
</>
```