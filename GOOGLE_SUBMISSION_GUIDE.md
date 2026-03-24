# HousePlus Solar Series 网站 Google 收录提交指南

本指南将列出 HousePlus Solar Series 网站所有可提交给 Google 搜索引擎收录的网址，并提供详细的提交步骤，以确保您的网站内容能被 Google 发现、抓取和索引。

## 1. 可提交的网站网址 (URLs)

以下是 HousePlus Solar Series 网站的核心页面，建议您提交给 Google 收录：

| 页面类型 | 网址 (URL) |
|----------|------------|
| **主页** | `https://leosmithing.github.io/houseplus-solar-website/` |
| **新闻动态页** | `https://leosmithing.github.io/houseplus-solar-website/news.html` |
| **站点地图** | `https://leosmithing.github.io/houseplus-solar-website/sitemap.xml` |

**重要提示**：
- 由于新闻动态页面 (`news.html`) 采用的是客户端动态筛选展示新闻卡片，并没有为每篇新闻文章生成独立的 URL。因此，您只需提交 `news.html` 页面即可，Google 会抓取该页面上的所有可见内容。
- `sitemap.xml` 文件包含了网站所有重要页面的列表，提交它可以帮助 Google 更全面地了解您的网站结构。

## 2. Google Search Console 提交步骤

**Google Search Console** 是 Google 提供的免费工具，可以帮助您监控网站在 Google 搜索结果中的表现，并提交网站地图和单个网址以加速收录。

### 步骤 1：添加并验证您的网站

1. 访问 [Google Search Console](https://search.google.com/search-console)。
2. 使用您的 Google 账号登录。
3. 在左侧导航栏选择“添加属性”。
4. 在“网址前缀”选项中输入您的网站主页 URL：`https://leosmithing.github.io/houseplus-solar-website/`。
5. 点击“继续”，然后按照提示选择一种验证方式来验证您对网站的所有权。最常见的方式是：
   - **HTML 文件验证**：下载 Google 提供的 HTML 验证文件，并将其上传到您的 GitHub 仓库根目录。然后提交更改到 GitHub，再回到 Search Console 点击“验证”。
   - **HTML 标签验证**：复制 Google 提供的 `<meta>` 标签，并将其粘贴到您网站 `index.html` 文件的 `<head>` 部分。提交更改到 GitHub，再回到 Search Console 点击“验证”。

### 步骤 2：提交站点地图 (Sitemap)

提交站点地图是让 Google 发现您网站所有页面的最有效方式。

1. 登录 Google Search Console，选择您的网站属性。
2. 在左侧导航栏中点击“站点地图”。
3. 在“添加新的站点地图”框中输入您的 `sitemap.xml` 文件的相对路径：`sitemap.xml`。
   完整 URL 为：`https://leosmithing.github.io/houseplus-solar-website/sitemap.xml`
4. 点击“提交”。

Google 会定期处理您的站点地图，并发现其中列出的所有页面。

### 步骤 3：手动提交单个网址 (URL 检查工具)

如果您希望 Google 尽快抓取某个特定页面，可以使用 URL 检查工具。

1. 登录 Google Search Console，选择您的网站属性。
2. 在顶部搜索框中输入您想要提交的网址（例如：`https://leosmithing.github.io/houseplus-solar-website/news.html`）。
3. 按 Enter 键，Google 会检查该网址的索引状态。
4. 如果页面未被索引或您想请求重新抓取，点击“请求编入索引”按钮。

## 3. 提交到其他搜索引擎

除了 Google，您还可以将网站提交给其他主流搜索引擎，例如：

- **Bing Webmaster Tools**：
  - 网址：`https://www.bing.com/webmasters/`
  - 提交方式与 Google Search Console 类似，支持导入 Google Search Console 的数据。

## 4. 持续优化与监测

- **定期检查**：定期登录 Google Search Console 检查网站的索引状态、搜索流量和任何潜在的抓取错误。
- **内容更新**：持续更新网站内容（尤其是新闻动态页面），发布高质量、原创的文章，这将有助于提高网站的活跃度和搜索引擎排名。
- **内部链接**：确保网站内部链接结构合理，方便搜索引擎爬虫发现更多页面。
- **外部链接**：争取从其他高质量网站获得外部链接，提升网站的权威性。

---

**您的网站主页**：`https://leosmithing.github.io/houseplus-solar-website/`
**您的 GitHub 仓库**：`https://github.com/leosmithing/houseplus-solar-website`

EOF
