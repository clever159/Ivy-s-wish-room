// 数据模型
const state = {
    activeCategoryIndex: 0,
    totalCount: 0,
    categories: [
        {
            id: 'c1', name: '注意！', emoji: '📢',
            dishes: [
                { name: '注意！不可贪心！想一下能不能吃！', img: '⚠️', tag: '店规', tagType: 'rare', desc: '大厨会尽力完成，但保留因懒取消的权利 🫡', isRule: true, count: 0 },
                { name: '其他', img: '✨', tag: '自定义', tagType: 'free', desc: '想让大厨做点别的？在这里备注说明吧', count: 0 }
            ]
        },
        {
            id: 'c2', name: '喝的', emoji: '🧋',
            dishes: [
                { name: '奶茶', img: 'images/milktea.png?v=2', tag: '热门', tagType: 'hot', desc: '瑞幸/霸王茶姬/茶百道/喜茶/雪王随你选，备注口味甜度', count: 0 },
                { name: '西瓜冰', img: '🍉', tag: '夏日必备', tagType: 'hot', count: 0 },
                { name: '冰沙', img: '🍧', tag: '热门', tagType: 'hot', desc: '听说黄瓜味的很好吃哦', count: 0 },
                { name: '尖叫', img: 'images/drink/jjblue.png?v=2', tag: '挤着喝', tagType: 'new', desc: '备注颜色', count: 0 },
                { name: '营养快线', img: 'images/drink/yykx.png?v=2', tag: '酸奶饮料', tagType: 'free', desc: '备注口味', count: 0 },
                { name: '其他', img: '✨', tag: '自定义', tagType: 'free', desc: '想喝点别的？备注说明', count: 0 }
            ]
        },
        {
            id: 'c3', name: '路边摊', emoji: '🍢',
            dishes: [
                { name: '淀粉肠 / 花刀肠', img: 'images/sossage.png?v=2', tag: '香', tagType: 'hot', desc: '世界上最大的超市特有', count: 0 },
                { name: '麻辣烫基础套餐', img: '�', tag: '必点', tagType: 'hot', desc: '有别的想加的备注上', count: 0 },
                { name: '香辣烤面筋', img: '�', tag: '深夜灵魂', tagType: 'hot', desc: '可能没那么想吃吧', count: 0 },
                { name: '糖醋铁板烧', img: '�', tag: '独家', tagType: 'love', desc: '宝藏小店',  count: 0 },
                { name: '烤冷面', img: '🍱', tag: '东北味儿', tagType: 'love', desc: '我俩还是一起去买吧',  count: 0 },
                { name: '其他', img: '✨', tag: '自定义', tagType: 'free', desc: '想吃点别的？备注说明', count: 0 }
            ]
        },
        {
            id: 'c4', name: '快餐', emoji: '�',
            dishes: [
                { name: "McDonald's", img: '🍟', tag: '神圣', tagType: 'hot', desc: '我钟意食牡丹楼', count: 0 },
                { name: 'Taco / 塔克星', img: '�', tag: '新品', tagType: 'new', desc: 'Taco Tuesday!', count: 0 },
                { name: 'KFC', img: '�', tag: '疯四限定', tagType: 'hot', desc: '不用V我50', count: 0 },
                { name: '其他', img: '✨', tag: '自定义', tagType: 'free', desc: '想吃点别的？备注说明', count: 0 }
            ]
        },
        {
            id: 'c5', name: '甜点', emoji: '🎂',
            dishes: [
                { name: '蛋糕', img: '🎂', tag: '随时可点', tagType: 'love', desc: '想吃蛋糕需要什么理由呢', count: 0 },
                { name: '滨寿司', img: '🍣', tag: '漂亮饭', tagType: 'love', desc: '不要再错过排队了！', count: 0 },
                { name: '零食大礼包', img: '🍩', tag: '上新', tagType: 'new', desc: '超市自选，推着购物车跟你走', count: 0 },
                { name: '其他', img: '✨', tag: '自定义', tagType: 'free', desc: '想吃点别的？备注说明', count: 0 }
            ]
        },
        {
            id: 'c6', name: '仓鼠局', emoji: '🐹',
            dishes: [
                { name: '带鸡蛋出门遛弯', img: '🐹', tag: '专属', tagType: 'love', desc: '带鸡蛋出来晒太阳啃草皮', count: 0 },
                { name: '给鸡蛋加餐', img: '🥗', tag: '营养套餐', tagType: 'new', desc: '帮你去买仓鼠零食/粮食', count: 0 },
                { name: '鸡蛋专属写真', img: '📸', tag: '限定', tagType: 'rare', desc: '谁说我拍照不好看！', count: 0 },
                { name: '其他', img: '✨', tag: '自定义', tagType: 'free', desc: '其他关于鸡蛋的需求？', count: 0 }
            ]
        },
        {
            id: 'c7', name: '游戏局', emoji: '🎮',
            dishes: [
                { name: '打王者', img: '👑', tag: '开黑', tagType: 'hot', desc: '全程配合，你carry我辅助，输了不甩锅，我保证！', count: 0 },
                { name: '打蛋仔派对', img: '🥚', tag: '最爱', tagType: 'love', desc: '小红保驾护航，输了算我炸单', count: 0 },
                { name: '瓦', img: 'images/valorant.png?v=2', tag: '随缘', tagType: 'love', desc: 'fps界的低山臭水来了', count: 0 },
                { name: '双人成行', img: 'images/ittakestwo.png?v=2', tag: '随缘', tagType: 'love', desc: '哪有打不过怪美甲的啊', count: 0 },
                { name: '随便玩你选', img: '🎲', tag: '自由点', tagType: 'free', desc: '你说玩什么就玩什么，永远奉陪', count: 0 },
                { name: '其他', img: '✨', tag: '自定义', tagType: 'free', desc: '想玩别的游戏？', count: 0 }
            ]
        },
        {
            id: 'c8', name: '约会局', emoji: '🌅',
            dishes: [
                { name: '湖边坐着发呆', img: '🌊', tag: '情侣套餐', tagType: 'love', desc: '挑眉emoji', count: 0 },
                { name: '逛街（背包服务）', img: '🛍️', tag: '体力活', tagType: 'hot', desc: '在我手上试妆ba', count: 0 },
                { name: '陪你看电影', img: '🎬', tag: '限时', tagType: 'new', desc: '看电影有点暧昧了', count: 0 },
                { name: '拼豆', img: 'images/pindou.png?v=2', tag: '创意', tagType: 'new', desc: '一个屋子一待就是一天', count: 0 },
                { name: '夜晚散步', img: '🌙', tag: '浪漫', tagType: 'love', desc: '这项有点多余', count: 0 },
                { name: '接放学', img: 'images/qinzi.png?v=2', tag: '亲子', tagType: 'love', desc: '别的小孩儿放学都有人接', count: 0 },
                { name: '其他', img: '✨', tag: '自定义', tagType: 'free', desc: '有别的约会计划？', count: 0 }
            ]
        },
        {
            id: 'c9', name: '充电局', emoji: '📚',
            dishes: [
                { name: '一起自习', img: '📖', tag: '高效', tagType: 'free', desc: '', count: 0 },
                { name: '不开心', img: 'images/sad.png?v=2', tag: 'emo', tagType: 'rare', desc: '找我聊天吧', count: 0 },
                { name: '生气了，需要哄', img: '💆', tag: '呵护', tagType: 'love', desc: '想咬人的来', count: 0 },
                { name: '需要静一静', img: 'images/quiet.png?v=2', count: 0 },
                { name: '其他', img: '✨', tag: '自定义', tagType: 'free', desc: '有别的充电方式？', count: 0 }
            ]
        },
        {
            id: 'c10', name: '其他', emoji: '⚠️',
            dishes: [
                { name: '骚扰大厨', img: '✨', tag: '自定义', tagType: 'free', desc: '有别的需求？在这里备注说明吧', count: 0 }
            ]
        }
    ]
};

// 大厨推送 Key
const chefPushKey = 'PDU41838T1UA7OqObxkpYSVZQ0ULhS9rA1Qz44qOl';

// 初始化
function init() {
    try {
        window.dom = {
            sidebar: document.getElementById('sidebar'),
            mainContent: document.getElementById('main-content'),
            totalBadge: document.getElementById('total-badge'),
            submitBtn: document.getElementById('submit-btn'),
            modalOverlay: document.getElementById('modal-overlay'),
            modalTitle: document.getElementById('modal-title'),
            modalContent: document.getElementById('modal-content'),
            modalCancel: document.getElementById('modal-cancel'),
            modalConfirm: document.getElementById('modal-confirm'),
            orderView: document.getElementById('order-view'),
            historyView: document.getElementById('history-view'),
            tabOrder: document.getElementById('tab-order'),
            tabHistory: document.getElementById('tab-history'),
            historyList: document.getElementById('history-list')
        };

        if (!window.dom.sidebar || !window.dom.mainContent) {
            console.error('关键 DOM 节点缺失');
            return;
        }

        renderSidebar();
        renderMain();
        calculateTotal();
    } catch (e) {
        console.error('初始化失败:', e);
    }
}

// 视图切换逻辑
window.switchTab = (tab) => {
    const { orderView, historyView, tabOrder, tabHistory } = window.dom;
    if (tab === 'order') {
        orderView.style.display = 'flex';
        historyView.style.display = 'none';
        tabOrder.classList.add('on');
        tabHistory.classList.remove('on');
    } else {
        orderView.style.display = 'none';
        historyView.style.display = 'block';
        tabOrder.classList.remove('on');
        tabHistory.classList.add('on');
        renderHistory();
    }
};

// 历史订单逻辑
function saveOrderToHistory(orderList) {
    try {
        const history = JSON.parse(localStorage.getItem('orderHistory') || '[]');
        const newOrder = {
            id: Date.now(),
            time: new Date().toLocaleString(),
            items: orderList
        };
        history.unshift(newOrder);
        localStorage.setItem('orderHistory', JSON.stringify(history));
    } catch (e) {
        console.error('保存历史失败:', e);
    }
}

window.deleteOrder = (id) => {
    if (!confirm('确定要删除这笔记录吗？')) return;
    const history = JSON.parse(localStorage.getItem('orderHistory') || '[]');
    const newHistory = history.filter(order => order.id !== id);
    localStorage.setItem('orderHistory', JSON.stringify(newHistory));
    renderHistory();
};

window.clearAllHistory = () => {
    if (!confirm('确定要清空所有历史记录吗？')) return;
    localStorage.removeItem('orderHistory');
    renderHistory();
};

function renderHistory() {
    const history = JSON.parse(localStorage.getItem('orderHistory') || '[]');
    const { historyList } = window.dom;
    if (history.length === 0) {
        historyList.innerHTML = '<div class="empty-history">暂无历史投喂记录 🫡</div>';
        return;
    }

    historyList.innerHTML = history.map(order => `
        <div class="history-item">
            <div class="history-time">
                <span>📅 ${order.time}</span>
                <div style="display:flex; align-items:center; gap:8px;">
                    <span style="color:var(--brand)">已送达</span>
                    <span class="del-order-btn" onclick="deleteOrder(${order.id})">×</span>
                </div>
            </div>
            ${order.items.map(item => `
                <div class="history-dish">${item.name} x${item.count}</div>
                ${item.remark !== '无备注' ? `<div class="history-remark">💬 ${item.remark}</div>` : ''}
            `).join('')}
        </div>
    `).join('');
}

// 渲染逻辑
function renderSidebar() {
    window.dom.sidebar.innerHTML = state.categories.map((cat, index) => `
        <div class="cat-item ${state.activeCategoryIndex === index ? 'active' : ''}" 
             onclick="onCategoryTap('${cat.id}', ${index})">
            <span class="cat-emoji">${cat.emoji}</span>${cat.name}
        </div>
    `).join('');
}

function renderMain() {
    window.dom.mainContent.innerHTML = state.categories.map((cat, cIdx) => `
        <div id="${cat.id}">
            <div class="cat-header">${cat.emoji} ${cat.name}<span class="cat-count">(${cat.dishes.length})</span></div>
            ${cat.dishes.map((dish, dIdx) => `
                <div class="dish" id="dish-${cIdx}-${dIdx}" onclick="onDishTap(${cIdx}, ${dIdx})">
                    <div class="dish-img">
                        ${(dish.img && dish.img.length > 4) ? `<img src="${dish.img}" alt="${dish.name}">` : `<span>${dish.img || '✨'}</span>`}
                        ${dish.isSoldOut ? `<div class="sold-mask">补货中</div>` : ''}
                    </div>
                    <div class="dish-body">
                        <div class="dish-name">
                            ${dish.name}
                            <span class="pill p-${dish.tagType || 'free'}">${dish.tag || ''}</span>
                        </div>
                        <div class="stars-row">
                            <span class="star-i">★★★★★</span>
                            <span style="font-size:10px;color:var(--text2);margin-left:3px;">5.0</span>
                        </div>
                        <div class="dish-desc">${dish.desc || ''}</div>
                        
                        <div class="remark-area" onclick="event.stopPropagation()">
                            <textarea 
                                class="remark-input" 
                                placeholder="添加备注（口味、要求等）..." 
                                oninput="onRemarkInput(${cIdx}, ${dIdx}, this.value)"
                            >${dish.remark || ''}</textarea>
                        </div>

                        <div class="dish-bottom">
                            <span class="price-tag"></span>
                            ${dish.isRule ? `<span style="font-size:10px;color:var(--text3);">已知晓 ✓</span>` : `
                                <div class="stepper">
                                    <button class="s-btn ${dish.count === 0 ? 'hide' : ''}" 
                                            onclick="event.stopPropagation(); dec(${cIdx}, ${dIdx})">−</button>
                                    ${dish.count > 0 ? `<span class="s-num">${dish.count}</span>` : ''}
                                    <button class="add-circle" 
                                            onclick="event.stopPropagation(); inc(${cIdx}, ${dIdx})">+</button>
                                </div>
                            `}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `).join('');
}

// 备注处理
window.onRemarkInput = (cIdx, dIdx, val) => {
    state.categories[cIdx].dishes[dIdx].remark = val;
};

// 业务逻辑
window.onCategoryTap = (id, index) => {
    state.activeCategoryIndex = index;
    renderSidebar();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
};

window.inc = (cIdx, dIdx) => {
    if (state.totalCount >= 3) {
        showToast('不可以太贪心哦，每次限点3件！');
        return;
    }
    state.categories[cIdx].dishes[dIdx].count++;
    calculateTotal();
    renderMain();
};

window.dec = (cIdx, dIdx) => {
    if (state.categories[cIdx].dishes[dIdx].count <= 0) return;
    state.categories[cIdx].dishes[dIdx].count--;
    calculateTotal();
    renderMain();
};

window.onDishTap = (cIdx, dIdx) => {
    const el = document.getElementById(`dish-${cIdx}-${dIdx}`);
    if(el) {
        el.classList.add('bump');
        setTimeout(() => el.classList.remove('bump'), 150);
    }
};

function calculateTotal() {
    let total = 0;
    state.categories.forEach(cat => {
        cat.dishes.forEach(dish => {
            total += (dish.count || 0);
        });
    });
    state.totalCount = total;
    
    if (window.dom.totalBadge) {
        window.dom.totalBadge.innerText = total;
        window.dom.totalBadge.classList.toggle('show', total > 0);
    }
    if (window.dom.submitBtn) {
        window.dom.submitBtn.classList.toggle('on', total > 0);
    }
}

// 随机选菜
document.getElementById('rand-btn').onclick = () => {
    let validDishes = [];
    state.categories.forEach((cat, cIdx) => {
        cat.dishes.forEach((dish, dIdx) => {
            if (!dish.isRule) {
                validDishes.push({ cIdx, dIdx, catId: cat.id });
            }
        });
    });

    if (validDishes.length === 0) return;
    
    const pick = validDishes[Math.floor(Math.random() * validDishes.length)];
    onCategoryTap(pick.catId, state.categories.findIndex(c => c.id === pick.catId));

    setTimeout(() => {
        const el = document.getElementById(`dish-${pick.cIdx}-${pick.dIdx}`);
        if(el) el.classList.add('bump');
        
        if (state.totalCount < 3) {
            inc(pick.cIdx, pick.dIdx);
        } else {
            showToast('帮抽到了好吃的，但你已经点满3件啦！');
        }
        if(el) setTimeout(() => el.classList.remove('bump'), 150);
    }, 300);
};

document.getElementById('submit-btn').onclick = () => {
    if (state.totalCount === 0) return;

    let orderList = [];
    state.categories.forEach(cat => {
        cat.dishes.forEach(dish => {
            if (dish.count > 0) {
                orderList.push({ 
                    name: dish.name, 
                    count: dish.count,
                    remark: dish.remark || '无备注'
                });
            }
        });
    });

    const alertContent = orderList.map(item => `• ${item.name} x${item.count}\n  备注：${item.remark}`).join('\n');
    
    showModal('💖 专属订单确认', `确定要向大厨发送以下投喂申请吗？\n\n${alertContent}`, () => {
        sendToPushDeer(orderList);
    });
};

function sendToPushDeer(orderList) {
    const text = `🔔 新订单：\n${orderList.map(item => `• ${item.name} x${item.count}\n  备注：${item.remark}`).join('\n')}\n合计：${state.totalCount}件`;
    const url = `https://api2.pushdeer.com/message/push?pushkey=${chefPushKey}&text=${encodeURIComponent(text)}`;

    fetch(url, { mode: 'no-cors' })
        .then(() => {
            showToast('呼叫请求已发出！🚀\n请等待大厨确认');
            saveOrderToHistory(orderList);
            clearCart();
        })
        .catch(err => {
            const img = new Image();
            img.src = url;
            showToast('呼叫请求已发出(备选通道)！🚀');
            saveOrderToHistory(orderList);
            clearCart();
        });
}

function clearCart() {
    state.categories.forEach(cat => {
        cat.dishes.forEach(dish => {
            dish.count = 0;
            dish.remark = '';
        });
    });
    calculateTotal();
    renderMain();
}

function showToast(msg) {
    alert(msg);
}

function showModal(title, content, onConfirm) {
    window.dom.modalTitle.innerText = title;
    window.dom.modalContent.innerText = content;
    window.dom.modalOverlay.classList.add('show');
    
    window.dom.modalConfirm.onclick = () => {
        window.dom.modalOverlay.classList.remove('show');
        onConfirm();
    };
    window.dom.modalCancel.onclick = () => {
        window.dom.modalOverlay.classList.remove('show');
    };
}

document.getElementById('share-btn').onclick = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showToast('链接已复制，快去分享吧！');
    });
};

// 启动
init();