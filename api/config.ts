import path from 'path';

const rootPath = __dirname;

const config = {
  rootPath,
  publicPath: path.join(rootPath, 'public'),
  db: 'mongodb+srv://arslanbekbolotov41:Wq9PMQjRwlCMdaIM@firstcluster.2bsagfi.mongodb.net/?retryWrites=true&w=majority',
};

export default config;
