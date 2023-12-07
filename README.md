# Crumble Randomiser for a Christmas Market Stall
This is a project I created for a company that sell crumbles at Christmas markets. They were looking for a randomiser that would help customers who do not know what they want choose fast and alo provide a fun little side gimmick. The randomiser takes in odds from the owners so they could control the results depending on stock levels. The site had to be optimised for a sepecif tablet size.

# How to run locally
Download all the files, the most recent compressed JQUERY library (https://jquery.com/download/) into the assets/js folder. Open index.html in brower and test.

**Link to project:** https://crumble-randomiser.netlify.app/

![gif of the website](https://github.com/Harry-Ashenden/larrys-crumble-randomiser/blob/main/assets/gif/crumbe-randomsier.gif)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, JQUERY

I started with a meeting with the client to get a solid idea of what they wanted the project to look like, from there I created a plan with a flow design for the user. I then started with the logic behind the randomiser and used several different sources to create the ideal model for this project using 2D arrays with items and value combined. Once the logic was written I added in loaded odds so the client could manipulate the results depending on the stock levels, this utilised local storage. After I added the animations and styled the site to suit the companies aethetic. 

## Optimizations
With more time before the deadline I would have combined some of the JS files to ensure DRY code by reusing functions that are shared. The reason for not doing this initially was to allow for the client to be able to maintain and change in the future clearly if the so desired. I could have also used React to create components that would ensure that the site is run on a single page.

## Lessons Learned:
Loacal storage is a great tool for storing user inputted data and will continue to last past page reload. CSS animations can be a simple and effective method to create some smooth animations without relying on heavier JS. Finally, the use of the JQUERY library in one part of the site was a great learning oppourtunity to see a different DOM manipulation tool can be utilised.


