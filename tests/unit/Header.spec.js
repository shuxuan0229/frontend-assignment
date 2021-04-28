import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Header from '@/components/Header.vue';

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Header.vue ', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Header, {});
    })

    it('renders', () => {
        expect(wrapper).toBeTruthy();
    })
});