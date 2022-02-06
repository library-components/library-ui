const setRem = () => {
    // rem等比适配配置文件
    // 基准大小
    const baseSize = 16
    // 设置 rem
    if (document.documentElement.clientWidth < 768) {
        // 当前页面宽度相对于750宽的缩放比例。
        document.documentElement.style.fontSize = baseSize *(document.documentElement.clientWidth/ 750 - 0.36)  + 'px'
    }
    else {
        // 当前页面宽度相对于1920宽的缩放比例。
        const scale = document.documentElement.clientWidth / 1920
        // 设置页面根节点字体大小
        document.documentElement.style.fontSize = baseSize * Math.min(scale, 1.7) + 'px'
    }
}

// 初始化
setRem()

// 改变窗口大小时重新设置 rem
window.onresize = function () {
    setRem()
}