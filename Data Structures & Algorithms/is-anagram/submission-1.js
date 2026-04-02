class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const countS = {};
        const countT = {};

        for (let i = 0; i < s.length; i++) {
            const charS = s[i];
            if (countS[charS] === undefined) {
                countS[charS] = 1
            } else {
                countS[charS] ++;
            }

            const charT = t[i];
            if (countT[charT] === undefined) {
                countT[charT] = 1
            } else {
                countT[charT] ++;
            }
        }

        const keys = Object.keys(countS);

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (countS[key] !== countT[key]) return false
        }
        return true;
    }
}
