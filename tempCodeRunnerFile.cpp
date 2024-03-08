#include <iostream>
#include <unordered_map>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    vector<int> nums = {1, 2, 3, 4, 5, 1, 2, 3, 1, 2};
    unordered_map<int, int> mp;

    // Count the frequency of each element
    for (int num : nums) {
        mp[num]++;
    }

    // Find the maximum frequency
    int maxFreq = 0;
    for (auto& pp : mp) {
        maxFreq = max(maxFreq, pp.second);
    }

    // Collect elements with maximum frequency
    vector<int> maxFreqElements;
    for (auto& pair : mp) {
        if (pair.second == maxFreq) {
            maxFreqElements.push_back(pair.first);
        }
    }

    // Print the elements with maximum frequency
    cout << "Elements with maximum frequency (" << maxFreq << "): ";
    for (int element : maxFreqElements) {
        cout << element << " ";
    }
    cout << endl;

    return 0;
}
