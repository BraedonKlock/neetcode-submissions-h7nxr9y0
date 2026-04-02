class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = {};

        for (let i = 0; i < strs.length; i++) {
            const strg = strs[i];

            const charCount = new Array(26).fill(0);

            for (let j = 0; j < strg.length; j++) {
                const charCode = strg.charCodeAt(j) - 97;

                charCount[charCode] ++;
            }

            const key = charCount.join(',');

            if (anagrams[key] === undefined) {
                anagrams[key] = []
            }
            anagrams[key].push(strg);
        }

        return Object.values(anagrams);
    }
}
