// Function to check if two strings are anagrams
function areAnagrams(s1, s2) {
    // First, check if the strings have the same length
    if (s1.length !== s2.length) {
        return false;
    }

    // Sort the characters of both strings and compare
    let sortedS1 = s1.split('').sort().join('');
    let sortedS2 = s2.split('').sort().join('');

    return sortedS1 === sortedS2;
}

// Test the function with example strings
let s1 = "heart";
let s2 = "earth";

if (areAnagrams(s1, s2)) {
    console.log(`${s1} and ${s2} are anagrams`);
} else {
    console.log(`${s1} and ${s2} are not anagrams`);
}
