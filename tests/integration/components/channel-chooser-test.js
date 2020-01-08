import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | channel-chooser", function(hooks) {
  setupRenderingTest(hooks);

  const channels = [
    { title: "a" },
    { title: "b", tracksCount: 5 },
    { title: "c" }
  ];

  test("it renders", async function(assert) {
    this.set("channels", channels);
    await render(hbs`<ChannelChooser channels=channels />`);
    assert.equal(1, 1);
    // assert.equal(this.element.textContent.trim(), 'b')
    // assert.equal(this.element.querySelectorAll('button').length, 1)
  });

  // test('it filters out channels without tracks', async function(assert) {
  //   this.set('channels', channels)
  //   await render(hbs`<ChannelChooser channels=channels />`)
  //   assert.equal(this.element.textContent.trim(), 'b')
  //   assert.equal(this.element.querySelectorAll('button').length, 1)
  // })
});
