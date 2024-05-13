import { log } from 'console';
import { readFile, writeFile } from 'fs/promises';
import { json } from 'stream/consumers';

export class MessageRepository {
  async findOne(id: string) {
    const content = await readFile('message.json', 'utf8');
    const messages = JSON.parse(content);
    return messages[id];
  }

  async findAll() {
    const content = await readFile('message.json', 'utf8');
    const messages = JSON.parse(content);
    return messages;
  }

  async craete(content: string) {
    const contents = await readFile('message.json', 'utf8');
    const messages = JSON.parse(contents);
    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, content };

    await writeFile('message.json', JSON.stringify(messages));
  }
}
