const { Command } = require('commander');
const { name, version } = require('./package.json');
const { FireExtinguisher } = require('./src/index');
const program = new Command();

program
  .name(name)
  .description('Ge keyword cangjie keyboard translator')
  .version(version);

program.command('parse')
  .description('Parse a string into a cangjie keyword keyboard input.')
  .argument('<string>', 'string to parse')
  .option('-d, --debug', 'debug')
  .action((s, { debug }) => {
    const p = new FireExtinguisher(s, debug);

    console.log(p.result);
  });


program.parse();