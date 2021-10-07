export const handleClick = (e) => {
    const value = e.target.innerHTML;
    const allPageInfo = [...document.querySelectorAll('.page-info')];
    allPageInfo.forEach(info => info.style.display = 'none');
    const currentInfo = document.getElementById(value);
    currentInfo.style.display = 'block';
}