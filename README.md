# _js-angular-meal-tracker_

#### _An application that allows users to log their daily meals including a name, details, and calories.  The user can then view their log entries sorted by the amount of calories each meal contains.  The app also gives the user the capability to edit a meal log once it has been input_

#### By _**Tim Bourgault**_

## Description

| Behavior |      Input    | Output|
|----------|:-------------:|:-----:|
| Returns a meal log entry that a user enters | example input: meal name: "Zucchini Noodles" details: "A classic favorite of mine.. Strings of zucchini topped with marinara sauce" calories: 700 | example output: "Zucchini Noodles", "A classic favorite of mine.. Strings of zucchini topped with marinara sauce", 700 |
| Allows user to sort meals by calorie content | example input: select from dropdown "meals above 500 calories" | example output: "Zucchini Noodles", "A classic favorite of mine.. Strings of zucchini topped with marinara sauce", 700 |
| Allows user to edit a meal log once it has been stored | example log: meal name: "Zucchini Noodles" details: "A classic favorite of mine.. Strings of zucchini topped with marinara sauce" calories: 700 -- example edit input: calories: "550", meal name: "Zoodles" | example output: "Zoodles", "A classic favorite of mine.. Strings of zucchini topped with marinara sauce", 550 |


## Setup/Installation Requirements

* _Clone the program from it's repository at GitHub.com by searching for the user name Timothy-Bourgault and then looking for js-angular-meal-tracker repository_
* _After cloning the repository and accessing it via terminal, then type the command 'npm install'_
* _Type the command 'bower install'_
* _Type the command 'gulp serve'_

## Known Bugs

_There are no known bugs_

## Support and contact details

_If any issues arise, please send notification to tim.bourgault@gmail.com. Thanks!_

## Technologies Used

_Written using JavaScript, Node.js, Browserify, Uglify, Concat, Bootstrap, and SASS_

### License

*This product can be used in accordance with the provisions under its MIT license.*

Copyright (c) 2016 **_Tim Bourgault_**
