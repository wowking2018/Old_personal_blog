---
layout:     post
title:      KdV 方程求解及其背景
subtitle:   孤子解
date:       2023-07-07
author:     wowking
catalog: true
tags:
    - 物理
---

## KdV 方程求解及其背景
### 1. 背景介绍
孤子的发现应追溯到1834年的夏日，英国科学家 *J.S.Russel* 骑马正沿着一条运河岸道旅行，偶然发现在狭窄的河床中行走的船突然停止前进，被船体带动的水团积聚在船头周围并剧烈地翻动着. 不久，一个圆形且轮廓分明的巨大孤立波峰开始形成，并急速离开船头向前运动. 波长约 10 米，高约 0.5 米，在行进中波的形状和速度并无明显变化，以后高度逐渐下降，在跟踪至三公里后，终于消失在蜿蜒的河道上. 这次发现的奇特景观促使 *Russel* 开始广泛的水波实验研究. 他称这沿着狭窄通道传播的、保持形状和速度不变的水包为“伟大的孤立波”，并意识到这是流体力学中某方程的稳定解. 然而, 由于当时数学水平与计算技术的限制，罗素的研究没有取得满意的进展，直到1895年，荷兰著名数学家 *Korteweg* 和他的学生 *de Vries* 在对孤波进行全面分析后指出这种波可近似为小振幅的长波，并以此建立了浅水波运动方程[^1]：

$$
\begin{equation}
    \frac{\partial \eta}{\partial \tau}=\sqrt{\frac{g}{h}} \frac{\partial}{\partial \xi}\left(\frac{3}{4} \eta^2+\alpha \eta+\frac{\sigma}{2} \frac{\partial^2 \eta}{\partial \xi^2}\right),
\end{equation} \label{eq_1}
$$

其中, $\sigma=\frac{1}{3} h^3-\frac{T h}{\rho g}, \eta$ 为波面高度, $h$ 为水深, $g$ 为重力加速度, $\rho$ 是水的密度, $\alpha$ 是与水的匀速流动有关的小常数, $T$ 是水的表面张力. 此后 Korteweg 和 de Vries 利用行波法求出与 Russel 描述一致的孤波解, 争论才告终止. 

如果作以下变换

$$
\begin{equation}
    t = \frac{1}{2} \sqrt{\frac{g}{h \sigma}}\tau, \quad x = -\frac{\xi}{\sqrt{\sigma}}, \quad u=\frac{1}{2}\eta +\frac{1}{3}\alpha
\end{equation}
$$

则 Eq. $\eqref{eq_1}$ 可写成标准的形式

$$
\begin{equation}
    u_t+u_{x x x}+6 u u_x=0
\end{equation} \label{eq_3}
$$

后人为了纪念这两位伟大的学者对孤波作出的贡献将 Eq. $\eqref{eq_1}$ 或 Eq. $\eqref{eq_3}$ 称为 *KdV* 方程. 


### 2. KdV 方程的推导
1968年，Lax 曾提出了一种用线性算子导出孤子方程的方法 [^2], 具体计算方法如下. 首先线性算子 $\mathcal{L}$ 满足

$$
\begin{equation}
    \mathcal{L} \phi=\lambda \phi .
\end{equation}\label{eq_4}
$$

其中 $\lambda$ 为谱参数, 如果只考虑等谱情况 ( $\lambda$ 与时间无关), 即 $\lambda_t=0$，其次 $\phi$ 还满足

$$
\begin{equation}
    \phi_t=\mathcal{A} \phi,
\end{equation} \label{eq_5}
$$

其中 $\mathcal{A}$ 也是线性算子. 将 Eq. $\eqref{eq_4}$ 对 $t$ 求导, 同时结合 Eq. $\eqref{eq_5}$ 有:

$$
\begin{equation}
    \mathcal{L}_t \phi+\mathcal{L}\mathcal{A} \phi=\mathcal{A}\mathcal{L} \phi
\end{equation}
$$

从而有

$$
\begin{equation}
    \mathcal{L}_t=\mathcal{A}\mathcal{L} - \mathcal{L}\mathcal{A} = [\mathcal{A}, \mathcal{L}] .
\end{equation}
$$

这便是著名的 Lax 方程, 其中 $\mathcal{L}, \mathcal{A}$ 称为 Lax 对. 这里给出一种由 Lax 对进行推导得出 KdV 方程的较为简单的方式， 取 $\mathcal{L}$ 为 Hamilton 算子 $\mathcal{L}=-\partial^2 _{x}+u(x, t)$ (实际上Lax对确实和薛定谔方程是有联系的)， $\mathcal{A}$ 为反对称算子 $\mathcal{A}=\alpha\left(\partial_x^3+a \partial_x+\partial_x a\right)$ ， 其中 $\alpha$ 是常数， $a$ 是变量 $a \sim u$还没有给出具体的关系, 则

$$
\begin{aligned}
\mathcal{A}\mathcal{L} & =\alpha\left(\partial_x^3+a \partial_x+\partial_x a\right)\left(-\partial^2 _x+u\right) \\
& =\alpha\left\{\partial_x^5 +  a \partial_x^3+a_x \partial_x^2+ au_{x} +a_{x}u +u_{x x x} \right\} \\
\mathcal{L}\mathcal{A} & =\alpha\left(-\partial^2 _{x}+u\right)\left(\partial_x^3+2a \partial_x+ a_x\right) \\
& =\alpha\left\{\partial_x^5 + (u+a)\partial_x^3+2a_x \partial_x^2+ (a_{xx}+ua) \partial_{x}+ ua_{x} +a_{x x x}\right\}
\end{aligned}
$$

由这两个算子便有

取 $\alpha=-4$, 可以得到 $u_t+u_{x x}+6 u u_x=0$

### 3. KdV方程求解
#### 3.1 双曲正切法
首先, 运用行波法将所求解的非线性偏微分方程转化为非线性常微分方程, 即令 $\xi=c(x-v t)$, 则 $u(x, t)=U(\xi)$ ，有

$$
\begin{equation}
    \frac{\partial}{\partial t} \rightarrow-c v \frac{\mathrm{d}}{\mathrm{d} \xi}, \frac{\partial}{\partial x} \rightarrow c \frac{\mathrm{d}}{\mathrm{d} \xi}
\end{equation}
$$

然后, 将常微分方程积分, 直到微分方程中至少有一项不含导数项且尽可能 使方程中导数项具有较低阶数为止，积分常数都取为零. 引入 $Y=\tanh (\xi)$ 作为新的独立变量, 相应的导数变为

$$
\begin{equation}
    \begin{aligned}
    \frac{\mathrm{d}}{\mathrm{d} \xi} \rightarrow &\left(1-Y^2\right) \frac{\mathrm{d}}{\mathrm{d} Y} \\
    \frac{\mathrm{d}^2}{\mathrm{d} \xi^2} \rightarrow &\left(1-Y^2\right)\left[-2 Y \frac{\mathrm{d}}{\mathrm{d} Y}+\left(1-Y^2\right) \frac{\mathrm{d}^2}{\mathrm{d} Y^2}\right] \\
    \frac{\mathrm{d}^3}{\mathrm{d} \xi^3} \rightarrow &-2 Y\left(1-Y^2\right)\left[-2 Y \frac{\mathrm{d}}{\mathrm{d} Y}+\left(1-Y^2\right) \frac{\mathrm{d}^2}{\mathrm{d} Y^2}\right] \\
    &+\left(1-Y^2\right)\left[-2\frac{\mathrm{d}}{\mathrm{d} Y}-2 Y \frac{\mathrm{d}^2}{\mathrm{d} Y^2}+\left(1-Y^2\right) \frac{\mathrm{d}^3}{\mathrm{d} Y^3}\right]
    \end{aligned}
\end{equation}
$$

#### 3.2 求解过程
对于广义 KdV 方程, 运用双曲正切法进行求解[^3]. 现在, 我们通过此方法对 Eq. $\eqref{eq_3}$ 中的形式进行求解. 通过 $\frac{\partial}{\partial t} \rightarrow-c v \frac{\mathrm{d}}{\mathrm{d} \xi}, \frac{\partial}{\partial x} \rightarrow c \frac{\mathrm{d}}{\mathrm{d} \xi}$ 变换为

$$
\begin{equation}
    -v U_{\xi}+6 U U_{\xi}+c^2 U_{\xi \xi \xi}=0,
\end{equation}
$$

两边进行积分, 可以得到

$$
\begin{equation}
    -v U+3 U^2+c^2 U_{\xi \xi}=0
\end{equation}
$$

引入 $Y=\tanh (\xi)$ 作为新的独立变量,方程相应的可以变化为

$$
\begin{equation}
    -v S(Y)+3 S^2(Y)+c^2\left(1-Y^2\right) \left(-2 Y \frac{\mathrm{d} S(Y)}{\mathrm{d} Y}+\left(1-Y^2\right) \frac{\mathrm{d}^2 S(Y)}{\mathrm{d} Y^2}\right)=0
\end{equation} \label{eq_8}
$$

对于 $S=\sum_{m=0}^m a_m Y^m$, 参数 $M$ 是通过平衡第二项(非线性)的阶数来确定. 不妨设 $S(Y)=\gamma-\gamma Y^2$, 代入 Eq. $\eqref{eq_8}$进行化简可以得到

$$
\begin{equation}
    -v+3\left(\gamma-\gamma Y^2\right)+c^2 \left(-2 Y \frac{\mathrm{d}\left(1-Y^2\right)}{\mathrm{d} Y}+\left(1-Y^2\right) \frac{\mathrm{d}^2\left(1-Y^2\right)}{\mathrm{d} Y^2}\right)=0
\end{equation}
$$

比较 $Y^0$ 和 $Y^2$ 的系数:

$$
\begin{equation}
    \begin{gathered}
        -v+3 \gamma-2 c^2=0 \\
        -3 \gamma+4 c^2+2 c^2=0
    \end{gathered}
\end{equation}
$$

现有三个末知数 $(v, \gamma, c)$ 和两个方程, 所以可以选择 $c$ 作为自由参数. 发现其它变量为 $\gamma=2 c^2, v=4 c^2$.

最后, KdV 方程的孤波解为 [^3] :

$$
\begin{equation}
    \begin{aligned}
        u(x, t) & =2 c^2\left\{1-\tanh ^2\left[c\left(x-4 c^2 t\right)\right]\right\} \\
        & =2 c^2 \sec h^2\left[c\left(x-4 c^2 t\right)\right]
    \end{aligned}
\end{equation}
$$

### 参考资料
[^1]: Korteweg, Diederik Johannes, and Gustav De Vries. "On the change of form of long waves advancing in a rectangular canal, and on a new type of long stationary waves." The London, Edinburgh, and Dublin Philosophical Magazine and Journal of Science 39.240 (1895): 422-443.

[^2]: Lax, Peter D. "Integrals of nonlinear equations of evolution and solitary waves." Communications on pure and applied mathematics 21.5 (1968): 467-490.

[^3]: Malfliet, Willy. "Solitary wave solutions of nonlinear wave equations." American journal of physics 60.7 (1992): 650-654.