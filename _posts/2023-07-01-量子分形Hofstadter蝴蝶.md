---
layout:     post
title:      量子分形
subtitle:   分形世界-Hofstadter蝴蝶
date:       2023-07-01
author:     wowking
catalog: true
tags:
    - 物理
---

## 量子分形-Hofstadter蝴蝶
### Introduction
借用一句古语——“一花一世界，一树一菩提”，说的是从细微之处洞察宏观的哲学思考，而“一即是全，全即是一”，这是对分形最传神的表达.每当看到那一张张分形图案时，不免思考这样美丽的图案是如何生成的，“分形”一出现便引起了年幼时我的兴趣.现如今，随着电脑技术的兴起，分形被广泛运用到复杂图像的产生和处理上，其中包括大量电影里的星球表面，山川起伏的画面.“分形”的美，很多时候需要通过计算机进行展现，我将进行详细讲解另一种有趣的量子分形现象，也是这次论文的主题 Hofstadter 蝴蝶.

$$
\begin{equation}
	f(x)=\sum_{n=0}^{\infty} a^{n} \cos \left(b^{n} \pi x\right)
\end{equation}
$$

其中 $0<a<1$，$b$为正奇数，且需要满足 $ab>1+\frac{3}{2}\pi$，这个函数以及它处处连续而又处处不可导的证明首次出现在魏尔施特拉斯于1872年7月18日在普鲁士科学院出版的一篇论文中.

从现在的数学角度看，毫无疑问这是一条分形曲线，然而“分形”这个概念直到一个世纪之后的1975年才由 Mandelbrot 提出来.在这里尝试一个简单的画图，Weierstrass函数有无穷项，但是随着 $n \to \infty, a^{n} \cos \left(b^{n} \pi x\right)\to 0$，故可用有限项作为代替进行处理.

<img src="https://wowking2018.github.io/img/blog17/fig1.png" alt="fig-1" style="zoom: 50%;" width="500px"/>

``` matlab
x=linspace(-2,2,1000);
S1=outputweier(0.5,1);
S2=outputweier(0.5,2);
S3=outputweier(0.5,3);

subplot(3,1,1)
plot(x,S1);
subplot(3,1,2)
plot(x,S2);
subplot(3,1,3)
plot(x,S3);
xlabel('\it{x}');
%%
function [S]=outputweier(a,b)%求和函数
syms f n
x=linspace(-2,2,1000);
f=a^n*cos(b^n*pi*x);
S=symsum(f,n,0,100);
end	
```

### 量子气体中的动力学分形
#### 能量标度
类比于传统意义上的离散标度对称性$W(b x) \simeq a^{-1} W(x) $(简而言之就是缩放后的自相似，discrete scaling symmetry)，在谐振二体相互作用的三粒子系统中，也有类似的：

$$
\begin{equation}
	E_{n+1} \simeq \lambda^{2} E_{n}
\end{equation}
$$

利用能量标度关系，构造 Loschmidt 振幅 $\mathcal{L}(t) $.受“分形”函数的启示，与量子系统的相似性启发可以构造出相应的类 Weierstrass 函数：

$$
\begin{equation}
	\mathcal{L}(t) \propto \sum_{n=0}^{N} \lambda^{-n D} e^{-(i / \hbar) \lambda^{2 n} E_{0} t}
\end{equation}
$$

#### Loschmidt振幅“分形”图像
通过类比的方法，选择初始波函数、测量、维度、适当的能量和时间尺度的要求，便可以用超冷量子气体来实现在时域上表现出分形行为.

<img src="https://wowking2018.github.io/img/blog17/fig2.png" alt="fig2" style="zoom: 50%;" width="500px"/>

数值模拟表明，所有这些要求可以很容易地同时满足实际参数在冷原子气体.目前的计算是基于单个粒子图，忽略了粒子间的相互作用.