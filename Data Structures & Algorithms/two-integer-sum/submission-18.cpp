class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> map;

        for (int i = 0; i < nums.size(); i++) {
            map[nums[i]] = i;
        }


        for (int i = 0; i < nums.size(); i++) {
            int remainder = target - nums[i];

            if (map.count(remainder) && map[remainder] != i) {
                return {i, map[remainder]};
            }
        }
        return {};
    }
};
