---
layout:     post
title:      The Big Bang Theory-Physics Bowl Analysis
subtitle:   To resolve a long-standing question
date:       2023-07-30
author:     wowking
header-img: img/blog21/bk.jpg
catalog: true
tags:
    - 物理
---

## The Big Bang Theory-Physics Bowl Analysis
### Introduction
Physics Bowl 高中物理竞赛由美国物理教师协会 AAPT 主办，试题由协会注册的大学物理教授和教学经验丰富的高中物理老师组成理事会进行出题和评审. 

物理碗的发明者是蒂姆·英格兹比 (Tim Ingoldsby) 和比尔·阿诺德 (Bill Arnold)，他们在1980年提出了一项物理竞赛的提案和指导方针，后来发展成为现在的物理碗. 

### How to solve the equation?
那么现在我们来看生活大爆炸中的这一幕，第一季第13集，Sheldon和Leonard，Rajesh，Howard还有 Leslie 分为了两队进行对抗.

<img src="https://wowking2018.github.io/img/blog21/fig1.png" style="zoom: 100%;" width="500px"/>

其中带箭头的直线为电子，波浪线为光子，这个图表示的是电子 ($e^{-}$) 和负缪子 ($\mu$) 之间的弹性散射过程. 这个过程是通过交换一个虚光子 ($\gamma$) 实现的，所以图中有一条波浪线. 式子中的各个符号表示了初末态的动量 $p$ 和自旋 $s$，以及光子的动量 $q$. 这个式子计算的是散射矩阵（S-matrix）的矩阵元，表示散射过程的概率幅[^2]. 

这是QED的基本费曼图之一，其中Leonard，Rajesh，Howard的反应看上去并不知道这个题目这是极为不合理的，而且以剧中Sheldon的能力肯定能够解决这个问题. 不管怎样，看门人 (janitor) 回答说正确的答案是 $-8 \pi \alpha$. 以我个人所收集到的资料，至少在没有附加条件的情况下是无法得到这个答案的[^1]，题目中给出的积分是

$$
\begin{equation}
    \begin{aligned}
        (2\pi)^4\int[\overline{\upsilon}^{(s_3)}(p_3)(i\sqrt{4\pi\alpha}\gamma^{\mu})\upsilon^{(s_1)}(p_1)]\frac{ig_{\mu\nu}}{q^{2}}[\overline{\upsilon}^{(s_4)}(p_4)(i\sqrt{4\pi\alpha}\gamma^{\mu})\upsilon^{(s_2)}(p_2)] \\
        x\delta^{(4)}(p_1-p_3-q)\delta^{(4)}(p_2+q-p_4)\mathrm{d}^4q
    \end{aligned}
\end{equation}
$$ 

后续的过程中我会保持与题目中一致的记号进行推导. 首先，这并不是一个方程，台词中所说的 “Solve the equation” 显然是不对的，但为了保持统一我们暂时默认用积分式来代指这个式子. 同时对这个式子作相应的修改，去掉了 $x$，同时如果是负缪子应该用 $u$ 来表示

$$
\begin{equation}
    \begin{aligned}
        (2\pi)^4\int[\overline{\upsilon}^{(s_3)}(p_3)(i\sqrt{4\pi\alpha}\gamma^{\mu})\upsilon^{(s_1)}(p_1)]\frac{ig_{\mu\nu}}{q^{2}}[\overline{u}^{(s_4)}(p_4)(i\sqrt{4\pi\alpha}\gamma^{\nu})u^{(s_2)}(p_2)]  \\
        \delta^{(4)}(p_1-p_3-q)\delta^{(4)}(p_2+q-p_4)\mathrm{d}^4q
    \end{aligned}
\end{equation}
$$ 

根据狄拉克函数的计算规则有 $q = p_1- p_3 = p_4- p_2$时，对于 Eq. (2) 中其余项进行合并可以得到

$$
\int \delta^{(4)}(p_1-p_3-q)\delta^{(4)}(p_2+q-p_4)\mathrm{d}^4q = 1.
$$

积分式可以转化为

$$
\begin{equation}
    i{\cal M}=\frac{-i4\pi\alpha}{q^{2}}g_{\mu\nu}\left[\bar{\upsilon}^{(s_3)}\left(p_{3}\right)\gamma^{\mu}\upsilon^{(s_1)}\left(p_{1}\right)\right]\cdot[\bar{u}^{(s_4)}\left(p_{4}\right)\gamma^{\nu}u^{(s_2)}\left(p_{2}\right)].
\end{equation}
$$

根据动量守恒可以得到 $(p_1 - p_3)^2 = 2p^2 (1-\cos \theta)$，$\theta$ 是散射粒子的夹角，对于中括号内的项可以表示为

$$
\begin{equation}
    \bar{\upsilon}(p^{\prime})\gamma^{\mu}\upsilon(p)=\left(m_e-E_e-\frac{p^2\cos\theta}{m_e+E_e},p\sin\theta,ip\sin\theta,p(1-\cos\theta)\right)
\end{equation}
$$

其中， $m_{e}$ 是电子质量，$E_{e}$ 是对应能量，$p, p^{\prime}$ 是散射进入和散射弹出的动量. 如果假设粒子是 ultra-relativistic，即 $E_{e}\approx E_{\mu}\gg m_{\mu}$，上式可以表示为(两项同理)

$$
\begin{equation}
    \bar{\upsilon}(p^{\prime})\gamma^{\mu}\upsilon(p)\rightarrow p(1-\cos\theta,\sin\theta,i\sin\theta,1-\cos\theta)
\end{equation}
$$

故可得到 Eq. (3) 中的项为

$$
\begin{equation}
    g_{\mu\nu}\left[\bar{v}^{(s_{3})}\left(p_{3}\right)\gamma^{\mu}v^{(s_{1})}\left(p_{1}\right)\right]\cdot\left[\bar{u}^{(s_{4})}\left(p_{4}\right)\gamma^{\nu}u^{(s_{2})}\left(p_{2}\right)\right] \approx 2 p^2 (1-\cos \theta)^2
\end{equation}
$$

其结果并不影响我们计算散射矩阵元，将 Eq. (6) 代入散射矩阵元，可以得到

$$
\begin{equation}
    \mathcal{M} = - 4 \pi \alpha (1-\cos \theta).
\end{equation}
$$

所以如果图中问题是计算完全散射矩阵元，即 $\theta = \pi$，那么结果就是管理员所说的

$$
\begin{equation}
    \mathcal{M} = -8\pi \alpha.
\end{equation}
$$

这个题目其实并不是很难，只要掌握了量子场论中的费曼规则，就可以根据图形把式子写出来. 但是在剧中，谢尔顿和他的队友们都没有回答出来，而是被一个门卫大叔轻松地说出了正确答案. 这不过是剧组的安排罢了，说多了都是剧情需要！

### Reference
[^1]: [TBBT Physics Bowl [ANALYSIS OF THE LAST QUESTION]](https://www.scribd.com/doc/58206115/Tbbt-Physics-Bowl-Analysis)

[^2]: [生活大爆炸第一季13集物理碗最后一题到底有多难？](https://www.zhihu.com/question/22568808)