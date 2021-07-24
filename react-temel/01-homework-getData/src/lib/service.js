import axios from 'axios';

async function getData(id) {
  try {
    const userResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const postResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    console.log(userResponse.data);
    console.log('posts:', postResponse.data);
  } catch (error) {
    console.log(error);
  }
}

export default getData;
