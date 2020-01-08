"use strict";

module.exports = {
  extends: "octane",
  rules: {
    "require-button-type": false,
    "no-curly-component-invocation": {
      allow: ["link-to"]
    }
  }
};
