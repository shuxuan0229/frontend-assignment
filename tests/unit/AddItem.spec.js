import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import AddItem from '@/components/AddItem.vue';

const localVue = createLocalVue()
localVue.use(Vuex)

describe('AddItem.vue ', () => {
    let actions
    let store
    let wrapper

    beforeEach(() => {
        actions = {
          addItem: jest.fn(),
        }
        store = new Vuex.Store({
          actions
        })
        wrapper = shallowMount(AddItem, {});
    })

    it('renders', () => {
        expect(wrapper).toBeTruthy();
    });

    // it('should call actions addItem on click of add button', () => {
         // spyOn addToDoItemMethod
        // trigger button click
        // expect addToDoItemMethod to have been called
    // });
});