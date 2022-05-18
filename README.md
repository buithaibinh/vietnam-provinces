# vietnam-provinces
This is a utility package to get Vietnam provinces. Data is collected monthly from [Tổng cục thống kê(https://danhmuchanhchinh.gso.gov.vn/Default.aspx)

## Install

```bash
npm install vietnam-provinces
```

## Use

### CommonJs
```bash
const { getProvincesWithDetail } = require('vietnam-provinces');

(() => {
  console.log(getProvincesWithDetail());
})();
```

### ES Module

```bash
import pkg from 'vietnam-provinces';
const { getProvincesWithDetail } = pkg;

(() => {
  console.log(getProvincesWithDetail());
})();
```

