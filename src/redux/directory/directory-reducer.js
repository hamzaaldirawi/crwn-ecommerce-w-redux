const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            webpUrl: '/images/hats.webp',
            imageUrl: '/images/hats.png', 
            id: 1,
            linkUrl: 'shop/hats'
    
        },
        {
            title: 'jackets',
            webpUrl: '/images/jackets.webp',
            imageUrl: '/images/jackets.png', 
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            webpUrl: '/images/sneakers.webp',
            imageUrl: '/images/sneakers.png',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            webpUrl: '/images/womens.webp',
            imageUrl: '/images/womens.png', 
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            webpUrl: '/images/men.webp',
            imageUrl: '/images/men.png', 
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
            return state;
    }
};

export default directoryReducer;