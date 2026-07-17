function longestPalindromeSubseq(s) {
    let n = s.length;
    let dp = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) dp[i][i] = 1;

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }
    // return dp[0][n - 1];
    return n - dp[0][n - 1]; // for minimum deletions to make the string a palindrome
}

let str = "ABXCBAY";  ///A B C B A
console.log("Longest Palindrome Size:", longestPalindromeSubseq(str));




