import http from 'http';
import app from './src/api/app';

const PORT = app.get('port') || 5600;
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});