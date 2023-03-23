const getPosts = () => {
  return new Promise((resolve, reject) => {
    var error = false;

    if (!error) {
      resolve();
    } else {
      reject('Error: Something went wrong!!');
    }
  });
};

getPosts.then((res) => res.json()).catch((err) => console.log(err));
