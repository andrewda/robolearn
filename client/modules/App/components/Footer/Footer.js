import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

export function Footer() {
  return (
    <div style={{ background: `#673AB7` }} className={styles.footer}>
      <p>&copy; 2017-2018 &middot; South Eugene Robotics Team</p>
    </div>
  );
}

export default Footer;
