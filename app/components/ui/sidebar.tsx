"use client";

import Link from "next/link"
import { CheckSquare, Upload, Calendar, Package } from "lucide-react"

const Sidebar = () => {
    //get userId from session data
    return (
        <div className="absolute top-0 left-0 h-screen w-64 bg- p-4 shadow-lg flex flex-col">
        <div className="mb-8">
          <div className="h-12 w-full bg-gray-300 flex items-center justify-center rounded mt-4">
            <span className=""></span>
          </div>
        </div>
        <nav className="space-y-2">
          <Link
            href="/tasks"
            className="flex items-center space-x-3 rounded-lg px-3 py-2 text-emerald-900 hover:bg-emerald-800/40 transition-colors duration-200"
          >
            <CheckSquare size={20} />
            <span className="font-medium">Tasks</span>
          </Link>
          <Link
            href="/careplans"
            className="flex items-center space-x-3 rounded-lg px-3 py-2 text-emerald-900 hover:bg-emerald-800/40 transition-colors duration-200"
          >
            <Upload size={20} />
            <span className="font-medium">Upload</span>
          </Link>
          <Link
            href="/patients"
            className="flex items-center space-x-3 rounded-lg px-3 py-2 text-emerald-900 hover:bg-emerald-800/40 transition-colors duration-200"
          >
            <Calendar size={20} />
            <span className="font-medium">Patients</span>
          </Link>
          <Link
            href="/capsule"
            className="flex items-center space-x-3 rounded-lg px-3 py-2 text-emerald-900 hover:bg-emerald-800/40 transition-colors duration-200"
          >
            <Package size={20} />
            <span className="font-medium">Capsule</span>
          </Link>
        </nav>
      </div>
    )
  }
  
  export default Sidebar