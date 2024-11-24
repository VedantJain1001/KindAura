document.addEventListener('DOMContentLoaded', function () {
    const heartIcon = document.querySelector('.heart-icon');
    
    if (heartIcon) {
        heartIcon.addEventListener('click', function () {
            this.classList.toggle('liked');
        });
    }

    const modal = document.getElementById('modal');

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const commentInput = document.querySelector('.comment input');
    const commentModal = document.getElementById('comment-modal');
    const closeModal = document.querySelector('.close');
    const submitCommentButton = document.getElementById('submit-comment');
    const commentList = document.getElementById('comment-list');
    const newCommentInput = document.getElementById('new-comment');

    if (commentInput) {
        commentInput.addEventListener('click', function () {
            commentModal.style.display = 'block';
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', function () {
            commentModal.style.display = 'none';
        });
    }

    window.addEventListener('click', function (event) {
        if (event.target === commentModal) {
            commentModal.style.display = 'none';
        }
    });

    submitCommentButton.addEventListener('click', function () {
        const newCommentText = newCommentInput.value.trim();
        if (newCommentText) {
            const newCommentItem = document.createElement('div');
            newCommentItem.classList.add('comment-item');
            newCommentItem.innerHTML = `<strong>You: </strong> ${newCommentText}`;
            commentList.appendChild(newCommentItem);
            newCommentInput.value = '';
        }
    });
});

document.getElementById('show-signup').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
});

document.getElementById('show-login').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});