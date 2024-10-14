document.getElementById('postButton').addEventListener('click', function() {
    const postInput = document.getElementById('postInput');
    const postContent = postInput.value;

    if (postContent.trim() !== '') {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.textContent = postContent;

        document.getElementById('posts').appendChild(postElement);
        postInput.value = ''; // Clear the input
    } else {
        alert('Please enter some text to post.');
    }
});

function toggleMusic() {
    const music = document.getElementById('background-music');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}