# Wonderschool Mobile Coding Challenge

## Introduction

Thanks for your interest in joining the Wonderschool engineering team! Before we proceed with more
formal interviews, we ask that all candidates submit a coding challenge. The coding challenge is
a foundational piece of our process and it's referenced later in our process during the technical
interviews.

The project is designed to test your React and React Native abilities, or your abilities to problem-solve
in a real world setting

If at any point you have questions concerning the coding challenge and/or interview process, please
do not hesitate to email engineering@wonderschool.com.

## Coding Challenge
* This coding challenge revolves around building a simple menu and shopping cart.
* The user can add items from the menu to the shopping cart.
* The user can change screens to the shopping cart.
* The shopping cart will have all the items that were added from the menu screen and an 'amount' display object showing
the number of times that item was added to the shopping cart.
* There should be a (+) button to add 1 to the amount for an item and a (-) button to subtract 1 from the amount
* The shopping cart should also include the base price of the item, and the total price (base x amount)
* When an item in the shopping cart reaches 0 amount, it should be removed from the shopping cart
* There should be a total cost that is a sum of all the items (x the amount) in the shopping cart
displayed at the bottom

## Technical Detail
* Prefer to use functional components unless there is reason to use class based components
* Prefer to use hooks
* Use immutable data and js functional higher order functions (reduce, map, filter, etc) when possible
* Make sure code is styled and linted. eslint and prettier has been set up. You may need to use the `.win`
  variety depending on your OS
* import the data from `src/data/menu`. Treat this data as if it were from data you received from an API.
  Store this data however you see fit.
* do not use any third party state manager (ie. redux). You may use context api
* react navigation has been set up in the project. Use that for navigation

## Grading Criteria
** STYLING WILL NOT BE CONSIDERED **
* In the interest of keeping this challenge short, spend a minimal amount of time styling the components.
  The styling shouldn't affect usability of the UI, but I don't care if it is ugly.

* All the points under 'Coding Challenge' above should be completed

* App should be usable from a user's perspective

## Sample Images
Here is how a completed project could look
It does not have to look like this
