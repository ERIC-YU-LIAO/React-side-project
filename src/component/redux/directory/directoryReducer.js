const INTIAL_STATE = {
    sections:[
        {
          title: '帽子/Hat' ,
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: '外套/Jackets',
          imageUrl: 'https://cdn2-manfashion.techbang.com/system/images/21674/original/19dc3c6031c9686465becfb2dd3d8e9d.png?1424091147',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: '鞋子/Sneakers',
          imageUrl: 'https://img.ruten.com.tw/s1/c/21/d5/21739168495061_223.jpg',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: '女裝/Womens',
          imageUrl: 'https://www.celiablogs.com/wp-content/uploads/2020/03/GLOBAL-WORK.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: '男裝/Mens',
          imageUrl: 'https://img.gq.com.tw/_rs/645/userfiles/GQBlog/20190103/1914308qf2259qm7_medium.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
          
        }
      ]
}


const directoryReducer = (state = INTIAL_STATE, action ) =>{
    switch(action.type){
        default:
            return state 
    }
}

export default directoryReducer;