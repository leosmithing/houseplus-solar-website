# HousePlus Solar Series - 自定义域名配置指南

本指南将帮助您将 HousePlus Solar Series 网站从 GitHub Pages 默认域名 (`https://leosmithing.github.io/houseplus-solar-website/`) 迁移到您的自定义域名 (`https://houseplus.ng/`)。

## 1. 已完成的配置

我已经为您完成了以下配置工作：

### 1.1 GitHub Pages CNAME 配置
- 已在仓库根目录创建 `CNAME` 文件，内容为 `houseplus.ng`
- 这个文件告诉 GitHub Pages 您的网站应该通过哪个域名访问
- 文件位置：`https://github.com/leosmithing/houseplus-solar-website/blob/main/CNAME`

### 1.2 Sitemap 更新
- 已将 `sitemap.xml` 中的所有 URL 从 GitHub 默认域名更新为 `https://houseplus.ng/`
- 更新包括：
  - 主页：`https://houseplus.ng/`
  - 新闻页：`https://houseplus.ng/news.html`
  - 所有内部链接和图片资源 URL

### 1.3 SEO 优化
- 所有 Schema 结构化数据已准备好使用新域名
- Canonical 标签将自动指向新域名
- 网站的 robots.txt 和其他 SEO 文件已配置完毕

---

## 2. DNS 配置步骤

为了让您的域名 `houseplus.ng` 正确指向 GitHub Pages 托管的网站，您需要在域名服务商的后台配置 DNS 记录。

### 2.1 获取 GitHub Pages IP 地址

GitHub Pages 使用以下 IP 地址：
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

### 2.2 DNS 配置方案 A：使用 A 记录（推荐用于根域名）

如果您想使用 `https://houseplus.ng/`（不带 www），请按照以下步骤配置：

1. **登录您的域名服务商后台**（例如 Namecheap, GoDaddy, 阿里云等）
2. **找到 DNS 管理或 DNS 设置**
3. **添加以下 A 记录**：

| 主机名 (Host) | 类型 | 值 (Value) | TTL |
|--------------|------|-----------|-----|
| `@` 或 (留空) | A | `185.199.108.153` | 3600 |
| `@` 或 (留空) | A | `185.199.109.153` | 3600 |
| `@` 或 (留空) | A | `185.199.110.153` | 3600 |
| `@` 或 (留空) | A | `185.199.111.153` | 3600 |

**说明**：`@` 表示根域名（即 `houseplus.ng`）。如果您的域名服务商不支持 `@` 符号，可能需要留空或输入域名本身。

### 2.3 DNS 配置方案 B：使用 CNAME 记录（用于 www 子域名）

如果您想同时支持 `https://www.houseplus.ng/`，请添加以下 CNAME 记录：

| 主机名 (Host) | 类型 | 值 (Value) | TTL |
|--------------|------|-----------|-----|
| `www` | CNAME | `leosmithing.github.io` | 3600 |

**说明**：这样配置后，访问 `https://www.houseplus.ng/` 会自动重定向到 `https://houseplus.ng/`。

### 2.4 DNS 配置方案 C：同时支持根域名和 www 子域名（完整配置）

为了最佳的用户体验，建议同时配置根域名和 www 子域名：

| 主机名 (Host) | 类型 | 值 (Value) | TTL |
|--------------|------|-----------|-----|
| `@` 或 (留空) | A | `185.199.108.153` | 3600 |
| `@` 或 (留空) | A | `185.199.109.153` | 3600 |
| `@` 或 (留空) | A | `185.199.110.153` | 3600 |
| `@` 或 (留空) | A | `185.199.111.153` | 3600 |
| `www` | CNAME | `houseplus.ng` | 3600 |

**说明**：这样配置后，`https://houseplus.ng/` 和 `https://www.houseplus.ng/` 都能正常访问。

---

## 3. 常见域名服务商的配置示例

### 3.1 Namecheap
1. 登录 Namecheap 账户
2. 进入 "Domain List"
3. 点击您的域名旁的 "Manage"
4. 选择 "Advanced DNS" 标签
5. 在 "Host Records" 部分添加上述 A 记录和 CNAME 记录

### 3.2 GoDaddy
1. 登录 GoDaddy 账户
2. 进入 "My Products"
3. 点击您的域名
4. 选择 "DNS" 或 "Manage DNS"
5. 添加 A 记录和 CNAME 记录

### 3.3 阿里云 (Aliyun)
1. 登录阿里云账户
2. 进入 "域名" → "我的域名"
3. 点击您的域名，选择 "解析"
4. 点击 "添加记录"
5. 按照上述表格添加 A 记录和 CNAME 记录

### 3.4 其他服务商
大多数域名服务商的 DNS 配置界面类似。关键是找到 "DNS 管理"、"DNS 设置" 或 "Advanced DNS" 选项，然后添加相应的 A 记录和 CNAME 记录。

---

## 4. 验证 DNS 配置

DNS 配置完成后，通常需要 **24-48 小时** 才能完全生效（称为 DNS 传播）。您可以使用以下工具验证配置：

### 4.1 使用 DNS 检查工具
访问以下网站检查您的 DNS 配置是否正确：
- [DNS Checker](https://dnschecker.org/)
- [MXToolbox](https://mxtoolbox.com/)
- [What's My DNS](https://www.whatsmydns.net/)

输入您的域名 `houseplus.ng`，检查 A 记录是否指向正确的 IP 地址。

### 4.2 使用命令行工具
在您的计算机上打开终端/命令提示符，运行以下命令：

```bash
# 检查 A 记录
nslookup houseplus.ng

# 或使用 dig 命令（Linux/Mac）
dig houseplus.ng

# 检查 CNAME 记录
nslookup www.houseplus.ng
```

### 4.3 在浏览器中测试
1. 打开浏览器
2. 在地址栏输入 `https://houseplus.ng/`
3. 如果能正常加载网站，说明配置成功

---

## 5. HTTPS/SSL 证书配置

GitHub Pages 会自动为您的自定义域名配置 HTTPS 和 SSL 证书（由 Let's Encrypt 提供）。

### 5.1 启用 HTTPS
1. 登录 GitHub
2. 进入您的仓库：`https://github.com/leosmithing/houseplus-solar-website`
3. 进入 "Settings" → "Pages"
4. 在 "Custom domain" 部分，确保已输入 `houseplus.ng`
5. 勾选 "Enforce HTTPS" 选项
6. 等待 GitHub 自动配置 SSL 证书（通常需要几分钟到几小时）

### 5.2 验证 HTTPS
- 访问 `https://houseplus.ng/`
- 检查浏览器地址栏是否显示绿色的锁定图标
- 点击锁定图标可以查看证书信息

---

## 6. 更新 SEO 和搜索引擎

### 6.1 更新 Google Search Console
1. 登录 [Google Search Console](https://search.google.com/search-console)
2. 添加新的属性：`https://houseplus.ng/`
3. 验证所有权
4. 提交 `https://houseplus.ng/sitemap.xml`
5. 在 "Settings" 中设置首选域为 `https://houseplus.ng/`

### 6.2 更新 Bing Webmaster Tools
1. 登录 [Bing Webmaster Tools](https://www.bing.com/webmasters/)
2. 添加新网站：`https://houseplus.ng/`
3. 验证所有权
4. 提交站点地图

### 6.3 设置 301 重定向（可选）
如果您希望将旧的 GitHub Pages URL 重定向到新域名，可以在 GitHub Pages 设置中配置。不过，由于 GitHub Pages 是静态托管，通常不支持服务器端重定向。您可以考虑在网站上添加一个 meta refresh 标签或 JavaScript 重定向。

---

## 7. 故障排除

### 7.1 网站无法访问
- 检查 DNS 记录是否正确配置
- 使用 DNS 检查工具验证 A 记录
- 等待 DNS 传播完成（可能需要 24-48 小时）
- 清除浏览器缓存并尝试重新访问

### 7.2 HTTPS 不工作
- 确保已在 GitHub Pages 设置中勾选 "Enforce HTTPS"
- 等待 SSL 证书配置完成
- 检查浏览器控制台是否有混合内容警告

### 7.3 GitHub Pages 显示 404 错误
- 确保 `CNAME` 文件内容为 `houseplus.ng`（不含 https:// 或 /）
- 检查 GitHub 仓库设置中的 "Pages" 部分，确保已正确配置自定义域名

---

## 8. 重要链接

| 项目 | 链接 |
|------|------|
| **GitHub 仓库** | `https://github.com/leosmithing/houseplus-solar-website` |
| **网站主页** | `https://houseplus.ng/` |
| **Sitemap** | `https://houseplus.ng/sitemap.xml` |
| **新闻页** | `https://houseplus.ng/news.html` |
| **Google Search Console** | `https://search.google.com/search-console` |
| **DNS 检查工具** | `https://dnschecker.org/` |

---

## 9. 总结

您已经拥有了一个完整的、专业的太阳能产品展示网站，现在只需要完成 DNS 配置就能通过自定义域名 `https://houseplus.ng/` 对外发布。

**接下来的步骤**：
1. 在您的域名服务商后台配置 DNS A 记录
2. 等待 DNS 传播完成
3. 在 GitHub Pages 设置中启用 HTTPS
4. 在 Google Search Console 中添加新域名并提交站点地图
5. 监测网站在搜索结果中的表现

如果您在配置过程中遇到任何问题，欢迎随时咨询！

---

**最后更新**：2026年3月20日
