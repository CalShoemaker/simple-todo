import { shallowMount } from "@vue/test-utils"
import Todo from '@/components/Todo.vue'

describe('Todo.vue', () => {
    test('is a vue instance', () => {
        const wrapper = shallowMount(Todo, {});
        expect(wrapper.isVueInstance()).toBeTruthy()
    });

    test('handles data', () => {
        const wrapper = shallowMount(Todo, { 
            propsData: {
                todo: {
                    id: "1",
                    description: "File 2020 Taxes",
                    isComplete: true,
                    dueDate: "2020-03-10T17:50:44.673Z"
                }
            },
            stubs: ['router-link']
         });

        expect(wrapper.text()).toContain('File 2020 Taxes');
    });

    test('fails gracefully', () => {
        const wrapper = shallowMount(Todo, { 
            propsData: {
                todo: null
            },
            stubs: ['router-link']
         });

        expect(wrapper.text()).not.toContain('File 2020 Taxes');
    });
})