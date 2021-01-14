# ID-ASG2
Assignment 2
Github link:
https://jaslynnn.github.io/ID-ASG2/

#Astir
Astir, a recipe sourcing website
- Showcases a recipe sourcing API that allows users to search for over 2 million recipes
- Allows users to create an account 
- Allows them to save notes in their notes section.
- Dark mode so that the user will be able to read in comfort

## Design Process
- Created for people who are uncertain of what to eat for breakfast lunch and dinner and do not know where and how to source for recipes.
- This is for people who want to become healthier by cooking at home
- Has a fun design so that people will look forward to using the website and thus feel motivated to cook at home.
- Allows users to keep a notes section so that the data will be saved the next time they return to the page.

Provide us insights about your design process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

As a user, I would like to get recipes of food so that I can cook at home.

As a user, I would like to have a pleasant user experience while going through the webpage 


In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:
- As a user type, I want to perform an action, so that I can achieve a goal.

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. 
These files should themselves either be included as a pdf file in the project itself (in an separate directory)
Include the Adobe XD wireframe as a folder. You can include the XD share url. 

## Features
- Horizontal Scroll - Allows users to navigate the home page horizontally by scrolling with their mouse.
  
- Dark-mode toggle - Allows users to toggle the color scheme of the whole webpage darker with a sun and moon icon.
  
- Anchors - Allows the user to navigate easily to the next item just with the click of a button.
  
- Collapsable navigation bar - More negative space so that the interface looks cleaner.
  
- Responsive images - Images zoom in or slide to the left when hovered over to create fluid user-experience.
  
- Side tab bar - Easy navigation and classification of items
  
- Recipe keyword Search bar - Easy for users to search for recipes by specific words
  
- Storage of users data - Makes use of local storage to store user information
  
- Auto display past data that has been entered before - Makes it more convenient for users when they want to log in
  
- Personalised profile card based on Sign in information - displays details entered by the user for a more personalised feel.

- Profile settings - allows users to change past information entered into the system and update their data.
  
- Notes section -Allows users to record notes on the recipes that they like after they press the save button, information entered will be saved and continue to be displayed there when they re-enter the website so that it will be convenient
  
 

### Features Left to Implement
- Recipes to be saved with the click of a button
- A saved recipes tab that displays all the recipes
- Gamefication system that awards the user badges when they save a certain number of badges.

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.
- [Bootstrap](https://getbootstrap.com/)
    - The project uses **Bootstrap** to create responsive elements.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
  
- [Fontawesome](https://fontawesome.com/)
    - The project uses the sun and moon icons from **Fontawesome** for the dark mode toggle.
  
- [Normalise.css](https://necolas.github.io/normalize.css/)
    - The project uses **noramlise.css**.
- [Edimam](https://developer.edamam.com/)
     - This project uses the **edimam** recipe sourcing api for the content




## Testing
Testing
1. Dark-mode toggle
   1. Go to every-page one after another
   2. Click onto the white ball in the toggle
   3. The ball should move to the other side to reveal the moon icon and the color scheme of the webpage should become dark and have some contrast.
   4. images should not have inverted colours
   
2. API
   1. Go to the recipes page
   2. click the "Start looking at breakfast"
   3. Verify that Recipe cards appear with images and content
   4. Hover over the cards to ensure that the card moves towards the right and the pictures move towards the left when hovered over.
   5. click onto the lunch, dinner and dessert tab
   6. verify that different recipes cards appear
   7. click onto the others tab
   8. Enter a search value into the search bar
   9. click the search button
   10. Verify that recipe cards of the search input is displayed
   
3. Sign up page
   1. Try to click the link to the sign up button
   2. Access the sign up page
   3. Try to submit the form with invalid inputs and verify that an relevant error message appears.
   4. Try to submit the form with all inputs valid and verify that a success message appears.
   5. Ensure that you are directed to the my profile page
   6. Ensure that the information entered in the previous page is shown in the profile page.
  
4. My profile page 
   1. Enter information into the notes
   2. Click the save button
   3. Refresh the page and check that the information entered still remains there
   
5. Profile settings page
   1. Go to the my profile page
   2. Click the settings button
   3. Ensure direction to the Profile settings page.
   4. Information that was previously entered into the sign up page should be automatically displayed there.
   5. Input in new information
   6. Click save
   7. Ensure direction to the my profile page
   8. Check that information on my profile has been updated.
   
6. Profile page cannot be navigated to on the home page
   1. Go to home
   2. click onto the collapsable menu
   3. click onto the profile tab
   4. Verify that a error message that prompts user to log in appears

7. Log in form on first page
   1. Go to home page
   2. Try to submit the form with an invalid email and password and verify that an relevant error message appears.
   3. Try to submit the form with all inputs valid and verify that a success message appears.


Bugs and issues

1. Inverted image lag
   - As I had inverted the colour of an image 2 times to ensure that the color of the image is regular, the second invert sems to be affected by the transition timing i have applied for other properties (eg. width), thus there is a flash of inverted colour before the colour goes back to normal when switching to dark mode.
  
2. Inverted images of recipe cards during dark mode
   - As I had applied the inverted 2 times, when I try a fetch element for another tab, the next results do not seem to have the second invert applied on it as it injects new html into the website. Thus the image colour is still inverted.
  
3. Log in form not working
   - As I was unsure of how to use javascript to enable access to another webpage,this was still unsolved

4. Profile settings only works for the change of First name
   - Although I have used the same local storage properties for the profile settings, my auto display does not seem to work for the only property that can be saved successfully. I have no idea why this is the case.
   - However users can change settings from the sign up page.
  
5. Unable to change the colour of the nav bar words 


## Credits

- Dark-mode-code 
  - https://dev.to/ekaterina_vu/dark-mode-with-one-line-of-code-4lkm)
  - https://youtu.be/qimopjP6YoM
  - The dark mode in this project was inspired by https://dev.to/ekaterina_vu/dark-mode-with-one-line-of-code-4lkm  and reference by the second video for the dark mode features.
  
- Toggle 
  - https://youtu.be/xodD0nw2veQ
  - This was the video that I referenced to create the sun and moon toggle.
  
- API 
  - https://youtu.be/zayeU5AOsHI 
  - https://youtu.be/0V87k44yI3o
  - These were the 2 videos that I referenced to link the api.
  
- Horizontal scroll
  - https://youtu.be/OeaHnxahf40
  - This was the video I referenced to do the horizontal scrolling bar
  
- API Edimam
  - https://developer.edamam.com/
  - This is the api that I used in my project
  
### Content
- API Edimam
  - https://developer.edamam.com/
  - This is the api that I used in my project to retreive the content
All of it was written by me except for the data retrieved by the api.
### Media
The images used in this site were obtained from 
  
- Cool liquid background - https://pikbest.com/free-backgrounds/banner.html
  
- jk food -  https://www.airbnb.com.br/experiences/816569?currentTab=home_tab&federatedSearchId=f35437ab-3063-414c-83ad-88628436ae7c&searchId=b3cdea41-b46f-4368-8749-43cdbd134cfd&sectionId=90586234-322a-4c5e-b9c3-0bfc61f8d8dd&source=p2
  
- jdw food - https://shopsquareone.com/sq1content/reds
  
- gudetama sailor moon - https://www.pinterest.com/pin/861454234972077894/

- The rest of the images generated by the api can be acredited by its source under "go to source" button for credits
### Acknowledgements
Firstly,
- I would like to thank my ID(Interactive Development) Teacher Ms Dai Mei Hua for her help and advice in my project as I would not have been able to complete it without her.
  
Secondly,
I would like to thank my friends in IM01 for attempting to help me with my project.
 
I would also like to thank my 3df teacher mr Kiew for giving some conmments
-  I received inspiration for this project from https://dribbble.com/
