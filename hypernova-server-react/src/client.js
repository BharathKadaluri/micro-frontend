import { renderReact } from 'hypernova-react';

import Header from './components/Header';
import Login from './components/Login';

renderReact('Header', Header)();
renderReact('Login', Login)();

