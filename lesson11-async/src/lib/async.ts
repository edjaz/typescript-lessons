function delay(ms: number): Promise<void> {
    return new Promise<void>(resolve =>
      setTimeout(resolve, ms));
  }
  
  
  async function dramaticWelcome() {
    console.log('Hello');
    for (let i = 0; i < 3; i++) {
      await delay(500);
      console.log(".");
    }
    console.log('World!');
  }
  