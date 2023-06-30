---
layout:     post
title:      Wave physics as an analog recurrent neural network
subtitle:   文献阅读
date:       2023-01-10
author:     wowking
header-img: img/blog11/bk.jpg
catalog: true
tags:
    - 计算机
    - 机器学习
---

## [Note]Wave physics as an analog recurrent neural network

### 1.RNN介绍

RNN(循环神经网络)是在**自然语言处理**NLP领域中最先被用起来的，比如，RNN可以为**语言模型**来建模. 循环神经网络种类繁多，最简单的基本循环神经网络可以被理解为隐藏层内循环，如下图所示：

<img src="https://wowking2018.github.io/img/blog11/fig (1).jpg" alt="img" style="zoom: 50%;" />

如果我们把上面的图展开，**循环神经网络**也可以画成下面这个样子：

<img src="https://wowking2018.github.io/img/blog11/fig (2).jpg" alt="img" style="zoom: 50%;" />

现在看上去就比较清楚了，这个网络在 $t$ 时刻接收到输入 $\mathrm{x}_ {t}$ 之后，隐藏层的值是 $\mathrm{s} _ {t}$ ，输出值是 $\mathrm{o}_ {t}$. 关键一点是， $\mathrm{s}_ {t}$ 的值不仅仅取决于 $\mathrm{x}_ {t}$ , 还取决于 $\mathrm{s}_ {t-1}$ . 我们可以用下面的公式来表示循环神经网络的计算方法:

$$
\begin{equation}
    \begin{aligned}
        & \mathrm{o}_t=g\left(V \mathrm{~s}_t\right)\\
        & \left.\mathrm{s}_t=f\left(U \mathrm{x}_t+W \mathrm{~s}_{t-1}\right) \right. 
    \end{aligned}
\end{equation}
$$

输出层是一个全连接层，也就是它的每个节点都和隐 藏层的每个节点相连. $\mathrm{V}$ 是输出层的权重矩阵， $g$ 是激活函数. 隐藏层是循环层. ${U}$ 是输入 $x$ 的权重矩阵， ${W}$ 是上一次的值 $\mathrm{s}_ {t-1}$ 作为这一次的 输入的权重矩阵， $f$是激活函数.

从 Eq. (1) 中我们可以看出，循环层和全连接层的区别就是循环层多了一个权重矩阵 $W$. 如果反复把隐藏层的计算公式带入到输出层，我们将得到:

$$
\begin{equation}
    \begin{aligned}
    \mathrm{o}_t & =g\left(V \mathrm{~s}_t\right) \\
    & =V f\left(U \mathrm{x}_t+W \mathrm{~s}_{t-1}\right) \\
    & =V f\left(U \mathrm{x}_t+W f\left(U \mathrm{x}_{t-1}+W \mathrm{~s}_{t-2}\right)\right) \\
    & =V f\left(U \mathrm{x}_t+W f\left(U \mathrm{x}_{t-1}+W f\left(U \mathrm{x}_{t-2}+W \mathrm{~s}_{t-3}\right)\right)\right) \\
    & =V f\left(U \mathrm{x}_t+W f\left(U \mathrm{x}_{t-1}+W f\left(U \mathrm{x}_{t-2}+W f\left(U \mathrm{x}_{t-3}+\ldots\right)\right)\right)\right)
    \end{aligned}
\end{equation}
$$

从上面可以看出，循环神经网络的输出值 $o_t$ ，是受前面历次输入值 $\mathrm{x}_ t , \mathrm{x}_ {t-1} , \mathrm{x}_ {t-2} , \mathrm{x}_ {t-3} , \ldots$ 影响的. 有了以上的讲解，我们将很容易理解论文中的这一部分内容.

<img src="https://wowking2018.github.io/img/blog11/fig (1).png" alt="img" style="zoom: 50%;" />

$$
\begin{equation}
    \begin{gathered}
    \boldsymbol{h}_t=\sigma^{(h)}\left(\boldsymbol{W}^{(h)} \cdot \boldsymbol{h}_{t-1}+\boldsymbol{W}^{(x)} \cdot \boldsymbol{x}_t\right) \\
    y_t=\sigma^{(y)}\left(\boldsymbol{W}^{(y)} \cdot \boldsymbol{h}_t\right)
    \end{gathered}
\end{equation}
$$



### 2.引入波动方程与RNN相结合

波的标量分布为 $u(x, y, z)$ ，其含时演化过程可以由以下方程进行描述

$$
\begin{equation}
    \frac{\partial^2 u}{\partial t^2}-c^2 \cdot \nabla^2 u=f
\end{equation}
$$

其中， $\nabla^2=\frac{\partial^2}{\partial x^2}+\frac{\partial^2}{\partial y^2}+\frac{\partial^2}{\partial z^2}$ 是Laplace算符, $c=c(x, y, z)$ 是空间中的波速且会随空间位置的不同发生变化， $f=f(x, y, z, t)$ 是原函数项. 对 Eq. 4 进行有限差分离散，时间步长为$\Delta t$，得到递归关系方程

$$
\frac{u_{t+1}-2 u_t+u_{t-1}}{\Delta t^2}-c^2 \cdot \nabla^2 u_t=f_t
$$

<img src="https://wowking2018.github.io/img/blog11/fig (2).png" alt="img" style="zoom: 50%;" />

将以上的差分方程可以转化为

$$
\begin{equation}
    \left[\begin{array}{c}
    u_{t+1} \\
    u_t
    \end{array}\right]=\left[\begin{array}{cc}
    2+\Delta t^2 \cdot c^2 \cdot \nabla^2 & -1 \\
    1 & 0
    \end{array}\right] \cdot\left[\begin{array}{c}
    u_t \\
    u_{t-1}
    \end{array}\right]+\Delta t^2 \cdot\left[\begin{array}{c}
    f_t \\
    0
    \end{array}\right]
\end{equation}
$$

结合 Eq. (3) 我们很容易会得到相对应的形式

$$
\begin{equation}
    \begin{aligned}
    \boldsymbol{h}_t & =\boldsymbol{A}\left(\boldsymbol{h}_{t-1}\right) \cdot \boldsymbol{h}_{t-1}+\boldsymbol{P}^{(\mathrm{i})} \cdot \boldsymbol{x}_t \\
    \boldsymbol{y}_t & =\left|\boldsymbol{P}^{(\mathrm{o})} \cdot \boldsymbol{h}_t\right|^2
    \end{aligned}
\end{equation}
$$

方程中 $c=c(x, y, z)$ 部分对应于材料内的物理构型和布局. 与标准RNN类似，隐藏状态与波动方程输入和输出之间的联系由线性算子 $\boldsymbol{P}^{(\mathrm{i})}$ 和 $\boldsymbol{P}^{(\mathrm{o})}$ 定义. 现在我们可以对这两个线性算子进行详细的分析，根据文中作者的说法[^1]

$$
\begin{equation}
    \begin{aligned}
    \boldsymbol{P}^{(\mathrm{i})} & \equiv\left[\begin{array}{c}
    \boldsymbol{M}^{(\mathrm{i})} \\
    \mathbf{o}
    \end{array}\right] \\
    \boldsymbol{P}^{(\mathrm{o})} & \equiv\left[\boldsymbol{M}^{(\mathrm{o}) T}, \mathbf{o}\right]
    \end{aligned}
\end{equation}
$$

其中，$\mathrm{o}$ 是零矩阵，相对应的形式在于把输入向量 $\boldsymbol{x}_ t$ 的输入写成矩阵向量的乘法形式：

$$
\Delta t^2 \boldsymbol{f}_t\equiv \boldsymbol{M}^{(i)} \cdot \boldsymbol{x}_t
$$

特别注意，RNN在每个时间步的输出是由标量场的强度测量给出的，

$$
\boldsymbol{y}_ t=\boldsymbol{M}^{(\mathrm{o}) T} \cdot \boldsymbol{u}_t^2
$$

以上便是一个简单的例子用来说明RNN与波动方程的联系.



### 3.训练物理系统

该论文中演示了波动方程的动力学如何通过构造非均匀材料分布来训练来分类元音的分类，ae, ei, 和 iy. 图D中的黑色点源即为音源(类比为**输入层**)，通过中间浅色部分(**隐藏层**)传播，右边定义了三个探测点(**输出层**)，每个探测点分配给三个元音类中的一个，对相对应的结果进行反馈. 图C中的线即为三个元音的功率积分结果.

为了方便数值结果演示，考虑由两种材料组成的二值化系统，归一化后的波速分别为 $c_0=1.0$ 和 $c_1=0.5$. 本文采用了反向优化的传播思路，Adam的方法对材料密度属性进行了优化，其优化结果被展示在下图D之中.



<img src="https://wowking2018.github.io/img/blog11/fig (3).png" alt="img" style="zoom: 50%;" />

引入一个吸收区域来近似一个对应的边界条件，对应于图B中的灰色区域. 此外，与传统的RNN不同，波动方程施加了能量守恒约束，防止隐态范数和输出信号的无限增长. 该区域由阻尼系数 $b(r, y)$ 定义，带阻尼的标量波动方程可以写为

$$
\begin{equation}
    \frac{\partial^2 u}{\partial t^2}+2 b \cdot \frac{\partial u}{\partial t}=c^2 \cdot \nabla^2 u+f
\end{equation}
$$

其中，$u$ 为未知标量字段，$b$ 为阻尼系数. 在数学形式上，该论文对此简化为

$$
\begin{equation}
    b(u)=\frac{b_0}{1+(\frac{u}{u_\mathrm{th}})^2}.
\end{equation}
$$

假设 $b$ 可以在空间上变化，但与频率无关. 对于以 $t$ 为索引的时间步长，用**二阶微分的中心差分公式**

$$
\begin{equation}
    \frac{u_{t+1}-2 u_t+u_{t-1}}{\Delta t^2}+2 b \frac{u_{t+1}-u_{t-1}}{2 \Delta t}=c^2 \nabla^2 u_t+f_t
\end{equation}
$$

现在可以用 $u_{t+1}$ 形成一个递归关系，从而得到

$$
\begin{equation}
    \begin{aligned}
    & \left(\frac{1}{\Delta t^2}+\frac{b}{\Delta t}\right) u_{t+1}-\frac{2}{\Delta t^2} u_t+\left(\frac{1}{\Delta t^2}-\frac{b}{\Delta t}\right) u_{t-1}=c^2 \cdot \nabla^2 u_t+f_t \\
    & \left(\frac{1}{\Delta t^2}+\frac{b}{\Delta t}\right) u_{t+1}=\frac{2}{\Delta t^2} u_t-\left(\frac{1}{\Delta t^2}-\frac{b}{\Delta t}\right) u_{t-1}+c^2 \cdot \nabla^2 u_t+f_t \\
    u_{t+1}= & \left(\frac{1}{\Delta t^2}+\frac{b}{\Delta t}\right)^{-1}\left[\frac{2}{\Delta t^2} u_t-\left(\frac{1}{\Delta t^2}-\frac{b}{\Delta t}\right) u_{t-1}+c^2 \cdot \nabla^2 u_t+f_t\right]
    \end{aligned}
\end{equation}
$$

类比常规的波动方程形式，我们可以得到在论文中实际考虑阻尼系数项的形式：

$$
\begin{equation}
    \left[\begin{array}{c}
    u_{t+1} \\
    u_t
    \end{array}\right]=\left[\begin{array}{cc}
    \frac{2+\Delta t^2 \cdot c^2 \cdot \nabla^2}{1+\Delta t \cdot b} & \frac{-1-\Delta t \cdot b}{1+\Delta t \cdot b} \\
    1 & 0
    \end{array}\right] \cdot\left[\begin{array}{c}
    u_t \\
    u_{t-1}
    \end{array}\right]+\Delta t^2 \cdot\left[\begin{array}{c}
    f_t \\
    0
    \end{array}\right]
\end{equation}
$$

作者在文中提到在数值计算中，对于算符 $\nabla^2$ 的处理采取了离散形式的处理

$$
\nabla^2 u_t=\frac{1}{h^2}\left[\begin{array}{ccc}
0 & 1 & 0 \\
1 & -4 & 1 \\
0 & 1 & 0
\end{array}\right] * u_t
$$

其中，$h$ 为空间网格的步长，同时$*$指的是卷积运算. 之所以采取了这样的一个形式，同样也是采用了二阶微分的近似. 首先引入这个刚刚讲过的二阶微分:

$$
\begin{equation}
    \nabla^2 f=\frac{\partial^2 f}{\partial x^2}+\frac{\partial^2 f}{\partial y^2}
\end{equation}
$$

由联系二阶差分的思想:

$$
\begin{equation}
    \begin{aligned}
    & \frac{\partial^2 f}{\partial x^2}=f(x+1)-2f(x)+f(x-1) \\
    & \frac{\partial^2 f}{\partial y^2}=f(y+1)-2f(y)+f(y-1)
    \end{aligned}
\end{equation}
$$

那么得到上述二阶微分：

$$
\begin{equation}
    \begin{aligned}\nabla^2 f=\frac{\partial^2 f}{\partial x^2}+\frac{\partial^2 f}{\partial y^2}=[f(x+1, y)+f(x-1, y)+f(x, y+1)+f(x, y-1)-4 f(x, y)]
    \end{aligned}
\end{equation}
$$

相对应的系数即为相应的矩阵形式

$$
\begin{equation}
    \left[\begin{array}{ccc}
    0 & 1 & 0 \\
    1 & -4 & 1 \\
    0 & 1 & 0
    \end{array}\right]
\end{equation}
$$

### 4.训练数值模型及其相应结果

下图计算结果中图A-D代表着不同数据集对应的混淆矩阵. 在基于深度学习的分类识别领域中，经常采用统计学中的混淆矩阵（confusion matrix）来评价**分类器**的性能. 它是一种特定的**二维矩阵**：列代表预测的类别；行代表实际的类别. 

对角线上的值表示预测正确的数量或比例；非对角线元素是预测错误的部分. 混淆矩阵的对角线值越高越好，表明许多正确的预测. 特别是在各**分类数据**的数量不平衡的情况下，混淆矩阵可以直观的显示分类模型对应各个类别的准确率. 

<img src="https://wowking2018.github.io/img/blog11/fig (4).png" alt="img" style="zoom: 50%;" />

该系统相对于训练数据集的平均准确率为 $92.6±1.1\%$，测试数据集平均准确率为 $86.3±4.3 \%$. 观察到该系统在`ae`元音上获得了近乎完美的预测性能，并且能够区分`iy`元音和`ei`元音，但准确性较低，特别是在来自测试数据集的未见样本中. 

### 5.总结

使用物理来执行计算的方法可能会成为模拟机器学习设备的新平台，相比通过计算机进行机器学习更自然、更有效地执行计算的潜力. 除此之外，这篇论文同样发人深省，在相对应的其它物理系统中仍然可以找到相似对应的结构，例如光学中的傍轴衍射方程和热传导方程，它们与波动方程都有相似的结构. 



### Reference
[^1]: Hughes, Tyler W., et al. "Wave physics as an analog recurrent neural network." Science advances 5.12 (2019): eaay6946.
