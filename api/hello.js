export default (req, res) => { // 將 module.exports 替換為 export default
  res.status(200).send('Hello from Vercel Serverless Function!');
};
