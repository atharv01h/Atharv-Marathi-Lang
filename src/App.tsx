// Created by Atharv Hatwar
import React, { useState } from 'react';
import { Code2, Sparkles } from 'lucide-react';
import { tokenize } from './lang/tokenizer';
import { Interpreter } from './lang/interpreter';
import { CodeEditor } from './components/CodeEditor';
import { OutputPanel } from './components/OutputPanel';

const defaultCode = `ignore kar bhava hi program suru hoty
lihi bhava "Namaskar Mandali!"
bagh bhava number mhanje 42
lihi bhava number

ignore kar bhava arithmetic example
bagh bhava a mhanje 10
bagh bhava b mhanje 5
lihi bhava a vadav bhava b
lihi bhava a kami kar bhava b
lihi bhava a guna kar bhava b
lihi bhava a tod bhava b`;

function App() {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState<string[]>([]);

  const runCode = () => {
    try {
      const tokens = tokenize(code);
      const interpreter = new Interpreter();
      const result = interpreter.interpret(tokens);
      setOutput(result);
    } catch (error) {
      setOutput(['Error: ' + (error as Error).message]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold text-white">
                Atharv Marathi Lang
              </span>
            </div>
            <div className="flex items-center">
              <Sparkles className="h-5 w-5 text-orange-500 mr-2" />
              <span className="text-sm text-gray-300">Created by Atharv Hatwar</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CodeEditor code={code} setCode={setCode} onRun={runCode} />
          <OutputPanel output={output} />
        </div>
      </main>
    </div>
  );
}

export default App;