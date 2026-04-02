class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = "";

        for (let i = 0; i < strs.length; i++) {
            const strg = strs[i];
            str += strg.length + "#" + strg;
        }
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        const result = [];

        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") j++;

            const length = parseInt(str.slice(i,j), 10);

            const start = j + 1;
            const end = start + length;
            const word = str.slice(start,end);
            result.push(word);

            i = end;
        }
        return result;
    }
}
