var posts=["2023/10/27/2023-10-27-web漏洞分类与详解/","2025/07/27/2025-7-27-vim编辑器/","2023/10/27/html 标签/","2025/08/02/2025-8-2-表格与表单/","2023/07/29/2023-7-29-h5初识/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };