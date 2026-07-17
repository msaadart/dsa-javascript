// function detectLongestSubstring(str1, str2){
//     let maxLength = 0;
//     let endingIndex = 0;
//     let dp = Array(str1.length + 1).fill(0).map(() =>
//     Array(str2.length + 1).fill(0));

//     for(let i = 1; i <= str1.length; i++){

//         for(let j = 1; j <= str2.length; j++){
//             if(str1[i - 1] === str2[j - 1]){
//                 dp[i][j] = dp[i - 1][j - 1] + 1;
//                 if(dp[i][j] > maxLength){
//                     maxLength = dp[i][j];
//                     endingIndex = i;
//                 }
//             }else{
//                 dp[i][j] = 0;
//             }
//         }
//     }
//      let result = str1.slice(endingIndex - maxLength, endingIndex);
//      console.log("Longest Common Substring:", result);
//      console.log("Length:", maxLength);
// }
// detectLongestSubstring("mitchell", "marshell");



// sample problem 2

function editDistance(str1, str2) {

    let m = str1.length;
    let n = str2.length;

    let dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i;//deletion
    for (let j = 0; j <= n; j++) dp[0][j] = j;//insertion

    for (let i = 1; i <= m; i++) {

        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }
            else {
                dp[i][j] = 1+ Math.min(
                    dp[i - 1][j],//delete
                    dp[i][j - 1],//insert
                    dp[i - 1][j - 1]//replace
                );
            }
        }
    }
    return dp[m][n];
}
console.log(editDistance("kitten", "sitting"));

