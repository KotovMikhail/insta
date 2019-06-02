import React from 'react';
import User from './User';

export default function Users() {
  return (
    <div className="right">
        <User 
            src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630" 
            alt="prince" 
            name="Harry_the_prince"
            />
        <div className="users__block">
        <User 
            src="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205229/40-something-man-2-1.jpg" 
            alt="Howard" 
            name="Howard21"
            min />
        <User 
            src="https://cdn.lifehack.org/wp-content/uploads/2015/01/alpha-woman-1024x768.jpeg" 
            alt="Lisa" 
            name="5Lisa_93"
            min />
        <User 
            src="https://static.pullandbear.net/2/static2/itxwebstandard/images/home/2019-05/24/mobile/Woman_Teen_v2.jpg" 
            alt="Mary" 
            name="Mary__gli"
            min />
        <User 
            src="https://static.politico.com/dims4/default/ee03467/2147483647/resize/1160x%3E/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F88%2Fac%2F79ace3924e2b87e074f8c8c3de11%2F181105-donald-trump-ap-773.jpg" 
            alt="Trump" 
            name="Trump_official"
            min />
        </div>
    </div>
  )
}