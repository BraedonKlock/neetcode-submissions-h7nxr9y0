class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = {}

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]
            if(numsMap[num] === undefined) {
                numsMap[num] = i;
            }
        }

        for (let i = 0; i < nums.length; i++) {
            const number = nums[i]
            const remainder = target - number

            if (numsMap[remainder] !== undefined && numsMap[remainder] !== i) {
                return [i,numsMap[remainder]]
            }
        }
        return [];
    }
}
