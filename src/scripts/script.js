
const createLoginForm = () => {
    const form = UI.createElement('form', {}, [
      UI.createElement('input', { type: 'text', placeholder: 'First Name' }),
      UI.createElement('input', { type: 'text', placeholder: 'Last Name' }),
      UI.createElement('select', {}, [
        UI.createElement('option', { value: '' }, 'City'),
        UI.createElement('option', { value: 'city1' }, 'City 1'),
        UI.createElement('option', { value: 'city2' }, 'City 2')
      ]),
      UI.createElement('div', {}, [
        UI.createElement('input', { type: 'radio', name: 'gender', value: 'male' }),
        UI.createElement('label', {}, 'Male'),
        UI.createElement('input', { type: 'radio', name: 'gender', value: 'female' }),
        UI.createElement('label', {}, 'Female')
      ]),
      UI.createElement('div', {}, [
        UI.createElement('input', { type: 'checkbox', id: 'email' }),
        UI.createElement('label', { for: 'email' }, 'Send me Email')
      ]),
      UI.createElement('button', { type: 'submit' }, 'Submit')
    ]);
    const loginContainer = UI.createElement('div', { class: 'login-container' }, [form]);
    const formWrapper = UI.createElement('div', { class: 'form-wrapper' }, [loginContainer]);
    
    return formWrapper;
  };
  const createLayout = () => {
    const container = UI.createElement('div', { class: 'container-root' }, [
      UI.createElement('header', { class: 'header' }, [
        UI.createElement('a', { href: 'home.html' }, 'Home'),
        UI.createElement('a', { href: 'index.html' }, 'Log In')
      ]),
      createLoginForm()
    ]);
    const app = document.getElementById('app');
    UI.render(container, app);
  };
  createLayout();
  