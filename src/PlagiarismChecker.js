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
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-blue-500 rounded-full p-2 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <span className="text-red-500 font-bold text-xl">Plagiarism Software</span>
        </div>
        <nav>
          <a href="#" className="text-blue-500 hover:text-blue-400 mr-4">Home</a>
          <a href="#" className="text-white hover:text-gray-300 mr-4">About Us</a>
          <a href="#" className="text-white hover:text-gray-300">Contact Us</a>
        </nav>
      </header>

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
          
          <div className="w-full md:w-48">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Result</h2>
              <div className="space-y-4">
                {['Checked', 'Unique', 'Plagiarized'].map((label) => (
                  <div key={label} className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                          {label}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-blue-600">
                          0%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                      <div style={{ width: "0%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
        <div className="flex-grow">
          <div className="relative">
            <input
              type="text"
              className="w-full p-2 pr-10 border border-gray-300 rounded"
              placeholder="Enter URL to check plagiarism..."
            />
            <Upload className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex-grow">
          <div className="relative">
            <input
              type="file" // Change the input type to "file"
              className="w-full p-2 pr-20 border border-gray-300 rounded"
              placeholder="Please upload your file"
              onChange={handleFileChange} // Add an onChange handler
            />
          </div>
        </div>
      </div>

        <div className="mt-8 flex justify-center gap-4">
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
    </div>
  );
};

export default PlagiarismChecker;