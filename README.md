# creative-coding-projects
All hand written projects based on the examples given from GAD405 as well as a copy of the final project (https://lolon.github.io/) under FinalProject

Screenshots of final project are located in FinalProject/FinalScreenshots

Report

Inspirations

In my generative art, I looked at the different ways to approach the term of ‘generative’ and I was inspired by works like Forest of Sleep, Rogelio Cardona-Rivera and Chris Martens’ GDC talk on procedural Narratives and Plot-Generator to create an experience where the story isn’t predetermined and it is the art and the user’s task to construct their own story. Following from this, I believed the best approach for this with my time scale was to make different ‘slides’; dioramas that are left to the audience’s interpolation and can be shown in any order and still keep a consistent story. The script will then randomly select and show a different slide to the user and they will come to their own conclusion about what the story was.
As I knew I was going to use p5.js as my base of programming, I knew I had to keep the art style simple, so I took inspiration from the wallpapers of Google Now and its simple, colourful style and developed a similar look for the slides.

Development

First, I created concepts of all the slides I was to use in Photoshop. These allowed me to block out and visualise which each slide was going to look like and how they all work together in whatever order to construct a narrative. I took into consideration what parts of the slide would animate to make it more appealing and if they tell their level of the story in a clear way.

Afterwards, I then used p5.js to implement all these scenes so they can be loaded in a web browser. I used the scene manager library to allow p5 to switch between different scenes, which I used to allow for changing slides. Each slide is in its own separate scene, which helps organisation of code as well as optimisation when running as only the relevant scene is shown at one time.

Issues of development

During development, I had issues with the scene manager library and variable referencing, as each scene operated in its own function, with Setup() and Draw() in their own functions as well, so any variables it used had to be either declared inside the function and copied to others that needed similar, or declared outside all functions which makes its value consistent throughout all scenes. This was not ideal as it meant that a lot of lines of code had to be duplicated in multiple areas, such as the parallaxing effect.

Future improvements

If I were to develop this idea further, I may see to add sound to the slides. I experimented with adding sound during development, but I was not able to implement it to a satisfactory level in time. Sound may add a higher level of appeal and may add to the storytelling of the art.
Adding more slides to the work as well may be a benefit to the art’s ability to generate narratives, possibly having more than it will show in one session. This would also help its replay-ability as new experiences and stories can be found from it the more you watch.

References
•	Forest of Sleep - https://www.gamasutra.com/view/news/259455/Procedurally_generating_a_narrative_in_Forest_of_Sleep.php
•	Procedural Narratives - https://www.gdcvault.com/play/1024143/Procedural-Narrative
•	Plot Generator - https://www.plot-generator.org.uk/story/
•	Google Now - https://www.google.co.uk/landing/now/
