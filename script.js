
### JavaScript (script.js)
```javascript
document.getElementById('burger-menu').addEventListener('click', function() {
    var sideMenu = document.getElementById('side-menu');
    var isOpen = sideMenu.style.right == '0px';

    if (isOpen) {
        sideMenu.style.right = '-250px';
        document.body.style.backgroundColor = '#FFF';
    } else {
        sideMenu.style.right = '0px';
        document.body.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
});
