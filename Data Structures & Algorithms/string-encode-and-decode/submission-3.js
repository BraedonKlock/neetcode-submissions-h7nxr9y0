class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let output = "";

        for (let i = 0; i < strs.length; i++) {
            const strg = strs[i];
            output += strg.length + "#" + strg;
        }
        return output;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") j++;
            const length = parseInt(str.slice(i,j), 10);

            const start = j + 1;
            const end = start + length;
            const word = str.slice(start, end)
            result.push(word);
            i = end;
        }
        return result;
    }
}
