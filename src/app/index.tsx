/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import Navbar from 'app/components/Navbar';

import { HomePage } from './containers/HomePage';
import { ReactBDnD } from './containers/ReactBDnD/Loadable';
import { GridLayout } from './containers/ReactGridLayout';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Navbar />
      <Switch>
        <Route exact path="/react-drag-n-drop/" component={HomePage} />
        <Route exact path="/react-beautiful-dnd" component={ReactBDnD} />
        <Route exact path="/react-grid-layout" component={GridLayout} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
