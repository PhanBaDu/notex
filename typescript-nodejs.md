# NOTE

```
📦_**nodejs-typescript**_
 ┣ 📂dist
 ┣ 📂src
 ┃ ┣ 📂constants
 ┃ ┣ 📂controllers
 ┃ ┣ 📂middlewares
 ┃ ┣ 📂models
 ┃ ┃ ┣ 📂database
 ┃ ┃ ┃ ┗ 📜User.ts
 ┃ ┃ ┣ 📜Error.ts
 ┃ ┃ ┗ 📜Success.ts
 ┃ ┣ 📂routes
 ┃ ┣ 📂services
 ┃ ┣ 📂utils
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜type.d.ts
 ┣ 📜.editorconfig
 ┣ 📜.env
 ┣ 📜.eslintignore
 ┣ 📜.eslintrc
 ┣ 📜.gitignore
 ┣ 📜.prettierignore
 ┣ 📜.prettierrc
 ┣ 📜nodemon.json
 ┣ 📜package.json
 ┣ 📜tsconfig.json
```
---

- Bước 1: Mở IDE code - tạo thư mục cho project:
```
mkdir api
cd api
```
- Bước 2: Khởi tạo dự án:
```
npm init -y
```
- Bước 3: Cài devDependency:
```
npm install typescript --save-dev
```
```
npm install @types/node --save-dev
```
- Bước 4: Cài đặt Eslint (check lỗi):
```
npm init @eslint/config@latest
```
![image.png](https://eraser.imgix.net/workspaces/DsSJSqIqwUVtfVfdc06P/bFaABLA6DtVmkFYqn3vBG0qiHmX2/rINg1fes41N8YJrnMpbVe.png?ixlib=js-3.7.0 "image.png")

![image.png](https://eraser.imgix.net/workspaces/DsSJSqIqwUVtfVfdc06P/bFaABLA6DtVmkFYqn3vBG0qiHmX2/bNyowt4vzdveJX9ixUsO1.png?ixlib=js-3.7.0 "image.png")

![image.png](https://eraser.imgix.net/workspaces/DsSJSqIqwUVtfVfdc06P/bFaABLA6DtVmkFYqn3vBG0qiHmX2/eXhmiWym5_Hz00xqYqlyn.png?ixlib=js-3.7.0 "image.png")

![image.png](https://eraser.imgix.net/workspaces/DsSJSqIqwUVtfVfdc06P/bFaABLA6DtVmkFYqn3vBG0qiHmX2/VDpxYr6DmYrKK1Ngtxj8Z.png?ixlib=js-3.7.0 "image.png")

![image.png](https://eraser.imgix.net/workspaces/DsSJSqIqwUVtfVfdc06P/bFaABLA6DtVmkFYqn3vBG0qiHmX2/DBSlQm5HNa7vvXAQnFXp2.png?ixlib=js-3.7.0 "image.png")

![image.png](https://eraser.imgix.net/workspaces/DsSJSqIqwUVtfVfdc06P/bFaABLA6DtVmkFYqn3vBG0qiHmX2/ZFlVNypG0l55kdPvLSIm_.png?ixlib=js-3.7.0 "image.png")

![image.png](https://eraser.imgix.net/workspaces/DsSJSqIqwUVtfVfdc06P/bFaABLA6DtVmkFYqn3vBG0qiHmX2/DU7GaAaW9QmVs7Uc_QUMl.png?ixlib=js-3.7.0 "image.png")

![image.png](https://eraser.imgix.net/workspaces/DsSJSqIqwUVtfVfdc06P/bFaABLA6DtVmkFYqn3vBG0qiHmX2/wh3ZyofBsvFkZeECH4n97.png?ixlib=js-3.7.0 "image.png")

- Bước 5: Cài devDependency còn lại:
```
npm install prettier eslint-config-prettier eslint-plugin-prettier tsx tsc-alias rimraf nodemon --save-dev
```
- Bước 6: Tạo file có tên là: `tsconfig.json` ở trong api và dán toàn bộ code dưới:
```
{
  "compilerOptions": {
    "module": "NodeNext", // Quy định output module được sử dụng
    "moduleResolution": "NodeNext",
    "target": "ES2023", // Target output cho code
    "outDir": "dist", // Đường dẫn output cho thư mục build
    "esModuleInterop": true,
    "strict": true /* Enable all strict type-checking options. */,
    "skipLibCheck": true /* Skip type checking all .d.ts files. */,
    "baseUrl": ".", // Đường dẫn base cho các import
    "paths": {
      "~/*": ["src/*"] // Đường dẫn tương đối cho các import (alias)
    }
  },
  "files": ["src/type.d.ts"], // Các file dùng để defined global type cho dự án
  "include": ["src/**/*"] // Đường dẫn include cho các file cần build
}
```
- Bước 7: Mở file `eslint.config.mjs` dán đoạn code sau:
```
import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginPrettier from 'eslint-plugin-prettier'

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'prettier/prettier': [
        'warn',
        {
          arrowParens: 'always',
          semi: false,
          trailingComma: 'none',
          tabWidth: 2,
          endOfLine: 'auto',
          useTabs: false,
          singleQuote: true,
          printWidth: 120,
          jsxSingleQuote: true
        }
      ]
    },
    ignores: ['**/node_modules/', '**/dist/']
  }
]
```
- Bước 7: Tạo file `.prettierr` 
```
{
  "arrowParens": "always",
  "semi": false,
  "trailingComma": "none",
  "tabWidth": 2,
  "endOfLine": "auto",
  "useTabs": false,
  "singleQuote": true,
  "printWidth": 120,
  "jsxSingleQuote": true
}
```
- Bước 8: Tạo file `.prettierignore` 
```
node_modules/
dist/
```
- Bước 9: Tạo file `.editorconfig` ở thư mục root:
- Bước 10: Tạo file `.gitignore` 
```
node_modules/
dist/
```
- Bước 11: Tạo file `nodemon.json` 
```
{
  "watch": ["src", ".env"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "tsx ./src/index.ts"
}
```
- Bước 12: Mở `package.json` lên dán đoạn code sau:
```
"scripts": {
  "dev": "npx nodemon",
  "build": "rimraf ./dist && tsc && tsc-alias",
  "start": "node dist/index.js",
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  "prettier": "prettier --check .",
  "prettier:fix": "prettier --write ."
}
```
- Bước 13: Tạo src trong api và tạo file `index.ts` và `type.d.ts` 
```
// Dán vào file index.ts
const name: string = 'Hello world'
console.log(name)
```
- Bước 14: Chạy `npm run dev` để test ra được kết quả như màn hình là oke.
- Kết quả của folder code:
![image.png](https://eraser.imgix.net/workspaces/DsSJSqIqwUVtfVfdc06P/bFaABLA6DtVmkFYqn3vBG0qiHmX2/Ov8rXbGWcKhl8WZ2CjHBO.png?ixlib=js-3.7.0 "image.png")



