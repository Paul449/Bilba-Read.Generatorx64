/*This function collects and displays current badges from the license specified */
const Badges = function(license){
    if(license === "MIT license"){  // if the license chosen equals the option from the questions, returns information in markdown format
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    } else if( license ==="Apache License 2.0"){   // if the license chosen equals the option from the questions, returns information in markdown format
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
    } else if(license ==="Mozilla Public License 2.0"){  // if the license chosen equals the option from the questions, returns information in markdown format
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
    } else{
        return "";
    }
}
/*This function collects and displays current links from the license specified and show all details */
const links = function(license){
    if(license === "MIT license"){
        return `[${license}](https://opensource.org/licenses/MIT)`;
    } else if(license ==="Apache License 2.0"){
        return `[${license}](https://opensource.org/licenses/Apache-2.0)`;
    } else if(license ==="Mozilla Public License 2.0"){
        return `[${license}](https://opensource.org/licenses/MPL-2.0)`;
    } else{
        return "";
    }
}
/*The following function represents the readme file which will be generated when the client enter input on the questions prompt */
const createReadMe = function(data){

   return `
   # ${data.title}
   
   ## Description

   ${data.description}

   ## Table Of Contents

   [installation instructions](#installation instructions) 
   [usage information](#usage information) 
   [contribution guidelines](#contribution guidelines) 
   [test instructions](#test instructions)

   ## installation instructions 

   ${data.installation}   

   ## usage information 

   ${data.usage}

   ## contribution guidelines 

   ${data.guidelines}

   ## test instructions

   ${data.test}

   ## License
   
   ${Badges(data.license)}

   This project is protected under the ${data.license}. For more information, please review the [${data.license}](${links(data.license)}) for specific details of the license chosen

   ## GitHub

    [GitHub username]:${data.username} (${data.profileLink})


   ## Contact Information

    Full Name: ${data.name}

    Email Me: ${data.email}

   `;
}

module.exports = createReadMe; // export the functions to index.js to specify the information to complete our readme file and generate it
