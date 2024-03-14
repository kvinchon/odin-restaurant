function contact() {
  const content = document.querySelector('#content');
  const container = document.createElement('div');

  const left = document.createElement('div');
  const right = document.createElement('div');

  const soon = document.createElement('div');
  const phone = document.createElement('div');
  const email = document.createElement('div');
  const restaurant = document.createElement('div');

  const phoneLabel = document.createElement('div');
  const phoneNumber = document.createElement('div');

  const emailLabel = document.createElement('div');
  const emailAddress = document.createElement('div');

  const restaurantLabel = document.createElement('div');
  const restaurantAddress = document.createElement('div');

  soon.textContent = 'See you soon';

  phoneLabel.textContent = 'Phone number';
  phoneNumber.textContent = '(123) 456-7890';

  emailLabel.textContent = 'Email address';
  emailAddress.textContent = 'hello@reallygreatsite.com';

  restaurantLabel.textContent = 'Restaurant';
  restaurantAddress.textContent = '123 Anywhere St. Any City, ST 12345';

  phone.appendChild(phoneLabel);
  phone.appendChild(phoneNumber);

  email.appendChild(emailLabel);
  email.appendChild(emailAddress);

  restaurant.appendChild(restaurantLabel);
  restaurant.appendChild(restaurantAddress);

  right.appendChild(soon);
  right.appendChild(phone);
  right.appendChild(email);
  right.appendChild(restaurant);

  container.appendChild(left);
  container.appendChild(right);

  soon.classList.add('soon');
  phone.classList.add('info');
  email.classList.add('info');
  restaurant.classList.add('info');

  left.classList.add('left');
  right.classList.add('right');
  container.classList.add('contact');

  content.appendChild(container);
}

export default contact;
