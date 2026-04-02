class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        const S = {};
        const T = {};

        for (let i = 0; i < s.length; i++) {
            const sChar = s[i]

            if (S[sChar] === undefined) {
                S[sChar] = 1;
            } else {
                S[sChar] ++;
            }
        }
        for (let i = 0; i < t.length; i++) {
            const tChar = t[i]

            if (T[tChar] === undefined) {
                T[tChar] = 1;
            } else {
                T[tChar] ++;
            }
        }

        const keys = Object.keys(S);

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];

            if (S[key] !== T[key]) return false
        }
        return true
    }
}
