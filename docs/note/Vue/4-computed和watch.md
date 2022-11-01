---
title: 四、computed和watch
date: 2022-10-30
sidebar: auto
sidebarDepth: 2
tags:
- Vue笔记
---
## 1. 计算属性的两个案例

### 案例一：输出用户的昵称

输出用户的昵称，但是有些用户没有填昵称，这时就展示邮箱或者手机号（展示顺序：昵称>邮箱>手机号）

```vue
<template>
  <div>{{ displayname }}</div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      user: {
        email: "12321321@qq.com",
        nickname: "Jack",
        phone: "12233356678",
      },
    }
  },
  computed: {
    displayname() {
      const user = this.user
      return user.nickname || user.email || user.phone
    },
  },
};
</script>
```

- computed设值：displayname后的括号变成的冒号，使用了get和set

```vue
<template>
  <div>
    {{ displayname }}
    <button @click="displayname = 'Wendy'">setNickname</button>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      user: {
        email: "12321321@qq.com",
        nickname: "Jack",
        phone: "12233356678",
      },
    };
  },
  computed: {
    displayname: {
      get() {
        const user = this.user
        return user.nickname || user.email || user.phone
      },
      set(value) {
        this.user.nickname = value
      },
    },
  },
};
</script>
```

### 案例二：分类展示列表

- 方法一：不使用computed

```vue
<template>
  <div>
    <div>
      <button @click="showAll">全部</button>
      <button @click="showMale">男</button>
      <button @click="showFemale">女</button>
    </div>
    <ul>
      <li v-for="(u, index) in displayUsers" :key="index">
        {{ u.name }} - {{ u.gender }}
      </li>
    </ul>
  </div>
</template>
<script>
let id = 0;
const createUser = (name, gender) => {
  id += 1;
  return { id: id, name: name, gender: gender };
};
export default {
  name: "App",
  data() {
    return {
      users: [
        createUser("方方", "男"),
        createUser("圆圆", "女"),
        createUser("小新", "男"),
        createUser("小葵", "女"),
      ],
      displayUsers: [],
    };
  },
  created() {
    this.displayUsers = this.users;
  },
  methods: {
    showMale() {
      this.displayUsers = this.users.filter((u) => u.gender === "男");
    },
    showFemale() {
      this.displayUsers = this.users.filter((u) => u.gender === "女");
    },
    showAll() {
      this.displayUsers = this.users;
    },
  },
};
</script>
```

这里留意createUser的用法！

- 方法二：使用computed

```vue
<template>
<div>
  <div>
    <button @click="setGender('')">全部</button>
    <button @click="setGender('male')">男</button>
    <button @click="setGender('female')">女</button>
  </div>
  <ul>
    <li v-for="(u, index) in displayUsers" :key="index">
      {{ u.nickname }} - {{ u.gender }}
    </li>
  </ul>
</div>
</template>
<script>
export default {
name: "App",
data() {
  return {
    users: [
      { id: 1, nickname: "方方", gender: "男" },
      { id: 2, nickname: "圆圆", gender: "女" },
      { id: 3, nickname: "小新", gender: "男" },
      { id: 4, nickname: "小葵", gender: "女" },
    ],
    gender: "",
  };
},
computed: {
  displayUsers() {
    const hash = {
      mail: "男",
      femail: "女",
    };
    const { users, gender } = this;
    if (gender === "") {
      return users;
    } else if (typeof gender === "string") {
      return users.filter((u) => u.gender === hash[gender]);
    } else {
      throw new Error("gender 的值是意外的值");
    }
  },
},
methods: {
  setGender(string) {
    this.gender = string;
  },
},
};
</script>
```

这个案例要知道filter的用法、hash的用法

## 2. watch的两个例子

- 用途：当数据变化时，执行一个函数

## 总结

- computed中的方法可以被当成属性
- conputed会把结果缓存

## 拓展

- 手机号用字符串，因为要考虑 +86
- this.nick = “***”，如果没有nick这个属性，vue会默认以为新增nick属性，而不会报找不到这个属性的错误！（TypeScript可以解决发现这个问题）