const statusBlock = document.getElementById('status');
const userCards = document.querySelector('.user-cards');

loadUsers();

function tryLoadUsersFromStorage() {
  userCards.textContent = 'Данные загружаются';
  const users = JSON.parse(localStorage.getItem('users'));

  if (users) {
    renderUserCards(users);
    return true;
  }

  return false;
}

async function loadUsers() {
  try {
    if (tryLoadUsersFromStorage()) return;

    const response = await fetch('./users.json');

    if (!response.ok) {
      localStorage.removeItem('users');
      throw new Error(`Ошибка загрузки ${ response.status }`);
    }

    const data = await response.json();
    localStorage.setItem('users', JSON.stringify(data.users));

    setTimeout(() => renderUserCards(data.users), 1000);

  } catch(error) {
    console.error(error)
    userCards.textContent = 'Ошибка загрузки данных';
  }
}

function renderUserCards(usersArray) {
  userCards.textContent = '';
  const userTemplate = document.querySelector('#user-card-template');

  usersArray.forEach(user => {
    const userClone = userTemplate.content.cloneNode(true);

    userClone.querySelector('.user-name').textContent = `Имя: ${ user.name }`;
    userClone.querySelector('.user-surname').textContent = `Фамилия: ${ user.surname }`;
    userClone.querySelector('.user-email').textContent = `Почта: ${ user.email }`;
    userClone.querySelector('.user-age').textContent = `Возраст: ${ user.age }`;
    userClone.querySelector('.user-city').textContent = `Город: ${ user.city }`;
    userClone.querySelector('.delete-btn').addEventListener('click', () => {
      deleteUser(user.id);
    })

    userCards.appendChild(userClone);
  })
}

function deleteUser(id) {
  let users = JSON.parse(localStorage.getItem('users'));
  users = users.filter(user => user.id !== id);
  if (users.length === 0) {
    localStorage.removeItem('users');
  } else {
    localStorage.setItem('users', JSON.stringify(users));
  }
  
  renderUserCards(users);
}

const getAllUsersButton = document.querySelector('.get-all-btn');
getAllUsersButton.addEventListener('click', () => loadUsers());

const deleteAllUsersButton = document.querySelector('.delete-all-btn');
deleteAllUsersButton.addEventListener('click', () => {
  localStorage.removeItem('users');
  userCards.textContent = 'Данные удалены';
})