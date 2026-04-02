class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = {};

        for (let i = 0; i < nums.length; i++) {
            numsMap[nums[i]] = i;
        }

        for (let i = 0; i < nums.length; i ++) {
            let diff = target - nums[i];

            if (numsMap[diff] !== undefined && numsMap[diff] 
            !== i) {
                return ([i,numsMap[diff]])
            }
        }
        return [];
    }
}
