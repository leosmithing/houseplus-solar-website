# HousePlus Solar Series - 联系表单设置指南

## 📋 概述

网站已集成 **Formspree** 服务来处理联系表单提交。Formspree 是一个免费的表单后端服务，可以将表单提交直接发送到您的邮箱。

---

## 🚀 快速设置（仅需 2 步）

### 第 1 步：创建 Formspree 账户
1. 访问 **https://formspree.io**
2. 点击 **Sign Up** 注册账户
3. 使用您的邮箱登录（建议使用 jack@houseplus-ch.com）

### 第 2 步：创建新的表单端点
1. 登录 Formspree 后，点击 **Create** 或 **New Form**
2. 选择 **Email** 作为表单类型
3. 输入您的邮箱地址（如 jack@houseplus-ch.com）
4. 系统会生成一个 **Form ID**，格式如：`xyzgqbpq`
5. **复制这个 ID**

### 第 3 步：更新网站代码
1. 打开 GitHub 仓库中的 `index.html` 文件
2. 找到以下行（约第 412 行）：
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/xyzgqbpq" method="POST">
   ```
3. 将 `xyzgqbpq` 替换为您的 Form ID
4. 提交更改（Commit）
5. 网站会在几秒内自动更新

---

## 📧 表单字段说明

当客户提交表单时，您将收到包含以下信息的邮件：

| 字段 | 说明 |
|------|------|
| **Your Name** | 客户姓名（必填） |
| **Company** | 客户公司名称（可选） |
| **Email Address** | 客户邮箱地址（必填） |
| **Phone / WhatsApp** | 客户电话或 WhatsApp（可选） |
| **Product of Interest** | 客户感兴趣的产品（可选） |
| **Message** | 客户的详细需求或问题（必填） |

---

## ✨ 表单功能特性

### 客户端验证
- ✓ 必填字段检查（姓名、邮箱、留言）
- ✓ 邮箱格式验证
- ✓ 实时错误提示

### 用户体验
- ✓ 聚焦时标签颜色变化
- ✓ 填充时标签状态更新
- ✓ 错误字段红色边框提示
- ✓ 字符计数器（消息字段）
- ✓ 提交成功提示信息
- ✓ 响应式设计（手机/平板/桌面）

### 提交流程
1. 用户填写表单
2. 点击 "Send Inquiry" 按钮
3. 客户端验证表单数据
4. 提交到 Formspree 服务器
5. 显示成功提示
6. 您的邮箱收到提交通知

---

## 🔧 高级配置（可选）

### 自定义邮件接收者
您可以在 Formspree 中配置多个邮箱接收表单提交：
1. 登录 Formspree
2. 进入表单设置
3. 在 **Recipients** 中添加多个邮箱
4. 保存更改

### 自动回复邮件
配置自动回复给客户：
1. 在 Formspree 中找到 **Auto-reply** 选项
2. 启用自动回复
3. 编写回复邮件内容
4. 保存

### 邮件通知
- 每次有新提交时，您会立即收到邮件通知
- 邮件包含所有表单字段的信息
- 可以直接在邮件中回复客户

---

## 📱 测试表单

部署后，建议您测试表单功能：

1. 访问您的网站：https://leosmithing.github.io/houseplus-solar-website/
2. 滚动到 **"Get In Touch"** 部分
3. 填写表单（所有必填字段）
4. 点击 **"Send Inquiry"** 按钮
5. 应该看到成功提示
6. 检查您的邮箱是否收到提交

---

## ⚠️ 常见问题

### Q1: 表单提交后没有收到邮件
**解决方案：**
- 检查 Formspree 中的 Form ID 是否正确
- 确认邮箱地址在 Formspree 中已验证
- 检查垃圾邮件文件夹
- 在 Formspree 仪表板中检查提交记录

### Q2: 如何修改表单字段？
**解决方案：**
- 编辑 `index.html` 中的表单字段
- 确保 `name` 属性与 Formspree 期望的字段相符
- 提交更改到 GitHub

### Q3: 表单在手机上显示不正常
**解决方案：**
- 网站已针对手机优化
- 清除浏览器缓存
- 尝试其他浏览器
- 检查浏览器开发者工具中是否有错误

### Q4: 如何限制表单提交频率？
**解决方案：**
- Formspree 有内置的反垃圾邮件保护
- 您也可以在 Formspree 设置中配置速率限制

---

## 🔐 安全性

- ✓ 所有表单提交都通过 HTTPS 加密
- ✓ Formspree 使用行业标准的安全协议
- ✓ 客户邮箱地址不会在网页上公开
- ✓ 表单数据不会存储在您的服务器上

---

## 📞 支持

如需帮助：
1. 访问 Formspree 官方文档：https://formspree.io/help
2. 查看 GitHub 仓库的 Issues
3. 联系 HousePlus 销售团队：jack@houseplus-ch.com

---

## 📝 更新日志

- **2026-03-20**: 初始表单集成，使用 Formspree 服务
- 客户端验证功能
- 响应式设计支持
- 自动成功提示

---

**表单已准备就绪！** 按照上述步骤配置 Formspree，您就可以开始接收客户询问了。
