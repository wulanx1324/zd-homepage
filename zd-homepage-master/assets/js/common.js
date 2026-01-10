/**
 * 通用JavaScript函数 - 用于所有页面
 */

// 动态加载组件
function loadComponent(id, url) {
  return fetch(url)
    .then(response => response.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
      // 组件加载完成后，重新应用语言设置
      const savedLanguage = localStorage.getItem('language') || 'zh';
      if (typeof setLanguage === 'function') {
        setLanguage(savedLanguage);
      }
    })
    .catch(error => {
      console.error('Error loading component:', error);
    });
}

// 初始化侧边栏菜单事件
function initAsideMenu() {
  // 确保jQuery已加载
  if (typeof $ === 'undefined') {
    console.warn('jQuery not loaded, cannot initialize aside menu');
    return;
  }

  // 移除旧的事件监听（如果存在）
  $(".aside-trigger").off('click');
  
  // 绑定新的事件监听
  $(".aside-trigger").on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $("body").toggleClass('aside-open');
    console.log('Aside menu toggled, body class:', document.body.className);
  });

  console.log('Aside menu initialized, found', $(".aside-trigger").length, 'triggers');
}

// 初始化页面组件
function initPage() {
  // 加载头部和页脚组件
  Promise.all([
    loadComponent('header-placeholder', '/component/header.html'),
    loadComponent('footer-placeholder', '/component/footer.html')
  ]).then(() => {
    // 所有组件加载完成后
    const savedLanguage = localStorage.getItem('language') || 'zh';
    
    // 应用语言设置
    if (typeof setLanguage === 'function') {
      setLanguage(savedLanguage);
    }
    
    // 重新绑定侧边栏菜单事件
    initAsideMenu();
  }).catch(error => {
    console.error('Error loading page components:', error);
  });
}

// 当DOM加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  // DOM已经加载完成
  initPage();
}
