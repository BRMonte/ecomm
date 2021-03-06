const fs = require('fs');

class UsersRepository {
  constructor(filename) {
    if (!filename) {
      throw new Error('Creating a repository requires a filename');
    }
    this.filename = filename;
    try {
      fs.accessSync(this.filename);
    } catch (err) {
      fs.writeFileSync(this.filename, '[]');
    }
  }

  async getAll() {
    // open the file called this.filename
    const contents = await fs.promises.readFile(this.filename, { encoding: 'utf8' });

    // read its content
    console.log(contents);

    // parse the contents
    const data = JSON.parse(contents);

    // return the parsed data
    return data;
  }
}

const test = async () => {
  const repo = new UsersRepository('users.json');
  const users = await repo.getAll();
  console.log(users);
};
