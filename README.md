<h1 align="center">AroundHome Bookings</h1>

<img width="1438" alt="Screenshot 2021-11-26 at 14 49 52" src="https://user-images.githubusercontent.com/43752457/143590954-f72593b0-a326-4159-88a4-064a2dbe23ee.png">

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#dependencies">Dependencies</a></li>
    <li><a href="#design-reasoning">Design Reasoning</a></li>
    <li><a href="#API">API</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
  </ol>
</details>

## About The Project

A simple SPA displaying companies available time slots while allowing them to make an appointment.

### Key Features

- Modern and Clean UI
- Extremely easy to use and intuitive
- Display a list of companies and their available time slots
- Teastable & Scalable
- Resposinve to different screen sizes

## Built With:

- [React](https://reactjs.org/)
- [Ant Design](https://ant.design/)
- [Mobiscroll](https://mobiscroll.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [VS Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)

### Dependencies

- React Icons
- Ant Design Icons


## Design Reasoning

The app was initialised with create-react-app.

It retrives the data from a dedicated [JSON SERVER API](https://github.com/edisonabdiel/RomeoTaskDB) and displays it in cohesive manner.

Components were built in a fashion that allows for a more responsive, dynamic and scalable experience.

The Calendar component was built using [Mobiscroll](https://mobiscroll.com/).

The UI is meant to be minimalistic yet engaging and intuitive. It was built using AntDesign to allow great control and autonomy over the layout of the app and also the design/feel of all the elements within it.


## API

Refer to the ```server``` folder for more information on how to get the server running and how to use it.

```cd``` into the ```server``` folder and run the following command:

```json-server timeslots.json``` 

| method | path               | description            |
|--------|--------------------|------------------------|
| GET    | /api/timeslots     | Get list of timeslots  |

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Getting Started

Clone the repository and run the following commands in the terminal:

Install the dependencies 

```bash
npm install
# or
yarn add install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Build 

```bash
npm run build
# or
yarn build
```


Open [http://localhost:3001](http://localhost:3001) in your browser to see the result.


<h4 align="center">Made with loads of ?????????????</h4>