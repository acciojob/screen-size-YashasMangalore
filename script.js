//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const sizeInfo = document.getElementById('sizeInfo').querySelector('h1');

    function updateSize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        sizeInfo.textContent = `Width: ${width} and Height: ${height}`;
    }

    // Initial call to set the size when the page loads
    updateSize();

    // Update size on window resize
    window.addEventListener('resize', updateSize);
});
