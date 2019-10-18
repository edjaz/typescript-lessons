import "reflect-metadata";

const formatMetadataKey = Symbol("format");

function Format(formatString: string) {
    return Reflect.metadata(formatMetadataKey, formatString);
}
  

function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

class GreeterFormatMth {
    @Format("Hello, %s")
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        const formatString = getFormat(this, "greeting");
        return formatString.replace("%s", this.greeting);
    }
}