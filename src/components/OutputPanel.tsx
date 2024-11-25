// Created by Atharv Hatwar
import React from 'react';

interface OutputPanelProps {
  output: string[];
}

export function OutputPanel({ output }: OutputPanelProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold text-white">Output</h2>
      </div>
      <div className="p-4 font-mono text-sm">
        {output.map((line, index) => (
          <div key={index} className="text-green-400 mb-1">
            {`> ${line}`}
          </div>
        ))}
        {output.length === 0 && (
          <div className="text-gray-500">
            {'> Output will appear here...'}
          </div>
        )}
      </div>
    </div>
  );
}