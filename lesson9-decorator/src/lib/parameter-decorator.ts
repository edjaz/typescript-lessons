import 'reflect-metadata';

const requiredMetadataKey = Symbol('required');

function Required(
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) {
  const existingRequiredParameters: number[] =
    Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata(
    requiredMetadataKey,
    existingRequiredParameters,
    target,
    propertyKey
  );
}

function Validate(
  target: any,
  propertyName: string,
  descriptor: TypedPropertyDescriptor<Function>
) {
  const method = descriptor.value;
  descriptor.value = function() {
    const requiredParameters: number[] = Reflect.getOwnMetadata(
      requiredMetadataKey,
      target,
      propertyName
    );
    if (requiredParameters) {
      for (const parameterIndex of requiredParameters) {
        if (
          parameterIndex >= arguments.length ||
          arguments[parameterIndex] === undefined
        ) {
          throw new Error('Missing required argument.');
        }
      }
    }

    return method.apply(this, arguments);
  };
}

class GreeterParam {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  @Validate
  greet(@Required name: string) {
    return 'Hello ' + name + ', ' + this.greeting;
  }
}
