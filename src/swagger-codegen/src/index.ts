import path from 'path';
import axios from 'axios';

import { INodeSwaggerConfig, NodeSwaggerGenerator} from "swagger-typescript-generator";

const url = 'https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0';
axios
  .get(url)
  .then((response: any) => {
    generate(response.data);
  })
  .catch((error: any) => {
    console.log('error ' + error);
  });

const generate = (json: string) => {
  const parentDir = path.resolve(__dirname, '../..');

  const config: INodeSwaggerConfig = {
    apiFilesOutDir: `${parentDir}/../api/classes`,
    modelFilesOutDir: `${parentDir}/../api/model`,
    urlFileOutDir: `${parentDir}/../api/url`,
    enumFilesOutDir: `${parentDir}/../api/enum`,
    createComponentsFactory: (baseComponents) => baseComponents,
    createUtilsFactory:(utils) => utils,
    createDocumentFactory :(doc) => doc,
    swaggerDocConfig:{
      modelImportPath: './model',
      enumImportPath: './enum',
      apiUrl: url,
      source: json,
    }
  };
  const swaggerGenerator = new NodeSwaggerGenerator( config);
  swaggerGenerator.generate();
};
