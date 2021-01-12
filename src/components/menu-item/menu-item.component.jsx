import { withRouter } from 'react-router-dom';

import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
} from './menu-item.styles';


const MenuItem = ({ title, imageUrl, webpUrl, size, history, match, linkUrl }) => (
    
    <MenuItemContainer size={size}
    onClick = { () => history.push(`${match.url}${linkUrl}`)}
    >
        <BackgroundImageContainer
            className = 'background-image' 
            imageUrl={imageUrl} webpUrl={webpUrl}
        >
        </BackgroundImageContainer>
        <ContentContainer>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItem);

/*
import supportsWebP from 'supports-webp';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, webpUrl, size, history, match, linkUrl }) => (
    
    <div 
    className = {`${size} menu-item`} 
    onClick = { () => history.push(`${match.url}${linkUrl}`)}
    >
        <div
            className = 'background-image' 
            style = {{
                backgroundImage: `url(${supportsWebP ? webpUrl : imageUrl})`
            }}
        >
        </div>
        <div className = 'content'>
            <h1 className = 'title'>{title.toUpperCase()}</h1>
            <span className = 'subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);
*/