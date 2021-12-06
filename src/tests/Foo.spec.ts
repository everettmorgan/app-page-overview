/* eslint-disable
no-undef,
no-unused-vars,
prefer-arrow-callback,
import/no-unresolved,
import/extensions,
import/no-extraneous-dependencies,
func-names
*/

import { mount } from '@cypress/vue';
import Foo from '../components/Btn.vue';

describe('Test', () => {
  it('renders a message', () => {
    mount(Foo);

    const button = cy.get('button');
    button.click();
    button.click();
    button.should('have.text', 'clicked: 2');
  });
});
