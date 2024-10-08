declare class StringTemp {
    string: string;
    constructor(string: string);
    capitalize(): string;
    allCaps(): string;
    capitalizeWords(): string;
    removeExtraSpaces(): string;
    kebobCase(): string;
    snakeCase(): string;
    camelCase(): string;
    shift(): string;
    makeHashTag(): string[];
    isEmpty(): boolean;
}
export { StringTemp };
