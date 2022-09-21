import { asyncCatcher } from '@utils';

import getAll from './getAll';
import create from './create';
import destroy from './destroy';

export default asyncCatcher(getAll, create, destroy);
