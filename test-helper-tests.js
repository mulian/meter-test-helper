// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by test-helper.js.
import { name as packageName } from "meteor/mulian:test-helper";

// Write your tests here!
// Here is an example.
Tinytest.add('test-helper - example', function (test) {
  test.equal(packageName, "test-helper");
});
