import { test } from 'ember-qunit';
import moduleForComponent from 'open-event-frontend/tests/helpers/component-helper';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('forms/admin/content/social-links-form', 'Integration | Component | forms/admin/content/social links form');

test('it renders', function(assert) {
  this.render(hbs`{{forms/admin/content/social-links-form}}`);
  assert.ok(this.$().html().trim().includes('Support'));
});
