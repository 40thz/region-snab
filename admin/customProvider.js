const { BaseProvider } = require("@adminjs/upload");
const { promises, existsSync } = require("fs");
const { resolve, dirname } = require("path");

class MyLocalProvider extends BaseProvider {
  constructor(bucket) {
    // you have to pass bucket name to the constructor
    super(bucket);
    this.bucket = bucket;
    this.path;
  }

  async upload(file, key) {
    const fullPath = resolve(this.bucket, key);
    const dirPath = dirname(fullPath);

    if (!existsSync(dirPath)) {
      await promises.mkdir(dirPath, { recursive: true });
    }
    await promises.copyFile(file.path, fullPath);
    await promises.unlink(file.path);
    return key;
  }

  async delete() {
    return true;
  }

  async path(key) {
    if (key) {
      return `/uploads/${key}`;
    }
    return "/uploads/uploads";
  }
}

module.exports = MyLocalProvider;
