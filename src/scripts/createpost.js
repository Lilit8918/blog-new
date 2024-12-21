document.getElementById('createPostForm').addEventListener('submit', function (e) {
  e.preventDefault();

  
  const title = document.getElementById('title').value;
  const story = document.getElementById('story').value;
  const authorName = document.getElementById('authorName').value;
  const img = document.getElementById('img').value;


  const newPost = {
    id: Date.now(), 
    title: title,
    story: story,
    authorName: authorName,
    img: img
  };

  const existingPosts = JSON.parse(localStorage.getItem('newPosts')) || [];
  existingPosts.push(newPost);

  localStorage.setItem('newPosts', JSON.stringify(existingPosts));

  window.location.href = 'home.html';
});
