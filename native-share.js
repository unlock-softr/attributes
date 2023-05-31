document.querySelectorAll('[suite-native-share=true]').forEach(button => {
  button.addEventListener('click', async () => {
    if (navigator.share) {
      const title = button.getAttribute('suite-title');
      const text = button.getAttribute('suite-text');
      const url = button.getAttribute('suite-url');

      try {
        await navigator.share({
          title: title,
          text: text,
          url: url,
        });
      } catch(err) {
        console.error('Share failed:', err.message);
      }
    } else {
      // Fallback for devices that do not support the Web Share API
      alert('Your device does not support native sharing.');
    }
  });
});
