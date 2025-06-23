import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(cors());  // 允許所有來源跨域請求

app.get('/api/bilibili/:bvid', async (req, res) => {
  const { bvid } = req.params;
  try {
    const response = await axios.get(`https://api.bilibili.com/x/web-interface/view?bvid=${bvid}`, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Proxy server running at http://localhost:3000');
});
