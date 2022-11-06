<script setup lang="ts">
import { computed, reactive, ref } from "@vue/runtime-core";
interface Course {
  name: string;
  price: number;
}
const msg = ref("");
const msg1 = ref<string>("");
const obj = reactive({});
const course = reactive<Course>({ name: "姓名", price: 129 });
const msg2 = computed(() => "");
const course2 = computed<Course>(() => {
  return {
    name: "姓名",
    price: "123",
  };
});
</script>
