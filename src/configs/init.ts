import * as dotenv from 'dotenv';
import { setLocale } from 'yup';

dotenv.config();

setLocale({
  mixed: {
    notType: _ref => {
      switch (_ref.type) {
        case 'number':
          return 'Must be a number.';
        case 'string':
          return 'Must be a string.';
        default:
          return 'Invalid type.';
      }
    }
  }
});

export {};
