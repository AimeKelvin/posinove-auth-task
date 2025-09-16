const tabRegister = document.getElementById('tab-register');
const tabLogin = document.getElementById('tab-login');
const formRegister = document.getElementById('form-register');
const formLogin = document.getElementById('form-login');
const msg = document.getElementById('msg');

tabRegister.addEventListener('click', () => {
  tabRegister.classList.add('active'); tabLogin.classList.remove('active');
  formRegister.classList.remove('hidden'); formLogin.classList.add('hidden');
  msg.textContent = '';
});

tabLogin.addEventListener('click', () => {
  tabLogin.classList.add('active'); tabRegister.classList.remove('active');
  formLogin.classList.remove('hidden'); formRegister.classList.add('hidden');
  msg.textContent = '';
});

formRegister.addEventListener('submit', async (e) => {
  e.preventDefault();
  const payload = {
    name: document.getElementById('reg-name').value,
    email: document.getElementById('reg-email').value,
    password: document.getElementById('reg-password').value
  };
  const res = await fetch('/api/v1/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  msg.textContent = res.ok ? `Welcome, ${data.user.name}.` : data.message;
});

formLogin.addEventListener('submit', async (e) => {
  e.preventDefault();
  const payload = {
    email: document.getElementById('log-email').value,
    password: document.getElementById('log-password').value
  };
  const res = await fetch('/api/v1/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  msg.textContent = res.ok ? `Logged in as ${data.user.email}.` : data.message;
});
