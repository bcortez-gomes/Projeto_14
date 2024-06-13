function showTab(tabId) {
    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function(tab){
    tab.style.display = 'none';
    });

    var selectedTab = document.getElementById(tabId);
    if (selectedTab) {
    selectedTab.style.display = 'block';
    }
}