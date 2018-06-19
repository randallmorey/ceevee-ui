import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

module('Unit | Model | personal', function(hooks) {
  setupTest(hooks);

  test('it validates', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = run(() => store.createRecord('personal', {
      name: 'Mr. Big',
      url: 'https://www.example.net'
    }));
    assert.ok(model.validate());
  });

  test('it does not validate when name is missing', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = run(() => store.createRecord('personal', {
      url: 'https://www.example.net'
    }));
    assert.notOk(model.validate());
  });

  test('it does not validate when url is an invalid URL', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = run(() => store.createRecord('personal', {
      name: 'Mr. Big',
      url: 'foo://bar'
    }));
    assert.notOk(model.validate());
  });
});
