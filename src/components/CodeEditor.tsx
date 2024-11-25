// Created by Atharv Hatwar
import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import { Play } from 'lucide-react';
import 'prismjs/themes/prism-tomorrow.css';

interface CodeEditorProps {
  code: string;
  setCode: (code: string) => void;
  onRun: () => void;
}

export function CodeEditor({ code, setCode, onRun }: CodeEditorProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700">
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold text-white">Code Editor</h2>
        <button
          onClick={onRun}
          className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
        >
          <Play className="h-4 w-4 mr-2" />
          Run Code
        </button>
      </div>
      <div className="border-gray-700 overflow-hidden">
        <Editor
          value={code}
          onValueChange={setCode}
          highlight={code => highlight(code, languages.javascript, 'javascript')}
          padding={16}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
            backgroundColor: '#1a1a1a',
            color: '#fff',
            minHeight: '400px',
          }}
          textareaClassName="focus:outline-none"
        />
      </div>
    </div>
  );
}