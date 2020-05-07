# trackercise - NoSQL Workout Tracker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Good Health is always Good Form

The front end for this app was provided, so I had to go in and write
the back end and repair the stats page, which was a little wonky. I used
MongoDB for data retention, which was fine but didn't seem ideal for this
particular app.
I programmed this late at night after working on another app, so the structure
on the back end is a little chaotic. The front end started off that way.
If I have time later, I'll go back and clean both up some.


## User Story

```
AS A person that sits at a desk a lot
I WANT a fitness tracking app
SO THAT I will be motivated to move around more
```

```
GIVEN THAT I access my web app
WHEN I add workouts or exercises
THEN I want the data to write seamlessly and without effort
WHEN I look at the data in my database
THEN I want the structure to be logical and consistent
WHEN I access the data through API routes
THEN I want a standard output and interface
WHEN I view the compiled data on the stats page
THEN I want clear and sharp data and presentation
```

## Graphic
![Main App Screen](./assets/trackercise_Main_Screen.jpg)

## Table of Contents
* [Technologies](#Technologies)
* [Getting Started](#Getting)
* [Usage](#Usage)
* [Project Status](#Project)
* [Frequently Asked Questions](#FAQ)
* [Questions](#Additional)
* [Contributing](#Contributing)
* [License](#License)

## Technologies
node.js\
express\
Mongoose/MongoDB

## Getting Started
```
npm install
```

The server package uses express, mongoose, and path. You should be able to
get everything you need with 'npm install'.

```
npm run seed
```

There's also a seed script to generate the MongoDB database and populate it with
example data for you. Run it by executing 'seed.js' in the _seeders_ directory or
by using the npm script.

## Usage
```
node server.js
```

When you run the file, it'll alert you that the app is running on port 3000.
You can then hit the server at 'http://localhost:3000' in your browser, where
you'll see the front page with a summary of your last workout. You can hit
the buttons to either begin a new workout or add to your previous one; either
option takes you to the Add Exercise page.
On this page, you select either resistance or cardio, whereupon you'll enter
the name of your segment and its duration. If it's cardio, you'll put in
the distance. For strength training, you'll enter the weight, reps, and sets.
Click the Add Exercise button to insert your current activity and add a new
one, or click Complete Workout to go back to the main page.
You can click the 'Dashboard' tab at the top of the screen to go to your
summary page, where the app will present you with various graphs and charts
detailing your workout data in graphical format.

![Add Exercise Screen](./assets/trackercise_Add_Screen.jpg)
![Stats Showcase Screen](./assets/trackercise_Stats_Screen.jpg)

## Project Status
Finished for Now

## Additional Questions
Email or DM me.

## Contributing
Contact us for guidelines on submitting contributions.

## License
This project is licensed under the The MIT License.

![User Avatar Picture](https://avatars1.githubusercontent.com/u/61706660?v=4)
### ionathas78

This file generated on 5/7/2020 by goodReadMeGenerator, copyright 2020 Jonathan Andrews

