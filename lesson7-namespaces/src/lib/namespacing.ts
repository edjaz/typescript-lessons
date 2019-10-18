// Namespace

namespace DisplayPlugin {
  export class PluginEvent {}
}

class ApiSelection {}

namespace CropPlugin {
  export class CropEvent extends DisplayPlugin.PluginEvent {}
  export interface Api {
    selection: ApiSelection;
    removeSelected(): void;
  }
}


