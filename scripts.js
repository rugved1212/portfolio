document.addEventListener('DOMContentLoaded', function() {
    const words = ["Android developer", "Web developer", "Game developer"];
    let wordIndex = 0;
    let letterIndex = 0;
    const typewriterElement = document.getElementById('profession');
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            letterIndex--;
        } else {
            letterIndex++;
        }

        typewriterElement.textContent = currentWord.substring(0, letterIndex);

        if (!isDeleting && letterIndex === currentWord.length) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(type, isDeleting ? 50 : 100);
    }

    type();
});
