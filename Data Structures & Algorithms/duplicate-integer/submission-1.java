class Solution {
    public boolean hasDuplicate(int[] nums) {
    Map <Integer, Integer> freq = new HashMap<>();

    for (int i = 0; i < nums.length; i++) {
        int num = nums[i];
        if(freq.containsKey(num)) {
            return true;
        }
        freq.put(num, 1);
    }
    return false;
    }
}
