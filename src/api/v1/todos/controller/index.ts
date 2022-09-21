import { asyncCatcher } from '@utils';

import getAll from './getAll';
import create from './create';
import update from './update';
import destroy from './destroy';

export default asyncCatcher(getAll, create, update, destroy);
