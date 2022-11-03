/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    nums.sort()
    result = []
    console.log(nums)
    let c = 0
    result[0] = nums[0]
    nums.forEach(num => {
        if((result[0] != num) && (c>0)){
            result.splice(0, 1, num)
            c=0
        }else if(result==num){
            c++
        } 
    })
    return result
}
