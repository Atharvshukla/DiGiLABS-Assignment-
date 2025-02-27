"use client"

import { useState } from "react"
import {
  Bell,
  ChevronDown,
  Clock,
  LineChart,
  Mail,
  Menu,
  MoreHorizontal,
  Pin,
  Search,
  Settings,
  User,
  Users,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import img from "@/components/image.jpg"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-[#fafafa]">
      {/* Sidebar */}
      <div
        className={`bg-white border-r border-[#e0e0e0] transition-all duration-300 ${sidebarOpen ? "w-68" : "w-24"} fixed md:relative`}
      >
        <div className="p-4 border-b border-[#e0e0e0] flex items-center">
          <h1 className="text-xl font-bold text-[#161e54]">WeHR</h1>
          <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        <div className="py-4">
          <div className="px-4 mb-2 text-xs font-medium text-[#b2b2b2]">{sidebarOpen ? "MAIN MENU" : ""}</div>

          <nav className="space-y-1">
            <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-[#ff5151] bg-[#ffefe7] hover:text-[#ff5151] hover:bg-[#ffefe7]">
              <div className="flex items-center justify-center w-8 h-8">
                <LineChart className="h-5 w-5" />
              </div>
              {sidebarOpen && <span className="ml-3">Dashboard</span>}
            </a>

            <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-[#686868] hover:text-[#ff5151] hover:bg-[#ffefe7]">
              <div className="flex items-center justify-center w-8 h-8">
                <Users className="h-5 w-5" />
              </div>
              {sidebarOpen && <span className="ml-3">Recruitment</span>}
            </a>

            <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-[#686868] hover:text-[#ff5151] hover:bg-[#ffefe7]">
              <div className="flex items-center justify-center w-8 h-8">
                <Clock className="h-5 w-5" />
              </div>
              {sidebarOpen && <span className="ml-3">Schedule</span>}
            </a>

            <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-[#686868] hover:text-[#ff5151] hover:bg-[#ffefe7]">
              <div className="flex items-center justify-center w-8 h-8">
                <User className="h-5 w-5" />
              </div>
              {sidebarOpen && <span className="ml-3">Employee</span>}
            </a>

            <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-[#686868] hover:text-[#ff5151] hover:bg-[#ffefe7]">
              <div className="flex items-center justify-center w-8 h-8">
                <Users className="h-5 w-5" />
              </div>
              {sidebarOpen && <span className="ml-3">Department</span>}
            </a>
          </nav>

          <div className="mt-8 px-4 mb-2 text-xs font-medium text-[#b2b2b2]">{sidebarOpen ? "OTHER" : ""}</div>

          <nav className="space-y-1">
            <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-[#686868] hover:bg-[#f8f8f8]">
              <div className="flex items-center justify-center w-8 h-8">
                <Settings className="h-5 w-5" />
              </div>
              {sidebarOpen && <span className="ml-3">Support</span>}
            </a>

            <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-[#686868] hover:bg-[#f8f8f8]">
              <div className="flex items-center justify-center w-8 h-8">
                <Settings className="h-5 w-5" />
              </div>
              {sidebarOpen && <span className="ml-3">Settings</span>}
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 ${sidebarOpen ? "ml-68" : "ml-24"} md:ml-0 p-4 md:p-6`}>
        {/* Header */}
        <header className="bg-white border-b border-[#e0e0e0] p-4 flex items-center justify-between">
          <div className="relative w-full md:w-60">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#b2b2b2]" />
            <Input placeholder="Search" className="pl-8 border-[#e0e0e0] bg-[#f8f8f8] focus:ring-[#3786f1]" />
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-[#b2b2b2]">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-[#b2b2b2]">
              <Mail className="h-5 w-5" />
            </Button>
            <div className="flex items-center">
              <img src={img.src} alt="Admin Avatar" className="h-8 w-8 border border-[#e0e0e0] rounded-full" />
              <div className="ml-2 flex items-center">
                <span className="text-sm font-medium">Admin John</span>
                <ChevronDown className="ml-1 h-4 w-4 text-[#b2b2b2]" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 md:p-6">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

          {/* Top Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Available Position */}
            <div className="bg-[#ffefe7] rounded-lg p-4">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-sm font-medium text-[#686868]">Available Position</h2>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#161e54]">24</span>
                <span className="text-xs text-[#ff5151] mt-1">4 Urgently needed</span>
              </div>
            </div>

            {/* Job Open */}
            <div className="bg-[#e8f0fb] rounded-lg p-4">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-sm font-medium text-[#686868]">Job Open</h2>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#161e54]">10</span>
                <span className="text-xs text-[#3786f1] mt-1">4 Active hiring</span>
              </div>
            </div>

            {/* New Employees */}
            <div className="bg-[#fdebf9] rounded-lg p-4">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-sm font-medium text-[#686868]">New Employees</h2>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#161e54]">24</span>
                <span className="text-xs text-[#ee61cf] mt-1">4 Department</span>
              </div>
            </div>

            {/* Recently Activity */}
            <div className="bg-[#161e54] rounded-lg p-4 text-white">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-sm font-medium">Recently Activity</h2>
              </div>
              <div className="text-xs opacity-70 mb-2">10:40 AM, Fri 10 Sept 2021</div>
              <h3 className="font-medium mb-2">You Posted a New Job</h3>
              <p className="text-xs opacity-70 mb-4">
                Kindly check the requirements and terms of work and make sure everything is right.
              </p>
              <div className="flex items-center mt-auto">
                <span className="text-xs mr-2">Today you makes 12 Activity</span>
                <Button
                  size="sm"
                  className="ml-auto bg-[#ff5151] hover:bg-[#ff5151]/90 text-white text-xs py-1 px-3 rounded"
                >
                  See All Activity
                </Button>
              </div>
            </div>
          </div>

          {/* Middle Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Total Employees */}
            <div className="bg-white rounded-lg p-4 border border-[#e0e0e0]">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-sm font-medium text-[#686868]">Total Employees</h2>
                <div className="flex items-center text-xs text-[#65e982]">
                  <span>+2%</span>
                  <svg className="w-12 h-6 ml-1" viewBox="0 0 50 20">
                    <path d="M1 19 L10 12 L20 14 L30 4 L40 8 L49 1" fill="none" stroke="#65e982" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#161e54]">216</span>
                <div className="flex text-xs text-[#b2b2b2] mt-2 justify-between">
                  <span>120 Men</span>
                  <span>+2% Past month</span>
                </div>
                <div className="flex text-xs text-[#b2b2b2]">
                  <span>96 Women</span>
                </div>
              </div>
            </div>

            {/* Talent Request */}
            <div className="bg-white rounded-lg p-4 border border-[#e0e0e0]">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-sm font-medium text-[#686868]">Talent Request</h2>
                <div className="flex items-center text-xs text-[#ff5151]">
                  <span>+5%</span>
                  <svg className="w-12 h-6 ml-1" viewBox="0 0 50 20">
                    <path d="M1 19 L10 12 L20 14 L30 4 L40 8 L49 1" fill="none" stroke="#ff5151" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#161e54]">16</span>
                <div className="flex text-xs text-[#b2b2b2] mt-2 justify-between">
                  <span>6 Men</span>
                  <span>+5% Past month</span>
                </div>
                <div className="flex text-xs text-[#b2b2b2]">
                  <span>10 Women</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Upcoming Schedule */}
            <div className="bg-white rounded-lg p-4 border border-[#e0e0e0]">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-medium text-[#686868]">Upcoming Schedule</h2>
                <span className="text-xs text-[#b2b2b2]">Today, 13 Sep 2021</span>
              </div>

              <div className="space-y-4">
                <div className="text-xs font-medium text-[#686868] mb-2">Priority</div>

                {/* Schedule Item 1 */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-medium">Review candidate applications</h3>
                    <p className="text-xs text-[#b2b2b2]">Today - 11:30 AM</p>
                  </div>
                  <Button variant="ghost" size="icon" className="text-[#b2b2b2]">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>

                <div className="text-xs font-medium text-[#686868] mb-2">Other</div>

                {/* Schedule Item 2 */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-medium">Interview with candidates</h3>
                    <p className="text-xs text-[#b2b2b2]">Today - 10:30 AM</p>
                  </div>
                  <Button variant="ghost" size="icon" className="text-[#b2b2b2]">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>

                {/* Schedule Item 3 */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-medium">Short meeting with product designer from IT Department</h3>
                    <p className="text-xs text-[#b2b2b2]">Today - 09:15 AM</p>
                  </div>
                  <Button variant="ghost" size="icon" className="text-[#b2b2b2]">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex justify-center mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[#3786f1] border-[#3786f1] hover:bg-[#e8f0fb] text-xs"
                  >
                    Create a New Schedule
                  </Button>
                </div>
              </div>
            </div>

            {/* Announcement */}
            <div className="bg-white rounded-lg p-4 border border-[#e0e0e0]">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-medium text-[#686868]">Announcement</h2>
                <span className="text-xs text-[#b2b2b2]">Today, 13 Sep 2021</span>
              </div>

              <div className="space-y-4">
                {/* Announcement Item 1 */}
                <div className="flex items-start">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">Outing schedule for every department</h3>
                    <p className="text-xs text-[#b2b2b2]">Yesterday, 10:00 AM</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="text-[#b2b2b2]">
                      <Pin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-[#b2b2b2]">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Announcement Item 2 */}
                <div className="flex items-start">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">Meeting HR Department</h3>
                    <p className="text-xs text-[#b2b2b2]">Yesterday, 09:15 AM</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="text-[#b2b2b2]">
                      <Pin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-[#b2b2b2]">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Announcement Item 3 */}
                <div className="flex items-start">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">
                      IT Department need two more talents for UX/UI Designer position
                    </h3>
                    <p className="text-xs text-[#b2b2b2]">Yesterday, 09:15 AM</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="text-[#b2b2b2]">
                      <Pin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-[#b2b2b2]">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[#ff5151] border-[#ff5151] hover:bg-[#ffefe7] text-xs"
                  >
                    See All Announcement
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}