import {Modal} from './UI/Modal';

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
    const modal = new Modal('loading-modal-content', 'loading location please wait.');
    modal.show();
    navigator.geolocation.getCurrentPosition((successResult) => {
      modal.hide();
      const coordinates = {
        lat: successResult.coords.latitude,
        lng: successResult.coords.longitude,
      };
      console.log(coordinates);
    }, (error) => {
      modal.hide();
      alert('could not get current position, pleas enter manually');
    });
  }

  findAdressHandler() {}
}

const placeFinder = new PlaceFinder();
