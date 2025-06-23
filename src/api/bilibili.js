import axios from 'axios';

export default async function handler(req, res) {
  const { bvid } = req.query;
  if (!bvid) return res.status(400).json({ error: '請帶 bvid 參數' });

  try {
    const response = await axios.get('https://api.bilibili.com/x/web-interface/view', {
      params: { bvid },
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    if (response.data.code !== 0) {
      return res.status(404).json({ error: '找不到影片', data: response.data });
    }
    res.status(200).json(response.data.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
