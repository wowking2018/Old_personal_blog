// 定义变量
var bszCaller, bszTag;

// 立即执行函数，用于在页面加载完成前执行一些操作
(function() {
var c, d, e, a = false, b = [];

// ready函数，将回调函数推入回调队列
ready = function(c) {
if (a || "interactive" === document.readyState || "complete" === document.readyState) {
// 文档已经准备好了，直接执行回调函数
return c.call(document);
} else {
// 文档还没有准备好，将回调函数推入回调队列
b.push(function() {
return c.call(this);
});
return this;
}
};

// 执行所有回调函数
d = function() {
for (var a = 0, c = b.length; c > a; a++) {
b[a].apply(document);
}
b = [];
};

// DOMContentLoaded事件处理函数
e = function() {
if (!a) {
a = true;
d.call(window);
if (document.removeEventListener) {
document.removeEventListener("DOMContentLoaded", e, false);
} else if (document.attachEvent) {
document.detachEvent("onreadystatechange", e);
if (window == window.top) {
clearInterval(c);
c = null;
}
}
}
};

// 注册DOMContentLoaded事件处理函数
if (document.addEventListener) {
document.addEventListener("DOMContentLoaded", e, false);
} else if (document.attachEvent) {
document.attachEvent("onreadystatechange", function() {
if (/loaded|complete/.test(document.readyState)) {
e();
}
});
if (window == window.top) {
c = setInterval(function() {
try {
if (!a && document.documentElement.doScroll) {
document.documentElement.doScroll("left");
}
} catch (b) {
return;
}
e();
}, 5);
}
}
})();

// 定义bszCaller对象，用于发送请求获取博客访问量数据
bszCaller = {
fetch: function(a, b) {
var c = "BusuanziCallback_" + Math.floor(1099511627776 * Math.random());
window[c] = this.evalCall(b);
a = a.replace("=BusuanziCallback", "=" + c);
scriptTag = document.createElement("SCRIPT");
scriptTag.type = "text/javascript";
scriptTag.defer = true;
scriptTag.src = a;
document.getElementsByTagName("HEAD")[0].appendChild(scriptTag);
},

evalCall: function(a) {
return function(b) {
ready(function() {
try {
a(b);
scriptTag.parentElement.removeChild(scriptTag);
} catch (c) {
bszTag.hides();
}
});
};
}
};

// 发送请求获取博客访问量数据
bszCaller.fetch("//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback", function(a) {
bszTag.texts(a);
bszTag.shows();
});

// 定义bszTag对象，用于显示博客访问量数据
bszTag = {
bszs: ["site_pv", "page_pv", "site_uv"],

// 显示访问量数据
texts: function(a) {
this.bszs.map(function(b) {
var c = document.getElementById("busuanzi_value_" + b);
if (c) {
c.innerHTML = a[b];
}
});
},

// 隐藏访问量数据
hides: function() {
this.bszs.map(function(a) {
var b = document.getElementById("busuanzi_container_" + a);
if (b) {
b.style.display = "none";
}
});
},

// 显示访问量数据
shows: function() {
this.bszs.map(function(a) {
var b = document.getElementById("busuanzi_container_" + a);
if (b) {
b.style.display = "inline";
}
});
}
};

// 代码来自 https://github.com/HugueLiu