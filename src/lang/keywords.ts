// Created by Atharv Hatwar
export const KEYWORDS = {
  // Basic Operations
  'lihi bhava': 'PRINT',
  'bagh bhava': 'VARIABLE',
  'mhanje': 'EQUALS',
  
  // Arithmetic
  'vadav bhava': 'OPERATOR',
  'kami kar bhava': 'OPERATOR',
  'guna kar bhava': 'OPERATOR',
  'tod bhava': 'OPERATOR',
  
  // Control Flow
  'bhava jar': 'IF',
  'bhava nahi tr': 'ELSE',
  'jaude de bhava': 'END_STATEMENT',
  'chal': 'LOOP_START',
  'te': 'LOOP_START',
  'sod bhava': 'LOOP_END',
  
  // Comparisons
  'motha ahe': 'COMPARISON',
  'lahan ahe': 'COMPARISON',
  'barobar ahe': 'COMPARISON',
  
  // Booleans
  'khara': 'BOOLEAN',
  'khota': 'BOOLEAN',
  
  // Fun Additions
  'zop bhava': 'SLEEP',
  'uth bhava': 'WAKE',
  'dakhav bhava': 'SHOW',
  'band kar bhava': 'HIDE'
} as const;