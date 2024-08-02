document.getElementById('new-post-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // フォームからデータを取得
    const postTitle = document.getElementById('post-title').value;
    const postContent = document.getElementById('post-content').value;

    // 新しい投稿を作成
    const newPost = document.createElement('article');
    newPost.innerHTML = `
        <h3>${postTitle}</h3>
        <p>${postContent}</p>
    `;

    // 投稿一覧に新しい投稿を追加
    document.getElementById('posts').appendChild(newPost);

    // フォームをリセット
    document.getElementById('new-post-form').reset();
});
