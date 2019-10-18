class Point {
    // overloads, from most to least specific
      move(x: number, y: number): void;
      move(delta: { x: number, y: number }): void;
    // implementation, not a callable type definition
      move(xOrDelta: number | { x: number, y: number },y?: number): void {}
    }
    
    new Point().move(10, 20);
    new Point().move({x: 10, y: 20});
    