

![alt tag](https://github.com/gigimscarborough/OpenTableClone/blob/main/app/assets/images/logo.png)

## Table of Contents
  * [Overview](#overview)
  * [Technologies](#technologies)
  * [Features](#features)
    * [User Auth](#user-auth)
    * [Splash Page/Restaurant Index](#restaurant-index)
    * [Restaurant Search](#restaurant-search)
    * [Reservation Creation](#reservation-creation)

## OVERVIEW
FullPlate is a reservation creation and management application that allows a user to seamlessly view a variety of restaurants in their area and book custom detailed reservations at a wide array of any of our partner restaurants. This app was created using Postgres Database Mangement, Ruby on Rails on the backend, React on the front end, and AWS as our image hosting cloud service.

https://fullplate.herokuapp.com/#/

## TECHNOLOGIES

* Postgres DB

* Ruby on Rails

* React

* Redux

* Amazon AWS S3


## FEATURES

### User Auth
* Users can sign up and create a new account via multliple pages on the app while still being able to enjoy other functionality (view and search restaurants) while not logged in.
* Seamless page to page sign in capabilities.
* Users can also sign in with a demo account to subvert logging in and enjoy app features that require being logged in.


### Restaurant Index
* Users can view a sampling of our partner restaurants directly from our home page.
* Restaurants are orgaized on the Home page according to their features (Most Popular, Top Rated, etc.)

### Restaurant Search
* Users can search restaurants according to terms listed on the splash page.
* Restaurants are organized through the search by city, neigbhborhood, cuisine-type



### Reservation Creation 
* Users can create, store, and manage restaurant reservations through their account.
* Users can add special requests and select an occasion for their reservation.
* Users can select parameter for their reservation(time, date, guest count) from various that will persist to the reservation form.


## CHALLENGES

### Custom Default Time for Reservation Search Form
In the interest of creating a seamless design for the I chose to mimick OpenTable's functionality of displaying a custom default time settings for the reservation form. I chose to give the user an hour time window in order to allow them the time to be able to search a restaurant, book a reservation, and arrive at their dining location. I was very challenging to be able to give the default option the value of time in the datetime data format while displaying to the user the time  in a more comfortable non-military formatting and also in half hour increments.

```javascript
constructor(props) {
        super(props)
        
        this.dateToday = new Date()
        this.hours = ((this.dateToday.getHours() + 1) % 24) < 10 ? `0${((this.dateToday.getHours() + 1) % 24)}` : ((this.dateToday.getHours() + 1) % 24)
        this.minutes = this.dateToday.getMinutes() < 10 ? `0${this.dateToday.getMinutes()}` : this.dateToday.getMinutes()
        this.month = this.dateToday.getMonth() < 10 ? `0${this.dateToday.getMonth() + 1}` : this.dateToday.getMonth() + 1
        this.date = this.dateToday.getDate() < 10 ? `0${this.dateToday.getDate()}` : this.dateToday.getDate()
        this.year = this.dateToday.getFullYear()

        this.defaultTime = this.dateToday.getMinutes() >= 0 && this.dateToday.getMinutes() < 30 ? `${this.hours}:00:00` : `${this.hours}:30:00`

        this.state = this.props.search
        this.handleSubmit = this.handleSubmit.bind(this)

      
    }
```

```javascript
const currentHour = !this.props.search.time ? this.defaultTime.split(":") : this.props.search.time.split(":")

        const normalHour = parseInt(currentHour[0]) === 0 || parseInt(currentHour[0]) === 12 ? 12 : (parseInt(currentHour[0]) + 12) % 12

        let currentOption = <option selected value={this.state.time}>{`${normalHour}:${currentHour.slice(1, 2)} ${((currentHour[0]) / 12) >= 1 ? `PM` : `AM`}` }</option>
```

### Custom Timer for Reservation Form
In order to mimck OpenTable's reservation form timer that encourages guest to make their reservations in a timely fashion, I chose to implement my own custom countdown timer.

```javascript
 constructor(props) {
        super(props)
        this.time = 300
        this.setTimer = this.setTimer.bind(this)
        this.thisTime = setInterval(this.setTimer, 1000)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.dateTime = this.props.search.date + " " + this.props.search.time
        if (this.time === 0){
            clearInterval(this.thisTime)
        }


```

``` javascript
setTimer(){
        
        let minutes;
        let seconds;
        const timer =  document.getElementById('timer');
        if (timer === null) return null;
        seconds = this.time % 60 < 10 ? `0` + this.time % 60 : this.time % 60;
        minutes = Math.floor(this.time / 60);
        
        // for (let i = this.time; i >= 0; i--){
        timer.innerHTML = `We're holding this table for you for <span id="tb">${minutes}:${seconds} minutes</span> `
        this.time -= 1
            if (this.time === 0 ){
                timer.innerHTML = `You can still try to complete your reservation, but this table may no longer be available.`
                
                clearInterval(this.thisTime);
                
                this.time = 300;
                timer.classList.remove('time');
            }
        // }
    }
```






