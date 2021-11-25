import { configureStore } from '@reduxjs/toolkit';

import { aroundhomeApi } from '../services/aroundhomeApi';

export default configureStore({
  reducer: {
    [aroundhomeApi.reducerPath]: aroundhomeApi.reducer,
  },
});