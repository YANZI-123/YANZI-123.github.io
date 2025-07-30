var posts=["2025/07/30/Hexo个人博客搭建教程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };