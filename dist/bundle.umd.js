(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MyLibrary = {}));
})(this, (function (exports) { 'use strict';

    var StringTemp = /** @class */ (function () {
        function StringTemp(string) {
            this.string = string;
        }
        StringTemp.prototype.capitalize = function () {
            var firstChar = this.string[0].toUpperCase();
            var remainder = this.string.slice(1);
            return firstChar + remainder;
        };
        StringTemp.prototype.allCaps = function () {
            return this.string.toUpperCase();
        };
        StringTemp.prototype.capitalizeWords = function () {
            if (this.string.length === 0)
                return '';
            return this.string
                .split(' ')
                .map(function (word) {
                if (word.length === 0)
                    return ''; // Handle empty words
                return word[0].toUpperCase() + word.slice(1).toLowerCase(); // Capitalize the first letter
            })
                .join(' ');
        };
        StringTemp.prototype.removeExtraSpaces = function () {
            var removeSpace = this.string.trim();
            var tempArray = removeSpace.split(' ');
            return tempArray.filter(function (word) { return word; }).join(' ');
        };
        StringTemp.prototype.kebobCase = function () {
            var removeSpace = this.string.trim();
            var tempArray = removeSpace.split(' ');
            return tempArray.filter(function (word) { return word; }).join('-');
        };
        StringTemp.prototype.snakeCase = function () {
            var removeSpace = this.string.trim();
            var tempArray = removeSpace.split(' ');
            return tempArray.filter(function (word) { return word; }).join('_');
        };
        StringTemp.prototype.camelCase = function () {
            var eachCap = this.string.split(' ');
            var tempCase = eachCap[0].toLowerCase();
            for (var i = 1; i < eachCap.length; i++) {
                var temp = eachCap[i].toLowerCase();
                tempCase += temp.charAt(0).toUpperCase() + temp.slice(1);
            }
            return tempCase;
        };
        StringTemp.prototype.shift = function () {
            var firstChar = this.string.slice(0, 1);
            var restString = this.string.slice(1);
            return restString + firstChar;
        };
        StringTemp.prototype.makeHashTag = function () {
            var hashtag = this.string.split(' ').sort(function (a, b) { return b.length - a.length; });
            var longestWords = hashtag.slice(0, 3);
            longestWords = longestWords.map(function (word) { return "#".concat(word); });
            return longestWords;
        };
        StringTemp.prototype.isEmpty = function () {
            var emptyStr = this.string.trim();
            for (var i = 0; i < emptyStr.length; i++) {
                var temp = emptyStr[i];
                if (temp !== '\n' && temp !== '\r' && temp !== '\t') {
                    return false;
                }
            }
            return true;
        };
        return StringTemp;
    }());

    exports.StringTemp = StringTemp;

}));
//# sourceMappingURL=bundle.umd.js.map
