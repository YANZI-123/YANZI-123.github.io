var posts=["2025/08/14/html 标签/","2025/07/27/2025-7-27-vim编辑器/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };