var posts=["2025/07/28/hello-world/","2025/07/28/test2/","2025/07/28/test1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };