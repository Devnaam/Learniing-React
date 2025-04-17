export const dummyUsers = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      profilePic: 'https://via.placeholder.com/150',
      bio: 'Loves to travel and code!',
      posts: ['1', '2'],
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      profilePic: 'https://via.placeholder.com/150',
      bio: 'Foodie and photographer',
      posts: ['3'],
    },
  ]
  
  export const dummyPosts = [
    {
      id: '1',
      userId: '1',
      content: 'Enjoying a sunny day!',
      image: 'https://via.placeholder.com/600x400',
      likes: 10,
      comments: [
        { id: 'c1', userId: '2', text: 'Looks amazing!' },
      ],
    },
    {
      id: '2',
      userId: '1',
      content: 'New coding project',
      image: 'https://via.placeholder.com/600x400',
      likes: 5,
      comments: [],
    },
    {
      id: '3',
      userId: '2',
      content: 'Delicious dinner!',
      image: 'https://via.placeholder.com/600x400',
      likes: 15,
      comments: [],
    },
  ]
  
  export const dummyNotifications = [
    { id: '1', type: 'like', userId: '2', postId: '1', time: '2 hours ago' },
    { id: '2', type: 'follow', userId: '2', time: '1 day ago' },
  ]