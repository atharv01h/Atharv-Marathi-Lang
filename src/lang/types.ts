// Created by Atharv Hatwar
export type TokenType =
  | 'PRINT'
  | 'VARIABLE'
  | 'NUMBER'
  | 'STRING'
  | 'OPERATOR'
  | 'IDENTIFIER'
  | 'IF'
  | 'ELSE'
  | 'LOOP_START'
  | 'LOOP_END'
  | 'EQUALS'
  | 'END_STATEMENT'
  | 'BOOLEAN'
  | 'COMPARISON';

export interface Token {
  type: TokenType;
  value: string;
}

export interface InterpreterState {
  variables: Record<string, any>;
  output: string[];
}