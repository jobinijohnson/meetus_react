import React, { useState, useEffect } from 'react';
import '../App.css';
import './topBar.scss';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import iconExport from './iconExport';

function App() {
  const navigate = useNavigate();

  const [navigation, setNavigation] = useState([
    { name: 'Home Pages', icon: iconExport.HomeIcon, href: '/homepage', current: true },

    { type: 'section', name: 'COMMUNITY' },
    { name: 'Knowledge Base', icon: iconExport.NewsIcon, href: '/app/knowledgeBase', current: false },
    { name: 'Activity', icon: iconExport.ActivityIcon, href: '/app/activity', current: false },
    { name: 'Messages', icon: iconExport.MessageIcon, href: '/app/messages', current: false },
    { name: 'Members', icon: iconExport.MembersIcon, href: '/app/members', current: false },
    { name: 'Groups', icon: iconExport.GroupsIcon, href: '/app/groups', current: false },
    { name: 'Forums', icon: iconExport.ForumsIcon, href: '/app/forums', current: false },
    {
      name: 'Courses',
      icon: iconExport.CoursesIcon,
      href: '#',
      current: false,
      dropdown: [],
      isOpen: false
    },
    {
      name: 'Shop',
      icon: iconExport.ShopIcon,
      href: '#',
      current: false,
      dropdown: [],
      isOpen: false
    },
    { name: 'Membership', icon: iconExport.MemberIcon, href: '/app/membership', current: false },
    { name: 'Events', icon: iconExport.EventsIcon, href: '/app/events', current: false },

    { type: 'section', name: 'OTHERS' },
    { name: 'News', icon: iconExport.NewsIcon, href: '/app/news', current: false },
    { name: 'Jobs', icon: iconExport.ActivityIcon, href: '/app/jobs', current: false },
  ]);

  const [isOpen, setIsOpen] = useState(true);
  const [selectedSubmenu, setSelectedSubmenu] = useState('Job Requests');

  useEffect(() => {
    const jobMenu = navigation.find(item => item.name === 'Jobs');
    if (jobMenu && jobMenu.isOpen) {
      setSelectedSubmenu('Job Requests');
      navigate('/app/jobs/requests');
    }
  }, [navigate, navigation]);

  const handleNavItemClick = (name) => {
    window.scrollTo(0, 0);
    const updatedNavItems = navigation.map((item) => {
      if (item.name === name && !item.type) {
        return { ...item, current: true, isOpen: !item.isOpen };
      } else if (!item.type) {
        return { ...item, current: false, isOpen: false };
      }
      return item;
    });

    setNavigation(updatedNavItems);
  };

  const handleSubmenuClick = (submenuName) => {
    setSelectedSubmenu(submenuName);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="mt-5 flex flex-col flex-grow">
        <nav className="flex-1 space-y-1" aria-label="Sidebar">
          {navigation.map((item, index) => {
            if (item.type === 'section') {
              return (
                <div key={`section-${index}`} className="text-xs font-normal uppercase" style={{ fontSize: '14px', paddingLeft: '18px', paddingTop: '18px', paddingBottom: '6px', color: '#7281AA' }}>
                  {item.name}
                </div>
              );
            }

            return (
              <div key={item.name}>
                <div
                  onClick={() => { handleNavItemClick(item.name); }}
                  className={classNames(
                    item.current ? 'relative border-l-7 font-semibold border-[#8484FE] text-white bg-[#8484FE]' : 'border-l-7 border-transparent text-gray-600 hover:border-[#8484FE] hover:bg-[#8484FE] hover:text-white',
                    'group flex w-full items-center px-2 text-sm font-medium cursor-pointer'
                  )}
                >
                  <img
                    src={item.icon}
                    className={classNames(
                      item.current ? 'text-white' : 'text-gray-400 group-hover:text-white',
                      'mr-3 flex-shrink-0 w-6 h-6'
                    )}
                    style={{ filter: 'invert(15%) sepia(57%) saturate(1267%) hue-rotate(189deg) brightness(94%) contrast(96%)' }}
                    aria-hidden="true"
                    alt="icon"
                  />
                  <span className={`relative menuNav ${item.current ? 'text-white' : 'text-gray-600 group-hover:text-white'}`}>{item.name}</span>
                  {item.dropdown && (
                    <FontAwesomeIcon
                      icon={item.isOpen ? faChevronUp : faChevronRight}
                      className="ml-auto"
                      style={{ color: '#142D6F' }}
                    />
                  )}
                </div>
                {item.dropdown && item.isOpen && (
                  <div className="space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        onClick={() => handleSubmenuClick(subItem.name)}
                        className={classNames(
                          selectedSubmenu === subItem.name ? 'text-[#8484FE]' : 'text-gray-600',
                          'group flex w-full items-center px-2 py-2 text-sm font-medium'
                        )}
                      >
                        <span className="ml-8 submenu-content">{subItem.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* USER UPGRADE CARD */}
        {/* <div className="user-upgrade-card">
          <img
            src="https://i.pravatar.cc/300"
            alt="User"
            className="user-avatar"
          />
          <div className="user-info">
            <div className="user-name">
              Hi, <span className="bold">Jessica</span>
              <span className="badge">STARTER</span>
            </div>
            <div className="user-handle">@jessica</div>
          </div>
          <button className="upgrade-btn">Upgrade now</button>
        </div> */}
      </div>

      <div className={`rightSide bg-white ${isOpen ? 'w-[100%] pl-[250px]' : 'w-[100%] pl-[100px]'}`}>
        <Outlet context={[isOpen]} />
      </div>
    </div>
  );
}

export default App;
