# Review

## Ch 14 Binary Search Trees

A binary search tree is a binary tree storing keys (or key-value entries) at its internal nodes and satisfying the following property:

- Let u, v, and wbe three nodes such that w is in the left subtree of v and u is in the right subtree of v. We have key(u) > key(v) > key(w)
- External nodes do not store items

![2020-4-8-8-59-50.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-4-8-8-59-50.png)

![2020-4-8-9-5-26.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-4-8-9-5-26.png)

- In-order traversal of a binary search tree visits the keys in **increasing** order

```java

void preOrder(Node* root) {
  if (root == null) return;
  System.out.print(root->value);
  preOrder(root->left);
  preOrder(root->right);
}

void inOrder(Node* root) {
  if (root == null) return;
  inOrder(root->left);
  System.out.print(root->value);
  inOrder(root->right);
}

void postOrder(Node* root) {
  if (root == null) return;
  postOrder(root->left);
  postOrder(root->right);
  System.out.print(root->value);
}
```

### 查找

- 在二叉查找树中查找一个节点。我们先取根节点，如果它等于我们要查找的数据，那就返回。
- 如果要查找的数据比根节点的值小，那就在左子树中递归查找；
- 如果要查找的数据比根节点的值大，那就在右子树中递归查找。

```java
public class BinarySearchTree {
  private Node tree;

  public Node find(int data) {
    Node p = tree;
    while (p != null) {
      if (data < p.data) p = p.left;
      else if (data > p.data) p = p.right;
      else return p;
    }
    return null;
  }

  public static class Node {
    private int data;
    private Node left;
    private Node right;

    public Node(int data) {
      this.data = data;
    }
  }
}
```

### 插入

- 从根节点开始，依次比较要插入的数据和节点的大小关系。
- 如果要插入的数据比节点的数据大，并且节点的右子树为空，就将新数据直接插到右子节点的位置；
- 如果不为空，就再递归遍历右子树，查找插入位置。
- 如果要插入的数据比节点数值小，并且节点的左子树为空，就将新数据插入到左子节点的位置；如果不为空，就再递归遍历左子树，查找插入位置。

```java
public void insert(int data) {
  if (tree == null) {
    tree = new Node(data);
    return;
  }

  Node p = tree;
  while (p != null) {
    if (data > p.data) {
      if (p.right == null) {
        p.right = new Node(data);
        return;
      }
      p = p.right;
    } else { // data < p.data
      if (p.left == null) {
        p.left = new Node(data);
        return;
      }
      p = p.left;
    }
  }
}
```

### 删除

针对要删除节点的子节点个数的不同，我们需要分三种情况来处理。

- 如果要删除的节点没有子节点，我们只需要直接将父节点中，指向要删除节点的指针置为 null；
- 如果要删除的节点只有一个子节点（只有左子节点或者右子节点），我们只需要更新父节点中，指向要删除节点的指针，让它指向要删除节点的子节点就可以了；
- 如果要删除的节点有两个子节点。我们需要找到这个节点的右子树中的最小节点，把它替换到要删除的节点上。然后再删除掉这个最小节点；

![2020-4-8-9-14-47.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-4-8-9-14-47.png)

```java
public void delete(int data) {
  // p 指向要删除的节点，初始化指向根节点
  Node p = tree;
  // pp 记录的是 p 的父节点
  Node pp = null;
  while (p != null && p.data != data) {
    pp = p;
    if (data > p.data) p = p.right;
    else p = p.left;
  }
  // 没有找到
  if (p == null) return;

  // 要删除的节点有两个子节点
  if (p.left != null && p.right != null) { // 查找右子树中最小节点
    Node minP = p.right;
    // minPP表示minP的父节点
    Node minPP = p;
    while (minP.left != null) {
      minPP = minP;
      minP = minP.left;
    }
    // 将minP的数据替换到p中
    p.data = minP.data;
    // 下面就变成了删除minP了
    p = minP;
    pp = minPP;
  }

  // 删除节点是叶子节点或者仅有一个子节点
  Node child; // p的子节点
  if (p.left != null) child = p.left;
  else if (p.right != null) child = p.right;
  else child = null;

  // 删除的是根节点
  if (pp == null) tree = child;
  else if (pp.left == p) pp.left = child;
  else pp.right = child;
}

```

### Performance

- The **worst** case, methods find, insertand removerun in $O(n)$
- The **best** case, is $O(logN)$

## AVL 树

![2020-4-8-9-26-46.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-4-8-9-26-46.png)

- 编号 2 的二叉树中，叶子节点全都在最底层，除了叶子节点之外，每个节点都有左右两个子节点，这种二叉树就叫作**满二叉树**。
- 编号 3 的二叉树中，叶子节点都在最底下两层，最后一层的叶子节点都靠左排列，并且除了最后一层，其他层的节点个数都要达到最大，这种二叉树叫作**完全二叉树**。

### 平衡二叉树

- 在二叉树中，插入，删除，查找操作的最差情况是 O(n)，为了保证在任何情况下，时间复杂度都为 O(logN)，所以出现了平衡二叉树。
- **平衡二叉树**的严格定义是这样的：**二叉树中任意一个节点的左右子树的高度相差不能大于 1**。
- 完全二叉树、满二叉树其实都是平衡二叉树，但是非完全二叉树也有可能是平衡二叉树。

![2020-4-8-9-31-27.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-4-8-9-31-27.png)

![2020-4-8-11-3-39.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-4-8-11-3-39.png)

### 什么是 AVL 树

AVL 树，是一种平衡二叉搜索树，(AVL 是两位发明人的名字的缩写)。

定义是，任意一个节点的左右子树的高度相差不能大于 1。

为了计算左右子树的高度差（也被称作 “平衡因子”），那么 Node 节点对象中需要添加一个高度属性；

AVL 树的节点类如下：

```java
public class AVLNode {
  public AVLNode left;// 左结点
  public AVLNode right;// 右结点
  public int data; // 保存的值
  public int height;// 当前结点的高度
}
```

### 平衡化操作

对于一颗平衡二叉树，执行插入或删除操作，可能会破坏树的平衡。

这种时候，我们需要对这个树执行 “平衡操作” 让它的重新回归平衡。

![2020-4-8-11-5-19.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-4-8-11-5-19.png)

二叉树的平衡化有两大基础操作：

- 右旋：顺时针旋转；
- 左旋：逆时针旋转；

#### 右旋

![2020-4-8-11-9-35.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-4-8-11-9-35.png)

- 右旋操作，就是把上图中的 B 节点和 C 节点顺时针旋转；
- 当 B 节点处存在右子树的时候，我们需要把 B 的右子树变成 C 的左子树（B 的右子树上的节点值肯定比 C 的值小）；

![2020-4-8-11-20-9.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-4-8-11-20-9.png)

```java
AVLNode rightRotation(AVLNode node) {
  // Node 是 C，left 是 B
  AVLNode left = node.left;
  AVLNode leftRight = left.right;

  // 把 B 的右子树，变成 C 的左子树；
  left.right = node;
  node.left = leftRight;

  // 重新计算高度
  node.height = Math.max(node.left.height, node.right.height) + 1;
  left.height = Math.max(left.left.height, left.right.height) + 1;
  return left;
}
```

#### 左旋

![2020-4-8-11-21-1.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-4-8-11-21-1.png)

- 就是把 A 和 B 节点逆时针旋转；
- B 的左节点，变成 A 的右节点；

![2020-4-8-11-23-31.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-4-8-11-23-31.png)

```java
AVLNode leftRotation(AVLNode node) {
  AVLNode right = node.rigth;
  AVLNode rightLeft = right.left;
  node.right = rightLeft;
  right.left = node;

  // 重新计算高度
  node.height = Math.max(node.left.height, node.right.height) + 1;
  right.height = Math.max(right.left.height, right.right.height) + 1;
  return right
}
```

插入删除操作可能会造成以下四种失衡的情况：

#### LL 型

![2020-4-8-11-29-43.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-4-8-11-29-43.png)

![2020-4-8-11-29-58.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-4-8-11-29-58.png)

- 结点 X 并不能满足 AVL 树的性质，因为它的左子树比右子树深 2 层，这种情况就是典型的 LL 情景；
- 需要通过**右向旋转**来修复失衡的树；
- 我们把 X 结点称为**失衡点**；
- 把通过一次旋转即可修复平衡的操作叫做**单旋转**；

#### RR 型

![2020-4-8-11-33-2.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-4-8-11-33-2.png)

![2020-4-8-11-33-11.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-4-8-11-33-11.png)

- 结点 W 并不能满足 AVL 树的性质，因为它的右子树比左子树深 2 层，这种情况就是典型的 RR 情景；
- 需要通过**左向旋转**来修复失衡的树；

#### LR 型

有的时候会出现，通过一次单旋转无法达到平衡的情况，这个时候需要使用 “**双旋转算法**” 来恢复平衡。

![2020-4-8-12-34-7.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-4-8-12-34-7.png)

![2020-4-8-12-34-50.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-4-8-12-34-50.png)

```java
public AVLNode doubleRotateWithLeft(AVLNode x){
    // w 先进行 RR 旋转
    x.left=singleRotateRight(x.left);
    // 再进行 x 的 LL 旋转
    return singleRotateLeft(x);
}
```

#### RL 型

![2020-4-8-12-38-6.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-4-8-12-38-6.png)

![2020-4-8-12-38-13.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-4-8-12-38-13.png)

```java
public AVLNode doubleRotateWithRight(AVLNode x){
    // w 先进行LL旋转
    x.right=singleRotateLeft(x.right);
    // x 再进行RR旋转
    return singleRotateRight(x);
}
```

### 插入

- 插入实现先和二叉查找树一样，先使用递归，根据值的大小，找到插入位置；
- 然后进行插入操作，插入完成后进行平衡判断，评估子树是否需要进行平衡修复，需要则利用上述的四种情景套入代码即可；

```java
@Override
public void insert(int data) {
    if (data == null) {
        throw new RuntimeException("data can\'t not be null ");
    }
    this.root = insert(data, root);
}

private AVLNode insert(int data, AVLNode p) {

  if(p == null){
    p = new AVLNode(data);
  } else if (data.compareTo(p.data) < 0) { //向左子树寻找插入位置
    p.left = insert(data, p.left);

    // 插入后计算子树的高度, 等于 2 则需要重新恢复平衡,
    // 由于是左边插入, 左子树的高度肯定大于等于右子树的高度
    if (height(p.left) - height(p.right) == 2) {
      //判断 data 是插入点的左孩子还是右孩子
      if (data.compareTo(p.left.data) < 0) {
        //进行LL旋转
        p = singleRotateLeft(p);
      } else {
        //进行左右旋转
        p = doubleRotateWithLeft(p);
      }
    }
  } else if (data.compareTo(p.data) > 0) { //向右子树寻找插入位置
    p.right = insert(data, p.right);

    if (height(p.right) - height(p.left) == 2) {
      if (data.compareTo(p.right.data) < 0) {
        //进行右左旋转
        p = doubleRotateWithRight(p);
    } else {
        p = singleRotateRight(p);
      }
    }
  }

  //重新计算结点的高度
  p.height = Math.max(height(p.left), height(p.right)) + 1;

  return p; //返回根结点
}
```

### 删除

- 和二叉查找树中删除方法的实现类似，但是在移除结点后需要进行平衡检测，以便判断是否需要进行平衡修复；
- 这里是递归实现；

```java
@Override
public void remove(T data) {
    if (data == null) {
        throw new RuntimeException("data can\'t not be null ");
    }
    this.root = remove(data, root);
}

private AVLNode remove(int data, AVLNode p) {

    if (p == null)
        return null;

    int result = data.compareTo(p.data);

    //从左子树查找需要删除的元素
    if (result < 0) {
        p.left = remove(data, p.left);

        //检测是否平衡
        if (height(p.right) - height(p.left) == 2) {
            AVLNode currentNode = p.right;
            //判断需要那种旋转
            if (height(currentNode.left) > height(currentNode.right)) {
                //LL
                p = singleRotateLeft(p);
            } else {
                //LR
                p = doubleRotateWithLeft(p);
            }
        }

    }
    //从右子树查找需要删除的元素
    else if (result > 0) {
        p.right = remove(data, p.right);
        //检测是否平衡
        if (height(p.left) - height(p.right) == 2) {
            AVLNode currentNode = p.left;
            //判断需要那种旋转
            if (height(currentNode.right) > height(currentNode.left)) {
                //RR
                p = singleRotateRight(p);
            } else {
                //RL
                p = doubleRotateWithRight(p);
            }
        }
    }
    //已找到需要删除的元素,并且要删除的结点拥有两个子节点
    else if (p.right != null && p.left != null) {

        //寻找替换结点
        p.data = findMin(p.right).data;

        //移除用于替换的结点
        p.right = remove(p.data, p.right);
    } else {
        //只有一个孩子结点或者只是叶子结点的情况
        p = (p.left != null) ? p.left : p.right;
    }

    //更新高度值
    if (p != null) {
      p.height = Math.max(height(p.left), height(p.right)) + 1;
    }

    return p;
}
```

### Performance

![2020-4-8-10-51-15.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-4-8-10-51-15.png)

## 红黑树

$O(n)$
