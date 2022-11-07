import moment from 'moment';
import 'moment/locale/ru';

moment.updateLocale("ru", {
  week: { dow: 1 }
});

export default moment;