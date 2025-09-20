import streamlit as st
import streamlit.components.v1 as components

# 页面配置
st.set_page_config(
    page_title="游戏集合 - Mr Box & Super Mario",
    page_icon="🎮",
    layout="wide"
)

# 主标题
st.title("🎮 游戏集合")
st.markdown("---")

# 创建两列布局
col1, col2 = st.columns(2)

with col1:
    st.header("📦 Mr Box - 推箱子游戏")
    st.markdown("""
    经典的推箱子益智游戏！
    
    **游戏规则：**
    - 使用方向键移动Mr Box
    - 将箱子推到目标位置（红色区域）
    - 完成所有目标即可通关
    
    **控制方式：**
    - ↑↓←→ 方向键移动
    - 空格键重新开始
    """)
    
    # 嵌入推箱子游戏
    with open("index.html", "r", encoding="utf-8") as f:
        html_content = f.read()
    
    components.html(html_content, height=600, scrolling=True)

with col2:
    st.header("🍄 Super Mario Bros")
    st.markdown("""
    经典的超级马里奥兄弟游戏！
    
    **游戏特色：**
    - 随机关卡生成
    - 经典平台跳跃玩法
    - 多种敌人和道具
    
    **控制方式：**
    - A/D: 左右移动
    - 空格: 跳跃
    - S: 蹲下
    - Q: 开火
    """)
    
    # 嵌入Super Mario游戏
    with open("super-mario-game/index.html", "r", encoding="utf-8") as f:
        mario_html = f.read()
    
    components.html(mario_html, height=600, scrolling=True)

# 侧边栏信息
with st.sidebar:
    st.header("ℹ️ 游戏信息")
    st.markdown("""
    **技术栈：**
    - HTML5
    - CSS3
    - JavaScript
    - Phaser.js (Super Mario)
    
    **部署状态：**
    - ✅ 推箱子游戏
    - ✅ Super Mario Bros
    - ✅ GitHub Pages
    """)
    
    st.markdown("---")
    st.markdown("**🔗 相关链接：**")
    st.markdown("- [GitHub 仓库](https://github.com/lynnyolanda22-code/collection-nouns)")
    st.markdown("- [GitHub Pages](https://lynnyolanda22-code.github.io/collection-nouns/)")
    
    st.markdown("---")
    st.markdown("**📝 说明：**")
    st.markdown("""
    这些游戏原本是纯HTML/CSS/JavaScript项目，
    通过Streamlit组件嵌入显示。
    
    建议直接访问GitHub Pages获得最佳游戏体验。
    """)

# 页脚
st.markdown("---")
st.markdown("""
<div style='text-align: center; color: #666;'>
    <p>🎮 游戏集合 | 由 Streamlit 驱动</p>
</div>
""", unsafe_allow_html=True)
