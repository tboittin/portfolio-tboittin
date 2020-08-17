import moment from 'moment'
import localization from 'moment/locale/fr';

// setup the fr parameter in moment.js to get the date format right
moment.updateLocale('fr', localization);

const Avatar = ({image, title, date}) => 
    <div className="media avatar-box mb-2">
      <img className="mr-2" src={image} />
      <div className="media-body align-self-center">
        <h5 className="mt-0 mb-0">{title}</h5>
        <p className="mt-0 subtitle">{moment(date).format('LLLL')}</p>
      </div>
    </div>;


export default Avatar