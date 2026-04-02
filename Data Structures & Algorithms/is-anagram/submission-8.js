class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const tCount = {};
        const sCount  = {};

        for (let i = 0; i < s.length; i++) {
            const charS = s[i]
            if (sCount[charS] === undefined) {
                sCount[charS] = 1
            } else {
                sCount[charS] ++
            }
            const charT = t[i]
            if (tCount[charT] === undefined) {
                tCount[charT] = 1
            } else {
                tCount[charT] ++
            }
        }

        const keys = Object.keys(sCount);

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];

            if (sCount[key] !== tCount[key]) return false;
        }
        return true;
    }
}
