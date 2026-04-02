class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numSet = new Set(nums);

        for(let i = 0; i < nums.length; i ++) {
            const num = nums[i];

            if(numSet[num] === undefined) {
                numSet[num] = i;
            } 
        }

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const diff = target - num;

            if (numSet[diff] !== undefined && numSet[diff] !== i){
                return [i, numSet[diff]]

            }
        }
        return [];
    }
}
