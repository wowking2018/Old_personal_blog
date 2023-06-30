---
layout:     post
title:      Magnetic field
subtitle:   随笔记录
date:       2023-03-15
author:     wowking
header-img: img/blog12/bk.jpg
catalog: true
tags:
    - 物理
---
## 有关磁场的新理解
### 磁场是什么？

在静电力学中，静电荷 $q$ 在电场 $\boldsymbol{E}$ 中所受的力为 $\boldsymbol{F}=\boldsymbol{E}q$. 现在我们类比电荷间的相互作用，从电流间的相互作用可以重新定义一个描述磁场的矢量——磁感应强度 $\boldsymbol{B}$，我们可以把电流元 $I \mathrm{d} \boldsymbol{l}$ 看作磁场中的“电荷”，由以下式子描述

$$
\begin{equation}
    F=I \mathrm{d} \boldsymbol{l} \times \boldsymbol{B},
\end{equation}
$$

这个式子的具体导出方法来自于安培电流元相互作用公式，磁感应强度 $\boldsymbol{B}$ 也不仅仅局限于通电线圈，可以是任何产生磁场的场源.  现在我们来探讨三维空间中的磁场情况，对于磁场 $\boldsymbol{B}=\left[\begin{array}{lll}
B_x & B_y & B_z
\end{array}\right]^T$ ，我们经常需要描述磁场在空间位置上的变化率，数学上被叫做微商. 在正交曲线坐标系中，其实可以分解为对矢量的三个分量分别求梯度，可以写作

$$
\begin{equation}
    \nabla \boldsymbol{B} = \left[\begin{array}{lll}
    \frac{\partial \boldsymbol{B}}{\partial x} & \frac{\partial \boldsymbol{B}}{\partial y} & \frac{\partial \boldsymbol{B}}{\partial z}
    \end{array}\right]
\end{equation}
$$

在三个方向上展开，写成矩阵形式即为

$$
\begin{equation}
    \left(\begin{array}{ccc}\frac{\partial B_x}{\partial x} & \frac{\partial B_x}{\partial y} & \frac{\partial B_x}{\partial z} \\ \frac{\partial B_y}{\partial x} & \frac{\partial B_y}{\partial y} & \frac{\partial B_y}{\partial z} \\ \frac{\partial B_z}{\partial x} & \frac{\partial B_z}{\partial y} & \frac{\partial B_z}{\partial z}\end{array}\right)
\end{equation}
$$

### 磁场的“高斯定理”

 规定通过一个曲面 $S$ 的磁感应通量为  $\mathrm{d} \phi=\boldsymbol{B} \cdot \boldsymbol{n} \mathrm{~d} S$，此处 $\boldsymbol{n}\mathrm{d}S$ 便是面元矢量. 磁场源所产生的磁感线是无始无终的闭合线，可以想象对于任何闭合曲面 $S$ 的磁通量恒等于 $0$，用数学的语言进行描述便是

$$
\begin{equation}
    \oint_S(\boldsymbol{B} \cdot \boldsymbol{n}) \mathrm{d}S=0
\end{equation}
$$

这个定理一般没有很通用的名字，但与电场中的高斯定理类似，不妨叫做磁场的“高斯定理”. 根据矢量微分算符的计算规则

$$
\begin{equation}
    {\oint}_S(\boldsymbol{B} \cdot \boldsymbol{n}) \mathrm{d} S=\iiint_V \nabla \cdot \boldsymbol{B} \mathrm{d} V=0
\end{equation}
$$

其中，$V$ 是高斯面 $S$ 所包围的体积，相当于被积分函数得到

$$
\begin{equation}
    \nabla \cdot \boldsymbol{B}=0
\end{equation}
$$

其中，$\nabla \cdot \boldsymbol{B}$ 代表对矢量求散度的意思，结合之前磁感应强度的分量矩阵，我们可以知道其中的三项存在以下这样的关系 

$$
\begin{equation}
    \left(\begin{array}{ccc}  {\frac{\partial B_x}{\partial x}} & \frac{\partial B_x}{\partial y} & \frac{\partial B_x}{\partial z} \\ \frac{\partial B_y}{\partial x} &   {\frac{\partial B_y}{\partial y}} & \frac{\partial B_y}{\partial z} \\ \frac{\partial B_z}{\partial x} & \frac{\partial B_z}{\partial y} &   {\frac{\partial B_z}{\partial z}}\end{array}\right)\rightarrow \frac{\partial B_x}{\partial x}+\frac{\partial B_y}{\partial y}+\frac{\partial B_z}{\partial z}=0.
\end{equation}
$$


### 安培定律

在1820年奥斯特做此实验前，人们对电和磁的认识一直是单独的、孤立的，奥斯特实验使人们第一次认识到电和磁的联系. 安培环路定理则给出了定量化的数学描述

$$
\begin{equation}
    \oint_l \boldsymbol{B} \cdot \mathrm{d} \boldsymbol{l}=\mu_0 \iint_S \boldsymbol{J} \cdot \mathrm{d} \boldsymbol{S}=\mu_0 I_{\mathrm{enc}}
\end{equation}
$$

其中，$l$ 是任意的闭合回路， $\mu_0$ 是真空磁导率， $I_{\text {enc }}$是通过封闭回路的环境电流，$\boldsymbol{J}$ 是电流密度. 同样地，根据矢量微分算符的计算规则(Stokes' theorem)

$$
\begin{equation}
    \oint_l \boldsymbol{B} \cdot \mathrm{d} \boldsymbol{l}=\iint_S \nabla \times \boldsymbol{B}\cdot \mathrm{d} \boldsymbol{S}
\end{equation}
$$

对于自由空间中的一点，封闭回路的环境电流为 $0$，可以得到 $\nabla \times \boldsymbol{B}=0$，从而有

$$
\begin{equation}
    \left|\begin{array}{ccc}
    \boldsymbol{i} & \boldsymbol{j} & \boldsymbol{k} \\
    \frac{\partial }{\partial x} & \frac{\partial }{\partial y} & \frac{\partial }{\partial z} \\
    B_x & B_y & B_z
    \end{array}\right|=0 \quad \text{or} \quad\left(\begin{array}{c}
    \frac{\partial B_z}{\partial y}-\frac{\partial B_y}{\partial z} \\
    \frac{\partial B_x}{\partial z}-\frac{\partial B_z}{\partial x} \\
    \frac{\partial B_y}{\partial x}-\frac{\partial B_x}{\partial y}
    \end{array}\right) =0
\end{equation}
$$

同样的，可以得到磁感应强度矩阵的部分元素关系有

$$
\begin{equation}
    \left(\begin{array}{ccc}
    \frac{\partial B_x}{\partial x} &   {\frac{\partial B_x}{\partial y}} &   {\frac{\partial B_x}{\partial z}} \\
    {\frac{\partial B_y}{\partial x}} & \frac{\partial B_y}{\partial y} &   {\frac{\partial B_y}{\partial z}} \\
    {\frac{\partial B_z}{\partial x}} &   {\frac{\partial B_z}{\partial y}} & \frac{\partial B_z}{\partial z}
    \end{array}\right) \rightarrow  \frac{\partial B_z}{\partial y}=\frac{\partial B_y}{\partial z} ,\quad
    \frac{\partial B_x}{\partial z}=\frac{\partial B_z}{\partial x} ,\quad
    \frac{\partial B_y}{\partial x}=\frac{\partial B_x}{\partial y}.
\end{equation}
$$

结合 Eq. (7)，可以知道磁感应强度梯度只有5个独立变量(其他4个可以借由这5个得出)[^1]即

$$
\begin{equation}
    \quad {\text {grad }\boldsymbol{B}}=\left[\begin{array}{lllll}\frac{\partial B_z}{\partial x} & \frac{\partial B_z}{\partial y} & \frac{\partial B_z}{\partial z} & \frac{\partial B_y}{\partial y} & \frac{\partial B_x}{\partial y}\end{array}\right]^T
\end{equation}
$$



### 毕奥-萨伐尔定律和磁力响应

在静磁学里，毕奥-萨伐尔定律以方程描述，电流在其周围所产生的磁场,


$$
\begin{equation}
    \mathbf{B}(\mathbf{r})=\frac{\mu_0}{4 \pi} \int_C \frac{I \mathrm{d} \boldsymbol{l} \times \mathbf{r}^{\prime}}{\left|\mathbf{r}^{\prime}\right|^3}
\end{equation}
$$

其中， $\mathrm{d} \boldsymbol{l}$ 是沿路径的向量， $C$ 是线圈需要被积分的路径， $\mathbf{r}^{\prime}$ 是导线单元到需要计算段的点 $(\mathbf{r}) ， \mu_0$ 是磁常数. 把螺旋状线圈抽象成固定数目的通电圆线圈. 较为简单的方法是直接用圆线圈轴线上的磁场进行近似，其磁感应强度 $B$ 沿轴线方向, 大小等于各元磁场沿轴线分量 $\mathrm{d} B \cos \theta$ 的代数和, 即

$$
\begin{equation}
    B=\oint \mathrm{d} B \cos \alpha.
\end{equation}
$$

<img src="https://wowking2018.github.io/img/blog12/fig1.jpg" alt="fig2" style="zoom: 50%;" width="500px"/>

对于轴上的场点 $P, \theta=\pi / 2, \sin \theta=1$. 令$r_0$ 为场点 $P$ 到圆心的距离, 则 $r_0=r \sin \alpha$，故

$$
\begin{equation}
    \begin{gathered}
    \mathrm{d} B=\frac{\mu_0}{4 \pi} \frac{I \mathrm{~d} l}{r_0^2} \sin ^2 \alpha, \\
    B=\oint \mathrm{d} B \cos \alpha=\frac{\mu_0}{4 \pi} \frac{I}{r_0^2} \sin ^2 \alpha \cos \alpha \oint \mathrm{d} l,
    \end{gathered}
\end{equation}
$$
 
因 $\cos \alpha=\frac{R}{\sqrt{R^2+r_0^2}}, \quad \sin \alpha=\frac{r_0}{\sqrt{R^2+r_0^2}}, \quad \oint \mathrm{d} l=2 \pi R$，故 

$$
\begin{equation}
    B=\frac{\mu_0}{4 \pi} \frac{2 \pi R^2 I}{\left(R^2+r_0^2\right)^{3 / 2}}=\frac{\mu_0 R^2 I}{2\left(R^2+r_0^2\right)^{3 / 2}} .
\end{equation}
$$

其中，$R$ 是圆环半径, $r_0$ 是需要求的点到圆环中心的位移距离. 

``` matlab
% 定义常数
mu0 = 4 * pi * 10^(-7); % 真空磁导率

% 定义网格范围和步长
L = 15 * 1e-3;  % 单位：m
x = linspace(-L, L, 50);    
y = linspace(-L, L, 50);
z = linspace(-L, L, 50);
[X,Y,Z] = meshgrid(x,y,z);

% 定义线圈参数
N = 1; % 匝数
R = 5 * 1e-3; % 半径
I = 0.6; % 电流强度 单位：A

% 计算磁场强度矢量
r = sqrt(X.^2 + Y.^2 + Z.^2);
Bx = mu0 * N * I * R^2 ./ (2 * r.^3) .* X;
By = mu0 * N * I * R^2 ./ (2 * r.^3) .* Y;
Bz = mu0 * N * I * R^2 ./ (2 * r.^3) .* Z;

% 绘制三维矢量图
figure;
quiver3(X,Y,Z,Bx,By,Bz,'LineWidth',1,'Color','b');
xlabel('x(m)');
ylabel('y');
zlabel('z');
title('线圈磁感应强度三维矢量图');
axis equal;
grid on;
box on;
view(-30,30);
```

<img src="https://wowking2018.github.io/img/blog12/fig2.jpg" alt="img" style="zoom: 60%;" />

但上述结果只是近似公式，如果严格求解可以用全椭圆积分，相应的结果可以用球坐标的结果进行表示，对应的磁场为[^2]

$$
\left\{\begin{array}{l}
B_r=\frac{\mu_0 I a^2 \cos \theta}{2\left(a^2+r^2\right)^{3 / 2}}\left[1+\frac{15 a^2 r^2 \sin \theta^2}{4\left(a^2+r^2\right)^2}+\cdots\right] \\
B_\theta=-\frac{\mu_0 I a^2 \sin \theta}{4\left(a^2+r^2\right)^{5 / 2}}\left[2 a^2-r^2+\frac{15 a^2 r^2 \sin ^2 \theta\left(4 a^2-3 r^2\right)}{8\left(a^2+r^2\right)^2}+\cdots\right] \\
B_\phi=0
\end{array}\right.
$$

```matlab
% 定义常数
mu0 = 4 * pi * 10^(-7); % 真空磁导率

% 定义网格范围和步长
L = 15 * 1e-3;  % 单位：m
x = linspace(-L, L, 50);    
y = linspace(-L, L, 50);
z = linspace(-L, L, 50);
[X,Y,Z] = meshgrid(x,y,z);

% 定义线圈参数
N = 1; % 匝数
I = 0.6; % 电流强度 单位：A
R = linspace(1.51,8.34,15)* 1e-3; % 半径

% 计算磁场强度大小
r = sqrt(X.^2 + Y.^2 + Z.^2);
B_field =zeros(50,50,50);
for i = linspace(1,15,15)
    B = mu0 * N * I * R(i).^2 ./ (2 * (r.^2+R(i).^2).^(3/2));
    B_field = B_field + B;
end
% B_field_normal = B_field./ max(max(max(B_field)));
% 绘制三维图
figure;
h = slice(X,Y,Z,B_field,[0],[-10 * 1e-3 0 10 * 1e-3],[0]);
set(h,'EdgeColor','none','FaceColor','interp');
xlabel('x');
ylabel('y');
zlabel('z');
title('线圈磁感应强度三维图');
% axis([-0.001 0.001 -0.001 0.001 -0.001 0.001 -0.001 0.001])
colorbar;
axis equal;
grid on;
box on;
% view(-30,30);
view([-120 20])
```

<img src="https://wowking2018.github.io/img/blog12/fig3.png" alt="img" style="zoom: 60%;" />

以上计算的是实际使用的螺旋线圈在电流为 $0.6 \mathrm{A}$ 磁场分布，数量级与实测结果相近.

$$
\begin{array}{|c|c|c|}
\hline \text { 电流(A) } & \text { 电压(V) } & \begin{array}{c}
\text { 磁感应强度 } \\
(\mathrm{mT})
\end{array} \\
\hline 0.0872 & 0.2 & 0.25 \\
\hline 0.186 & 0.4 & 0.46 \\
\hline 0.293 & 0.6 & 0.79 \\
\hline 0.387 & 0.8 & 0.99 \\
\hline 0.486 & 1.0 & 1.29 \\
\hline 0.594 & 1.2 & 1.46 \\
\hline 0.709 & 1.4 & 1.54 \\
\hline
\end{array}
$$

之所以磁铁能够吸引铁磁性物质，是因为磁场对放入其中的物质进行磁化，从而产生了相互作用. 通过该定律可以得到空间中磁感应强度的分布，需要知道具体力的大小仍然需要知道物质本身的属性——即“磁矩”. 在安培的分子电流观点下，磁矩是微观分子环形电流的宏观表现，是磁铁的一种物理性质. 处于外磁场的磁铁，会受到力矩，使得磁矩沿着外磁场的磁感应线方向排列. 其数学定义如下

$$
\begin{equation}
    \boldsymbol{\tau}=\boldsymbol{m} \times \boldsymbol{B}
\end{equation}
$$

其中，$\boldsymbol{\tau}$ 表示磁力矩，$\boldsymbol{m}$ 表示磁矩，$\boldsymbol{B}$​ 表示磁场强度，得到的结果是一个垂直于两个向量所在平面的新向量. 当顺磁性物质中的原子或分子受到磁场作用时，它们会产生磁偶极矩，从而受到磁场力的作用，磁场力 $\boldsymbol{F}$ 可以表示为：

$$
\begin{equation}
    \boldsymbol{F} = (\boldsymbol{m} \cdot \nabla)\boldsymbol{B}
\end{equation}
$$

在我们的情况下，只需要关注 $x$ 方向上的磁场力分量即可，具体表达式为

$$
\begin{equation}
    F_x =\frac{\partial B_x}{\partial x}m_x + \frac{\partial B_y}{\partial y}m_y+ \frac{\partial B_z}{\partial y}m_z.
\end{equation}
$$



### 参考文献

[^1]: *Fundamental Knowledge of Magnetic Miniature Robots* by Changyu Xu.
[^2]: [【经典电动力学-Jackson】Chapter.5 静磁学，法拉第定律，似稳场 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/403865978)
