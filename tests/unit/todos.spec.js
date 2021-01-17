import Vuex from "vuex"
import { mount, createLocalVue } from "@vue/test-utils"
import Todos from '@/components/Todos.vue'
import store from '@/store/index.js'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Todos.vue', () => {
    test('is a vue instance', () => {
        const wrapper = mount(Todos, { store, localVue });
        expect(wrapper.isVueInstance()).toBeTruthy()
    });
})