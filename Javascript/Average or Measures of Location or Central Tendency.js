const students = [{name: "Sam", score: 100},{name: "Vicky", score: 60},{ name:"Theo", score:75},{name:"Charles", score: 82},{name:"Blessing", score: 80},{name:"Mark", score:95},{name:"Angela", score:80},{name:"Stephen", score:69},{name:"Julius", score:98},{name:"Elina", score:55}];
// Extracting the scores from the array

  const scores = students.map(student => student.score);
  
  // Function to calculate mode
  const findMode = arr => {
    const freq = {};
    arr.forEach(num => freq[num] = (freq[num] || 0) + 1);
    const maxFreq = Math.max(...Object.values(freq));
    return Object.keys(freq).filter(num => freq[num] === maxFreq).map(Number);
  };
  
  // Function to calculate median
  const findMedian = arr => {
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  };
  
  // Calculate values
  const mode = findMode(scores);
  const median = findMedian(scores);
  const range = Math.max(...scores) - Math.min(...scores);
  const maxScore = Math.max(...scores);
  const minScore = Math.min(...scores);
  
  // Display results
  console.log("Scores:", scores);
  console.log("Mode:", mode);
  console.log("Median:", median);
  console.log("Range:", range);
  console.log("Maximum Score:", maxScore);
  console.log("Minimum Score:", minScore);