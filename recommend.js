// 根据会员兴趣推荐典籍
function getRecommendations(userId) {
    // 这里可以调用API获取推荐数据
    const recommendations = [
        { title: '道德经', author: '老子', match: '95%' },
        { title: '庄子', author: '庄子', match: '90%' },
        { title: '周易', author: '佚名', match: '88%' }
    ];
    renderRecommendations(recommendations);
}

function renderRecommendations(data) {
    const grid = document.querySelector('.recommend-grid');
    grid.innerHTML = data.map(item => `
        <div class="recommend-item">
            <h3>${item.title}</h3>
            <p>作者：${item.author}</p>
            <div class="match-rate">匹配度：${item.match}</div>
        </div>
    `).join('');
} 