import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

export const setupMonaco = () => {
  monaco.languages.register({ id: 'sol' });

  // Define keywords as a simple array of strings
  const keywords = [
    'abstract', 'pragma', 'import', 'contract', 'interface', 'library',
    'struct', 'enum', 'function', 'public', 'private', 'internal', 'external',
    'payable', 'modifier', 'event', 'emit', 'override', 'virtual'
  ];

  monaco.languages.setMonarchTokensProvider('sol', {
    tokenizer: {
      root: [
        [/[{}]/, 'delimiter.bracket'],
        [/[a-zA-Z_]\w*/, {
          cases: {
            '@keywords': 'keyword',
            '@default': 'identifier'
          }
        }],
        [/[=:]/, 'delimiter'],
        [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
        [/0[xX][0-9a-fA-F]+/, 'number.hex'],
        [/\d+/, 'number'],
      ]
    },
    keywords // Pass the keywords array directly
  });

  monaco.editor.defineTheme('myCustomTheme', {
    base: 'vs-dark',  // can be vs, vs-dark, or hc-black
    inherit: true,  // can also be false to completely replace the base theme
    rules: [
      { token: 'keyword', foreground: 'C586C0' },
      { token: 'identifier', foreground: '9CDCFE' },
      { token: 'delimiter', foreground: 'CCCCCC' },
      { token: 'number', foreground: 'B5CEA8' },
    ],
    colors: {
      'editor.foreground': '#FFFFFF'
    }
  });
};
