var firebaseConfig = {
    apiKey: "AIzaSyCm9NV3UlkXwkrUpDX0f2njQ2DNy2Bi1Ww",
    authDomain: "wheresmycar-mcyk.firebaseapp.com",
    databaseURL: "https://wheresmycar-mcyk.firebaseio.com",
    projectId: "wheresmycar-mcyk",
    storageBucket: "wheresmycar-mcyk.appspot.com",
    messagingSenderId: "19453210150",
    appId: "1:19453210150:web:74a73c2b90b78d5f31c0e7",
    measurementId: "G-21BLC7YZH6"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//initialise firebase
var database = firebase.database();

//display last updated: ===================================================
var parkDate = document.getElementById("parkDate");
var fetchDate = document.getElementById("fetchDate");
//console.log(parkDate.textContent);

var currentDate = new Date();
//console.log(currentDate);
var date = currentDate.getDate();
var month = currentDate.getMonth(); //Be careful! January is 0 not 1
var year = currentDate.getFullYear();

var dateString = date + "/" +(month + 1) + "/" + year;
var time = currentDate.toLocaleTimeString();
//console.log(time + " | " + dateString);

//display current floor  ===================================================
var displayFloor = document.getElementById("resultPark");
var displayFloorFetch = document.getElementById("resultFetch");
//console.log(displayFloor);
//console.log(displayFloor.textContent);

var f1A = document.getElementById("floor1a");
var f1B = document.getElementById("floor1b");
var f2A = document.getElementById("floor2a");
var f2B = document.getElementById("floor2b");
var f3A = document.getElementById("floor3a");
var f3B = document.getElementById("floor3b");
var f4A = document.getElementById("floor4a");
var f4B = document.getElementById("floor4b");
var f5A = document.getElementById("floor5a");
var f5B = document.getElementById("floor5b");

var parkBut = document.querySelector("#nav-park-tab");
var fetchBut = document.querySelector("#nav-fetch-tab");

var parkContainer = document.querySelector("#parkContainer");
var fetchContainer = document.querySelector("#fetchContainer");

parkBut.addEventListener('click', function(){
//	console.log("in park");	
	var result = database.ref("currentFloor").on('value', function (snapshot){
//	console.log("Your car is currently parked at " + snapshot.val());
//	console.log(displayFloor.textContent);
	displayFloor.textContent = snapshot.val();
	});
});

fetchBut.addEventListener('click', function(){
//	console.log("in fetched");
	var time = "";
	var date = "";
	var result = database.ref("currentFloor").on('value', function (snapshot){
//	console.log("Your car is currently parked at " + snapshot.val());
//	console.log(displayFloor.textContent);
	displayFloorFetch.textContent = snapshot.val();
	});
	
	var dateDB = database.ref("lastUpdated/time").on('value', function (snapshot){
		time = snapshot.val();
		console.log(time);
		fetchDate.textContent = time;
	});
//	console.log(fetchDate.textContent);
	var timeDB = database.ref("lastUpdated/date").on('value', function (snapshot){
//	console.log(fetchDate.textContent);
		date = snapshot.val();
		console.log(date);
		fetchDate.textContent += " | " + date;
	});
});


//============================================================
											 
f1A.addEventListener('click', function(){
	console.log("clicked on 1A");
	database.ref("currentFloor").set('1A');
	displayFloor.textContent = "1A"
	database.ref("lastUpdated").set({
		date: dateString,
		time: time
	});
	parkDate.textContent = time + " | " + dateString;
});

f1B.addEventListener('click', function(){
	console.log("clicked on 1B");
	database.ref("currentFloor").set('1B');
	displayFloor.textContent = "1B"
	database.ref("lastUpdated").set({
		date: dateString,
		time: time
	});
	parkDate.textContent = time + " | " + dateString;
});

f2A.addEventListener('click', function(){
	console.log("clicked on 2A");
	database.ref("currentFloor").set('2A');
	displayFloor.textContent = "2A"
	database.ref("lastUpdated").set({
		date: dateString,
		time: time
	});
	parkDate.textContent = time + " | " + dateString;
});

f2B.addEventListener('click', function(){
	console.log("clicked on 2B");
	database.ref("currentFloor").set('2B');
	displayFloor.textContent = "2B"
	database.ref("lastUpdated").set({
		date: dateString,
		time: time
	});
	parkDate.textContent = time + " | " + dateString;
});

f3A.addEventListener('click', function(){
	console.log("clicked on 3A");
	database.ref("currentFloor").set('3A');
	displayFloor.textContent = "3A"
	database.ref("lastUpdated").set({
		date: dateString,
		time: time
	});
	parkDate.textContent = time + " | " + dateString;
});

f3B.addEventListener('click', function(){
	console.log("clicked on 3B");
	database.ref("currentFloor").set('3B');
	displayFloor.textContent = "3B"
	database.ref("lastUpdated").set({
		date: dateString,
		time: time
	});
	parkDate.textContent = time + " | " + dateString;
});

f4A.addEventListener('click', function(){
	console.log("clicked on 4A");
	database.ref("currentFloor").set('4A');
	displayFloor.textContent = "4A"
	database.ref("lastUpdated").set({
		date: dateString,
		time: time
	});
	parkDate.textContent = time + " | " + dateString;
});

f4B.addEventListener('click', function(){
	console.log("clicked on 4B");
	database.ref("currentFloor").set('4B');
	displayFloor.textContent = "4B"
	database.ref("lastUpdated").set({
		date: dateString,
		time: time
	});
	parkDate.textContent = time + " | " + dateString;
});

f5A.addEventListener('click', function(){
	console.log("clicked on 5A");
	database.ref("currentFloor").set('5A');
	displayFloor.textContent = "5A"
	database.ref("lastUpdated").set({
		date: dateString,
		time: time
	});
	parkDate.textContent = time + " | " + dateString;
});


f5B.addEventListener('click', function(){
	console.log("clicked on 5B");
	database.ref("currentFloor").set('5B');
	displayFloor.textContent = "5B"
	database.ref("lastUpdated").set({
		date: dateString,
		time: time
	});
	parkDate.textContent = time + " | " + dateString;
});

//f1B.addEventListener('click', function(){
//	console.log("clicked on 1B");
//	var result = database.ref("currentFloor").on('value', function (snapshot){
//		console.log("Your car is currently parked at " + snapshot.val());
//	});
//});
