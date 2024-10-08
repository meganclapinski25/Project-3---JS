class StringTemp {
    string: string;

    constructor(string: string) {
        this.string = string;
    }

    capitalize(): string {
        const firstChar = this.string[0].toUpperCase();
        const remainder = this.string.slice(1);
        return firstChar + remainder;
    }

    allCaps(): string {
        return this.string.toUpperCase();
    }

    capitalizeWords(): string {
        const eachCap = this.string.split(' ');
        const arrayWords: string[] = [];
        for (let i = 0; i < eachCap.length; i++) {
            this.string = eachCap[i];
            arrayWords.push(this.capitalize());
        }
        return arrayWords.join(' ');
    }

    removeExtraSpaces(): string {
        const removeSpace = this.string.trim();
        const tempArray = removeSpace.split(' ');
        return tempArray.filter(word => word).join(' ');
    }

    kebobCase(): string {
        const removeSpace = this.string.trim();
        const tempArray = removeSpace.split(' ');
        return tempArray.filter(word => word).join('-');
    }

    snakeCase(): string {
        const removeSpace = this.string.trim();
        const tempArray = removeSpace.split(' ');
        return tempArray.filter(word => word).join('_');
    }

    camelCase(): string {
        const eachCap = this.string.split(' ');
        let tempCase = eachCap[0].toLowerCase();
        for (let i = 1; i < eachCap.length; i++) {
            let temp = eachCap[i].toLowerCase();
            tempCase += temp.charAt(0).toUpperCase() + temp.slice(1);
        }
        return tempCase;
    }

    shift(): string {
        const firstChar = this.string.slice(0, 1);
        const restString = this.string.slice(1);
        return restString + firstChar;
    }

    makeHashTag(): string[] {
        const hashtag = this.string.split(' ').sort((a, b) => b.length - a.length);
        let longestWords = hashtag.slice(0, 3);
        longestWords = longestWords.map(word => `#${word}`);
        return longestWords;
    }

    isEmpty(): boolean {
        let emptyStr = this.string.trim();
        for (let i = 0; i < emptyStr.length; i++) {
            const temp = emptyStr[i];
            if (temp !== '\n' && temp !== '\r' && temp !== '\t') {
                return false;
            }
        }
        return true;
    }
}

export { StringTemp };
