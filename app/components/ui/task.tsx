"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Task() {
  // State to manage popup visibility
  const [isPopupVisible, setPopupVisible] = useState(false);

  // Function to toggle popup visibility
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <>
      <Card onClick={togglePopup} className="cursor-pointer">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Room 443B</CardTitle>
          <Heart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold tracking-tight">Blood Test</div>
          <p className="text-xs text-muted-foreground">General Test</p>
          <div className="mt-2 text-xs text-gray-600">
                <span className="font-medium">Time:</span> 0300
            </div>
        </CardContent>
      </Card>

      {/* Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center h-screen bg-black/50 -translate-y-3">
            <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                {/* Close Button - Positioned in the top-left */}
                <button
                className="absolute top-4 left-4 text-gray-500 hover:text-gray-800 focus:outline-none"
                onClick={togglePopup}
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>

                {/* Task Details */}
                <h2 className="text-xl font-bold mb-4 text-center">Blood Test</h2>

                {/* Bed Information */}
                <p className="mb-2 text-sm text-gray-600">
                <strong>Bed:</strong> Room 443B, Bed 2
                </p>

                {/* Task Description */}
                <p className="text-sm mb-4 text-gray-700">
                This blood test is required to monitor the patient's condition. Ensure you use the correct procedure for the test, and label the sample properly. The test must be completed by 4 PM.
                </p>

                {/* Buttons for Task Actions */}
                <div className="flex justify-between items-center mt-6">
                <button
                    className="px-4 py-2 bg-emerald-700 text-white rounded-md hover:bg-emerald-600"
                    onClick={() => alert("Task Completed")}
                >
                    Complete Task
                </button>

                <button
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400"
                    onClick={() => alert("Task Offloaded")}
                >
                    Offload Task
                </button>
                </div>
            </div>
        </div>

      )}
    </>
  );
}

