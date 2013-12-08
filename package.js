Package.describe({
  summary: "Fast color manipulation in JavaScript"
});

Package.on_use(function (api, where) {
  api.add_files('tinycolor.js', ['client']);
  if(api.export) api.export('tinycolor', 'client');
});

