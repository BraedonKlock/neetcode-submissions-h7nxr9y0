class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const countS = {};
        const countT = {};

        if (s.length !== t.length) return false;

        for ( let i = 0; i < s.length; i ++) {
            const charS = s[i];
            const charT = t[i];

            if (countS[charS] === undefined) {
                countS[charS] = 1;
            } else {
                countS[charS] ++
            }

            if (countT[charT] === undefined) {
                countT[charT] = 1;
            } else {
                countT[charT] ++
            }
        }

        const keys = Object.keys(countS);

        for (const key of keys) {
            if (countS[key] !== countT[key]) return false;
        }
        return true;
    }
}
