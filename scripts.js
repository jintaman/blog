document.addEventListener('DOMContentLoaded', function() {
    // ローカルストレージから投稿を読み込む
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const postsSection = document.getElementById('posts');

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
CSS (styles.css)
css
コードをコピーする
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #333;
    color: white;
    padding: 1em 0;
    text-align: center;
}

header nav ul {
    list-style: none;
    padding: 0;
}

header nav ul li {
    display: inline;
    margin-right: 1em;
}

header nav ul li a {
    color: white;
    text-decoration: none;
}

main {
    padding: 1em;
}

section {
    margin-bottom: 2em;
}

article {
    border-bottom: 1px solid #ddd;
    padding-bottom: 1em;
    margin-bottom: 1em;
}

article h3 {
    margin-top: 0;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 0.5em;
}

input, textarea {
    margin-bottom: 1em;
    padding: 0.5em;
    border: 1px solid #ddd;
    border-radius: 4px;
}

button {
    padding: 0.5em;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #555;
}
