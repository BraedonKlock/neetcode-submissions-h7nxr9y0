class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numbers = {};

        for (let i = 0; i < nums.length; i ++) {
            numbers[nums[i]] = i;
        }

        for (let i = 0; i < nums.length; i ++) {
            const diff = target-nums[i];

            if (numbers[diff] !== undefined && numbers[diff] !== i) {
                return [i,numbers[diff]];
            }
        }
        return [];
    }
}
