class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numMap = {};
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            numMap[num] = i;
        }

        for (let i = 0; i < nums.length; i++) {
            const result = target - nums[i];
            if(numMap[result] !== undefined && numMap[result] !== i ) return [i, numMap[result]];
        }
        return [];
    }
}
