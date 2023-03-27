module.exports = (req, res, next) => {
  if (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE') req.method = 'GET';
  next();
}
