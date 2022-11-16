const fetchData = async () => {
  axios
    .get(
      "https://www.googleapis.com/blogger/v3/blogs/8786403954337161881/posts?key=AIzaSyDr4EbDIONIpH-kCW05e8InSAkv9GVAqRg"
    )
    .then(function (response) {
      // console.log(response.data.items[0].title);
      const heroBlogPara = document.getElementById("hero-blog-para");
      const heroBlogTitle = document.getElementById("hero-blog-title");
      const posts = response.data.items;

      for (post of posts) {
        console.log(post.content);
      }

      fechedPara = response.data.items[0].content;
      heroBlogTitle.innerHTML = response.data.items[0].title;
      heroBlogPara.innerHTML = fechedPara;
    });
};

fetchData();
