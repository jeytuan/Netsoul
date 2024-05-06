// pages/api/compile.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import solc from 'solc';

interface CompileRequest extends NextApiRequest {
  body: { sourceCode: string }; // Ensure TypeScript recognizes the structure of the body
}

interface CompileResponse extends NextApiResponse {
  data?: { success: boolean; output?: any; errors?: any[]; error?: string };
}

const compileSolidity = async (req: CompileRequest, res: CompileResponse) => {
  if (req.method !== 'POST') {
    // Only allow POST method for compilation
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { sourceCode } = req.body;
  const input = {
    language: 'Solidity',
    sources: {
      'Contract.sol': { content: sourceCode },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*'],
        },
      },
    },
  };

  try {
    const output = JSON.parse(solc.compile(JSON.stringify(input)));
    if (output.errors && output.errors.length > 0) {
      return res.status(400).json({ success: false, errors: output.errors });
    }
    res.status(200).json({ success: true, output });
  } catch (error) {
    console.error('Compilation error:', error);
    const message = error instanceof Error ? error.message : 'Unknown compilation error';
    res.status(500).json({ success: false, error: message });
  }
};

export default compileSolidity;
