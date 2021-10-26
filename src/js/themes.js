/**
 * ==========================
 * Theme Script by INovomiast
 * ==========================
 * ===========
 * MIT License
 * ===========
 * ===============================================
 * This Script is from SchoolWorks Github page for
 * theme management.
 * ===============================================
 * ========================================
 * Themes from: https://www.bootswatch.com/
 * ========================================
 */

//Here starts the code:

const themes_links = ['https://bootswatch.com/5/litera/bootstrap.min.css', 'https://bootswatch.com/5/darkly/bootstrap.min.css'] //links[0] = light || links[1] = dark

//URL Params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const page_theme = urlParams.get('theme');

if(page_theme === 'light'){
    document.querySelector("link[href='https://bootswatch.com/5/litera/bootstrap.min.css']").href = themes_links[0];
}else if(page_theme === 'dark'){
    document.querySelector('link[href= "https://bootswatch.com/5/litera/bootstrap.min.css"]').href = themes_links[1];
}