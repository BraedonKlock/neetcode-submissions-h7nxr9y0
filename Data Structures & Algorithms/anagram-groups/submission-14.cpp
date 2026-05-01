class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>> map;
        vector<vector<string>> anagrams;

        for (string& str : strs) {
            vector<int> charCount(26, 0);

            for (char c : str) {
                charCount[c - 'a'] ++;
            }
            string charCode = to_string(charCount[0]);

            for (int i = 1; i < 26; i++) {
                charCode += ',' + to_string(charCount[i]);
            }
            map[charCode].push_back(str);
        }

        for (const auto& pair : map) {
            anagrams.push_back(pair.second);
        }

        return anagrams;
    }
};
