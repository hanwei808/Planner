
<script setup>
import {
  watch, ref, toRefs , computed, defineProps, defineEmits
} from 'vue';
import { Codemirror } from 'vue-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { oneDark } from '@codemirror/theme-one-dark';
const code = ref('');
const props = defineProps({
    modelValue: {
        type: String,
        required: false,
        default: ''
    },
    language: {
        type: String,
        default: 'javascript'
    },
    disabled: {
        type: [String, Boolean],
        default: true
    },
    style: {
        type: [Object],
        default: () => ({
            height: '600px'
        })
    }
})
const emit = defineEmits(['update:modelValue'])
const {modelValue, language, disabled, style } = toRefs(props)
const fullScreen = ref(false);
const lang = { javascript, python }[language.value];
const extensions = [lang(), oneDark]
watch(() => modelValue.value, (val) => {
    code.value = val;
});
watch(code.value, (val) => {
    emit('update:modelValue', val);
});
const comStyle = computed(() => ({ ...style.value, ...{ height: fullScreen.value ? '100%' : '400px' } }));
</script>
<template>
  <Codemirror 
    :disabled="disabled" 
    v-model="code" 
    placeholder="暂无数据..." 
    :style="comStyle" 
    :autofocus="true"
    :indent-with-tab="true" 
    :tab-size="2" 
    :full-screen="true" 
    :extensions="extensions" 
    @ready="() => {}" 
    @change="() => {}"
    @focus="() => {}" 
    @blur="() => {}"
  />
</template>