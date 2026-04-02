class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = {};

        for (let i = 0; i < strs.length; i ++) {
            const str = strs[i];

            const strKey = new Array(26).fill(0);

            for (let j = 0; j < str.length; j++) {
                const charCode = str.charCodeAt(j) - 97 ;

                strKey[charCode] ++;
            }

            const key = strKey.join(',');

            if (anagrams[key] === undefined) {
                anagrams[key] = [];
            } 
            anagrams[key].push(str);
        }
        return Object.values(anagrams);

    }
}
