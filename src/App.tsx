import React, { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';

import { store } from './init/store';

export const App: FC = (): ReactElement => <Provider store={store}>1</Provider>;
