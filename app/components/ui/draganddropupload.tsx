'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, Trash2 } from 'lucide-react'

export default function DragDropUpload() {
  const [files, setFiles] = useState<File[]>([])

  // Function to handle dropping files
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      // Ensure we don't exceed 4 files
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles].slice(0, 4))
    }
  }, [])

  // Function to remove a file from the list
  const removeFile = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter(file => file.name !== fileName))
  }

  // Use Dropzone hooks
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    multiple: true, // Allow multiple file uploads
    maxFiles: 4, // Limit the maximum number of files
  })

  // Function to handle file submission
  const handleSubmit = () => {
    if (files.length > 0) {
      console.log('Files submitted:', files)
    } else {
      alert('Please upload at least one file.')
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Heading and description */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Upload Documents</h2>
        <p className="text-sm text-gray-500">Please upload your files below. You can upload up to 4 documents (PDF, DOC, DOCX).</p>
      </div>

      {/* Drag and Drop Area */}
      <div
        {...getRootProps()}
        className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${
          isDragActive ? 'border-primary bg-primary/10' : 'border-gray-300 hover:border-primary'
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          Drag & drop up to 4 documents here, or click to select
        </p>
        <p className="mt-1 text-xs text-gray-500">
          Supports PDF, DOC, and DOCX files up to 10MB
        </p>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
          <p className="text-sm font-medium">Files uploaded successfully:</p>
          <ul className="text-xs">
            {files.map((file, index) => (
              <li key={index} className="flex justify-between items-center mt-2">
                {file.name}
                <button
                  className="ml-4 text-red-500 hover:text-red-700"
                  onClick={() => removeFile(file.name)}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Submit button */}
      <button
        onClick={handleSubmit}
        className="mt-4 w-full px-4 py-2 bg-emerald-700 text-white rounded-md hover:bg-emerald-600"
      >
        Submit Files
      </button>
    </div>
  )
}

