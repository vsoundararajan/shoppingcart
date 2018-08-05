import { ItemDetails } from './components/itemDetails';
import { ItemDetailsContainer } from './components/itemDetailsContainer';
import { ItemsList } from './components/itemsList';
import * as actions from './actions/actions';

import reducer from './reducers/reducer';

const components = {
  ItemDetails,
  ItemDetailsContainer
};

export { components, reducer, ItemsList, actions };
