
document.addEventListener('DOMContentLoaded', function() {
    const img = document.querySelector('.personal_img');

    img.addEventListener('mouseover', function() {
        img.src = 'images/myself2.png';
    });

    img.addEventListener('mouseout', function() {
        img.src = 'images/myself.jpg';
    });
});


function showFullList() {
    document.getElementById('selectedPublications').style.display = 'none';
    document.getElementById('fullPublications').style.display = 'table-row-group';
    document.getElementById('showFullListBtn').style.display = 'none';
    document.getElementById('showSelectedListBtn').style.display = 'inline';
  }
  
  function showSelectedList() {
    document.getElementById('selectedPublications').style.display = 'table-row-group';
    document.getElementById('fullPublications').style.display = 'none';
    document.getElementById('showFullListBtn').style.display = 'inline';
    document.getElementById('showSelectedListBtn').style.display = 'none';
  }

// Dictionary of people and their websites

// Function to convert plain text names to hyperlinks with asterisks preserved
function linkifyPeopleNames() {
  const contentElements = document.querySelectorAll('p, li, td, span, div');
  
  contentElements.forEach(element => {
    // Skip elements that should not be processed
    if (element.classList.contains('processed-names') || 
        element.tagName === 'A' ||
        element.closest('a') ||
        element.classList.contains('name') ||
        element.classList.contains('header_name') ||
        element.classList.contains('papertitle')) {
      return;
    }
    
    // Mark as processed to avoid reprocessing
    element.classList.add('processed-names');
    
    let html = element.innerHTML;
    
    // Replace each person's name with a link
    Object.keys(peopleUrls).forEach(name => {
      const url = peopleUrls[name];
      
      // Create a regex that matches the name but captures any asterisks after it
      const regex = new RegExp(`${name}(\\*?)(?![^<]*>)`, 'g');
      
      // Replace with hyperlink while preserving any asterisks
      html = html.replace(regex, `<a href="${url}" target="_blank">${name}</a>$1`);
    });
    
    element.innerHTML = html;
  });
}



// Dictionary of people and their websites
const peopleUrls = {
    "Wei-Shi Zheng": "https://www.isee-ai.cn/~zhwshi/",
    "Yi-Lin Wei": "https://wyl2077.github.io/",
    "Jingke Meng": "https://scholar.google.com/citations?user=0ee541wAAAAJ&hl=en",
    "Ancong Wu": "https://www.isee-ai.cn/~wuancong/",
    "Jian-Fang Hu": "https://www.isee-ai.cn/~hujianfang/",
    "Jian-Jian Jiang": "https://jianjian-jiang.github.io/",
    "Xiao-Ming Wu": "https://dravenalg.github.io/",
    "An-Lan Wang": "https://scholar.google.com/citations?user=mazWHncAAAAJ&hl=en",
    "Yuan-Ming Li": "https://lyman-smoker.github.io/",
    

    // Add more people as needed
  };
  
// Function to convert plain text names to hyperlinks with asterisks preserved
function linkifyPeopleNames() {
const contentElements = document.querySelectorAll('p, li, td, span, div');

contentElements.forEach(element => {
    // Skip elements that should not be processed
    if (element.classList.contains('processed-names') || 
        element.tagName === 'A' ||
        element.closest('a') ||
        element.classList.contains('name') ||
        element.classList.contains('header_name') ||
        element.classList.contains('papertitle')) {
    return;
    }
    
    // Mark as processed to avoid reprocessing
    element.classList.add('processed-names');
    
    let html = element.innerHTML;
    
    // Replace each person's name with a link
    Object.keys(peopleUrls).forEach(name => {
    const url = peopleUrls[name];
    
    // Create a regex that matches the name but captures any asterisks after it
    const regex = new RegExp(`${name}(\\*?)(?![^<]*>)`, 'g');
    
    // Replace with hyperlink while preserving any asterisks
    html = html.replace(regex, `<a href="${url}" target="_blank">${name}</a>$1`);
    });
    
    element.innerHTML = html;
});
}

// Run when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', linkifyPeopleNames);
