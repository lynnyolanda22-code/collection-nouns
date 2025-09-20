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

# 游戏选择
game_choice = st.selectbox(
    "选择要玩的游戏：",
    ["推箱子游戏 (Mr Box)", "Super Mario Bros", "游戏说明"]
)

if game_choice == "推箱子游戏 (Mr Box)":
    st.header("📦 Mr Box - 推箱子游戏")
    
    # 游戏说明
    with st.expander("游戏规则", expanded=True):
        st.markdown("""
        **游戏目标：** 将箱子推到目标位置（红色区域）
        
        **控制方式：**
        - ↑↓←→ 方向键移动
        - 空格键重新开始
        
        **游戏特色：**
        - 5个精心设计的关卡
        - 难度递增
        - 步数统计
        """)
    
    # 嵌入游戏
    try:
        with open("index.html", "r", encoding="utf-8") as f:
            html_content = f.read()
        components.html(html_content, height=600, scrolling=True)
    except FileNotFoundError:
        st.error("推箱子游戏文件未找到")
        st.info("请访问GitHub Pages获得最佳游戏体验：https://lynnyolanda22-code.github.io/collection-nouns/")
        
        # 提供直接链接
        st.markdown("### 🔗 直接访问游戏")
        st.markdown("[🎮 推箱子游戏 - GitHub Pages](https://lynnyolanda22-code.github.io/collection-nouns/)")

elif game_choice == "Super Mario Bros":
    st.header("🍄 Super Mario Bros")
    
    # 游戏说明
    with st.expander("游戏特色", expanded=True):
        st.markdown("""
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
    
    # 嵌入游戏
    try:
        with open("super-mario-game/index.html", "r", encoding="utf-8") as f:
            mario_html = f.read()
        components.html(mario_html, height=600, scrolling=True)
    except FileNotFoundError:
        st.error("Super Mario游戏文件未找到")
        st.info("请访问GitHub Pages获得最佳游戏体验：https://lynnyolanda22-code.github.io/collection-nouns/super-mario-game/")
        
        # 提供直接链接
        st.markdown("### 🔗 直接访问游戏")
        st.markdown("[🎮 Super Mario Bros - GitHub Pages](https://lynnyolanda22-code.github.io/collection-nouns/super-mario-game/)")

else:  # 游戏说明
    st.header("📚 游戏说明")
    
    col1, col2 = st.columns(2)
    
    with col1:
        st.subheader("📦 推箱子游戏")
        st.markdown("""
        **Mr Box** 是一个经典的益智游戏，玩家需要将箱子推到指定位置。
        
        **特色：**
        - 5个精心设计的关卡
        - 难度递增
        - 步数统计
        - 关卡选择功能
        
        **技术栈：**
        - HTML5 Canvas
        - CSS3 动画
        - 原生JavaScript
        """)
        
        if st.button("🎮 玩推箱子游戏", key="play_box"):
            st.session_state.game_choice = "推箱子游戏 (Mr Box)"
            st.rerun()
    
    with col2:
        st.subheader("🍄 Super Mario Bros")
        st.markdown("""
        **Super Mario Bros** 是经典的平台跳跃游戏，具有随机关卡生成功能。
        
        **特色：**
        - 随机关卡生成
        - 经典马里奥玩法
        - 多种敌人和道具
        - 流畅的动画效果
        
        **技术栈：**
        - Phaser.js 游戏引擎
        - HTML5 Canvas
        - JavaScript ES6
        """)
        
        if st.button("🎮 玩Super Mario", key="play_mario"):
            st.session_state.game_choice = "Super Mario Bros"
            st.rerun()

# 侧边栏
with st.sidebar:
    st.header("ℹ️ 项目信息")
    
    st.markdown("**🔗 相关链接：**")
    st.markdown("- [GitHub 仓库](https://github.com/lynnyolanda22-code/collection-nouns)")
    st.markdown("- [GitHub Pages](https://lynnyolanda22-code.github.io/collection-nouns/)")
    
    st.markdown("---")
    st.markdown("**📝 技术说明：**")
    st.markdown("""
    这些游戏原本是纯HTML/CSS/JavaScript项目，
    通过Streamlit组件嵌入显示。
    
    **推荐：** 直接访问GitHub Pages获得最佳游戏体验。
    """)
    
    st.markdown("---")
    st.markdown("**🚀 部署状态：**")
    st.markdown("- ✅ Streamlit Cloud")
    st.markdown("- ✅ GitHub Pages")
    st.markdown("- ✅ 本地开发")

# 页脚
st.markdown("---")
st.markdown("""
<div style='text-align: center; color: #666;'>
    <p>🎮 游戏集合 | 由 Streamlit 驱动</p>
    <p>📧 如有问题，请访问 <a href="https://github.com/lynnyolanda22-code/collection-nouns">GitHub 仓库</a></p>
</div>
""", unsafe_allow_html=True)
