//your code here
function sortAndDisplayBandNames(bandNames) {
  const articles = ['a', 'an', 'the'];

  // Remove articles from band names and create a new array
  const bandNamesWithoutArticles = bandNames.map((name) => {
    const words = name.split(' ');
    const filteredWords = words.filter((word) => !articles.includes(word.toLowerCase()));
    return filteredWords.join(' ');
  });

  // Sort band names in lexicographic order
  const sortedBandNames = bandNamesWithoutArticles.sort((a, b) => a.localeCompare(b));

  // Display band names in a UL list with LI tags
  const ulElement = document.getElementById('band');
  sortedBandNames.forEach((name) => {
    const liElement = document.createElement('li');
    liElement.textContent = name;
    ulElement.appendChild(liElement);
  });
}

// Example usage:
const bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
sortAndDisplayBandNames(bandNames);

