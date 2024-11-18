import styles from './styles.module.scss';
import fbIcon from '@icons/svgs/facebookIcon.svg';
import insIcon from '@icons/svgs/instagramIcon.svg';
import ytbIcon from '@icons/svgs/youtubeIcon.svg';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';

function BoxIcon({ type, href }) {
  const { boxIcon } = styles;

  const handleRenderIcon = (type) => {
    switch (type) {
      case 'facebook':
        return fbIcon;
      case 'instagram':
        return insIcon;
      case 'youtube':
        return ytbIcon;
      case 'reload':
        return reloadIcon;
      case 'cart':
        return cartIcon;
      case 'whishlist':
        return heartIcon;
    }
  };
  return (
    <div className={boxIcon}>
      <img src={handleRenderIcon(type)} alt={type} />
    </div>
  );
}

export default BoxIcon;
