import React, { useState } from 'react';
import { Upload, Search } from 'lucide-react';

const PlagiarismChecker = () => {
  const [text, setText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null); // Add a state variable for the selected file

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]); // Update the selected file state
  };

  return (

      <main className="container mx-auto mt-8 p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Plagiarism Checker</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-grow">
            <textarea
              className="w-full h-64 p-2 border border-gray-300 rounded"
              placeholder="Enter text to check plagiarism..."
              value={text}
              onChange={handleTextChange}
            />
            <div className="mt-2 text-sm text-gray-600">
              Limit: 1500 words / search
              <span className="float-right">
                Total Chars: {text.length} | Total Words: {text.split(/\s+/).filter(Boolean).length}
              </span>
            </div>
          </div>
          
          
        </div>

        <div className="mt-8 grid place-items-center">
          <div className="relative">
          <input
             type="file"
             className="p-2 pr-10 border border-gray-300 rounded"
            placeholder="Please upload your file"
             onChange={handleFileChange}
           />
           </div>
          </div>

        <div className="mt-8 flex justify-center gap-2">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Check Plagiarism
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
                onClick={() => {
                 const newTab = window.open('', '_blank');
                newTab.location.href = window.location.href;
             }}
            >
            <Search className="mr-2" />
            Try Another Search
            </button>
        </div>
      </main>
  );
};

export default PlagiarismChecker;