/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
// eslint-disable-next-line require-jsdoc
class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');

    locateUserBtn.addEventListener('click', this.locateUserHandler);
    addressForm.addEventListener('submit', this.findAdressHandler );
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert('feature not available in this browser');
      return;
    }
    navigator.geolocation.getCurrentPosition((successResult) => {
      const coordinates = {
        lat: successResult.coords.latitude,
        lng: successResult.coords.longitude,
      };
      console.log(coordinates);
    }, (error) => {
      alert('could not get current position, pleas enter manually');
    });
  }

  findAdressHandler() {}
}

const placeFinder = new PlaceFinder();
