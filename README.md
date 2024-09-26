# Save A Smile
![Save A Smile](https://github.com/user-attachments/assets/0a3cdfbe-2e67-42d8-b79f-f3801f5e27f6)


## Overview

Save-A-Smile is a mobile app designed to help users capture and revisit moments of happiness. Users can upload photos, write descriptions of why the moments made them smile, and store these memories in a personalized gallery. The app features a shuffle function to randomly display a saved memory, providing a joyful reminder on days when users need a pick-me-up.

### Problem Space

Life can be challenging, and it's easy to forget the moments of joy amidst the difficulties. Save-A-Smile offers a way to capture and preserve these positive moments, creating a collection of personal joy that users can revisit whenever they need a boost. It provides a simple yet effective way to remember and relive happy experiences, counteracting the stress and negativity that can arise in daily life.

### User Profile

The app is designed for individuals looking to preserve and revisit their joyful moments. Users might include:
-People who want to create a positive digital scrapbook of happy memories.
-Individuals seeking a simple way to brighten their day by revisiting pleasant memories.
-Those who enjoy capturing and reflecting on moments of happiness in their lives.
How will they use it?
Users will interact with the app by uploading photos, writing descriptions of why those moments made them happy, and saving them to their gallery. On days when they need a mood lift, they can shuffle their gallery to randomly view a memory and remind themselves of their joyful experiences.

### Features

Upload a Photo
As a user, I want to upload photos from my device’s gallery, so I can save memories that I have already captured.

Write a Memory Description
As a user, I want to write a short description of why this moment made me happy, so I can revisit the emotions attached to it later.

Save a Memory
As a user, I want to save my photo and description to a personalized gallery, so I can keep a collection of my joyful memories.

Shuffle Memories
As a user, I want to hit a shuffle button to randomly view a memory, so I can surprise myself with a joyful reminder on any day.

## Implementation

### Tech Stack

Frontend: React, React Router, Scss, Axios
Backend: Node.js with Express for API and server-side logic, JSON File Storage (initially)
Storage: AWS S3 or similar for storing photo uploads.
Deployment: Netlify or Vercel for frontend deployment, AWS or Heroku for backend deployment.

### APIs

custom created for each user

### Sitemap

Home Page
Description: The landing page where users can see a scattering of photos they’ve uploaded. At the top of the stack is a randomly selected memory. Users can tap to shuffle the stack and see a new one.

Add Memory Page
Description: A page where users can upload an image, write a description, and save it to their gallery.

### Mockups

![Save A Smile](https://github.com/user-attachments/assets/dc324f5c-f38e-4a99-b1de-d2482c13f96d)


### Data

Endpoints
POST /api/memories

Description: Create a new memory entry.
Parameters: UserID, PhotoURL, Description.
Response: Success message, MemoryID.
GET /api/memories/{userId}

Description: Retrieve all memories for a user.
Parameters: UserID.
Response: List of memories.
GET /api/memories/shuffle/{userId}

Description: Retrieve a random memory for a user.
Parameters: UserID.
Response: Random memory object.

### Endpoints

GET /memories: List all memories.
POST /memories: Add a new memory.
GET /memories/random: Get a random memory.

## Roadmap

Week 1: Core Development
Day 1: Set Up
Initialize project repository and React app.
Set up backend server with Express.
Day 2: Backend Development
Create endpoints: GET /memories, POST /memories, GET /memories/random.
Day 3-4: Home Page
Build layout to display memories.
Add shuffle functionality to show a random memory.
Day 5: Add Memory Page
Design form for uploading photos and descriptions.
Connect form to backend to save memories.
Day 6: Integration
Ensure frontend pages work with backend endpoints.
Test basic functionality.
Day 7: Testing & Debugging
Perform initial tests.
Fix any issues that arise.
Week 2: Final Touches
Day 8: UI/UX Enhancements
Improve the design and user experience of both pages.
Day 9: Comprehensive Testing
Test all features thoroughly.
Check for any bugs or issues.
Day 10: Optional Features
Add any extra features if time permits.
Day 11: Documentation
Write brief documentation for usage and endpoints.
Day 12: Prepare for Deployment
Get the app ready for deployment.
Day 13-14: Final Review
Perform final tests.
Make any last-minute adjustments and prepare for submission.

---

## Future Implementations

User Authentication/User Profiles
Feature: Implement user accounts and login functionality.
Benefit: Allows users to save and manage their memories independently.
Memory Categories or Tags
Feature: Add categories or tags to memories for better organization.
Benefit: Helps users categorize and filter their memories easily.
Share Memories
Feature: Add functionality to share memories via social media or email.
Benefit: Allows users to easily share joyful moments with others.
Backup and Restore
Feature: Implement backup and restore functionality for user memories.
Benefit: Ensures that users can recover their memories in case of data loss.

## To run:

Go ahead and download the main folder. Once you have it, unzip it. Drag in "express-server" and "react-client" folders into your code editor (I use VS code, for example). 
For back end:  In the terminal for react-client, type in: "npm install", hit enter, then "npm start" and hit enter again.
For front end: In the terminal for express-server, type in: "npm install", hit enter, then "npm run dev" and hit enter again. Follow the local host link!


