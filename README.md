# TestTakers SAT Prep (DEMO)

Project URL: http://ttprep-dashboard.herokuapp.com/

## Description

A web dashboard for highschool students enrolled in TestTakers, a company providing SAT/ACT score improvement services.  This application provides students a detailed view of exam scores and areas of improvements. 

* The user is able to log on to their profile.
* The user is able to view all practice scores given by TestTakers.
* The user is able to view scores by sections (Math, Reading, Writing) as well as subcategories within the sections (Algebra, etc.). 
* The user is able to find supplemental materials for score improvement in each subcategory.

![Student Summary Demo](https://media.giphy.com/media/hOesdpxAlEcnd8KR2l/giphy.gif)

## Tech Stack

Our tech stack includes React, Redux, Express, Sequelize, PostgreSQL and Node.js.

Major packages used include: Material-UI React and Chartjs.

## Technical Challenges

Defining the associations and the schema was a major challenge as we had to map out the relationship between the user class to the various categories and exam classes. We chose PostgresSQL for our database system because we needed a relational database.   

## Notes

Future add ons could include a Teacher dashboard and chat functionality.
