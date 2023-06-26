window.addEventListener('DOMContentLoaded', () => {
    if (!window.Viewer) return
    const style = document.createElement('style')
    style.textContent = `
    .md-container img {
        cursor: pointer;
    }`
    document.head.append(style)

    const imgsContainer = document.body.querySelector('.md-content')
    new Viewer(imgsContainer);
})