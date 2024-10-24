# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


for backend
it's developed using django and it's done making seperate environment.
so, it needs to activate, before backend run. script for that : (windows) .\env\Scripts\Activate
then cd backend
run project script : python manage.py runserver
if changes done for models, views
    python manage.py makemigrations
    python manage.py migrate 
For deactivate, after backend run. script for that : deactivate