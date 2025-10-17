<template>
  <div>
    <UInput
      icon="i-lucide-search"
      size="md"
      variant="outline"
      :placeholder="props.searchPlaceholder || 'Search...'"
      v-model="searchValueRaw"
      :ui="{
        root: 'w-full',
        base: 'bg-white ring-gray-300 w-full text-black',
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useDebounceFn } from "@vueuse/core";

const props = defineProps<{
  searchPlaceholder?: string;
}>();

const route = useRoute();
const router = useRouter();

const searchValueRaw = ref((route.query.search as string) || "");

const updateQuery = useDebounceFn((value: string) => {
  router.push({
    query: {
      ...route.query,
      search: value || undefined,
    },
  });
}, 300);

watch(searchValueRaw, (val) => {
  updateQuery(val);
});
</script>
