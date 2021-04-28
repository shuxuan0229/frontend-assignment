import { mount } from '@vue/test-utils';
import { ItemComponent } from '@/components/ItemComponent.vue';

describe('Item Component Unit Test: ', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(ItemComponent, {});
        expect(wrapper.isVueInstance()).toBeTruthy();
    })
});