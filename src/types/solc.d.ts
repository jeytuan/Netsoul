// types/solc.d.ts
declare module 'solc' {
    interface CompileInput {
        language: string;
        sources: {
            [key: string]: {
                content: string;
            };
        };
        settings: {
            outputSelection: {
                [key: string]: {
                    [key: string]: string[];
                };
            };
        };
    }

    interface CompileOutput {
        // Define more properties as needed
        contracts: {
            [key: string]: any;
        };
        errors?: { formattedMessage: string }[];
    }

    function compile(input: string): string;
}

// types/browser-solc.d.ts
declare module 'browser-solc' {
    const browserSolc: any;  // Replace 'any' with more specific types if known
    export default browserSolc;
}
