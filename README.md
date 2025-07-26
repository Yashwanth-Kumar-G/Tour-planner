# Tour Planner – Smart Budget & Step-Based Travel Game  

Tour Planner is an interactive web application designed to help users plan trips efficiently while making the experience fun through gamification. Users can explore destinations, plan routes, estimate travel costs, and use steps as currency to unlock cool avatars.

---

## Features

### Smart Budget Allocation  
- Implements a **priority scheduling-inspired system** to allocate the user's budget across multiple categories (food, sightseeing, etc.).  
- If a category has no available places, its budget is **redistributed** equally among remaining categories.  

### Public Transport Cost Estimation  
- Uses the **Overpass API** to estimate travel costs based on actual distances and public transport fare data.  
- Provides an interactive map for selecting source and destination, giving an accurate average cost.  

### Source-to-Destination Planning  
- Users can select start and end points on a map.  
- The app calculates estimated transportation costs and suggests routes.  

### Step-Based Shop  
- **Steps = Currency**.  
- Users earn steps through a step counter app.  
- Steps can be used to **purchase cool avatars** in the shop.  
- Purchased avatars appear on the **user’s profile** and **leaderboard icon**.  

### Leaderboards & Profiles  
- Track user progress, steps, and unlocked avatars.  
- Leaderboards showcase users with their chosen avatars.  

---

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript  
- **Mapping:** Leaflet.js  
- **APIs:** Overpass API (for transport cost estimation)  
- **Gamification:** Step-based currency system  

---
