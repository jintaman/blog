document.addEventListener('DOMContentLoaded', function() {
    const postsSection = document.getElementById('posts');
    
    // ローカルストレージから投稿を読み込む
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];

    storedPosts.forEach(post => {
        const newPost = document.createElement('article');
        newPost.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        `;
        postsSection.appendChild(newPost);
    });

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
        postsSection.appendChild(newPost);

        // ローカルストレージに保存
        storedPosts.push({ title: postTitle, content: postContent });
        localStorage.setItem('posts', JSON.stringify(storedPosts));

        // フォームをリセット
        document.getElementById('new-post-form').reset();
    });
});
