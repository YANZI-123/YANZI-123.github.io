var posts=["2025/07/30/网络管理实验/","2025/07/30/Hexo个人博客搭建教程/","2025/08/08/账户和组管理/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };