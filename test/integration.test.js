/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const render = require('../lib/render')
const UniCodeGame = require('../lib/unicodeGame')
const filePath = './index.js';


describe('A test for my web page', () => {

  // We can use the beforeEach() hook 
  // to set the jest `document` HTML before each test
  beforeEach(() => {
    if (fs.existsSync(filePath)) {
      document.body.innerHTML = fs.readFileSync(filePath);
      // Process the file content here
    } else {
      console.error(`File not found: ${filePath}`);
    }
  });

  xit('displays a title', () => {
    // 1. Arrange - instantiate our View class
    // Render - not a class
    const game = new UniCodeGame(50);
    // 2. Act - call any method that modifies the page
    // this method `displayTitle` would dynamically
    // set a <h1> title on the page with the given content
    render.updater(game);

    // 3. Assert - we assert the page contains what it should.
    // Usually, you will use `.querySelector` (and friends)
    // here, and assert the text content, the number of elements,
    // or other things that make sense for your test.
    expect(document.querySelector('#currentNum').textContent).toBe('50');
  });
});