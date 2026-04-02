class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let output = "";

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            output += str.length + "#" + str;
        }
        return output;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0
        const strs = [];

        while (i < str.length) {
            let j = i;
            while(str[j] !== "#") j++;
            const length = parseInt(str.slice(i,j), 10);

            const start = j + 1;
            const end = start + length;

            const word = str.slice(start, end);
            strs.push(word);
            i = end;
        }
        return strs;
    }
}
