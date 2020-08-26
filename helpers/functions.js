import moment from "moment";

// setup the fr parameter in moment.js to get the date format right
import localization from "moment/locale/fr";
moment.updateLocale("en", localization);

export const formatDate = (date, dateFormat = 'FF') => moment(date).format(dateFormat)