class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const S = {};
        const T = {};

        if (s.length !== t.length) return false;

        for (let i = 0; i < s.length; i++) {
            const charS = s[i];

            if (S[charS] === undefined) {
                S[charS] = 1
            } else {
                S[charS] ++
            }
        }

        for (let i = 0; i < s.length; i++) {
            const charT = t[i];

            if (T[charT] === undefined) {
                T[charT] = 1
            } else {
                T[charT] ++
            }
        }

        const keys = Object.keys(S);

        for(let i = 0; i < keys.length; i ++) {
            const key = keys[i];

            if ( S[key] !== T[key]) return false
        }
        return true;
    }
}
