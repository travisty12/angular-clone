# NgClone
> _A project using Angular to clone a website_

#### By **Travis Toal**

### Installation / Usage
* _Find live site [here](https://hackerspace-123.firebaseapp.com/)_

* _Clone this repository to your machine, and run 'npm install' to download the dependencies._
* _Using your own firebase API key, create the following api-keys.ts file, located at the top level of src/app:_
```javascript
export const masterFirebaseConfig = {
  apiKey: YOUR_API_KEY,
  authDomain: "hackerspace-123.firebaseapp.com",
  databaseURL: "https://hackerspace-123.firebaseio.com",
  projectId: "hackerspace-123",
  storageBucket: "hackerspace-123.appspot.com",
  messagingSenderId: "802981317493"
}
```
* _Run 'ng serve' to build the server, on localhost:4200._
* _Navigate in your preferred browser to localhost:4200 to view the code in action_
* _Open the project in your preferred text editor to change the code._

## Planning

1. Dependencies
  * Hundreds of dependencies, standard for Angular download.

2. Configuration
  * Set up project as behavior-driven, logic-separated directory
  * Follow a 'Data Down, Action Up' methodology

3. Specs


* _Site should contain PDX Hackerspace's elements and look similar_

* _Separate sections are created as separate components_

* _Site contains a grid of pictures with info showing on hover, and modal showing on click_

* _Modal page shows info, picture, restrictions, resources_

* _Link div turns to dropdown button at certain width - media query_

* _Site communicates with Firebase to access data_

* _Site uses routing to open modals_

* _Site is deployed live on firebase_

4. UX/UI

## Original Site
![pdx hackerspace site picture](src/assets/img/site-pic0.png)
![pdx hackerspace site picture](src/assets/img/site-pic1.png)
![pdx hackerspace site picture](src/assets/img/site-pic2.png)
![pdx hackerspace site picture](src/assets/img/site-pic3.png)
![pdx hackerspace site picture](src/assets/img/site-pic4.png)
![pdx hackerspace site picture](src/assets/img/site-pic5.png)
![pdx hackerspace site picture](src/assets/img/site-pic6.png)
![pdx hackerspace site picture](src/assets/img/site-pic7.png)

![site modal pic](src/assets/img/modal0.png)
![site modal pic](src/assets/img/modal1.png)

## Result
![my hackerspace site picture](src/assets/img/result-pic0.png)
![my hackerspace site picture](src/assets/img/result-pic1.png)
![my hackerspace site picture](src/assets/img/result-pic2.png)
![my hackerspace site picture](src/assets/img/result-pic3.png)
![my hackerspace site picture](src/assets/img/result-pic4.png)
![my hackerspace site picture](src/assets/img/result-pic5.png)
![my hackerspace site picture](src/assets/img/result-pic6.png)
![my hackerspace site picture](src/assets/img/result-pic7.png)

![my modal pic](src/assets/img/result-modal0.png)
![my modal pic](src/assets/img/result-modal1.png)

## Future Desired Features
* _Potential API calls to social media_
* _Component allowing easier navigation by clicking on a section name from a dropdown menu_

## Technologies Used

* _Angular CLI v1.6.5_

* _Node v10.15.3_

* _Angular v5.2.11_

* _Typescript v2.5.3_

* _Webpack v3.10.0_

* _Firebase, AngularFire_

* _Routing_

### Known Bugs

* _Second-to-last picture is oddly-sized and won't conform to the size I set. Weird._

### Support and Contact Details

_WARNING - mailto link:_

[Email me for any questions](mailto:travisty12@gmail.com)

[View my work on GitHub](https://www.github.com/travisty12/)

#### License
* _This software is licensed under the MIT license_

Copyright (c) 2019 **Travis Toal**
