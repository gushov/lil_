var config = module.exports;

config["lil_ node tests"] = {
  rootPath: "../",
  env: "node",
  tests: [
    "test/*-test.js"
  ]
};

config["lil_ browser tests"] = {
  rootPath: "../",
  environment: "browser",
  sources: [
    "node_modules/lilprovider/dist/lilprovider.js",
    "lib/lil_.js"
  ],
  tests: [
    "test/*-test.js"
  ]
};