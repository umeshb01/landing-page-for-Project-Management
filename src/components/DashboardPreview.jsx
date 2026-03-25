import React from 'react';
import {
  Home, Inbox, CheckSquare, Briefcase, Target, Settings,
  UserPlus, ChevronLeft, ChevronRight, Lock, RotateCw, Plus,
  Search, Share2, MoreHorizontal, Star, Heart, Menu,
  Share,
  Share2Icon,
  SearchIcon
} from 'lucide-react';
import avatar1 from '../assets/avatars/avatar1.png';
import avatar2 from '../assets/avatars/avatar2.png';
import avatar3 from '../assets/avatars/avatar3.png';

const DashboardPreview = () => {
  // Calendar data for March 2026
  const calendarDays = [];
  const daysInMonth = 31;
  const firstDayOfWeek = 0;
  for (let i = 0; i < firstDayOfWeek; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) calendarDays.push(i);

  const sidebarItems = [
    { name: 'Home', icon: Home, active: true },
    { name: 'Inbox', icon: Inbox, active: false },
    { name: 'My Task', icon: CheckSquare, active: false },
    { name: 'Portfolios', icon: Briefcase, active: false },
    { name: 'Goals', icon: Target, active: false },
    { name: 'Settings', icon: Settings, active: false },
  ];

  const statsCards = [
    { title: 'Active Project', value: '18', color: 'bg-blue-50 text-blue-600', progress: 72, progressColor: '#3b82f6', percent: '15%', trend: 'less than last week' },
    { title: 'Complete Task', value: '23', color: 'bg-pink-50 text-pink-600', progress: 85, progressColor: '#ec4899', percent: '24%', trend: 'more than last week' },
    { title: 'To-do List', value: '09', color: 'bg-purple-50 text-purple-600', progress: 45, progressColor: '#8b5cf6', percent: '8%', trend: 'less than last week' },
    { title: 'On Hold', value: '05', color: 'bg-amber-50 text-amber-600', progress: 30, progressColor: '#f59e0b', percent: '12%', trend: 'less than last week' },
  ];

  const projects = [
    { name: 'Website Redesign', category: 'Design', progress: 75 },
    { name: 'Mobile App', category: 'Development', progress: 45 },
    { name: 'Brand Identity', category: 'Marketing', progress: 90 },
    { name: 'API Integration', category: 'Backend', progress: 60 },
  ];

  const ProgressRing = ({ progress, color, size = 40 }) => {
    const radius = (size - 6) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;
    return (
      <svg width={size} height={size} className="transform -rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="#e5e7eb" strokeWidth="3" fill="none" />
        <circle cx={size / 2} cy={size / 2} r={radius} stroke={color} strokeWidth="3" fill="none"
          strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round"
          className="transition-all duration-1000"
        />
      </svg>
    );
  };

  // Semi-circle (half donut) chart
  const SemiCircleChart = ({ progress = 68, size = 100 }) => {
    const radius = (size - 10) / 2;
    const circumference = Math.PI * radius; // half circle
    const strokeDashoffset = circumference - (progress / 100) * circumference;
    return (
      <div className="flex flex-col items-center">
        <svg width={size} height={size / 2 + 10} viewBox={`0 0 ${size} ${size / 2 + 10}`}>
          <defs>
            <linearGradient id="semiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          {/* Background arc */}
          <path
            d={`M 5,${size / 2 + 5} A ${radius},${radius} 0 0,1 ${size - 5},${size / 2 + 5}`}
            fill="none" stroke="#e5e7eb" strokeWidth="6" strokeLinecap="round"
          />
          {/* Foreground arc */}
          <path
            d={`M 5,${size / 2 + 5} A ${radius},${radius} 0 0,1 ${size - 5},${size / 2 + 5}`}
            fill="none" stroke="url(#semiGradient)" strokeWidth="6" strokeLinecap="round"
            strokeDasharray={circumference} strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000"
          />
          <text x={size / 2} y={size / 2} textAnchor="middle" className="text-xs font-black fill-slate-700">
            {progress}%
          </text>
        </svg>
      </div>
    );
  };

  // Mini calendar for right panel
  const MiniCalendar = () => (
    <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
      <div className="flex items-center justify-between px-2.5 py-2 border-b border-slate-100">
        <p className="font-semibold text-slate-700 text-[10px]">March 2026</p>
        <div className="flex space-x-1">
          <ChevronLeft size={9} className="text-slate-400 cursor-pointer" />
          <ChevronRight size={9} className="text-slate-400 cursor-pointer" />
        </div>
      </div>
      <div className="p-1.5">
        <div className="grid grid-cols-7 gap-0.5 text-center mb-0.5">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
            <div key={i} className="text-[7px] font-semibold text-slate-400 py-0.5">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-0.5 text-center">
          {calendarDays.map((day, i) => (
            <div key={i}
              className={`text-[7px] py-0.5 rounded-full cursor-pointer transition-all ${day === 25
                ? 'bg-indigo-600 text-white font-bold'
                : day
                  ? 'text-slate-600 hover:bg-slate-100'
                  : ''
                }`}>
              {day || ''}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="px-4 md:px-8 pb-20 -mt-10">
      <div className="max-w-6xl mx-auto">
        {/* Browser Frame */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200/60">

          {/* Browser Top Bar */}
          <div className="bg-slate-100 px-4 py-2.5 flex items-center space-x-4 border-b border-slate-200">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <ChevronLeft size={15} className="text-slate-400" />
              <ChevronRight size={15} className="text-slate-400" />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="bg-white rounded-lg px-3 py-1.5 flex items-center space-x-2 text-xs text-slate-500 w-full max-w-md border border-slate-200">

                <Lock size={15} className="text-green-500" />
                <span className="text-slate-700 font-bold">app.spacesaas.com</span>
                <RotateCw size={15} className="text-slate-400 ml-auto" />
              </div>
            </div>
            <Share size={20} />
            <Plus size={25} className="text-black font-bold" />

          </div>

          {/* Dashboard Content */}
          <div className="flex min-h-[480px] text-xs">

            {/* Left Sidebar */}
            <div className="w-44 bg-slate-50 border-r border-slate-100 py-4 px-3 flex-col hidden md:flex">
              <div className=' flex items-center space-x-2 mb-4'>
                <div className=' bg-blue-400 w-8 h-8 flex-shrink-0 rounded-full'></div>
                <div className='flex flex-col'>
                  <h1 className=' text-xl text-md font-bold '>Ofspace LLc</h1>
                  <p className=' text-sm font-semi-bold text-gray-400'>design@ofspace.co</p>
                </div>
              </div>
              <div className="space-y-1 flex-1">
                {sidebarItems.map((item) => (
                  <div key={item.name}
                    className={`flex items-center space-x-2.5 px-2.5 py-2 rounded-lg cursor-pointer transition-all ${item.active
                      ? 'bg-indigo-100 text-indigo-700 font-semibold'
                      : 'text-slate-500 hover:bg-slate-100'
                      }`}>
                    <item.icon size={14} />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>

              {/* Invite */}
              <div className="pt-3 border-t border-slate-200">
                <div className="flex items-center space-x-2 px-2.5 py-2 text-indigo-600 cursor-pointer hover:bg-indigo-50 rounded-lg transition-all">
                  <UserPlus size={14} />
                  <span className="font-medium">Invite Teammates</span>
                </div>
              </div>

              {/* My Projects */}
              <div className="pt-12 mt-10 border-t border-slate-200">
                <div className="flex items-center justify-between px-2.5 mb-2">
                  <p className="text-[11px] font-bold text-slate-700">My Projects</p>
                  <Plus size={12} className="text-slate-400 cursor-pointer hover:text-indigo-600 transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-slate-100 cursor-pointer transition-all">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="text-[10px] text-slate-600">Marketing Update</span>
                    </div>
                    <span className="text-[9px] text-slate-400 font-semibold bg-slate-100 px-1.5 py-0.5 rounded-full">20</span>
                  </div>
                  <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-slate-100 cursor-pointer transition-all">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <span className="text-[10px] text-slate-600">Web Development</span>
                    </div>
                    <span className="text-[9px] text-slate-400 font-semibold bg-slate-100 px-1.5 py-0.5 rounded-full">20</span>
                  </div>
                  <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-slate-100 cursor-pointer transition-all">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                      <span className="text-[10px] text-slate-600">UI/UX Design</span>
                    </div>
                    <span className="text-[9px] text-slate-400 font-semibold bg-slate-100 px-1.5 py-0.5 rounded-full">20</span>
                  </div>
                  <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-slate-100 cursor-pointer transition-all">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="text-[10px] text-slate-600">Branding Guideline</span>
                    </div>
                    <span className="text-[9px] text-slate-400 font-semibold bg-slate-100 px-1.5 py-0.5 rounded-full">15</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">

              {/* Dashboard Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 max-w-4xl">
                <h1 className='text-2xl font-bold text-slate-800'>Tuesday, March 25</h1>
                <div className="flex items-center space-x-2">
                  <button className="p-1.5 inline-flex items-center space-x-2 text-white rounded-lg hover:bg-slate-100 text-slate-400 bg-indigo-400 px-3 py-1 transition-all">
                    <Share2 size={13} />
                    <span>share</span>
                  </button>
                  <div className=' relative w-15'>
                    <SearchIcon className=' absolute left-2 size-4 top-1/2 -translate-y-1/2'
                    />
                    <input type="text" placeholder='search...' className='border text-md border-slate-200 rounded-lg px-9 py-1'
                    />
                  </div>

                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-5 py-4">
                {statsCards.map((card) => (
                  <div key={card.title} className={`${card.color} rounded-xl p-3 flex items-center justify-between`}>
                    <div className="flex-1">
                      <div className="flex items-center space-x-1.5">
                        <p className="text-[10px] opacity-70 font-medium">{card.title}</p>
                        <p className="text-sm font-black">{card.value}</p>
                      </div>
                      <p className="text-[11px] font-bold mt-1">{card.percent}</p>
                      <p className="text-[8px] opacity-60 mt-0.5">{card.trend}</p>
                    </div>
                    <ProgressRing progress={card.progress} color={card.progressColor} size={40} />
                  </div>
                ))}
              </div>

              {/* Middle Section */}
              <div className="flex flex-1 px-5 pb-4 gap-4 overflow-hidden">

                {/* Projects Table */}
                <div className="flex-1 bg-white rounded-xl border border-slate-100 overflow-hidden flex flex-col">
                  {/* Header with Favourite + Three Dot */}
                  <div className="flex items-center justify-between px-3 py-2.5 border-b border-slate-100">
                    <p className="font-semibold text-slate-700 text-[11px]">Running Projects</p>
                    <div className="flex items-center space-x-2">
                      <Star size={12} className="text-amber-400 fill-amber-400 cursor-pointer" />
                      <MoreHorizontal size={12} className="text-slate-400 cursor-pointer" />
                    </div>
                  </div>

                  {/* Project Rows */}
                  <div className="divide-y divide-slate-50 flex-1">
                    {projects.map((project) => (
                      <div key={project.name} className="flex items-center px-3 py-2.5 hover:bg-slate-50 transition-all">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-slate-700 text-[11px] truncate">{project.name}</p>
                          <p className="text-[9px] text-slate-400">{project.category}</p>
                        </div>
                        <div className="w-20 mx-3">
                          <div className="w-full bg-slate-100 rounded-full h-1.5">
                            <div className="bg-indigo-500 h-1.5 rounded-full transition-all"
                              style={{ width: `${project.progress}%` }} />
                          </div>
                        </div>
                        <div className="flex -space-x-1.5">
                          <img src={avatar1} alt="" className="w-5 h-5 rounded-full border border-white object-cover" />
                          <img src={avatar2} alt="" className="w-5 h-5 rounded-full border border-white object-cover" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Three Color Status Boxes */}
                  <div className="px-3 py-2.5 border-t border-slate-100 ">
                    <h1 className=' font-bold text-xl text-gray-600'>Favourite</h1>
                    <div className='flex items-center space-x-4'>
                      <div className="flex-1 h-12  bg-gradient-to-r from-blue-200 to-blue-300 rounded-t-xl flex items-center justify-center">
                        <span className="text-[9px] font-bold text-blue-600"></span>
                      </div>
                      <div className="flex-1 h-12  bg-gradient-to-r from-blue-300 to-blue-400 rounded-t-xl flex items-center justify-center">
                        <span className="text-[9px] font-bold text-blue-600"></span>
                      </div>
                      <div className="flex-1 h-12 bg-gradient-to-r from-pink-200 to-pink-300 rounded-t-xl flex items-center justify-center">
                        <span className="text-[9px] font-bold text-pink-600"></span>
                      </div>
                      <div className="flex-1 h-12 bg-gradient-to-r from-purple-300 to-purple-500 rounded-t-xl flex items-center justify-center">
                        <span className="text-[9px] font-bold text-purple-600"></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Calendar + Monthly Status */}
                <div className="w-48 hidden lg:flex flex-col gap-3">
                  {/* Calendar Widget */}
                  <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                    <div className="flex items-center justify-between px-3 py-2.5 border-b border-slate-100">
                      <p className="font-semibold text-slate-700 text-[11px]">March 2026</p>
                      <div className="flex space-x-1">
                        <ChevronLeft size={10} className="text-slate-400 cursor-pointer" />
                        <ChevronRight size={10} className="text-slate-400 cursor-pointer" />
                      </div>
                    </div>
                    <div className="p-2">
                      <div className="grid grid-cols-7 gap-0.5 text-center mb-1">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                          <div key={i} className="text-[8px] font-semibold text-slate-400 py-1">{d}</div>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-0.5 text-center">
                        {calendarDays.map((day, i) => (
                          <div key={i}
                            className={`text-[9px] py-1 rounded-full cursor-pointer transition-all ${day === 25
                              ? 'bg-indigo-600 text-white font-bold'
                              : day
                                ? 'text-slate-600 hover:bg-slate-100'
                                : ''
                              }`}>
                            {day || ''}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Monthly Status Semi-Circle Chart */}
                  <div className="bg-white rounded-xl border border-slate-100 p-3">
                    <p className="font-semibold text-slate-700 text-[11px] mb-2 text-center">Monthly Status</p>
                    <SemiCircleChart progress={68} size={120} />
                    <div className="flex justify-between mt-2 px-2">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        <span className="text-[8px] text-slate-500">Pending</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-[8px] text-slate-500">Done</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Panel */}
            <div className="w-44 bg-slate-50 border-l border-slate-100 py-4 px-3 hidden xl:flex flex-col">
              {/* Panel Header: Logo + Menu */}
              <div className="flex items-center justify-between px-2 mb-5">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-indigo-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-[8px]">S</span>
                  </div>
                  <span className="font-bold text-slate-800 text-[11px]">Space</span>
                </div>
                <Menu size={20} className="text-slate-400 cursor-pointer" />
              </div>

              {/* Vertical Stat Cards (same style as top row) */}
              <div className="space-y-2.5 flex-1 overflow-y-auto">
                {statsCards.map((card) => (
                  <div key={card.title} className={`${card.color} rounded-xl p-2.5 flex items-center justify-between`}>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-1">
                        <p className="text-[9px] opacity-70 font-medium truncate">{card.title}</p>
                        <p className="text-[11px] font-black">{card.value}</p>
                      </div>
                      <p className="text-[10px] font-bold mt-0.5">{card.percent}</p>
                      <p className="text-[7px] opacity-60">{card.trend}</p>
                    </div>
                    <ProgressRing progress={card.progress} color={card.progressColor} size={34} />
                  </div>
                ))}
              </div>

              {/* Bottom Calendar */}
              <div className="mt-auto pt-3">
                <MiniCalendar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
