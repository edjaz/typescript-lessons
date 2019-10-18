class Shape {
    build(type: string,
          id?: number,
          size: number = 10,
          ...otherArgs: string[]) {
  // code
    }
  }
  
  new Shape().build("type");
  new Shape().build("type", 1);
  new Shape().build("type", 1, 10);
  new Shape().build("type", 1, 10, "A", "B", "C");
  