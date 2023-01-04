<template>
  <div class="login-wrap">
    <div class="login-box">
      <el-form :model="form" :rules="rules" ref="ruleFormRef">
        <el-form-item label="账号" prop="username">
          <el-input
            v-model="form.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            登录
          </el-button>
          <el-button> 重置 </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormRules, FormInstance } from "element-plus";
const ruleFormRef = ref<FormInstance>();
const rules = reactive<FormRules>({
  username: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
    {
      min: 3,
      max: 6,
      message: "字符长度在3-6个字符",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入你的密码",
      trigger: "blur",
    },
    {
      min: 3,
      max: 10,
      message: "密码长度在3-10之间",
      trigger: "blur",
    },
  ],
});

const form = reactive({
  username: "",
  password: "",
});
const submitForm = (_ref) => {
  console.log(form, _ref, "form");
};
</script>

<style lang="scss" scoped>
.login {
  &-wrap {
    width: 100%;
    height: 100%;
    background-image: url("../assets/img/系统背景.jpeg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  &-box {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    top: 200px;
    width: 400px;
    background: white;
    padding: 40px;
    border-radius: 5px;
    .btn {
      margin-bottom: 0;
      :deep(.el-form-item__content) {
        justify-content: center;
      }
    }
  }
}
</style>
