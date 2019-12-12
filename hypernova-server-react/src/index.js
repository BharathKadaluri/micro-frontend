import express from 'express';
import path from 'path';
import hypernova from 'hypernova/server';
import { renderReact } from 'hypernova-react';

import Header from './components/Header';
import Login from './components/Login';

hypernova({
  devMode: true,
  getComponent(name) {
    if (name === 'Header') {
      return renderReact(name, Header);
    } else if (name === 'Login') {
        return renderReact(name, Login);
    }
    return null;
  },
  port: process.env.PORT || 3031,

  createApplication() {
    const app = express();

    app.use(express.static(path.join(process.cwd(), 'dist')));

    return app;
  },
});
