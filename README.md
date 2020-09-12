## Inspiration

One of things that I've missed the most since quarantine started was going out to restaurants with friends. With many restaurants closed down for safety mesaures, it's even harder to go out. I wanted to build a platform where you can both make new friends and reconnect with old friends to make food in your own home.

## What it does

Food and Friends allows you to login and see other people around you that are also interested in making food with others. You can form groups within a certain radius and allows users to have a virtual cooking experience.

## How we built it

I used React Native for the framework of the app along with Google Cloud Platform's Firebase for authentication of users.

Tools Used:

- Firebase
  - User Authentication
- Firestone
  - Realtime Database
    - Stores Data and User Information
- React Native
  - Framework
- GitHub
  - File Management
  - Splash page hosting
    Radar.io
- Connects users to other users

## Challenges we ran into

I'm not a huge fan of React Native so this project was a way for me to start liking it more. One major challenge I faced was trying to get the chat feature up and running. It turns out that the <code>react-native-dialogflow</code> package uses some native modules for iOS which I didn't have access to as I was using expo. This gave me a "Native module cannot be null." error. To fix this, I had to downgrade the <code>react-native-dialogflow</code> package to an older one that was compatible with expo.

## Accomplishments that we're proud of

It's functional! Many times in hackathons before I've lost motivation part way through and I didn't want to continue, but I was able to get through this one. I'm particularly proud of getting Firebase to work as that was a struggle.

## What we learned

- Firestone
- Dialogflow
- Radar.io

## What's next for VirtualVisit

- Implement a Meet the Bears page where you can click on each bear and learn more about their personalities
- Implement Radar.io with the ability to calculate how far away you are from the habitat, how fast you can run compared to a polar bear etc.
- Bring in the live feed from the website and make it accessible through the app
- Games to play that help you learn about habitat loss (perhaps a platform game, Donkey Kong style climbing towards the ice
