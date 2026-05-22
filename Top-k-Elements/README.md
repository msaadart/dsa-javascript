-------------------------------------------Top ‘K’ Elements-----------------------------------

What is top ‘K’ elements:
DSA mai “Top K Elements” ek aisa algorithm pattern hai jis mai hum kisi bhi large data set mai se apni mrzi se ‘K’ number of elements nikalne hoty hain.
•	'K' ek number hai (jaise 3, 5, ya 10).
•	Ye elements Top Largest, Top Smallest, ya Top Frequent ho saktay hain.

What is the Purpose:
•	Time Complexity: Agar hum poori array ko sort karein taw (O(N log N)) time lagta hai. Lekin agr hume sirf 3 elements chahiye, taw baqi k 99,997 elements ko line mai lagana time waste hai. Is pattern ka purpose sirf (O(Nlog K)) time mai kaam khtm krna hai.

•	Space Complexity: Baray systems mai sara data ek sath computer ki RAM (memory) mai nhi rakha ja skta. Heap use kr k hum sirf K size ka box memory mai rkhte hain, jis se memory safe rehti hai ((O(K)) space).

Where We Use It? / Real-Life Project Use Cases:
•	E-Commerce Dashboards: Amazon ya Daraz par "Top 10 Best Selling Products" dikhana.
•	Social Media Trending: Twitter/X par "Top 5 Trending Hashtags" har ghante nikalna.
•	Music Apps (Spotify): User k data se "Top 5 Most Played Songs" ki playlist generate krna.
•	Stock Market: Kisi specific din k "Top 3 Gaining Stocks" (sb se zyada profit dene waly stocks) screen par live dikhana.

Sample Problems:
•	‘K’ Closest Points to the Origin
•	Maximum Distinct Elements



