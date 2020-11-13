import { motion } from "framer-motion";


/* framer motion  config 
https://codesandbox.io/s/uotor?module=/src/Example.tsx&file=/src/Example.tsx:73-349
*/
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const variantItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };


const menuItems = [
    {
        name: 'Folders',
        svg: (<svg
        aria-hidden="true"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6"
        >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
        />
        </svg>)
    },
    {
        name: 'Messages',
        svg: (<svg
        aria-hidden="true"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>)
    },
    {
        name: 'Documents',
        svg: (<svg
        aria-hidden="true"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>)
    }
]

const MenuItem = (item, active) => (
<motion.a
    variants={variantItem}
    key={item.name}
    href="#"
    className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg"
>
    <span className="sr-only">{item.name}</span>
    {item.svg}
</motion.a>
)

const Aside = () => (
  <motion.aside
  transition={{ duration: 0.2 }}
  initial={{ x: -88}}
        animate={{ x: 0 }} 
        
  className="hidden sm:flex sm:flex-col">
    <a
      href="#"
      className="inline-flex items-center justify-center h-20 w-20 bg-purple-600 hover:bg-purple-500 focus:bg-purple-500"
    >
      <svg fill="none" viewBox="0 0 64 64" className="h-12 w-12">
        <title>Company logo</title>
        <path
          d="M32 14.2c-8 0-12.9 4-14.9 11.9 3-4 6.4-5.6 10.4-4.5 2.3.6 4 2.3 5.7 4 2.9 3 6.3 6.4 13.7 6.4 7.9 0 12.9-4 14.8-11.9-3 4-6.4 5.5-10.3 4.4-2.3-.5-4-2.2-5.7-4-3-3-6.3-6.3-13.7-6.3zM17.1 32C9.2 32 4.2 36 2.3 43.9c3-4 6.4-5.5 10.3-4.4 2.3.5 4 2.2 5.7 4 3 3 6.3 6.3 13.7 6.3 8 0 12.9-4 14.9-11.9-3 4-6.4 5.6-10.4 4.5-2.3-.6-4-2.3-5.7-4-2.9-3-6.3-6.4-13.7-6.4z"
          fill="#fff"
        />
      </svg>
    </a>
    <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
      <motion.nav 
      initial="hidden"
      animate="visible"
        variants={container}
      className="flex flex-col mx-4 my-6 space-y-4">
          
        
        <a
          href="#"
          className="inline-flex items-center justify-center py-3 text-purple-600 bg-white rounded-lg"
        >
          <span className="sr-only">Dashboard</span>
          <svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </a>

        {menuItems.map(item => MenuItem(item))}
       
      </motion.nav>
      <div className="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700">
        <button className="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
          <span className="sr-only">Settings</span>
          <svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  </motion.aside>
);

const Header = () => (
  <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
    <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
      <span className="sr-only">Menu</span>
      <svg
        aria-hidden="true"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h7"
        />
      </svg>
    </button>
    <div className="relative w-full max-w-md sm:-ml-2 flex items-center">
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400"
      >
        <path
          fill-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clip-rule="evenodd"
        />
      </svg>
      <input
        type="text"
        role="search"
        placeholder="Search..."
        className="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg"
      />
    </div>
    <div className="flex flex-shrink-0 items-center ml-auto">
      <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
        <span className="sr-only">User Menu</span>
        <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
          <span className="font-semibold">Grace Simmons</span>
          <span className="text-sm text-gray-600">Lecturer</span>
        </div>
        <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="user profile photo"
            className="h-full w-full object-cover"
          />
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="hidden sm:block h-6 w-6 text-gray-300"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div className="border-l pl-3 ml-3 space-x-1">
        <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
          <span className="sr-only">Notifications</span>
          <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
          <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
          <svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>
        <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
          <span className="sr-only">Log out</span>
          <svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
);

const Main = () => (
  <motion.main 
  
  transition={{ duration: 0.3, delay: 0}}
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 15, opacity: 0 }}
  className="p-6 sm:p-10 space-y-6">
    <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
      <div className="mr-6">
        <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
        <h2 className="text-gray-600 ml-0.5">Mobile UX/UI Design course</h2>
      </div>
      <div className="flex flex-wrap items-start justify-end -mb-3">
        <button className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
          <svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
          Manage dashboard
        </button>
        <button className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
          <svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Create new dashboard
        </button>
      </div>
    </div>

    <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      <div className="flex items-center p-8 bg-white shadow rounded-lg">
        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
          <svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <div>
          <span className="block text-2xl font-bold">62</span>
          <span className="block text-gray-500">Students</span>
        </div>
      </div>
      <div className="flex items-center p-8 bg-white shadow rounded-lg">
        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
          <svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        </div>
        <div>
          <span className="block text-2xl font-bold">6.8</span>
          <span className="block text-gray-500">Average mark</span>
        </div>
      </div>
      <div className="flex items-center p-8 bg-white shadow rounded-lg">
        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
          <svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
            />
          </svg>
        </div>
        <div>
          <span className="inline-block text-2xl font-bold">9</span>
          <span className="inline-block text-xl text-gray-500 font-semibold">
            (14%)
          </span>
          <span className="block text-gray-500">Underperforming students</span>
        </div>
      </div>
      <div className="flex items-center p-8 bg-white shadow rounded-lg">
        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
          <svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <div>
          <span className="block text-2xl font-bold">83%</span>
          <span className="block text-gray-500">Finished homeworks</span>
        </div>
      </div>
    </section>

    <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
      <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
        <div className="px-6 py-5 font-semibold border-b border-gray-100">
          The number of applied and left students per month
        </div>
        <div className="p-4 flex-grow">
          <div className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
            Chart
          </div>
        </div>
      </div>
      <div className="flex items-center p-8 bg-white shadow rounded-lg">
        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
          <svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path
              fill="#fff"
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </div>
        <div>
          <span className="block text-2xl font-bold">25</span>
          <span className="block text-gray-500">Lections left</span>
        </div>
      </div>
      <div className="flex items-center p-8 bg-white shadow rounded-lg">
        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
          <svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <span className="block text-2xl font-bold">139</span>
          <span className="block text-gray-500">Hours spent on lections</span>
        </div>
      </div>
      <div className="row-span-3 bg-white shadow rounded-lg">
        <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
          <span>Students by average mark</span>
          <button
            type="button"
            className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Descending
            <svg
              className="-mr-1 ml-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto" style={{ maxHeight: "24rem" }}>
          <ul className="p-6 space-y-6">
            <li className="flex items-center">
              <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/82.jpg"
                  alt="Annette Watson profile picture"
                />
              </div>
              <span className="text-gray-600">Annette Watson</span>
              <span className="ml-auto font-semibold">9.3</span>
            </li>
            <li className="flex items-center">
              <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/men/81.jpg"
                  alt="Calvin Steward profile picture"
                />
              </div>
              <span className="text-gray-600">Calvin Steward</span>
              <span className="ml-auto font-semibold">8.9</span>
            </li>
            <li className="flex items-center">
              <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/men/80.jpg"
                  alt="Ralph Richards profile picture"
                />
              </div>
              <span className="text-gray-600">Ralph Richards</span>
              <span className="ml-auto font-semibold">8.7</span>
            </li>
            <li className="flex items-center">
              <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/men/79.jpg"
                  alt="Bernard Murphy profile picture"
                />
              </div>
              <span className="text-gray-600">Bernard Murphy</span>
              <span className="ml-auto font-semibold">8.2</span>
            </li>
            <li className="flex items-center">
              <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/78.jpg"
                  alt="Arlene Robertson profile picture"
                />
              </div>
              <span className="text-gray-600">Arlene Robertson</span>
              <span className="ml-auto font-semibold">8.2</span>
            </li>
            <li className="flex items-center">
              <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/77.jpg"
                  alt="Jane Lane profile picture"
                />
              </div>
              <span className="text-gray-600">Jane Lane</span>
              <span className="ml-auto font-semibold">8.1</span>
            </li>
            <li className="flex items-center">
              <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/men/76.jpg"
                  alt="Pat Mckinney profile picture"
                />
              </div>
              <span className="text-gray-600">Pat Mckinney</span>
              <span className="ml-auto font-semibold">7.9</span>
            </li>
            <li className="flex items-center">
              <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt="Norman Walters profile picture"
                />
              </div>
              <span className="text-gray-600">Norman Walters</span>
              <span className="ml-auto font-semibold">7.7</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col row-span-3 bg-white shadow rounded-lg">
        <div className="px-6 py-5 font-semibold border-b border-gray-100">
          Students by type of studying
        </div>
        <div className="p-4 flex-grow">
          <div className="flex items-center justify-center h-full px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
            Chart
          </div>
        </div>
      </div>
    </section>

    <section className="text-right font-semibold text-gray-500">
      <a href="#" className="text-purple-600 hover:underline">
        Recreated on Codepen
      </a>{" "}
      with{" "}
      <a
        href="https://tailwindcss.com/"
        className="text-teal-400 hover:underline"
      >
        Tailwind CSS
      </a>{" "}
      by Azri Kahar,{" "}
      <a
        href="https://dribbble.com/shots/10711741-Free-UI-Kit-for-Figma-Online-Courses-Dashboard"
        className="text-purple-600 hover:underline"
      >
        original design
      </a>{" "}
      made by Chili Labs
    </section>
  </motion.main>
);

function Layout() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Aside></Aside>

      <div className="flex-grow text-gray-800">
        <Header></Header>
        <Main></Main>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout></Layout>
  );
}
