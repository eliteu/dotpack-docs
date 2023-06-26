# 样例

使用方式上，我们以 Python 使用来讲解相关用法。

## 创建对象

```python
from dotpack import DotPack
pack = DotPack()
```

## 连接/断开

```python
pack.connect()     # 连接
pack.disconnect()  # 断开
```

## 设置像素

```python
pack.set_pixel(x, y, color)     # 设置像素点颜色
```

## 设置颜色

```python
pack.set_color(color)
```

## 设置文字

```python
pack.display_char_zh("好")
```

## 设置 emoji

```python
pack.display_emoji("🍓")
```

## 设置模式

```python
pack.set_mode("fire")
```

## 设置图案

```python
pack.load("https://help.dotpack.fun/logo.png")
pack.show()
```

## 游戏

```python
pack.game_mode(1)  # 进入游戏模式
```
