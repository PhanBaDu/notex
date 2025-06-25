# NOTE

- **Khởi tạo dự án nodejs với javascript**
- Bước 1: Mở IDE - Tạo thư mục cho dự án:
```
mkdir api-javascript
cd api-javascript
```
- Bước 2: Khởi tạo dự án:
```
npm init -y
```
- Bước 3: Cài nodemon:
```
npm i -D nodemon
```
- Bước 4: Mở file package.json chỉnh sửa như sau:
```
"type": "module",
"scripts": {
    "dev": "nodemon src/index.js"
 },
```
- Bước 5: Tạo folder src và file index.js ở trong src.
![image.png](https://eraser.imgix.net/workspaces/DsSJSqIqwUVtfVfdc06P/bFaABLA6DtVmkFYqn3vBG0qiHmX2/Xfmn7PZovidDuYGarPfCY.png?ixlib=js-3.7.0 "image.png")

- Bước 6: Dán code này vào index.js
```
console.log("Hello World!"); 
```
- Bước 7: Tạo folder chuẩn như sau:
![image.png](https://eraser.imgix.net/workspaces/DsSJSqIqwUVtfVfdc06P/bFaABLA6DtVmkFYqn3vBG0qiHmX2/dotPUcS4v2gBRMJLvPpIm.png?ixlib=js-3.7.0 "image.png")

- Bước 8: Chạy dự án: `npm run dev` 
![image.png](https://eraser.imgix.net/workspaces/DsSJSqIqwUVtfVfdc06P/bFaABLA6DtVmkFYqn3vBG0qiHmX2/Dh-EdRMmKRyuSG82LrqCR.png?ixlib=js-3.7.0 "image.png")



