import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Nav() {
  const [navigation, setNavigation] = useState([
    { name: 'LeaderBoard', href: '/LeaderBoard', current: false },
    { name: 'Sponsors', href: '/Sponsers', current: false },
    { name: 'Events', href: '/Events', current: false },
    { name: 'Matches', href: '/Matches', current: false },
    { name: 'Teams', href: '/Teams', current: false },
  ]);
  
  const navigate = useNavigate();

  function handleLogoClick() {
    setNavigation((prevNavigation) =>
      prevNavigation.map((item) => ({
        ...item,
        current: false,
      }))
    );
    navigate('/'); // Programmatically navigate to the homepage
  }

  function handleNavigationClick(name) {
    setNavigation((prevNavigation) =>
      prevNavigation.map((item) =>
        item.name === name ? { ...item, current: true } : { ...item, current: false }
      )
    );
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-6">
        <div className="w-auto relative flex h-24 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://th.bing.com/th/id/OIG4.onB2FLDSZtb9ECxW7JEW?w=1024&h=1024&rs=1&pid=ImgDetMain"
                className="h-10 w-11 rounded-full cursor-pointer"
                onClick={()=>handleLogoClick()}
              />
            </div>

            <div className="hidden sm:ml-16 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    onClick={() => handleNavigationClick(item.name)}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-xl font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-black p-2 hover:bg-gray-700 text-gray-200 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-black-800 text-lg shadow-2xl"
            >
              <span className="absolute -inset-1.5" />
              JOIN NOW
            </button>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              onClick={() => handleNavigationClick(item.name)}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
