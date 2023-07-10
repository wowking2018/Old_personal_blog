#### Necessary things you should know about SVD



Eigenvalue decomposition can be defined as: Given an $N*N$ square matrix $A$, how to find a set of eigenvectors and eigenvalues such that the following equation is satisfied:

$$
A x_i=\lambda_i x_i
$$

where $x_i$ is the $i^{\rm{th}}$ eigenvector of square matrix $A$，with a dimension  of $N * 1$ ；we can get $\lambda_i$ as the characteristic value of matrix $A$. The more details about the processing are following:

$$
|A-\lambda I|=0
$$

After finding $N$ eigenvalues, we then could find the eigenvector $x$ corresponding to each eigenvalue:

$$
(A-\lambda I) x=0
$$

And then, let's compute the $N$ eigenvalues and their corresponding eigenvectors, the $N$ eigenvectors can be stacked into a matrix $X$, while the $N$ eigenvalues can be transformed into a diagonal matrix $\Sigma$:

$$
A X=\Sigma X
$$

Multiplying both sides by $X^{-1}$ yields:

$$
A=X \Sigma X^{-1}
$$

If square matrix $A$ is the real symmetric matrix $Q$ , the characteristics of the vector will be orthogonal between each other, which can be written as

$$
A=X \Sigma X^T
$$

What is the use of factoring $A$ into the form (6)? We have known that each eigenvalue of the diagonal of $\Sigma$ means the "importance" of the corresponding feature vector, and we can drop the relatively small eigenvalues to reduce the dimension of matrix without information loss.

The SVD decomposition is defined as follows,

$$
A=U \Sigma V^T
$$

where $A$ is the matrix of $M^* N$; $U$ is an orthogonal matrix of $M^* M$; $\Sigma $ is diagonal matrix singular values $M ^ * N $ , $V ^   {T} $ is the orthogonal matrix $N ^ * N $.

As we can see, in the SVD decomposition, we need to solve for three matrices $U,\Sigma,V$. Here is how to solve for these three matrices. Since $A$ is a $M *M$ matrix, then it can eigenvalue decomposition.

$$
A * A^T=X(\lambda I) X^T
$$

Meanwhile, substituting $A * A^T$into the SVD formula, we obtain the following.

$$
A * A^T=U \Sigma V^T V \Sigma U^T=U \Sigma^2 U^T
$$

According to equations (8) and (9), the eigenvector matrix $X$ obtained in (8) is the characteristic values obtained by the $U$ matrix in the SVD decomposition of $A$ matrix. 

 Schematic of matrices in the full and economy SVD.

```
![image-20221126174307627]()
```


Theorem 1 (Eckart-Young) The optimal rank-r approximation to $\mathbf{X}$, in a leastsquares sense, is given by the rank-r SVD truncation $\tilde{\mathbf{X}}$ :

$$
\underset{\tilde{\mathbf{X}}, \text { s.t. } \operatorname{rank}(\tilde{\mathbf{X}})=r}{\operatorname{argmin}}\|\mathbf{X}-\tilde{\mathbf{X}}\|_F=\tilde{\mathbf{U}} \tilde{\mathbf{\Sigma}} \tilde{\mathbf{V}}^*
$$

Here, $\tilde{\mathbf{U}}$ and $\tilde{\mathbf{V}}$ denote the first $r$ leading columns of $\mathbf{U}$ and $\mathbf{V}, \mid$ and $\tilde{\mathbf{\Sigma}}$ contains the leading $r \times r$ sub-block of $\boldsymbol{\Sigma} .\|\cdot\|_F$ is the Frobenius norm.

Here, we establish the notation that a truncated SVD basis (and the resulting approximated matrix $\tilde{\mathbf{X}}$ ) will be denoted by $\tilde{\mathbf{X}}=\tilde{\mathbf{U}} \tilde{\mathbf{\Sigma}} \tilde{\mathbf{V}}^*$. Because $\boldsymbol{\Sigma}$ is diagonal, the rank-r SVD approximation is given by the sum of $r$ distinct rank-1 matrices:

$$
\tilde{\mathbf{X}}=\sum_{k=1}^r \sigma_k \mathbf{u}_k \mathbf{v}_k^*=\sigma_1 \mathbf{u}_1 \mathbf{v}_1^*+\sigma_2 \mathbf{u}_2 \mathbf{v}_2^*+\cdots+\sigma_r \mathbf{u}_r \mathbf{v}_r^*
$$

This is the so-called dyadic summation.
