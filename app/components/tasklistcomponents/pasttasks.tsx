"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Pasttasks() {
  const [showOffloadedPopup, setShowOffloadedPopup] = useState(false)
  const [showFinishedPopup, setShowFinishedPopup] = useState(false)

  // Functions to toggle popups
  const toggleOffloadedPopup = () => setShowOffloadedPopup(!showOffloadedPopup)
  const toggleFinishedPopup = () => setShowFinishedPopup(!showFinishedPopup)

  return (
    <div>
      <Card className="max-w-s">
        <CardContent className="flex flex-col gap-3 p-4">
          {/* Button to see "Offloaded Tasks" */}
          <Button variant={'destructive'} onClick={toggleOffloadedPopup}>See Offloaded Tasks</Button>

          {/* Button to see "Finished Tasks" */}
          <Button onClick={toggleFinishedPopup}>See Finished Tasks</Button>
        </CardContent>
      </Card>

      {/* Popup for "Offloaded Tasks" */}
      {showOffloadedPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Offloaded Tasks</h2>
            <p>List of offloaded tasks goes here...</p>
            <Button onClick={toggleOffloadedPopup} className="mt-4">Close</Button>
          </div>
        </div>
      )}

      {/* Popup for "Finished Tasks" */}
      {showFinishedPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Finished Tasks</h2>
            <p>List of finished tasks goes here...</p>
            <Button onClick={toggleFinishedPopup} className="mt-4">Close</Button>
          </div>
        </div>
      )}
    </div>
  )
}

