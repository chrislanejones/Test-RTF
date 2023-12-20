# What is Three.js and what technologies are involved

Three.js, a JavaScript library, greatly expands the capabilities of website graphics by expanding 2D graphic capabilities, including 3D graphics, and in-browser games.

This might remind you of the now-depreciated and disgraced Adobe Flash software. The Flash team developed Three.js and since then it has become open source, more secure, and more mobile responsive - it is more like a distance cousin; than a direct decedent. It also uses an interactive technology that web browsers already have, WebGL and JavaScript, instead of requiring a plugin like Flash.

## 3D Web and Three.JS is not a concept… The web is already using

3D Web has been around since the birth of the internet. In the 90s, many movie sites used Adobe Flash (then owned by Shockwave) to display animations for movies. Apple currently uses Three.js to display content on its website.

Proof video

3D Web is not an experimental concept as one may believe  
Three.JS is already available to use and is featured on a growing number of websites

## Technologies involved with

### 3D Animation Software

First, you need software to build 3d graphics (or enhanced 2d graphics) the defacto standard is Blender since it is free and open source, pifflora numerous amount of YouTube trainings, and has massive worldwide adoption. There are a few ways to design graphics without installing graphic software - including using the new software https://triplex.dev/

Note Objects are exported from the Animation Software but lighting and cameras will need to be set in Three.js.

### Web Rendering Engine

Second, once the 3D graphic is completed it can be exported as a glTF. OBJ and FBX formats can be exported but are not fully supported. Graphics works natively in the web browser because of the WebGL rendering engine that JavaScript can control. WebGL is based on OpenGL which many games use.

### Web Frontend Framework

Third, it is best to use Three.JS with a front-end framework like Angular or React. I chose React since I know it better than the other frameworks. I also started a course that uses LiNk React Three Fiber LiNk there is a lot of great documentation for using Three.js with React. Three.JS adds lights, cameras, and effects to objects. It can create shapes and import glTF objects.

It is good to use Three.js in tandem with its library Drei LiNk, It adds important features like scrolling animations.
