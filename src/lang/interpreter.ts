// Created by Atharv Hatwar
import { Token, InterpreterState } from './types';

export class Interpreter {
  private state: InterpreterState = {
    variables: {},
    output: []
  };

  interpret(tokens: Token[]): string[] {
    this.state.output = [];
    let i = 0;

    while (i < tokens.length) {
      const token = tokens[i];
      
      if (token.type === 'PRINT') {
        const valueToken = tokens[i + 1];
        if (valueToken) {
          let output: any;
          
          if (valueToken.type === 'STRING') {
            output = valueToken.value;
          } else if (valueToken.type === 'IDENTIFIER') {
            output = this.state.variables[valueToken.value];
          } else if (valueToken.type === 'NUMBER') {
            output = valueToken.value;
          }
          
          if (output !== undefined) {
            this.state.output.push(String(output));
          }
          i += 2;
        } else {
          i++;
        }
      } else if (token.type === 'VARIABLE') {
        const identifierToken = tokens[i + 1];
        const equalsToken = tokens[i + 2];
        const valueToken = tokens[i + 3];

        if (identifierToken && equalsToken && valueToken) {
          const value = valueToken.type === 'NUMBER' 
            ? Number(valueToken.value) 
            : valueToken.value;
          this.state.variables[identifierToken.value] = value;
          i += 4;
        } else {
          i++;
        }
      } else {
        i++;
      }
    }

    return this.state.output;
  }
}