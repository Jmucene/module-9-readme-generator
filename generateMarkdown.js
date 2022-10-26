const badge = require('./licenseBadge');

// function to generate markdown for README

// 

function generateMarkdown(data) {
  
  return `# ${data.title}
${badge[data.license]}
## Description
${data.description}  
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)
## Installation
${data.installation} 
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
Contact email: ${data.email}\n
GitHub: [${data.github}](https://github.com/${data.github})\n
${data.addlquestions}
## License
  
This project is licensed under the terms of the ${data.license} license.
`;
}

module.exports = generateMarkdown;
